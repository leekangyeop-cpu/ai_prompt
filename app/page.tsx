'use client';

import { useState } from 'react';

export default function Home() {
  const [showDemo, setShowDemo] = useState(false);
  const [userRequest, setUserRequest] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactEmail = () => {
    const subject = encodeURIComponent('Root Inside 문의');
    const body = encodeURIComponent('안녕하세요,\n\nRoot Inside에 대해 문의드립니다.\n\n[문의 내용을 작성해주세요]');
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=consult@rootinsidegroup.com&su=${subject}&body=${body}`, '_blank');
  };

  const handleContactWithContext = () => {
    const subject = encodeURIComponent('Root Inside AI 분석 기반 전문 컨설팅 문의');
    const emailBody = `안녕하세요,

Root Inside AI 데모를 통해 비즈니스 분석을 받았으며, 전문 컨설팅을 문의드립니다.

[아래 분석 결과를 복사하여 붙여넣어 주세요]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 요청사항
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${userRequest.substring(0, 300)}${userRequest.length > 300 ? '...' : ''}

추가 문의사항:
[여기에 작성해주세요]

감사합니다.`;

    const body = encodeURIComponent(emailBody);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=consult@rootinsidegroup.com&su=${subject}&body=${body}`, '_blank');
  };

  const handleDemo = async () => {
    if (!userRequest.trim()) {
      alert('요청사항을 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setAiResponse('');

    try {
      console.log('API 요청 시작:', userRequest);
      
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userRequest }),
      });

      console.log('응답 상태:', response.status);
      
      const data = await response.json();
      console.log('응답 데이터:', data);

      if (response.ok) {
        setAiResponse(data.response);
      } else {
        const errorMsg = data.details ? `${data.error}\n상세: ${data.details}` : data.error;
        setAiResponse('오류가 발생했습니다: ' + errorMsg);
        console.error('API 에러:', errorMsg);
      }
    } catch (error) {
      console.error('네트워크 에러:', error);
      setAiResponse('AI 분석 중 오류가 발생했습니다. 네트워크 연결을 확인해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Root Inside
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => handleScrollTo('overview')} className="text-slate-700 hover:text-blue-900 transition-colors font-medium">개요</button>
              <button onClick={() => handleScrollTo('process')} className="text-slate-700 hover:text-blue-900 transition-colors font-medium">프로세스</button>
              <button onClick={() => handleScrollTo('features')} className="text-slate-700 hover:text-blue-900 transition-colors font-medium">특징</button>
              <button onClick={() => handleScrollTo('experts')} className="text-slate-700 hover:text-blue-900 transition-colors font-medium">전문가</button>
              <a href="/about" className="text-slate-700 hover:text-blue-900 transition-colors font-medium">회사 소개</a>
            </div>
            <button 
              onClick={handleContactEmail}
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
            >
              문의하기
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            AI 기반 시장 확장
            <br />
            <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">
              인텔리전스 플랫폼
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            복잡한 시장 조사를 실행 가능한 전략적 가이드로 전환하는 AI 기반 컨설팅 플랫폼
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={handleContactEmail}
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
            >
              시작하기
            </button>
            <button 
              onClick={() => setShowDemo(true)}
              className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all"
            >
              진단 받기
            </button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section id="overview" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI 기반 리서치 자동화</h3>
              <p className="text-slate-700">다중 AI 엔진을 활용한 포괄적인 시장 인텔리전스</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-lg border-2 border-indigo-100 hover:border-indigo-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">맞춤형 전략 리포팅</h3>
              <p className="text-slate-700">비즈니스 목표에 맞춘 실행 가능한 인사이트</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border-2 border-purple-100 hover:border-purple-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">전문가 네트워크 통합</h3>
              <p className="text-slate-700">구현 지원을 위한 전문가와의 원활한 연결</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section id="process" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">플랫폼 프로세스</h2>
            <p className="text-xl text-slate-600">AI 분석부터 전문가 매칭까지의 통합 워크플로우</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-500">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl font-bold text-xl mb-4 group-hover:scale-110 transition-transform shadow-md">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">AI 데이터 수집</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center"><span className="text-blue-500 mr-2">•</span> GPT 전략 분석</div>
                <div className="flex items-center"><span className="text-blue-500 mr-2">•</span> Gemini 정량 엔진</div>
                <div className="flex items-center"><span className="text-blue-500 mr-2">•</span> Perplexity 실시간 리서치</div>
                <div className="flex items-center"><span className="text-blue-500 mr-2">•</span> Claude 리포트 구조화</div>
              </div>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-indigo-500">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl font-bold text-xl mb-4 group-hover:scale-110 transition-transform shadow-md">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">성과 지표 분석</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center"><span className="text-indigo-500 mr-2">•</span> 시장 인텔리전스</div>
                <div className="flex items-center"><span className="text-indigo-500 mr-2">•</span> 재무 성과</div>
                <div className="flex items-center"><span className="text-indigo-500 mr-2">•</span> 성장 지표</div>
                <div className="flex items-center"><span className="text-indigo-500 mr-2">•</span> 운영 리스크 평가</div>
              </div>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-purple-500">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl font-bold text-xl mb-4 group-hover:scale-110 transition-transform shadow-md">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">전략 리포트 작성</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center"><span className="text-purple-500 mr-2">•</span> 시장 기회 정의</div>
                <div className="flex items-center"><span className="text-purple-500 mr-2">•</span> 시장 진단</div>
                <div className="flex items-center"><span className="text-purple-500 mr-2">•</span> 정량적 평가</div>
                <div className="flex items-center"><span className="text-purple-500 mr-2">•</span> 전략적 권고</div>
              </div>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-cyan-500">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-xl font-bold text-xl mb-4 group-hover:scale-110 transition-transform shadow-md">
                4
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">전문가 매칭</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex items-center"><span className="text-cyan-500 mr-2">•</span> 법률/회계 전문가</div>
                <div className="flex items-center"><span className="text-cyan-500 mr-2">•</span> 마케팅 전략가</div>
                <div className="flex items-center"><span className="text-cyan-500 mr-2">•</span> HR/공급망 전문가</div>
                <div className="flex items-center"><span className="text-cyan-500 mr-2">•</span> IT 구현 파트너</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Root Inside Semi-AI Agent System</h2>
            <p className="text-xl text-slate-600">각 AI의 특화된 능력을 활용한 포괄적 분석</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold">GPT</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">전략 분석 엔진</h3>
              </div>
              <p className="text-slate-700 mb-4">시장 트렌드 종합, 경쟁 환경 매핑, 소비자 행동 분석</p>
              <ul className="space-y-2 text-slate-600">
                <li>✓ 시장 역학 관계 분석</li>
                <li>✓ 기회 및 도전 과제 식별</li>
                <li>✓ 전략적 인사이트 도출</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-8 rounded-xl shadow-lg border-2 border-indigo-100 hover:border-indigo-400 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold text-sm">Gemini</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">정량 분석 엔진</h3>
              </div>
              <p className="text-slate-700 mb-4">KPI 계산, 재무 모델링, 비즈니스 시나리오 시뮬레이션</p>
              <ul className="space-y-2 text-slate-600">
                <li>✓ 예측 모델 및 리스크 평가</li>
                <li>✓ 재무 시뮬레이션</li>
                <li>✓ 데이터 기반 의사결정</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 via-white to-purple-50 p-8 rounded-xl shadow-lg border-2 border-purple-100 hover:border-purple-400 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold text-xs">Pplx</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">실시간 인텔리전스</h3>
              </div>
              <p className="text-slate-700 mb-4">현재 시장 데이터 수집, 업계 뉴스 분석, 신흥 트렌드 식별</p>
              <ul className="space-y-2 text-slate-600">
                <li>✓ 최신 시장 상황 반영</li>
                <li>✓ 규제 변경사항 모니터링</li>
                <li>✓ 산업 동향 추적</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 via-white to-cyan-50 p-8 rounded-xl shadow-lg border-2 border-cyan-100 hover:border-cyan-400 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white font-bold text-sm">Claude</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">리포트 아키텍처</h3>
              </div>
              <p className="text-slate-700 mb-4">전문적인 내러티브 개발, 경영진 요약, 전략적 권고안</p>
              <ul className="space-y-2 text-slate-600">
                <li>✓ 실행 가능한 문서 전환</li>
                <li>✓ 설득력 있는 비즈니스 문서</li>
                <li>✓ 구조화된 전략 커뮤니케이션</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Analysis Section */}
      <section id="risk" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">리스크 분석 및 위험성 평가</h2>
            <p className="text-xl text-slate-300">데이터 기반의 포괄적인 리스크 관리</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold mb-3 text-amber-400">시장 인텔리전스</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• TAM/SAM/SOM 분석</li>
                <li>• 시장 침투 전략</li>
                <li>• 고객 전환 최적화</li>
                <li>• CAC/CLV 균형</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold mb-3 text-green-400">재무 성과</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• ROI 예측</li>
                <li>• 손익분기점 분석</li>
                <li>• 수익성 메트릭</li>
                <li>• 현금 흐름 관리</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold mb-3 text-blue-400">성장 지표</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• 매출 성장 분석</li>
                <li>• ARR/MRR 예측</li>
                <li>• 고객 참여 메트릭</li>
                <li>• 코호트 성과 분석</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-bold mb-3 text-red-400">운영 리스크</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• 공급망 회복력</li>
                <li>• 운영 효율성</li>
                <li>• 시장 민감도 분석</li>
                <li>• 인적 자본 평가</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Network Section */}
      <section id="experts" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">전문가 네트워크</h2>
            <p className="text-xl text-slate-600">AI 분석 후 실제 구현을 위한 전문가 매칭</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">핵심 전문가 네트워크</h3>
              <p className="mb-6 text-blue-100">즉시 실행 가능한 핵심 전문가들과의 직접 연결</p>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold mb-2">법인 법률 자문</h4>
                  <p className="text-sm text-blue-100">사업 설립, 지적 재산권 보호, 규제 준수</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold mb-2">공인 회계사</h4>
                  <p className="text-sm text-blue-100">재무 계획, 감사 준비, 세무 최적화</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold mb-2">세무 전략 자문</h4>
                  <p className="text-sm text-blue-100">다중 관할 세무 계획 및 규정 준수</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900 to-purple-800 text-white p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">전문 분야 네트워크</h3>
              <p className="mb-6 text-purple-100">특화된 구현 요구사항을 위한 전문가 매칭</p>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold mb-2">성장 마케팅 전략가</h4>
                  <p className="text-sm text-purple-100">고객 획득, 브랜드 포지셔닝</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold mb-2">조직 개발 컨설턴트</h4>
                  <p className="text-sm text-purple-100">인재 영입, 팀 구조, 조직 문화</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold mb-2">IT 구현 파트너</h4>
                  <p className="text-sm text-purple-100">시스템 아키텍처, 디지털 전환</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">성과 지표</h2>
            <p className="text-xl text-slate-600">검증된 결과로 입증되는 플랫폼의 가치</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">48시간</div>
              <div className="text-slate-600 font-medium">리서치 완료</div>
              <div className="text-sm text-slate-500 mt-1">vs. 수주 (전통적 방식)</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">70%</div>
              <div className="text-slate-600 font-medium">비용 절감</div>
              <div className="text-sm text-slate-500 mt-1">전통 컨설팅 대비</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-slate-600 font-medium">고객 만족도</div>
              <div className="text-sm text-slate-500 mt-1">리서치 정확도</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-600 mb-2">85%</div>
              <div className="text-slate-600 font-medium">시장 진입 성공률</div>
              <div className="text-sm text-slate-500 mt-1">구현 성공 비율</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">시장 확장을 위한 첫 걸음을 내딛으세요</h2>
          <p className="text-xl text-blue-100 mb-8">
            AI 기반 분석과 전문가 네트워크로 귀사의 비즈니스 확장을 성공으로 이끌어드립니다
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={handleContactEmail}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all"
            >
              무료 상담 신청
            </button>
            <button 
              onClick={() => setShowDemo(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all"
            >
              플랫폼 데모
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <span className="text-xl font-bold">Root Inside</span>
              </div>
              <p className="text-slate-400 text-sm">
                AI 기반 시장 확장 인텔리전스 플랫폼
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">서비스</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors cursor-pointer">AI 시장 분석</a></li>
                <li><a href="#process" className="hover:text-white transition-colors cursor-pointer">전략 컨설팅</a></li>
                <li><a href="#risk" className="hover:text-white transition-colors cursor-pointer">리스크 평가</a></li>
                <li><a href="#experts" className="hover:text-white transition-colors cursor-pointer">전문가 매칭</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">회사</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/about" className="hover:text-white transition-colors cursor-pointer">회사 소개</a></li>
                <li>팀</li>
                <li>파트너</li>
                <li>채용</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">연락처</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>contact@rootinsidegroup.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2025 Root Inside. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">AI 컨설팅 데모</h3>
                <button 
                  onClick={() => {
                    setShowDemo(false);
                    setUserRequest('');
                    setAiResponse('');
                  }}
                  className="text-white hover:bg-white/20 rounded-lg p-2 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-blue-100 mt-2">
                귀사의 비즈니스 요구사항을 입력하시면 AI가 필요한 업무와 전문가를 분석해드립니다.
              </p>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  비즈니스 요청사항
                </label>
                <textarea
                  value={userRequest}
                  onChange={(e) => setUserRequest(e.target.value)}
                  placeholder="예: 우리 회사는 K-뷰티 브랜드입니다. 북미 시장 진출을 계획하고 있으며, 현지 유통 채널과 마케팅 전략에 대한 조언이 필요합니다..."
                  className="w-full h-32 px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none text-slate-900"
                  disabled={isLoading}
                />
              </div>

              <button
                onClick={handleDemo}
                disabled={isLoading || !userRequest.trim()}
                className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    AI 분석 중...
                  </span>
                ) : (
                  'AI 분석 시작'
                )}
              </button>

              {aiResponse && (
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border-2 border-blue-200">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-2 text-lg">AI 분석 결과</h4>
                      <div className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                        {aiResponse}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <button
                      onClick={handleContactWithContext}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      분석 결과 기반 전문 컨설팅 문의하기
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
