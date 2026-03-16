import React from 'react';
import './SubPage.css';

const Sub3About: React.FC = () => {
  return (
    <div className="sub-page">
      <div className="sub-hero">
        <div className="container">
          <h1>소개 및 안내</h1>
          <p>현대택배 황선행 기사의 약속과 철학을 소개합니다.</p>
        </div>
      </div>

      <div className="container sub-content">
        <section className="detail-section">
          <h2>🤝 인사말</h2>
          <div className="about-intro">
            <p>
              안녕하십니까, 롯데택배 황선행입니다. <br /><br />
              저는 택배를 단순히 물건을 옮기는 일이 아닌, 고객님의 소중한 마음과 비즈니스의 가치를 전달하는 일이라 생각합니다. 
              빠른 배송도 중요하지만, 무엇보다 '안전'과 '신뢰'가 바탕이 되어야 한다는 것이 저의 철학입니다. <br /><br />
              지역 소상공인 여러분의 든든한 물류 파트너로서, 
              항상 친절하고 정확한 서비스로 보답하겠습니다.
            </p>
          </div>
        </section>

        <section className="detail-section">
          <h2>🎖️ 경력 및 전문성</h2>
          <div className="career-grid">
            <div className="career-item">
              <h4>무사고 배송</h4>
              <p>수년간 단 한 건의 큰 사고 없이 안전하게 물품을 전달해왔습니다.</p>
            </div>
            <div className="career-item">
              <h4>지역 밀착형 서비스</h4>
              <p>해당 지역의 골목 하나하나까지 숙지하여 최적의 경로로 배송합니다.</p>
            </div>
            <div className="career-item">
              <h4>롯데택배 인증</h4>
              <p>롯데택배의 체계적인 시스템을 그대로 활용하는 정식 파트너입니다.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sub3About;
