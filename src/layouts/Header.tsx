import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header glass">
      <div className="container header-content">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="brand-primary">롯데택배</span>
          <span className="brand-secondary">황선행</span>
        </Link>
        <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/details" onClick={closeMenu}>상세 정보</Link></li>
            <li><Link to="/services" onClick={closeMenu}>기능/서비스</Link></li>
            <li><Link to="/about" onClick={closeMenu}>소개/안내</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>문의/지원</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="btn-small-cta" onClick={() => { navigate('/contact'); closeMenu(); }}>문의하기</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
