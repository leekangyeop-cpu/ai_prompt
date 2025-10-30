'use client';

import { useState } from 'react';

export default function Home() {
  const [showDemo, setShowDemo] = useState(false);
  const [profession, setProfession] = useState('consultant');
  const [task, setTask] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const professions = [
    { key: 'consultant', name: '경영 컨설턴트', category: 'Business Strategy', accuracy: 'medium', risk: 'medium' },
    { key: 'accountant', name: '회계사/세무사', category: 'Finance & Tax', accuracy: 'high', risk: 'high' },
    { key: 'lawyer', name: '변호사', category: 'Legal', accuracy: 'high', risk: 'high' },
    { key: 'marketer', name: '마케터', category: 'Marketing', accuracy: 'medium', risk: 'low' },
    { key: 'developer', name: '개발자', category: 'IT', accuracy: 'high', risk: 'medium' },
    { key: 'designer', name: '디자이너', category: 'Creative', accuracy: 'medium', risk: 'low' },
  ];

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactEmail = () => {
    const subject = encodeURIComponent('Root Inside 프롬프트 자동화 문의');
    const body = encodeURIComponent('안녕하세요,\n\nRoot Inside 프롬프트 자동화 시스템에 대해 문의드립니다.\n\n[문의 내용을 작성해주세요]');
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=consult@rootinsidegroup.com&su=${subject}&body=${body}`, '_blank');
  };

  const handleDemo = async () => {
    if (!task.trim()) {
      alert('업무 내용을 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setAiResponse('');

    try {
      const selectedProf = professions.find(p => p.key === profession);
      const userRequest = `직군: ${selectedProf?.name} (${selectedProf?.category})\n정확도 요구: ${selectedProf?.accuracy} / 리스크: ${selectedProf?.risk}\n\n업무: ${task}`;
      
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userRequest }),
      });

      const data = await response.json();

      if (response.ok) {
        setAiResponse(data.response);
      } else {
        const errorMsg = data.details ? `${data.error}\n상세: ${data.details}` : data.error;
        setAiResponse('오류가 발생했습니다: ' + errorMsg);
      }
    } catch (error) {
      console.error('네트워크 에러:', error);
      setAiResponse('프롬프트 생성 중 오류가 발생했습니다. 네트워크 연결을 확인해주세요.');
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
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#001F3F] rounded-lg flex items-center justify-center p-2">
                <span className="text-white font-serif text-2xl font-bold">RI</span>
              </div>
              <span className="text-2xl font-bold text-slate-900">
                Root Inside
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => handleScrollTo('overview')} className="text-slate-700 hover:text-blue-900 transition-colors font-medium">개요</button>
              <button onClick={() => handleScrollTo('features')} className="text-slate-700 hover:text-blue-900 transition-colors font-medium">핵심 기능</button>
              <button onClick={() => handleScrollTo('professions')} className="text-slate-700 hover:text-blue-900 transition-colors font-medium">지원 직군</button>
              <button onClick={() => handleScrollTo('models')} className="text-slate-700 hover:text-blue-900 transition-colors font-medium">AI 모델</button>
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
          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✅ Google Gemini Free API 기반
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            산업·직무별 맞춤
            <br />
            <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent">
              프롬프트 자동 생성
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            법률·세무·컨설팅·마케팅·개발 등 직군별 업무에 맞춰 맥락화된 고품질 프롬프트를 자동으로 생성합니다
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
            Google Gemini 무료 API로 실제 동작하는 프롬프트 자동화 MVP
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setShowDemo(true)}
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
            >
              프롬프트 생성하기
            </button>
            <button 
              onClick={handleContactEmail}
              className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all"
            >
              문의하기
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">왜 프롬프트 자동화인가?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              매번 프롬프트를 새로 작성하는 시간 낭비를 줄이고,<br />
              직군별 전문성을 반영한 고품질 프롬프트를 즉시 생성합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-2 border-blue-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">시간 절약</h3>
              <p className="text-slate-600">
                매번 프롬프트를 작성하는 대신, 직군과 업무만 선택하면 자동 생성
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl shadow-lg border-2 border-indigo-100">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">정확도 제어</h3>
              <p className="text-slate-600">
                법률·세무·의료 등 고정밀 직군은 보수적 모드로 안전문구 자동 포함
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border-2 border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">프롬프트 자산화</h3>
              <p className="text-slate-600">
                생성된 프롬프트를 저장하고 재사용 가능한 AI Prompt Asset으로 관리
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">핵심 기능</h2>
            <p className="text-xl text-slate-600">직군 특성을 반영한 지능형 프롬프트 생성</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">직군 기반 프롬프트 생성</h3>
                  <p className="text-slate-600">
                    common_tasks, key_requirements, required_accuracy, risk_level을 결합해 도메인 특화 프롬프트 자동 생성
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">정확도/리스크 제어</h3>
                  <p className="text-slate-600">
                    고정밀 직군(법률·의료·회계)은 보수적 모드로 안전문구·근거요청·불확실성 표기 포함
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">프롬프트 자산화</h3>
                  <p className="text-slate-600">
                    생성된 프롬프트를 JSON으로 저장(옵션) → 재사용 가능한 &quot;AI Prompt Asset&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">워크스페이스 연동</h3>
                  <p className="text-slate-600">
                    Docs/Sheets/Apps Script로 내보내기 용도의 정형 텍스트 출력
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professions Section */}
      <section id="professions" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">지원 직군</h2>
            <p className="text-xl text-slate-600">다양한 산업 분야의 전문 프롬프트 제공</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {professions.map((prof) => (
              <div key={prof.key} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-md border-2 border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{prof.name}</h3>
                <p className="text-sm text-slate-600 mb-3">{prof.category}</p>
                <div className="flex gap-2">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    prof.accuracy === 'high' ? 'bg-red-100 text-red-700' : 
                    prof.accuracy === 'medium' ? 'bg-amber-100 text-amber-700' : 
                    'bg-green-100 text-green-700'
                  }`}>
                    정확도: {prof.accuracy}
                  </span>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    prof.risk === 'high' ? 'bg-red-100 text-red-700' : 
                    prof.risk === 'medium' ? 'bg-amber-100 text-amber-700' : 
                    'bg-green-100 text-green-700'
                  }`}>
                    리스크: {prof.risk}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section id="models" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">AI 모델 추천</h2>
            <p className="text-xl text-slate-600 mb-2">용도별 최적화된 AI 모델 가이드</p>
            <p className="text-sm text-slate-500">※ 본 MVP는 Gemini만 호출합니다 (다른 모델은 문서 안내용)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Gemini</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Google Gemini</h3>
                  <p className="text-sm text-green-700">현재 엔진 ✅</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                속도·멀티모달·Google 연동에 최적화
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>✓ 무료 API 제공 (gemini-1.5-flash/pro)</li>
                <li>✓ 빠른 응답 속도</li>
                <li>✓ 이미지·비디오 분석 가능</li>
                <li>✓ Google Workspace 연동 용이</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Claude</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Anthropic Claude</h3>
                  <p className="text-sm text-purple-700">추천 모델 (문서 안내용)</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                정확성·장문 분석에 탁월
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>✓ 높은 정확도와 맥락 이해</li>
                <li>✓ 장문 문서 분석</li>
                <li>✓ 윤리적 가이드라인 준수</li>
                <li>✓ 복잡한 추론 작업</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">GPT-4o</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">OpenAI GPT-4o</h3>
                  <p className="text-sm text-blue-700">추천 모델 (문서 안내용)</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                창의성·카피라이팅에 강점
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>✓ 창의적인 콘텐츠 생성</li>
                <li>✓ 다양한 스타일 구사</li>
                <li>✓ 멀티모달 지원</li>
                <li>✓ 실시간 대화 능력</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-xl shadow-lg border-2 border-amber-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Pplx</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Perplexity</h3>
                  <p className="text-sm text-amber-700">추천 모델 (문서 안내용)</p>
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                실시간 검색·최신 정보에 특화
              </p>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>✓ 실시간 웹 검색 통합</li>
                <li>✓ 최신 정보 제공</li>
                <li>✓ 출처 명시</li>
                <li>✓ 팩트 체크 강화</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">지금 바로 프롬프트를 자동 생성하세요</h2>
          <p className="text-xl text-blue-100 mb-8">
            직군과 업무만 입력하면 전문적인 프롬프트가 자동으로 생성됩니다
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setShowDemo(true)}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all"
            >
              무료로 시작하기
            </button>
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
              <h4 className="font-bold mb-4">서비스</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><button onClick={() => handleScrollTo('overview')} className="hover:text-white transition-colors">개요</button></li>
                <li><button onClick={() => handleScrollTo('features')} className="hover:text-white transition-colors">핵심 기능</button></li>
                <li><button onClick={() => handleScrollTo('professions')} className="hover:text-white transition-colors">지원 직군</button></li>
                <li><button onClick={() => handleScrollTo('models')} className="hover:text-white transition-colors">AI 모델</button></li>
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

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">프롬프트 자동 생성</h3>
                <button 
                  onClick={() => {
                    setShowDemo(false);
                    setTask('');
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
                직군과 업무를 선택하면 맞춤형 프롬프트를 자동으로 생성해드립니다
              </p>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  직군 선택
                </label>
                <select
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none text-slate-900"
                  disabled={isLoading}
                >
                  {professions.map((prof) => (
                    <option key={prof.key} value={prof.key}>
                      {prof.name} ({prof.category})
                    </option>
                  ))}
                </select>
                <div className="mt-2 flex gap-2">
                  {professions.find(p => p.key === profession) && (
                    <>
                      <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                        정확도: {professions.find(p => p.key === profession)?.accuracy}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-700">
                        리스크: {professions.find(p => p.key === profession)?.risk}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  업무 내용
                </label>
                <textarea
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="예: 세무 전략 수립 보고서 초안 작성"
                  className="w-full h-32 px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:outline-none resize-none text-slate-900"
                  disabled={isLoading}
                />
              </div>

              <button
                onClick={handleDemo}
                disabled={isLoading || !task.trim()}
                className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    프롬프트 생성 중...
                  </span>
                ) : (
                  '프롬프트 생성하기'
                )}
              </button>

              {aiResponse && (
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border-2 border-blue-200">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-2 text-lg">생성된 프롬프트</h4>
                      <div className="text-slate-700 whitespace-pre-wrap leading-relaxed text-sm">
                        {aiResponse}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-200 flex gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(aiResponse);
                        alert('프롬프트가 클립보드에 복사되었습니다!');
                      }}
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      복사하기
                    </button>
                    <button
                      onClick={handleContactEmail}
                      className="flex-1 border-2 border-indigo-600 text-indigo-600 px-4 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      문의하기
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
