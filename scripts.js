const questions = [
    {
        id: 1,
        options: [
            {label: "A.지식과 정보 찾기", value: "A"},
            {label: "B.임기응변보다는 주어진 지침을 철저하게 따르기", value: "B"},
            {label: "C.다른 사람의 아이디어에 경청하여 영감이나 아이디어를 공유하기", value: "C"},
            {label: "D.새로운 주제에 대하여 자세한 것 보다는 큰 그림이나 전후관계 문헌 찾기", value: "D"},
        ]
    },
    {
        id: 2,
        options: [
            {label: "A.하나의 기본 틀에서 논리적으로 정보를 다루기", value: "A"},
            {label: "B.상세한 요구사항이 있는 문제를 신중하게 다루기", value: "B"},
            {label: "C.스스로 생각한 자료나 개인적인 일화를 추가하여 정보를 부여하기", value: "C"},
            {label: "D.학습을 좀 더 흥미롭게 만들기 위하여 활동적으로 주도권 잡기", value: "D"},
        ]
    },
    {
        id: 3,
        options: [
            {label: "A.명확한 단점을 찾아내기 위하여 어떤 과정을 시험하기", value: "A"},
            {label: "B.활동적이고 신체적인 강의 참여하기", value: "B"},
            {label: "C.개인적인 경험을 관련된 주제와 연관짓기", value: "C"},
            {label: "D.모임에서의 활동을 계획하고 주도하기", value: "D"},
        ]
    },
    {
        id: 4,
        options: [
            {label: "A.교과서 읽기", value: "A"},
            {label: "B.계획이나 단계에 의해서 수행하기", value: "B"},
            {label: "C.촉각, 느낌, 소리, 향기 등의 감각을 동원하기", value: "C"},
            {label: "D.이야기를 들으면서 상상하여 마치 손으로 만져 보는 그림을 얻기", value: "D"},
        ]
    },
    {
        id: 5,
        options: [
            {label: "A.예제와 답을 분석하기", value: "A"},
            {label: "B.실험실 결과에 대하여 보고서를 작성하기", value: "B"},
            {label: "C.새로운 학습 자료를 사용하여 전에 익숙하지 않은 방법 사용하기", value: "C"},
            {label: "D.정형화 되지 않은 문제를 다루며, 여러 가지 가능한 답을 찾아보기", value: "D"},
        ]
    },
    {
        id: 6,
        options: [
            {label: "A,아이디어를 숙고하기", value: "A"},
            {label: "B.교육용 소프트웨어를 가지고 컴퓨터 이용하기", value: "B"},
            {label: "C.스터디 그룹이나 그룹 토의를 이용하기", value: "C"},
            {label: "D문제적 및 해결책의 '우아함'을 논의 평가하기", value: "D"},
        ]
    },
    {
        id: 7,
        options: [
            {label: "A.과학적 방법을 사용하여 검증하기", value: "A"},
            {label: "B.학습된 지식의 응용사례를 찾아보기", value: "B"},
            {label: "C.자세하게 쓰지는 않더라도 느낀 바나 정신적 기억을 기록하는 일기 쓰기", value: "C"},
            {label: "D.자유분방한 아이디어 중심하기", value: "D"},
        ]
    },
    {
        id: 8,
        options: [
            {label: "A.가설을 세우고 그것의 적립 검증하기", value: "A"},
            {label: "B.계획이나 프로젝트를 기획하고 계획과 시간에 맞추어 수행하기", value: "B"},
            {label: "C.드라마 제작하기", value: "C"},
            {label: "D.이론이나 가설을 실험하고 다루기", value: "D"},
        ]
    },
    {
        id: 9,
        options: [
            {label: "A.어떻게 컴퓨터가 작동하는가를 알아보기", value: "A"},
            {label: "B.제한적인 강의의 활동하기", value: "B"},
            {label: "C.인간 중심적인 접근 실천하기", value: "C"},
            {label: "D.모험을 하고 새로운 지역을 탐험하기 위하여 다른 문화권 여행하기", value: "D"},
        ]
    },
    {
        id: 10,
        options: [
            {label: "A.사실과 기준 및 논리적 추론에 근거해서 아이디어를 평가하기", value: "A"},
            {label: "B.자세하게 토론하거나 논문 필기하기", value: "B"},
            {label: "C.사람들을 만나고 어떻게 사는가를 알기 위하여 다른 문화권 여행하기", value: "C"},
            {label: "D.경험을 생각하기", value: "D"},
        ]
    },
    {
        id: 11,
        options: [
            {label: "A.기술적이고 정적인 사례를 연구하기", value: "A"},
            {label: "B.정돈된 환경에서 정해진 계획에 맞추어 공부하기", value: "B"},
            {label: "C.배경 음악을 틀어놓고 공부를 하고, 기억력을 돕기 위한 방법으로 활동하기", value: "C"},
            {label: "D.계획을 생각하고 장기적인 목표를 세우기", value: "D"},
        ]
    },
    {
        id: 12,
        options: [
            {label: "A.사실과 실적과 관련된 정보나 기회를 다루기", value: "A"},
            {label: "B.실습을 실행하기 위하여 준비하기", value: "B"},
            {label: "C.인간 중심적인 사례를 연구하기", value: "C"},
            {label: "D.사실이나 논리 위주가 보다는 직관에 의존해서 해결책 찾기", value: "D"},
        ]
    },
    {
        id: 13,
        options: [
            {label: "A.미래의 가능성 보다는 현실적인 것을 다루기", value: "A"},
            {label: "B.현재 상황이나 분석적인 것을 다루기", value: "B"},
            {label: "C.다른 사람의 시각이나 권리를 존중하기", value: "C"},
            {label: "D.새로운 것에 도전하기 위하여 아이디어나 정보를 종합하기", value: "D"},
        ]
    },
    {
        id: 14,
        options: [
            {label: "A.결론에 가까이 있기 위하여 정보 다루기", value: "A"},
            {label: "B.조직과 절차를 배우기 위하여 현장 실습하기", value: "B"},
            {label: "C.개인의 감각에 어필하여 알아보기", value: "C"},
            {label: "D.미래 지향적이게 배우기", value: "D"},
        ]
    },
    {
        id: 15,
        options: [
            {label: "A.기술적 인공물을 연구하기 위하여 문화가 다른 지역을 조사하기", value: "A"},
            {label: "B.프로젝트에 관하여 '어떻게 하는가?'에 대한 지침서 작성하기", value: "B"},
            {label: "C.신체 언어에 대한 실마리를 얻기 위해서 비디오나 오디오를 선호하기", value: "C"},
            {label: "D.재미삼아 전혀 다른 방법으로 일하기", value: "D"},
        ]
    }
];

function loadQuestions() {
    const form = document.getElementById('hbdi-form');
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${index + 1}. 다음 중 선호하는 활동을 선택하세요:</p>`;
        question.options.forEach(option => {
            questionDiv.innerHTML += `
                <label>
                    <input type="radio" name="question${question.id}" value="${option.value}" required>
                    ${option.label}
                </label><br>`;
        });
        form.appendChild(questionDiv);
    });
}

function calculateResults() {
    const form = document.getElementById('hbdi-form');
    const formData = new FormData(form);
    const scores = { A: 0, B: 0, C: 0, D: 0 };

    formData.forEach(value => {
        scores[value]++;
    });

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>A 유형: ${scores.A}</p>
        <p>B 유형: ${scores.B}</p>
        <p>C 유형: ${scores.C}</p>
        <p>D 유형: ${scores.D}</p>
    `;
}

document.addEventListener('DOMContentLoaded', loadQuestions);
