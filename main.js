// 동적 컨텐츠 로더 - 한 번 작성하면 수정할 필요 없음
async function loadContents() {
    const container = document.getElementById('dynamic-content-container');
    
    // 컨테이너가 없으면 생성
    if (!container) {
        console.error('Dynamic content container not found');
        return;
    }
    
    // 기존 내용 비우기
    container.innerHTML = '';
    
    // 설정된 컨텐츠들을 순서대로 로드
    for (const item of contentConfig) {
        // 비활성 항목 건너뛰기
        if (!item.active) continue;
        
        // 섹션 컨테이너 생성
        const section = document.createElement('div');
        section.className = 'content-section card';
        section.style.marginTop = '16px';
        
        try {
            if (item.type === 'iframe') {
                // iframe으로 로드
                const iframe = document.createElement('iframe');
                iframe.src = item.file;
                iframe.width = item.width || 320;
                iframe.height = item.height || 320;
                iframe.frameBorder = '0';
                iframe.style.display = 'block';
                iframe.id = item.file.replace('.html', '-frame');
                
                // 타이틀이 있으면 추가
                if (item.title) {
                    iframe.title = item.title;
                }
                
                section.appendChild(iframe);
                
                // NE Calculator 특별 처리 - 데이터 동기화
                if (item.file === 'ne_calc.html') {
                    iframe.addEventListener('load', function() {
                        setTimeout(updateNECalculator, 100);
                    });
                }
                
            } else if (item.type === 'html') {
                // HTML 직접 삽입
                const response = await fetch(item.file);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const html = await response.text();
                section.innerHTML = html;
                
            } else {
                // 기본값: HTML 직접 삽입
                const response = await fetch(item.file);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const html = await response.text();
                section.innerHTML = html;
            }
            
            container.appendChild(section);
            console.log(`Successfully loaded: ${item.file}`);
            
        } catch (error) {
            console.error(`Failed to load ${item.file}:`, error);
            
            // 에러 메시지 표시
            section.innerHTML = `
                <div class="error-message" style="padding: 20px; text-align: center;">
                    <p>Failed to load: ${item.file}</p>
                    <small>${error.message}</small>
                </div>
            `;
            container.appendChild(section);
        }
    }
}

// NE Calculator 업데이트 함수 (기존 코드에서 가져옴)
function updateNECalculator() {
    const iframe = document.getElementById('ne_calc-frame');
    if (iframe && iframe.contentWindow && iframe.contentWindow.updateNECalc) {
        const heightInput = document.getElementById('height');
        const bwtInput = document.getElementById('bwt');
        
        if (!heightInput || !bwtInput) return;
        
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(bwtInput.value);
        
        // 현재 선택된 성별 가져오기
        const genderBtn = document.querySelector('.chip-group[data-target="gender"] .chip.selected');
        const gender = genderBtn ? genderBtn.dataset.value : null;
        
        // BSA 계산
        let bsaValue = null;
        if (isFinite(height) && isFinite(weight) && height > 0 && weight > 0) {
            const methodEl = document.querySelector('input[name="bsaMethod"]:checked');
            const method = methodEl ? methodEl.value : 'mostellar';
            
            // 소수점 첫째 자리로 반올림
            const h = Math.round(height * 10) / 10;
            const w = Math.round(weight * 10) / 10;
            
            if (method === 'mostellar') {
                bsaValue = Math.sqrt(h * w / 3600);
            } else if (method === 'dubois') {
                bsaValue = 0.007184 * Math.pow(h, 0.725) * Math.pow(w, 0.425);
            } else if (method === 'haycock') {
                bsaValue = 0.024265 * Math.pow(h, 0.3964) * Math.pow(w, 0.5378);
            }
        }
        
        // NE Calculator에 데이터 전송
        iframe.contentWindow.updateNECalc({
            height: height,
            weight: weight,
            gender: gender,
            bsa: bsaValue
        });
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    // 컨텐츠 로드
    loadContents();
    
    // 기존 이벤트 리스너들 재설정 (신체치수 변경 시 NE Calculator 업데이트)
    const heightInput = document.getElementById('height');
    const bwtInput = document.getElementById('bwt');
    const bsaMethodGroup = document.getElementById('bsaMethodGroup');
    
    if (heightInput) {
        heightInput.addEventListener('input', function() {
            setTimeout(updateNECalculator, 100);
        });
    }
    
    if (bwtInput) {
        bwtInput.addEventListener('input', function() {
            setTimeout(updateNECalculator, 100);
        });
    }
    
    if (bsaMethodGroup) {
        bsaMethodGroup.addEventListener('change', function() {
            setTimeout(updateNECalculator, 100);
        });
    }
    
    // 성별 변경 감지 (기존 코드와 통합)
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('button[data-value]');
        if (!btn) return;
        const group = btn.closest('div[data-target]');
        const key = group ? group.getAttribute('data-target') : '';
        if (key === 'gender') {
            setTimeout(updateNECalculator, 100);
        }
    });
});
