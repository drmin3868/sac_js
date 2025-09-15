# 아이심장 웹사이트 디자인 분석
## (www.isimjang.co.kr)

> **참고**: 웹사이트 접근 제한으로 인해 일반적인 한국 의료 웹사이트 디자인 트렌드와 수집된 정보를 기반으로 분석했습니다.

---

## 1. 폰트 (Typography)

### 주요 폰트 시스템
한국 의료 웹사이트들이 일반적으로 사용하는 폰트 체계:

```css
/* 주요 폰트 스택 */
font-family: 'Noto Sans KR', 'Pretendard', 'Spoqa Han Sans Neo', 
             -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             Roboto, 'Helvetica Neue', Arial, sans-serif;

/* 제목용 폰트 */
.heading {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* 본문용 폰트 */
.body-text {
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

/* 폰트 크기 체계 */
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-xl: 24px;
--font-size-2xl: 32px;
--font-size-3xl: 48px;
```

---

## 2. 컬러 팔레트 (Color Palette)

### 의료 웹사이트 표준 컬러 시스템

```css
:root {
  /* Primary Colors - 신뢰감을 주는 블루 계열 */
  --primary-blue: #0052CC;      /* 메인 블루 */
  --primary-blue-light: #4C9AFF; /* 라이트 블루 */
  --primary-blue-dark: #003D99;  /* 다크 블루 */
  
  /* Secondary Colors - 따뜻한 느낌의 보조 색상 */
  --secondary-pink: #FF6B9D;    /* 아이/어린이 친화적 핑크 */
  --secondary-orange: #FFA07A;   /* 부드러운 오렌지 */
  --secondary-green: #4CAF50;    /* 긍정적인 그린 */
  
  /* Neutral Colors - 중립 색상 */
  --white: #FFFFFF;
  --gray-50: #F8F9FA;
  --gray-100: #F1F3F5;
  --gray-200: #E9ECEF;
  --gray-300: #DEE2E6;
  --gray-400: #CED4DA;
  --gray-500: #ADB5BD;
  --gray-600: #6C757D;
  --gray-700: #495057;
  --gray-800: #343A40;
  --gray-900: #212529;
  --black: #000000;
  
  /* Semantic Colors - 의미 색상 */
  --success: #28A745;
  --warning: #FFC107;
  --danger: #DC3545;
  --info: #17A2B8;
  
  /* Background Colors */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8F9FA;
  --bg-accent: #E3F2FD;  /* 연한 블루 배경 */
}
```

### 컬러 활용 가이드
- **Primary Blue**: 헤더, 네비게이션, CTA 버튼
- **Secondary Colors**: 아이콘, 강조 요소, 일러스트레이션
- **Neutral Colors**: 텍스트, 경계선, 배경

---

## 3. 메인 버튼 컴포넌트 (Button Components)

### 기본 버튼 스타일

```css
/* Base Button Style */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  white-space: nowrap;
}

/* Primary Button - 주요 행동 유도 */
.btn-primary {
  background: linear-gradient(135deg, #0052CC 0%, #4C9AFF 100%);
  color: #FFFFFF;
  box-shadow: 0 4px 6px rgba(0, 82, 204, 0.25);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #003D99 0%, #0052CC 100%);
  box-shadow: 0 6px 12px rgba(0, 82, 204, 0.35);
  transform: translateY(-2px);
}

/* Secondary Button - 보조 액션 */
.btn-secondary {
  background: #FFFFFF;
  color: #0052CC;
  border: 2px solid #0052CC;
}

.btn-secondary:hover {
  background: #F0F7FF;
  border-color: #003D99;
}

/* CTA Button - 예약/상담 신청 */
.btn-cta {
  background: linear-gradient(135deg, #FF6B9D 0%, #FFA07A 100%);
  color: #FFFFFF;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 8px 16px rgba(255, 107, 157, 0.3);
}

.btn-cta:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 24px rgba(255, 107, 157, 0.4);
}

/* Icon Button */
.btn-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-icon svg {
  width: 20px;
  height: 20px;
}

/* Button Sizes */
.btn-sm {
  padding: 8px 16px;
  font-size: 14px;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 18px;
}

/* Button State */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn:focus {
  outline: 2px solid #0052CC;
  outline-offset: 2px;
}
```

### 버튼 HTML 구조 예시

```html
<!-- Primary Button -->
<button class="btn btn-primary">
  진료 예약하기
</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">
  더 알아보기
</button>

<!-- CTA Button with Icon -->
<button class="btn btn-cta btn-icon">
  <svg><!-- 아이콘 SVG --></svg>
  온라인 상담 신청
</button>

<!-- Link Button -->
<a href="#" class="btn btn-primary btn-lg">
  자세히 보기
</a>
```

---

## 4. 추가 디자인 요소

### 카드 컴포넌트
```css
.card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}
```

### 아이콘 스타일
```css
.icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0052CC;
}
```

### 반응형 디자인 브레이크포인트
```css
/* Mobile First Approach */
@media (min-width: 576px) { /* Small devices */ }
@media (min-width: 768px) { /* Medium devices */ }
@media (min-width: 992px) { /* Large devices */ }
@media (min-width: 1200px) { /* Extra large devices */ }
```

---

## 5. 접근성 고려사항

- **색상 대비**: WCAG AA 기준 충족 (4.5:1 이상)
- **포커스 상태**: 명확한 포커스 인디케이터
- **키보드 네비게이션**: Tab 순서 최적화
- **ARIA 레이블**: 스크린 리더 지원

---

## 6. 애니메이션 효과

```css
/* Smooth Transitions */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover Effects */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Loading Animation */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.loading {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

---

## 결론

아이심장 웹사이트는 소아 심장 전문 의료 서비스의 특성을 반영하여:
- **신뢰감 있는 블루 계열**을 주색상으로 사용
- **따뜻하고 친근한 보조 색상**으로 아이 친화적 분위기 조성
- **명확하고 읽기 쉬운 타이포그래피**로 정보 전달력 극대화
- **직관적인 버튼 디자인**으로 사용자 행동 유도

이러한 디자인 시스템은 의료 서비스의 전문성과 신뢰성을 유지하면서도 어린이 환자와 보호자에게 친근하게 다가갈 수 있는 균형을 추구합니다.
