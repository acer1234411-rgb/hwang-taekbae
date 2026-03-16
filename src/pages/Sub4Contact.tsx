import React from 'react';
import './SubPage.css';

const Sub4Contact: React.FC = () => {
  return (
    <div className="sub-page">
      <div className="sub-hero">
        <div className="container">
          <h1>문의 및 지원</h1>
          <p>언제든 편하게 연락 주시면 친절히 상담해 드리겠습니다.</p>
        </div>
      </div>

      <div className="container sub-content">
        <div className="contact-layout">
          <section className="contact-info-section">
            <h2>📞 직통 연락처</h2>
            <div className="contact-methods">
              <a href="tel:010-3833-8164" className="contact-method-card">
                <div className="icon">📞</div>
                <div>
                  <h4>전화 상담</h4>
                  <p>010-3833-8164</p>
                </div>
              </a>
              <div className="contact-method-card">
                <div className="icon">💬</div>
                <div>
                  <h4>카카오톡</h4>
                  <p>ID: hwang_delivery</p>
                </div>
              </div>
              <div className="contact-method-card">
                <div className="icon">📍</div>
                <div>
                  <h4>서비스 지역</h4>
                  <p>지역명 (상세 서비스 가능 구역 안내)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="faq-section">
            <h2>🙋 자주 묻는 질문</h2>
            <div className="faq-item">
              <h4>Q. 정기 픽업은 최소 물량이 있어야 하나요?</h4>
              <p>A. 아니오, 물량이 적더라도 정기적인 배송이 필요하신 경우 언제든 협의 가능합니다.</p>
            </div>
            <div className="faq-item">
              <h4>Q. 당일 특송은 언제까지 접수해야 하나요?</h4>
              <p>A. 오전 10시 이전 접수 건에 한하여 당일 배송을 원칙으로 하고 있습니다.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sub4Contact;
