import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header glass">
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="brand-primary">현대택배</span>
          <span className="brand-secondary">황선행</span>
        </Link>
        <nav className="nav">
          <ul>
            <li><Link to="/details">상세 정보</Link></li>
            <li><Link to="/services">기능/서비스</Link></li>
            <li><Link to="/about">소개/안내</Link></li>
            <li><Link to="/contact">문의/지원</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="btn-small-cta" onClick={() => navigate('/contact')}>문의하기</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
