# Life-Tracker

공부하는 사용자를 위해 만든 프론트엔드 포트폴리오 프로젝트입니다. 일정 관리, 공부 시간 측정, 공부 중 음악 재생, 하루를 정리하는 일기 작성까지 하나의 흐름으로 묶어 학습 루틴을 돕는 데 초점을 맞췄습니다. 데이터는 Firebase Realtime Database와 Auth로 관리합니다.

## 기능
- 회원가입/로그인/로그아웃
- 마이페이지 및 비밀번호 변경
- 일정 관리 및 할 일 정리
- 공부 시간 측정(타이머/스톱워치)
- 공부할 때 듣는 음악 재생
- 하루를 마무리하는 일기 작성

## 프로젝트 목표
- 공부 루틴에 맞춘 핵심 기능을 한 화면 흐름으로 연결
- 가볍게 열어 바로 사용할 수 있는 정적 웹앱 형태
- Firebase를 활용한 사용자별 데이터 저장 및 인증

## 구성
- 정적 HTML/CSS/JS
- Firebase Auth + Realtime Database

## 시작하기

### 1) 환경 변수 설정
Firebase 설정을 `.env`에 넣고 `js/config.js`를 생성합니다.

```
FIREBASE_API_KEY="your-api-key"
FIREBASE_AUTH_DOMAIN="your-project.firebaseapp.com"
FIREBASE_DATABASE_URL="https://your-project-default-rtdb.firebaseio.com"
FIREBASE_PROJECT_ID="your-project"
FIREBASE_STORAGE_BUCKET="your-project.appspot.com"
FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
FIREBASE_APP_ID="your-app-id"
```

`.env.example`을 복사해서 시작해도 됩니다.

### 2) Firebase 설정 파일 생성

```bash
npm run generate:config
```

위 명령은 `.env`를 읽어 `js/config.js`를 생성합니다.

### 3) 실행
정적 파일 프로젝트이므로 브라우저에서 `index.html`을 열면 됩니다.

