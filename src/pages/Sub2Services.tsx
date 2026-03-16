import React from 'react';
import './SubPage.css';

const Sub2Services: React.FC = () => {
  const steps = [
    { title: "문의/접수", desc: "카톡이나 전화로 수거 요청" },
    { title: "방문/수거", desc: "기사가 직접 방문하여 물품 확인" },
    { title: "접수/분류", desc: "현대택배 터미널 입고 및 목적지 분류" },
    { title: "터미널 이동", desc: "지역 간선 차량을 통한 이동" },
    { title: "배송완료", desc: "최종 목적지 고객에게 안전 배송" }
  ];

  return (
    <div className="sub-page">
      <div className="sub-hero">
        <div className="container">
          <h1>기능 및 서비스</h1>
          <p>지역 소상공인을 위한 최적화된 물류 통합 솔루션</p>
        </div>
      </div>

      <div className="container sub-content">
        <section className="detail-section">
          <h2>🏢 소상공인 전용 혜택</h2>
          <div className="benefit-grid">
            <div className="benefit-card">
              <h3>고정 시간 픽업</h3>
              <p>바쁜 영업 시간 중에도 걱정 마세요. 협의된 고정 시간에 매일 방문합니다.</p>
            </div>
            <div className="benefit-card">
              <h3>물량 비례 할인</h3>
              <p>물량이 많아질수록 배송 단가는 낮아집니다. 성장을 함께하는 파트너가 되겠습니다.</p>
            </div>
            <div className="benefit-card">
              <h3>간편 정산 시스템</h3>
              <p>주간/월간 단위의 투명한 정산과 세금계산서 발행으로 관리가 편해집니다.</p>
            </div>
          </div>
        </section>

        <section className="detail-section">
          <h2>🔄 배송 프로세스</h2>
          <div className="process-flow">
            {steps.map((step, i) => (
              <div key={i} className="process-step">
                <div className="step-num">{i + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sub2Services;
