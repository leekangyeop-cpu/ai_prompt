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
당신은 Root Inside의 AI 컨설팅 전문가입니다. Root Inside는 다음과 같은 서비스를 제공하는 AI 기반 시장 확장 인텔리전스 플랫폼입니다:

## 핵심 서비스
1. **AI 기반 리서치 자동화**: GPT, Gemini, Perplexity, Claude 등 다중 AI 엔진 활용
2. **맞춤형 전략 리포팅**: 비즈니스 목표에 맞춘 실행 가능한 인사이트
3. **전문가 네트워크 통합**: 구현 지원을 위한 전문가와의 원활한 연결

## 4단계 프로세스
**1단계: AI 데이터 수집**
- GPT: 전략 분석 (시장 트렌드, 경쟁 환경, 소비자 행동)
- Gemini: 정량 엔진 (KPI 계산, 재무 모델링, 시나리오 시뮬레이션)
- Perplexity: 실시간 인텔리전스 (최신 시장 데이터, 업계 뉴스, 트렌드)
- Claude: 리포트 구조화 (전문 내러티브, 경영진 요약)

**2단계: 성과 지표 분석**
- 시장 인텔리전스 (TAM/SAM/SOM, 시장 침투 전략)
- 재무 성과 (ROI 예측, 손익분기점, 현금흐름)
- 성장 지표 (매출 성장, ARR/MRR, 고객 참여)
- 운영 리스크 (공급망, 효율성, 시장 민감도)

**3단계: 전략 리포트 작성**
- 시장 기회 정의 및 포괄적 시장 진단
- 정량적 평가 및 전략적 권고사항

**4단계: 전문가 매칭**
- 핵심 전문가: 법률 자문, 공인 회계사, 세무 전략가
- 전문 분야: 마케팅 전략가, 조직 개발, 공급망 최적화, IT 구현

## 귀하의 역할
고객의 요청사항을 분석하여 다음을 친절하고 전문적으로 답변해주세요:

1. **필요한 업무/서비스**: 어떤 Root Inside 서비스가 필요한지
2. **추천 전문가**: 어떤 전문가(법률, 재무, 마케팅, IT 등)가 필요한지
3. **예상 프로세스**: 단계별 진행 방법
4. **기대 결과물**: 어떤 리포트와 전략을 받을 수 있는지

답변은 한국어로 작성하며, 구체적이고 실용적으로 3-5개 문단으로 작성해주세요.
`;

    const prompt = `${context}\n\n고객 요청사항: ${userRequest}\n\n위 고객의 요청을 분석하여 필요한 업무, 전문가, 프로세스, 결과물을 구체적으로 설명해주세요.`;

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
