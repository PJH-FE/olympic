

<p align="center"><img src="https://github.com/user-attachments/assets/c6b5f294-83b1-4dda-95bb-fecae31397e8"/></p>

## TEST URL
https://pjh-fe.github.io/olympic/
<br/>

## 프로젝트 구조

<details>
    <summary>메인 컴포넌트</summary>

    App.jsx

</details>

<br/>

<details>
    <summary>분리 컴포넌트</summary>

    1. Button.jsx
    - 버튼형식 저장용

    2. Input.jsx
    - 인풋 형식 저장용

    3. Form.jsx
    - 상단의 인풋과 버튼으로 이루어진 데이터 전송 폼

    4. Table.jsx
    - 출력 될 테이블 컴포넌트

</details>
<br/>

## 실행 방법

상단의 Form을 이용하여, 국가명과 메달 현황을 입력해주신 뒤, 국가 추가 버튼을 클릭하면 하단에 테이블형식으로 기록됩니다.

업데이트를 클릭시에는, 해당 국가의 메달현황을 업데이트 하실 수 있습니다.
<br/><br/>

## 주요 기능

1. 저장된 국가가 없을 경우, 등록된 국가가 없다고 텍스트가 출력됩니다.

2. 삭제 버튼을 이용하여, 잘 못 입력된 국가를 리스트에서 제거 할 수 있습니다.

3. 등록된 국가의 메달 현황은 localStorage에 저장되어 새로고침하여도 데이터가 유실되지 않습니다.

4. 정렬 버튼을 이용하여, 총 메달 갯수와 금, 은, 동메달 갯수에 따라 내림차순으로 정렬 할 수 있습니다.
   (기본 정렬은 금메달 갯수 입니다.)
