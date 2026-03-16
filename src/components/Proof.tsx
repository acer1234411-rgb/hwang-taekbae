import React from 'react';
import './Proof.css';

const Proof: React.FC = () => {
  return (
    <section className="proof">
      <div className="container proof-content">
        <div className="proof-image">
          <img src="https://loremflickr.com/800/600/partnership,handshake" alt="Trust" />
        </div>
        <div className="proof-text animate-fade-in">
          <span className="badge">신뢰의 배송</span>
          <h2>현대택배의 시스템과 <br />황선행의 진심</h2>
          <p>
            단순한 배송을 넘어 비즈니스의 성공까지 생각합니다. 
            수년간 쌓아온 무사고 경력과 지역 내 높은 신뢰도를 바탕으로 
            여러분의 물품을 가장 소중하게 다룹니다.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h4>99.9%</h4>
              <p>배송 정확도</p>
            </div>
            <div className="stat-item">
              <h4>5,000+</h4>
              <p>누적 배송 건수</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>고객 만족도</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
