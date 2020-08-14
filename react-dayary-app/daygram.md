# 1. 필수 구현 사항

## 미연

- 로그인 (토큰)
  - 네이버 / 카카오톡 로그인 API
  - redux-saga or context API

- Month
  - 8월 이후 비활성화



## 태현

- 서버 구축

- Day 

  - 매월 해당 일 수 출력 / 8월은 도래한 날까지만 출력

  - 내용 추가(텍스트) / 삭제 (모달)
  - 내용 미리보기



# 2. 추가 구현 사항

## DAY 관련

- 글자 색상 또는 글꼴 변경
- 날씨 출력 



## MONTH 관련

- 색상 랜덤 설정





# 3. 파일 구조

- pages
  - Signin
  - Main
  - NotFound
  - FatalError



- components
  - Header
  - Month
  - Day



- containers
  - HeaderContainer - 년도처리
  - MonthContainer
  - DayContainer



# 4. 미들웨어 사용

- redux-saga
  - context API............







★ 생각해오기 [앱 이름 짓기]





```react
export default function Months() {
  return (
    <MonthBox>
      <ul>
        <button>
          <StyledLink>JAN</StyledLink>
        </button>
        <button>
          <StyledLink>FEB</StyledLink>
        </button>
        <button>
          <StyledLink>MAR</StyledLink>
        </button>
        <button>
          <StyledLink>APR</StyledLink>
        </button>
        <button>
          <StyledLink>MAY</StyledLink>
        </button>
        <button>
          <StyledLink>JUN</StyledLink>
        </button>
        <button>
          <StyledLink>JUL</StyledLink>
        </button>
        <button>
          <StyledLink>AUG</StyledLink>
        </button>
        <button>
          <StyledLink>SEP</StyledLink>
        </button>
        <button>
          <StyledLink>OCT</StyledLink>
        </button>
        <button>
          <StyledLink>NOV</StyledLink>
        </button>
        <button>
          <StyledLink>DEC</StyledLink>
        </button>
      </ul>
    </MonthBox>
  );
}

```

