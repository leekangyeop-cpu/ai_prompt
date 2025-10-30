import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Ensure this route runs in a Node runtime on Vercel so process.env is available at request time
export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { userRequest } = await req.json();
    
    console.log('=== API 요청 시작 ===');
    console.log('요청 내용:', userRequest);

    if (!userRequest) {
      console.log('에러: 요청사항 없음');
      return NextResponse.json(
        { error: '요청사항을 입력해주세요.' },
        { status: 400 }
      );
    }

    // API 키 확인 (런타임에 다시 확인)
    const apiKey = process.env.GEMINI_API_KEY;
    console.log('API 키 존재 여부:', !!apiKey);
    console.log('API 키 길이:', apiKey?.length || 0);
    
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
      console.log('에러: API 키 미설정');
      return NextResponse.json(
        { error: 'Gemini API 키가 설정되지 않았습니다. Vercel 환경 변수에 GEMINI_API_KEY를 설정해주세요.' },
        { status: 500 }
      );
    }

  // 런타임에 API 키로 새 인스턴스 생성 (안전성 보장)
  // Create the client at request time to avoid build-time access to environment variables
  const genAIRuntime = new GoogleGenerativeAI(apiKey);
    const model = genAIRuntime.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const context = `
당신은 Root Inside의 상급 프롬프트 엔지니어입니다. 
직군별·업무별 특성을 반영하여 고품질 프롬프트를 생성하는 전문가입니다.

## 프롬프트 작성 원칙
- 명확하고 구체적인 지시사항 작성
- 역할(Role)과 목표(Goals)를 명시
- 출력 형식을 구조화
- 예시를 포함하여 이해도 향상

## 정확성이 중요한 직군 (법률·세무·의료·회계)
- 모르는 것은 모른다고 명시
- 추정이나 가정을 피함
- 근거와 출처를 요청
- 검증 단계 포함
- 불확실성을 명시적으로 표현

## 환각 방지 (Anti-Hallucination)
- 최신 정보는 별도 확인 필요 명시
- 법률/의료/금융 조언은 전문가 확인 권고
- 사실과 의견을 구분

## 귀하의 역할
사용자의 직군과 업무를 분석하여 다음 구조로 프롬프트를 생성해주세요:

**1) 역할(Role)**: 어떤 전문가로서 작업하는가
**2) 목표(Goals)**: 달성하고자 하는 구체적인 목표
**3) 컨텍스트(Context)**: 배경 정보와 상황 설명
**4) 지시사항(Instructions)**: 단계별 구체적 실행 방법
**5) 제약조건(Constraints)**: 법규/정확성/불확실성 표기 등
**6) 출력 형식(Output Format)**: 섹션/목차/필드 구조
**7) 검증(Verification)**: 체크리스트/근거 요청
**8) 후속 액션(Next Steps)**: 추가 작업이나 내보내기 안내

답변은 한국어로 작성하며, 프롬프트 형식으로 구체적이고 실용적으로 작성해주세요.
고위험/고정밀 직군의 경우 보수적 톤으로 작성하고 안전문구를 반드시 포함하세요.
`;

    const prompt = `${context}\n\n${userRequest}\n\n위 직군과 업무에 맞는 고품질 프롬프트를 8단계 구조로 생성해주세요.`;

    console.log('Gemini API 호출 중...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('응답 성공, 길이:', text.length);
    console.log('=== API 요청 완료 ===');

    return NextResponse.json({ response: text });
  } catch (error) {
    const err = error as Error;
    console.error('=== 에러 발생 ===');
    console.error('에러 타입:', err.constructor.name);
    console.error('에러 메시지:', err.message);
    console.error('에러 스택:', err.stack);
    console.error('전체 에러 객체:', JSON.stringify(error, null, 2));
    
    return NextResponse.json(
      { 
        error: 'AI 분석 중 오류가 발생했습니다.',
        details: err.message || '알 수 없는 오류'
      },
      { status: 500 }
    );
  }
}
