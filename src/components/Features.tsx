import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      title: "정기 픽업 솔루션",
      desc: "소상공인을 위한 매일 정기적인 픽업 서비스로 비즈니스의 효율을 높여드립니다.",
      icon: "🚚"
    },
    {
      title: "긴급 특송 서비스",
      desc: "급한 물건도 문제없이! 지역 내 가장 빠른 특송 서비스를 경험해보세요.",
      icon: "⚡"
    },
    {
      title: "투명한 단가 체계",
      desc: "수량과 무게에 따른 합리적이고 투명한 배송 단가를 약속드립니다.",
      icon: "⚖️"
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2>왜 황선행 기사인가요?</h2>
          <p>현대택배의 전문 시스템과 기사의 책임감이 만났습니다.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card animate-fade-in">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
