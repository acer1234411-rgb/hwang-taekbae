import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: "소상공인 정기 픽업",
      desc: "매장이나 사무실로 직접 찾아가는 편리한 정기 배송 서비스",
      img: "https://loremflickr.com/600/400/delivery,box"
    },
    {
      title: "긴급 당일 특송",
      desc: "수도권 지역 내 가장 빠르고 정확한 당일 배송 솔루션",
      img: "https://loremflickr.com/600/400/fast,truck"
    },
    {
      title: "기업 맞춤 물류",
      desc: "대량 물량 처리를 위한 효율적인 물류 시스템 및 전담 관리",
      img: "https://loremflickr.com/600/400/logistics,warehouse"
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <h2>맞춤형 배송 서비스</h2>
          <p>고객님의 상황에 딱 맞는 최적의 배송 방식을 제안합니다.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-item animate-fade-in">
              <div className="service-img">
                <img src={s.img} alt={s.title} />
              </div>
              <div className="service-info">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <button className="btn-text">자세히 보기 &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
