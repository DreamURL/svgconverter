[프로젝트 워크플로우] Interactive Asset Studio (가제)
1. 프로젝트 개요
목표: 사용자가 업로드한 이미지(SVG, PNG, GIF 등)에 인터랙션을 추가하고, 즉시 사용 가능한 최적화된 프론트엔드 컴포넌트 코드를 생성해주는 동적 웹 애플리케이션을 구축한다.
핵심 가치: 개발자의 반복적인 코딩 작업을 자동화하여 생산성을 극대화하고, 웹사이트의 시각적 퀄리티를 손쉽게 향상시킨다.
UI/UX 컨셉: Vercel.com에서 영감을 받은 모던하고 깔끔한 다크 모드 기반의 디자인.
2. 핵심 기술 스택
프론트엔드: Next.js (App Router), React, TypeScript, Tailwind CSS
인증 및 DB: Supabase (Auth, Postgres Database)
이미지→SVG 변환 백엔드: Node.js, Express, Potrace 라이브러리 on AWS Lambda
유료 기능 (저장/배포): Cloudflare R2, Cloudflare Workers
상태 관리: Zustand (가볍고 간단한 상태 관리에 추천)
배포: Vercel
3. supabase 설정
데이터베이스 스키마: 프로젝트 시작 전, Supabase에 필요한 테이블 구조를 미리 설계하는 것이 중요합니다. (users, assets, licenses 등)
Supabase RLS (Row Level Security): "사용자는 자신의 데이터만 보거나 수정할 수 있다"는 규칙을 데이터베이스 레벨에서 강제해야 합니다. Supabase의 가장 강력한 보안 기능이므로 반드시 초기에 설정합니다.
에러 처리 및 로딩 상태: 모든 비동기 작업(API 요청, 파일 처리 등)에 대한 로딩 상태(스피너 등)와 에러 상태(에러 메시지)를 사용자에게 명확히 보여주는 UI를 기획해야 합니다.
단계별 구축 워크플로우 (Task Breakdown)
Phase 1: 프로젝트 기초 및 UI 뼈대 구축
[Task 1] Next.js 프로젝트 초기화
npx create-next-app 명령어를 사용하여 TypeScript, Tailwind CSS, App Router가 활성화된 새 프로젝트를 생성한다.
[Task 2] 기본 레이아웃 및 디자인 시스템 설정
tailwind.config.ts 파일에 Vercel 스타일의 커스텀 색상 팔레트(다크 모드 중심), 폰트, 간격 등을 정의한다.
src/app/layout.tsx 파일에서 전체 페이지의 기본 구조와 배경색, 폰트를 적용한다.
재사용 가능한 Header와 Footer 컴포넌트를 생성한다.
[Task 3] Supabase 연동 설정
Supabase 프로젝트를 생성하고 API URL과 anon 키를 발급받는다.
프로젝트 루트에 .env.local 파일을 생성하고 발급받은 키를 환경 변수로 저장한다. (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
Supabase 클라이언트를 초기화하고 관리하는 헬퍼 파일(src/lib/supabase/client.ts)을 생성한다.
[Task 4] 페이지 라우팅 구조 생성
src/app 디렉토리 내에 다음 페이지들을 위한 폴더와 page.tsx 파일을 생성한다:
/ (메인 페이지)
/gallery (갤러리)
/workspace (작업 공간)
/storage (저장 공간)
/account (마이페이지)
/login (로그인 페이지)
Phase 2: 인증 및 접근 제어 구현
[Task 5] 로그인/회원가입 기능 구현
/login 페이지에 이메일/비밀번호, 소셜 로그인(Google, GitHub) UI를 생성한다.
UI와 Supabase Auth 클라이언트(supabase.auth.signInWith..., signUp)를 연동하여 실제 인증 기능을 구현한다.
[Task 6] 인증 상태 관리
사용자의 로그인 상태 변경(SIGNED_IN, SIGNED_OUT)을 감지하고, 전역 상태(Context API 또는 Zustand)에 사용자 정보를 저장하여 앱 전체에서 활용할 수 있도록 구현한다.
[Task 7] 보호된 라우트(Protected Routes) 설정
src 폴더에 middleware.ts 파일을 생성한다.
이 미들웨어는 /workspace, /storage, /account 경로 접근 시 Supabase 세션 유무를 확인하고, 세션이 없으면 /login 페이지로 리다이렉트시키는 로직을 포함한다.
[Task 8] 마이페이지 기능 구현
/account 페이지에서 사용자 프로필 정보 수정 및 로그아웃 기능을 구현한다.
Phase 3: 핵심 기능 - '작업 공간(Workspace)' 구현
[Task 9] 작업 공간 UI 레이아웃 구축
/workspace 페이지에 좌우 분할 화면 레이아웃을 생성한다.
좌측: 컨트롤 패널 (파일 업로드, 옵션 설정 UI)
우측: 실시간 프리뷰 영역
[Task 10] 파일 업로드 및 클라이언트 사이드 변환/처리
좌측 패널에 react-dropzone 등을 활용하여 파일 업로드 컴포넌트를 구현한다.
SVG 파일은 그대로 상태에 저장한다.
PNG/GIF 파일의 경우, AWS Lambda에 배포된 변환 API를 호출하여 SVG 문자열 데이터를 받아온다. (아래 Phase 4에서 API 구축)
[Task 11] 실시간 프리뷰 기능 구현
우측 패널에 상태에 저장된 SVG 문자열을 렌더링하는 컴포넌트를 생성한다. 이 컴포넌트는 옵션 변경 시 다시 렌더링되어야 한다. (dangerouslySetInnerHTML 또는 react-inlinesvg 라이브러리 활용)
[Task 12] 인터랙티브 옵션 UI 및 로직 구현
좌측 패널에 사이즈(슬라이더), 색상(컬러 피커), 호버 옵션(드롭다운) 등 UI를 추가한다.
각 UI의 변경 사항은 실시간으로 컴포넌트의 상태(State)에 반영된다.
[Task 13] '코드로 전환' 기능 구현
'Export' 버튼을 생성한다.
버튼 클릭 시, 현재 상태(SVG 데이터 + 옵션)를 기반으로 최종 React 컴포넌트 코드(문자열)를 동적으로 생성하는 함수를 구현한다.
생성된 코드를 보여주는 모달(Modal) 창과 '복사하기' 버튼을 구현한다.
Phase 4: 백엔드 - 이미지 변환 서비스 구축 (AWS)
[Task 14] Node.js API 서버 프로젝트 생성
npm init으로 새 Node.js 프로젝트를 시작하고 express, multer(파일 처리), potrace(SVG 변환)를 설치한다.
[Task 15] 변환 API 엔드포인트 구현
POST /api/vectorize 엔드포인트를 생성한다.
multer를 이용해 multipart/form-data로 전송된 이미지 파일을 받는다.
potrace 라이브러리를 사용해 받은 이미지 파일을 SVG 문자열로 변환한다.
변환된 SVG 문자열을 JSON 형태로 응답한다.
[Task 16] AWS Lambda 배포
Serverless Framework 또는 AWS CDK를 사용하여 작성된 Node.js 앱을 AWS Lambda 함수로 패키징하고 배포한다.
API Gateway를 Lambda 함수의 트리거로 설정하여 퍼블릭 URL을 발급받는다.
Phase 5: 유료 기능 - 저장소 및 갤러리 구현
[Task 17] '저장하기' 기능 및 Cloudflare Worker 구현
작업 공간에 'Save to Library' 버튼을 추가한다. (유료 등급 사용자에게만 활성화)
Cloudflare Worker를 생성한다. 이 Worker는 API 엔드포인트 역할을 한다.
버튼 클릭 시, 생성된 자산 데이터(SVG, 옵션, 이름, 라이선스 타입, README)를 Worker API로 전송한다.
Worker는 수신한 데이터를 Cloudflare R2에 파일로 저장하고, 메타데이터는 Supabase DB에 저장한다.
[Task 18] '저장 공간' 페이지 구현
/storage 페이지에서 현재 로그인한 사용자의 ID를 기준으로 Supabase DB를 조회하여, 저장된 모든 자산 목록을 불러와 표시한다.
[Task 19] '갤러리' 페이지 구현
/gallery 페이지에서 모든 사용자가 'Public'으로 저장한 자산 목록을 DB에서 조회하여 보여준다.
'Free'와 'Licensed'를 구분하여 필터링할 수 있는 UI를 추가한다.
각 아이템 클릭 시, 상세 정보(제작자, README 등)를 볼 수 있는 상세 페이지 또는 모달을 구현한다.