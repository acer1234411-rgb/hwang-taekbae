import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>현대택배 황선행</h3>
          <p>지역 소상공인과 함께하는 최고의 배송 파트너</p>
          <div className="contact-details">
            <span><strong>전화:</strong> 010-3833-8164</span>
            <span><strong>카카오톡:</strong> @hwang_delivery</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 현대택배 황선행. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
