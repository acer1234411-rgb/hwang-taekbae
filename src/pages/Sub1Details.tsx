import React from 'react';
import './SubPage.css';

const Sub1Details: React.FC = () => {
  return (
    <div className="sub-page">
      <div className="sub-hero">
        <div className="container">
          <h1>배송 상세 정보</h1>
          <p>투명한 단가와 정확한 규격 안내로 신뢰를 더합니다.</p>
        </div>
      </div>
      
      <div className="container sub-content">
        <section className="detail-section">
          <h2>📦 배송 단가표</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>규격 (세 변의 합)</th>
                  <th>무게</th>
                  <th>단가 (기본)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>극소</td>
                  <td>60cm 이하</td>
                  <td>2kg 이하</td>
                  <td>3,000원</td>
                </tr>
                <tr>
                  <td>소형</td>
                  <td>80cm 이하</td>
                  <td>5kg 이하</td>
                  <td>3,500원</td>
                </tr>
                <tr>
                  <td>중형</td>
                  <td>120cm 이하</td>
                  <td>15kg 이하</td>
                  <td>4,500원</td>
                </tr>
                <tr>
                  <td>대형</td>
                  <td>160cm 이하</td>
                  <td>25kg 이하</td>
                  <td>6,000원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note">* 정기 배송 및 대량 물량의 경우 별도 협의를 통해 단가 조정이 가능합니다.</p>
        </section>

        <section className="detail-section">
          <h2>🚫 취급 제한 품목</h2>
          <ul className="limit-list">
            <li>현금화 가능 물품 (현금, 유가증권, 귀금속 등)</li>
            <li>변질 우려 물품 (생선, 육류 등 신선식품 중 포장 불량건)</li>
            <li>위험물 (인화성 물질, 가스통 등)</li>
            <li>유리 제품 등 파손 위험이 극히 높은 물품</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Sub1Details;
