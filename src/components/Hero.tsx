import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <h1 className="hero-title">
            안전하고 정확한 <br />
            <span className="highlight">맞춤형 배송</span> 파트너
          </h1>
          <p className="hero-subtitle">
            정기 물량부터 긴급 특송까지, 롯데택배 황선행 기사가 <br />
            책임지고 신속하게 배송해 드립니다.
          </p>
          <div className="hero-btns">
            <button className="btn-cta" onClick={() => navigate('/contact')}>지금 바로 배송 문의하기</button>
            <button className="btn-secondary-outline" onClick={() => navigate('/services')}>서비스 더보기</button>
          </div>
        </div>
        <div className="hero-image animate-fade-in">
          <img src="https://loremflickr.com/800/600/delivery,truck" alt="Hyundai Express Delivery" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
