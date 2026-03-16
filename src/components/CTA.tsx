import React from 'react';
import './CTA.css';
import { useNavigate } from 'react-router-dom';

const CTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card animate-fade-in">
          <h2>지금 바로 스마트한 <br />배송 파트너를 만나보세요</h2>
          <p>전화 한 통, 메시지 한 번으로 간편하게 시작할 수 있습니다.</p>
          <div className="cta-actions">
            <button className="btn-cta-white" onClick={() => navigate('/contact')}>배송 문의하기</button>
            <a href="tel:010-3833-8164" className="cta-tel">010-3833-8164</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
