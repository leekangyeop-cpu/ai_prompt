import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Ensure this route runs in a Node runtime on Vercel so process.env is available at request time
export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { userRequest } = await req.json();
    
    console.log('=== API 요청 시작 ===');
    console.log('요청 내용:', JSON.stringify(userRequest, null, 2));

    if (!userRequest || !userRequest.profession || !userRequest.task) {
      console.log('에러: 요청사항 없음');
      return NextResponse.json(
        { error: '직군과 업무 내용을 입력해주세요.' },
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

    const { profession, task } = userRequest;

    // 프롬프트 작성 베스트 프랙티스 (업계 표준 기반)
    const bestPractices = {
      general: [
        '명확한 역할(Role) 정의 - 전문가 정체성 확립',
        '측정 가능한 목표(Goals) 제시 - SMART 원칙 적용',
        '충분한 컨텍스트(Context) 제공 - 배경과 제약조건 명시',
        '단계별 지시사항(Instructions) - 구체적이고 실행 가능한 액션',
        '명확한 제약조건(Constraints) - 준수사항 및 금지사항',
        '구조화된 출력 형식(Output Format) - 일관성 있는 결과물',
        '검증 프로세스(Verification) - 품질 보증 체크리스트'
      ],
      accuracy_critical: [
        '모든 주장에 대한 출처 및 법적 근거 명시 요구',
        '불확실하거나 해석이 나뉘는 부분은 명확히 표기',
        '보수적이고 신중한 톤 - 과장이나 단정적 표현 지양',
        '전문가 검토 필수 문구 포함 - 최종 책임 소재 명시',
        '법적/재무적/의료적 책임 한계 사전 고지',
        '최신 정보 확인 필요성 강조 - 법령/기준 변경 가능성'
      ],
      anti_hallucination: [
        '확실하지 않은 정보는 "확인 필요" 또는 "전문가 자문 권장" 명시',
        '추정, 가정, 예측은 명확히 구분하여 표기',
        '사실(Fact)과 의견(Opinion) 명확히 분리',
        '출처가 명확한 정보만 제공하도록 지시',
        '근거 없는 수치나 통계 사용 금지'
      ]
    };

    // 정확도 및 리스크 수준 확인
    const isHighAccuracy = profession.required_accuracy === 'high';
    const isHighRisk = profession.risk_level === 'high';
    const isMediumRisk = profession.risk_level === 'medium';

    // 신뢰도 강화 문구
    const trustEnhancement = isHighAccuracy || isHighRisk 
      ? `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ 고정밀/고위험 분야 특별 지침 (필수 적용)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

이 직군(${profession.name})은 높은 정확도와 신뢰성이 요구되는 분야입니다.
다음 원칙들을 반드시 준수하여 프롬프트를 생성하세요:

${bestPractices.accuracy_critical.map((p: string, idx: number) => `  ${idx + 1}. ${p}`).join('\n')}

**환각 방지 (Anti-Hallucination) 필수 조치:**
${bestPractices.anti_hallucination.map((p: string, idx: number) => `  ${idx + 1}. ${p}`).join('\n')}

**신뢰도 향상을 위한 추가 요구사항:**
  • 모든 답변에 "본 내용은 일반적인 정보 제공 목적이며, 구체적인 상황에 대해서는 ${profession.name} 전문가의 자문을 받으시기 바랍니다" 문구 포함
  • 법령, 기준, 판례 등은 최신 정보 확인 필수 안내
  • 불확실한 부분은 "추가 확인 필요" 명시
  • 책임 소재 및 면책 조항 명확히 표기
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
      : isMediumRisk
      ? `
⚡ 중위험 분야 주의사항
이 직군(${profession.name})은 전문성과 정확성이 중요한 분야입니다.
검증 가능한 정보를 제공하고, 불확실한 부분은 명시하세요.
`
      : '';

    const context = `
당신은 Root Inside의 수석 프롬프트 엔지니어입니다.
산업별 전문성과 실무 경험을 바탕으로 최고 품질의 프롬프트를 생성하는 전문가입니다.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 현재 작업 대상 직군 정보
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**직군명**: ${profession.name} (${profession.name_en})
**카테고리**: ${profession.category}
**정확도 요구 수준**: ${profession.required_accuracy.toUpperCase()}
**리스크 수준**: ${profession.risk_level.toUpperCase()}

**이 직군의 핵심 업무 영역:**
${profession.common_tasks.map((task: string, idx: number) => `  ${idx + 1}. ${task}`).join('\n')}

**이 직군의 필수 충족 요구사항:**
${profession.key_requirements.map((req: string, idx: number) => `  ${idx + 1}. ${req}`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 프롬프트 작성 표준 원칙 (전 직군 공통)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${bestPractices.general.map((p: string, idx: number) => `${idx + 1}. ${p}`).join('\n')}
${trustEnhancement}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✍️ 생성할 프롬프트 구조 (8단계 필수)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

다음 8단계 구조로 전문적이고 실무 적용 가능한 프롬프트를 생성하세요:

**1단계: 역할(Role) 정의**
   - ${profession.name}로서의 구체적인 전문가 역할과 정체성
   - 해당 분야에서 요구되는 전문 역량과 경험 수준
   - 작업의 책임 범위와 권한

**2단계: 목표(Goals) 설정**
   - "${task}"를 달성하기 위한 명확하고 측정 가능한 목표
   - SMART 원칙 적용 (구체적, 측정가능, 달성가능, 관련성, 기한)
   - 기대하는 최종 결과물의 형태와 품질 기준

**3단계: 컨텍스트(Context) 제공**
   - ${profession.category} 분야의 산업적 배경과 현황
   - 작업 환경 및 제약 조건
   - 관련 이해관계자 및 의사결정 구조
   - 참고해야 할 법규, 기준, 가이드라인

**4단계: 지시사항(Instructions) 작성**
   - 단계별 구체적이고 실행 가능한 액션 플랜
   - ${profession.common_tasks.slice(0, 3).join(', ')} 등 핵심 업무 고려
   - 각 단계별 산출물과 체크포인트
   - 의사결정이 필요한 지점 명시

**5단계: 제약조건(Constraints) 명시**
   - ${profession.key_requirements.slice(0, 3).join(', ')} 등 필수 준수사항
   - 법적, 윤리적, 기술적 제약사항
   - 금지 사항 및 주의사항
   ${isHighAccuracy || isHighRisk ? '- ⚠️ 불확실성 표기 의무화 및 전문가 검토 필수 문구 포함' : ''}

**6단계: 출력 형식(Output Format) 지정**
   - 명확한 문서 구조 (서론, 본론, 결론 등)
   - 섹션별 상세 내용 및 포맷
   - 표, 차트, 리스트 등 시각화 요소
   - ${profession.category} 분야 표준 문서 형식 준수

**7단계: 검증(Verification) 프로세스**
   - 품질 검증 체크리스트 제공
   - ${profession.key_requirements.join(', ')} 충족 여부 확인 항목
   - 오류 검토 포인트
   ${isHighAccuracy || isHighRisk ? '- ⚠️ 법적/전문적 검토 필수 항목 명시' : ''}
   - 피드백 및 개선 프로세스

**8단계: 후속 액션(Next Steps)**
   - 완료 후 수행할 작업
   - 관련 부서 또는 전문가 검토 절차
   ${isHighAccuracy || isHighRisk ? '- ⚠️ 필수: 전문가 최종 검토 및 승인 프로세스' : ''}
   - 문서 보관 및 업데이트 방안

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚙️ 최종 요구사항
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• 답변은 한국어로 작성
• 실무에 즉시 활용 가능한 구체적이고 실용적인 내용
• 전문 용어는 정확하게 사용하되, 필요시 설명 추가
• ${profession.name}의 실제 업무 프로세스와 실무 관행 반영
• 모호하거나 추상적인 표현 지양, 구체적이고 명확한 지시사항 제공
${isHighAccuracy || isHighRisk ? '• ⚠️ 고정밀 분야이므로 보수적이고 신중한 톤 필수' : ''}
${isHighAccuracy || isHighRisk ? '• ⚠️ 책임 소재 및 면책 조항 반드시 포함' : ''}
`;

    const prompt = `${context}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n📝 작업 요청\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n직군: ${profession.name} (${profession.name_en})\n업무: ${task}\n\n위 정보를 바탕으로 8단계 구조의 고품질 프롬프트를 생성해주세요.\n각 단계는 명확히 구분하고, ${profession.name}의 실무 특성을 충분히 반영하세요.`;

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
