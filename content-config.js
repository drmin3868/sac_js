// 컨텐츠 설정 파일 - 이 파일만 수정하면 됨!
// 각 컨텐츠의 순서, 활성화 상태, 옵션을 관리
const contentConfig = [
    { 
        file: 'ne_calc.html', 
        active: true,
        type: 'iframe',  // iframe으로 로드
        width: 320,
        height: 320,
        title: 'NE Calculator'
    },
    {
        file: 'dopa_calc.html',
        active: true,
        type: 'iframe',
        width: 320,
        height: 320,
        title: 'Dopamine Calculator'
    },

    // 향후 추가할 컨텐츠 예시
    // { 
    //     file: 'drug_calc.html', 
    //     active: false,
    //     type: 'iframe',
    //     width: 320,
    //     height: 400,
    //     title: 'Drug Calculator'
    // },
    // { 
    //     file: 'bmi_calc.html', 
    //     active: false,
    //     type: 'html',  // HTML 직접 삽입
    //     title: 'BMI Calculator'
    // }
];
