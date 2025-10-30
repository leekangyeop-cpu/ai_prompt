'use client';

import Link from 'next/link';

export default function About() {
  const handleContactEmail = () => {
    const subject = encodeURIComponent('Root Inside 문의');
    const body = encodeURIComponent('안녕하세요,\n\nRoot Inside에 대해 문의드립니다.\n\n[문의 내용을 작성해주세요]');
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=consult@rootinsidegroup.com&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                Root Inside
              </span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-900 transition-colors font-medium">홈</Link>
              <Link href="/about" className="text-blue-900 font-semibold">회사 소개</Link>
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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Root Inside
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mb-8">
              AI-Powered Market Expansion Insight Engine
            </p>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              기업의 시장 확장 시기에 포괄적이고 데이터 중심의 시장 분석을 통해 
              비즈니스 의사결정을 가속화하는 지능형 컨설팅 플랫폼입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider bg-indigo-50 px-4 py-2 rounded-full">
                ABOUT US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">회사 개요</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Root Inside는 복잡한 시장 조사를 실행 가능한 전략적 가이드로 전환하는 
              구조화된 인사이트를 제공합니다. 고비용의 전통적 컨설팅과 기본적인 시장 조사 도구 사이의 
              격차를 메우며, 스타트업 친화적인 접근성으로 엔터프라이즈급 인사이트를 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI 기반 리서치 자동화</h3>
              <p className="text-slate-700">
                다중 AI 엔진(GPT, Gemini, Perplexity, Claude)을 활용하여 
                포괄적인 시장 인텔리전스를 제공합니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-lg border-2 border-indigo-100 hover:border-indigo-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">맞춤형 전략 리포팅</h3>
              <p className="text-slate-700">
                특정 비즈니스 목표에 맞춘 맞춤형 인사이트와 
                실행 가능한 전략을 제공합니다.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border-2 border-purple-100 hover:border-purple-500 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">전문가 네트워크 통합</h3>
              <p className="text-slate-700">
                구현 지원을 위한 전문가들과의 원활한 조정 및 
                프로젝트 협업 서비스를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-slate-200"></div>
      </div>

      {/* Strategic Purpose */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                OUR PURPOSE
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">전략적 목적</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              확장 단계에서 네 가지 핵심 비즈니스 니즈를 해결합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mt-2">시장 인텔리전스 및 검증</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                다양한 분석 렌즈를 통해 시장 기회를 평가하는 포괄적인 타당성 연구 및 
                리스크 평가 프레임워크를 제공하여 정보에 입각한 진입 결정을 보장합니다.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-indigo-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mt-2">자동화된 리서치 우수성</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                업계 최고의 AI API(GPT, Gemini, Perplexity, Claude)를 활용하여 
                방대한 양의 시장 데이터, 경쟁 인텔리전스, 트렌드 분석을 
                전례 없는 속도와 정확성으로 처리합니다.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl hover:border-purple-300 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-purple-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mt-2">구현 파트너십</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                시장 진입의 실질적 요구사항을 이해하는 법인 변호사, 공인 회계사, 
                세무 전략가, 법무사를 포함한 구현 전문가 네트워크에 직접 접근할 수 있습니다.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-xl shadow-md border border-slate-100 hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-cyan-600 font-bold text-xl">4</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mt-2">전략적 조정 허브</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                마케팅 전략, 인적 자원, 공급망 관리, 정보 기술을 포함한 
                전문 영역에 대해 지능형 전문가 매칭 및 프로젝트 조정 서비스를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-slate-200"></div>
      </div>

      {/* Operational Framework */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider bg-purple-50 px-4 py-2 rounded-full">
                HOW WE WORK
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">핵심 운영 프레임워크</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">4단계 프로세스로 구성된 체계적인 접근 방식</p>
          </div>

          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-3xl font-bold">01</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 pr-20">Phase 1: 지능형 데이터 수집</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-3">GPT 전략 분석</h4>
                  <p className="text-blue-100">
                    시장 트렌드 종합, 경쟁 환경 매핑, 소비자 행동 분석. 
                    시장 역학에 대한 미묘한 통찰력을 제공하여 기회와 잠재적 도전을 식별합니다.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-3">Gemini 정량 엔진</h4>
                  <p className="text-blue-100">
                    정교한 KPI 계산, 재무 모델링, 비즈니스 시나리오 시뮬레이션. 
                    예측 모델 및 리스크 평가 프레임워크를 지원합니다.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-3">Perplexity 실시간 인텔리전스</h4>
                  <p className="text-blue-100">
                    현재 시장 데이터 수집, 업계 뉴스 분석, 신흥 트렌드 식별. 
                    최신 시장 상황과 규제 변경사항을 반영합니다.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-3">Claude 리포트 아키텍처</h4>
                  <p className="text-blue-100">
                    전문적인 내러티브 개발, 경영진 요약 작성, 전략적 권장사항 포맷팅. 
                    분석 결과를 설득력 있는 비즈니스 문서로 전환합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-3xl font-bold">02</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 pr-20">Phase 2: 전략적 성과 지표</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-3">시장 인텔리전스 메트릭</h4>
                  <ul className="space-y-2 text-indigo-100">
                    <li>• TAM/SAM/SOM 분석 및 성장 예측</li>
                    <li>• 시장 침투 전략 및 경쟁 포지셔닝</li>
                    <li>• 고객 전환 최적화</li>
                    <li>• CAC/CLV 균형</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-3">재무 성과 프레임워크</h4>
                  <ul className="space-y-2 text-indigo-100">
                    <li>• ROI 예측 및 민감도 분석</li>
                    <li>• 손익분기점 분석</li>
                    <li>• 수익성 메트릭</li>
                    <li>• 현금 흐름 관리</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-3">성장 및 확장성 지표</h4>
                  <ul className="space-y-2 text-indigo-100">
                    <li>• 매출 성장 분석</li>
                    <li>• ARR/MRR 예측</li>
                    <li>• 고객 참여 메트릭</li>
                    <li>• 코호트 성과 분석</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-3">운영 리스크 평가</h4>
                  <ul className="space-y-2 text-indigo-100">
                    <li>• 공급망 회복력</li>
                    <li>• 운영 효율성 메트릭</li>
                    <li>• 시장 민감도 분석</li>
                    <li>• 인적 자본 평가</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-3xl font-bold">03</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 pr-20">Phase 3: 경영진 리포팅 및 전략 내러티브</h3>
              <p className="text-purple-100 mb-6">
                검증된 컨설팅 방법론을 따르는 포괄적인 비즈니스 인텔리전스 문서 생성
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold mb-2">1</div>
                  <p className="text-purple-100">시장 기회 정의</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold mb-2">2</div>
                  <p className="text-purple-100">포괄적 시장 진단</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <p className="text-purple-100">정량적 평가</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold mb-2">4</div>
                  <p className="text-purple-100">전략적 권장사항</p>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-3xl font-bold">04</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 pr-20">Phase 4: 전문가 네트워크 및 구현 지원</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-3">핵심 전문가 네트워크</h4>
                  <ul className="space-y-2 text-cyan-100">
                    <li>• 법인 법률 자문</li>
                    <li>• 공인 회계사</li>
                    <li>• 세무 전략 고문</li>
                    <li>• 법인 등록 전문가</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-3">확장 전문가 네트워크</h4>
                  <ul className="space-y-2 text-cyan-100">
                    <li>• 성장 마케팅 전략가</li>
                    <li>• 조직 개발 컨설턴트</li>
                    <li>• 공급망 최적화 전문가</li>
                    <li>• 기술 구현 파트너</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-white font-semibold text-sm uppercase tracking-wider bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                OUR IMPACT
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">성과 지표</h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">검증된 결과로 입증되는 플랫폼의 가치</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/15 transition-all border border-white/20">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">48시간</div>
              <div className="text-lg text-white font-semibold mb-1">리서치 완료</div>
              <div className="text-sm text-indigo-300">vs. 수주 (전통적)</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/15 transition-all border border-white/20">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">70%</div>
              <div className="text-lg text-white font-semibold mb-1">비용 절감</div>
              <div className="text-sm text-purple-300">전통 컨설팅 대비</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/15 transition-all border border-white/20">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-indigo-200 to-blue-200 bg-clip-text text-transparent">95%</div>
              <div className="text-lg text-white font-semibold mb-1">고객 만족도</div>
              <div className="text-sm text-blue-300">리서치 정확도</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/15 transition-all border border-white/20">
              <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-200 to-teal-200 bg-clip-text text-transparent">85%</div>
              <div className="text-lg text-white font-semibold mb-1">시장 진입 성공률</div>
              <div className="text-sm text-cyan-300">구현 성공 비율</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Root Inside와 함께 성장하세요</h2>
          <p className="text-xl text-blue-100 mb-8">
            AI 기반 분석과 전문가 네트워크로 귀사의 비즈니스 확장을 성공으로 이끌어드립니다
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/"
              className="bg-white text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
            >
              서비스 살펴보기
            </Link>
            <button 
              onClick={handleContactEmail}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all"
            >
              문의하기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-xl font-bold">Root Inside</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              AI 기반 시장 확장 인텔리전스 플랫폼
            </p>
            <p className="text-slate-400 text-sm">
              contact@rootinsidegroup.com
            </p>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2025 Root Inside. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
