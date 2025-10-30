# ⚙️ Root Inside – AI 프롬프트 자동화 MVP

**산업/직무별 맞춤 프롬프트 자동 생성 · Google Gemini 무료 API 기반**

이 저장소는 무료 Google Gemini API만으로 실제 동작하는 MVP입니다.
법률·세무·컨설팅·마케팅·개발 등 직군별 업무에 맞춰 맥락화된 고품질 프롬프트를 자동으로 생성합니다.

✅ 실행 엔진: Gemini Free API (gemini-2.5-flash)  
🛈 기타 AI(GPT-4o, Claude 등): "추천 모델"로만 문서에 안내 (코드 호출 없음)

---

## 🌐 개요 (Overview)

대부분의 사용자는 매 작업마다 프롬프트를 새로 쓰며 시간을 낭비합니다.  
Root Inside의 MVP는 직군·정확도·리스크·핵심요건을 구조화하여,  
Gemini 무료 API로 즉시 쓸 수 있는 산업별 표준 프롬프트를 자동 생성합니다.

---

## 🧠 핵심 기능 (Core Features)

| 기능 | 설명 |
|------|------|
| 🧩 직군 기반 프롬프트 생성 | common_tasks, key_requirements, required_accuracy, risk_level을 결합해 도메인 특화 프롬프트 자동 생성 |
| 🔒 정확도/리스크 제어 | 고정밀 직군(법률·의료·회계)은 보수적 모드로 안전문구·근거요청·불확실성 표기 포함 |
| 📚 프롬프트 자산화 | 생성된 프롬프트를 JSON으로 저장(옵션) → 재사용 가능한 "AI Prompt Asset" |
| 🔁 워크스페이스 연동(선택) | Docs/Sheets/Apps Script로 내보내기 용도의 정형 텍스트 출력 |

### 💡 추천 AI (문서 안내용):
- **정확성·장문 분석**: Claude / GPT-4o
- **창의/카피**: GPT-4o
- **속도/멀티모달/Google 연동**: Gemini (현재 엔진)

※ 본 MVP는 Gemini만 호출합니다.

---

## 🚀 빠른 시작 (Quickstart)

### 1) 사전 준비
- Node.js 18+
- [Google AI Studio](https://aistudio.google.com/)에서 Gemini API Key 발급

### 2) 설치
```bash
git clone https://github.com/leekangyeop-cpu/semi_ai_agent.git
cd semi_ai_agent
npm install
```

### 3) 환경 변수 설정 (.env.local)
```env
GEMINI_API_KEY=여기에_발급받은_API키_입력
```

### 4) 실행
```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속

---

## 🏗 아키텍처

```
Root Inside 프롬프트 자동화 MVP
├─ Next.js (React 기반 풀스택)
├─ TypeScript (타입 안정성)
├─ Tailwind CSS (유틸리티 스타일)
└─ Google Gemini API (무료 AI 엔진)
```

### 디렉토리 구조
```
ai_prompt/
├─ app/
│  ├─ page.tsx              # 메인 페이지 (프롬프트 생성)
│  ├─ about/
│  │  └─ page.tsx           # 회사 소개
│  ├─ api/
│  │  └─ demo/
│  │     └─ route.ts        # Gemini API 호출
│  └─ globals.css
├─ .env.local               # API 키 설정
├─ next.config.ts
├─ package.json
└─ README.md
```

---

## 🧪 사용 방법

### 1. 웹 인터페이스
1. http://localhost:3000 접속
2. "프롬프트 생성하기" 버튼 클릭
3. 직군 선택 (경영 컨설턴트, 회계사, 변호사 등)
4. 업무 내용 입력
5. "프롬프트 생성하기" 클릭
6. 생성된 프롬프트 확인 및 복사

### 2. 지원 직군
- **경영 컨설턴트** (Business Strategy) - 정확도: medium, 리스크: medium
- **회계사/세무사** (Finance & Tax) - 정확도: high, 리스크: high
- **변호사** (Legal) - 정확도: high, 리스크: high
- **마케터** (Marketing) - 정확도: medium, 리스크: low
- **개발자** (IT) - 정확도: high, 리스크: medium
- **디자이너** (Creative) - 정확도: medium, 리스크: low

---

## 🧩 프롬프트 출력 구조

생성되는 프롬프트는 다음 8단계 구조를 따릅니다:

1. **역할(Role)**: 어떤 전문가로서 작업하는가
2. **목표(Goals)**: 달성하고자 하는 구체적인 목표
3. **컨텍스트(Context)**: 배경 정보와 상황 설명
4. **지시사항(Instructions)**: 단계별 구체적 실행 방법
5. **제약조건(Constraints)**: 법규/정확성/불확실성 표기 등
6. **출력 형식(Output Format)**: 섹션/목차/필드 구조
7. **검증(Verification)**: 체크리스트/근거 요청
8. **후속 액션(Next Steps)**: 추가 작업이나 내보내기 안내

---

## 🛡 정확성 & 안전 (Policy Guardrails)

- 고정밀·고위험 직군(법률/의료/세무)은 보수적 톤 + 불확실성 명시 + 근거 요구 포함
- "모르면 모른다고 답변", "추정 금지", "최신 정보는 확인"을 프롬프트에 상시 주입
- 실사용 도입 시에는 내부 검토·전문가 리뷰 절차 권장

---

## 🧭 로드맵 (Roadmap)

- ✅ **(MVP)** Gemini Free API 단일 엔진
- 🔜 **(Next)** 프롬프트 자산 버전관리 + UI 대시보드
- 🔮 **(Later)** 추천 AI(Claude/GPT-4o 등) 선택 실행 토글, 멀티-에이전트 오케스트레이션

---

## 📊 기술 스택

- **프론트엔드**: Next.js 15, React, TypeScript
- **스타일링**: Tailwind CSS
- **AI 엔진**: Google Gemini API (gemini-2.5-flash)
- **배포**: Vercel (권장)

---

## 🌍 배포 (Deployment)

### Vercel 배포
1. [Vercel](https://vercel.com/)에 계정 생성
2. GitHub 저장소 연결
3. 환경 변수 설정:
   - `GEMINI_API_KEY`: Gemini API 키
4. 배포 완료!

---

## 📞 문의

**Email**: consult@rootinsidegroup.com

프롬프트 자동화 시스템에 대한 문의는 언제든지 환영합니다!

---

## 📄 라이선스

© 2025 Root Inside Group.

데이터셋, 프롬프트 프레임워크, 자동화 로직은 Root Inside Group의 지식자산입니다.  
무단 재배포·상업적 복제 금지.

---

## 🎯 주요 특징

### ✨ 사용자 경험
- 🎨 **세련된 디자인**: 전문적이고 모던한 UI/UX
- ⚡ **빠른 응답**: Gemini Flash 모델로 1-2초 내 생성
- 📱 **반응형**: 모바일/태블릿/데스크톱 모두 지원
- 🔄 **원클릭 복사**: 생성된 프롬프트 즉시 복사 가능

### 🔐 안전성
- ✅ **환경 변수**: API 키 안전하게 보관
- 🛡️ **에러 처리**: 사용자 친화적 에러 메시지
- 📝 **로깅**: 디버깅을 위한 상세 로그

### 🚀 성능
- ⚡ **Next.js 15**: 최신 React 서버 컴포넌트
- 🔥 **Turbopack**: 빠른 개발 서버
- 🎯 **최적화**: 프로덕션 빌드 자동 최적화

---

**Root Inside** - AI 프롬프트 자동화로 업무 생산성을 혁신합니다 🚀
