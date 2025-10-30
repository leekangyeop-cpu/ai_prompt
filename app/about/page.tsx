'use client';

import Link from 'next/link';

export default function About() {
  const handleContactEmail = () => {
    const subject = encodeURIComponent('Root Inside 프롬프트 자동화 문의');
    const body = encodeURIComponent('안녕하세요,\n\nRoot Inside 프롬프트 자동화 시스템에 대해 문의드립니다.\n\n[문의 내용을 작성해주세요]');
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=consult@rootinsidegroup.com&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#001F3F] rounded-lg flex items-center justify-center p-2">
                <span className="text-white font-serif text-2xl font-bold">RI</span>
              </div>
              <span className="text-2xl font-bold text-slate-900">
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
            <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              AI Prompt Automation MVP
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Root Inside
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 mb-8">
              산업·직무별 맞춤 프롬프트 자동 생성 시스템
            </p>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              법률·세무·컨설팅·마케팅·개발 등 직군별 업무에 맞춰 database.json을 읽고,
              맥락화된 고품질 프롬프트를 자동으로 생성합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">우리의 미션</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                매번 프롬프트를 새로 작성하는 시간 낭비를 줄이고, 
                직군별 전문성을 반영한 고품질 프롬프트를 자동으로 생성하여 
                모든 사용자가 AI를 효과적으로 활용할 수 있도록 돕습니다.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">우리의 비전</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                프롬프트를 자산화하여 재사용 가능한 AI Prompt Asset을 구축하고, 
                모든 산업 분야에서 AI 활용을 표준화하여 
                업무 생산성을 혁신적으로 향상시킵니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">기술 스택</h2>
            <p className="text-xl text-slate-600">현대적이고 안정적인 기술로 구축</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Google Gemini</h3>
                <p className="text-sm text-slate-600">무료 API 기반 AI 엔진</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-black to-slate-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">▲</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Next.js</h3>
                <p className="text-sm text-slate-600">React 기반 풀스택 프레임워크</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">TS</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">TypeScript</h3>
                <p className="text-sm text-slate-600">타입 안정성 보장</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">TW</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Tailwind CSS</h3>
                <p className="text-sm text-slate-600">유틸리티 기반 스타일링</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">핵심 원칙</h2>
            <p className="text-xl text-slate-600">안전하고 효과적인 프롬프트 생성</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">정확성 우선</h3>
              <p className="text-slate-600">
                법률·세무·의료 등 고위험 직군은 보수적 모드로 안전문구 자동 포함
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">환각 방지</h3>
              <p className="text-slate-600">
                불확실성 명시, 근거 요청, 전문가 확인 권고 등 체계적인 검증 프로세스
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">재사용성</h3>
              <p className="text-slate-600">
                생성된 프롬프트를 저장하고 조직 내에서 공유 가능한 자산으로 관리
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">주요 기능</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🧩 직군 기반 프롬프트 생성</h3>
              <p className="text-slate-600 leading-relaxed">
                database.json의 common_tasks, key_requirements, required_accuracy, risk_level을 결합해 
                도메인 특화 프롬프트를 자동으로 생성합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🔒 정확도/리스크 제어</h3>
              <p className="text-slate-600 leading-relaxed">
                고정밀 직군(법률·의료·회계)은 보수적 모드로 안전문구·근거요청·불확실성 표기를 자동으로 포함합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">📚 프롬프트 자산화</h3>
              <p className="text-slate-600 leading-relaxed">
                생성된 프롬프트를 JSON으로 저장하여 재사용 가능한 "AI Prompt Asset"으로 관리할 수 있습니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">🔁 워크스페이스 연동</h3>
              <p className="text-slate-600 leading-relaxed">
                Google Docs, Sheets, Apps Script 등으로 내보내기 가능한 정형 텍스트를 출력합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">지금 바로 시작하세요</h2>
          <p className="text-xl text-blue-100 mb-8">
            직군과 업무만 입력하면 전문적인 프롬프트가 자동으로 생성됩니다
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all inline-block"
            >
              프롬프트 생성하기
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
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#001F3F] rounded-lg flex items-center justify-center">
                  <span className="text-white font-serif text-base font-bold">RI</span>
                </div>
                <span className="text-xl font-bold">Root Inside</span>
              </div>
              <p className="text-slate-400 text-sm">
                AI 프롬프트 자동화 시스템
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">제품</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">프롬프트 생성</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">회사 소개</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">기술</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Google Gemini API</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">연락처</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>consult@rootinsidegroup.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2025 Root Inside Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
