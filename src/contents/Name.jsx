import React from 'react';
import { motion } from 'framer-motion';
import './contents.css';

const Name = ({ isLogo, onLogoClick, id }) => {
  const capricornStars = [
    { id: 1, x: 10, y: 40, size: 2.5, target: 'Name', label: 'Home' }, // 최상단
    { id: 2, x: 20, y: 42, size: 1.8 }, 
    { id: 3, x: 35, y: 43, size: 2.2 },
    { id: 4, x: 50, y: 45, size: 2.0, target: 'About', label: 'About' }, // About
    { id: 5, x: 85, y: 35, size: 1.5 },
    { id: 6, x: 90, y: 22, size: 2.8, target: 'Work', label: 'Work' }, // Work
   { id: 7, x: 80, y: 50, size: 2.2,  }, 
    { id: 8, x: 65, y: 75, size: 1.5 },
    { id: 9, x: 58, y: 82, size: 2.5, target: 'Contact', label: 'Contact' }, // Contact
    { id: 10, x: 30, y: 62, size: 2.2 },
  ];

  const constellationPath = "10,40 20,42 35,43 50,45 85,35 90,22 80,50 65,75 58,82 30,62 10,40";

  const handleStarClick = (targetId) => {
    if (!targetId) return;
    if (targetId === 'Name') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.getElementById(targetId);
      if (target) {
        const offset = 72;
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  if (isLogo) {
    return (
      <button className="nav-logo" onClick={onLogoClick}>
        KIM JEONGSEONG
      </button>
    );
  }

  return (
    <section id={id} className="content-section name-section">
      {/* 배경 별자리 SVG 레이어 */}
      <div className="name-background-svg top-aligned">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMin meet">
          {/* 별자리 연결 선 */}
          <motion.polyline
            points={constellationPath}
            fill="none"
            stroke="rgba(255, 255, 255, 0.34)"
            strokeWidth="0.3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          {/* 개별 별자리 및 버튼 그룹 */}
          {capricornStars.map((star) => (
  <motion.g 
    key={star.id}
    className={star.target ? "clickable-star-group" : ""}
    onClick={() => handleStarClick(star.target)}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.circle
      cx={star.x}
      cy={star.y}
      r={star.target ? star.size / 1.5 : star.size / 4} 
      fill="white"
      className="constellation-star"
      animate={star.target ? {
        opacity: [0.7, 1, 0.7],
        scale: [1, 1.2, 1],
        /* 버튼 별 효과*/
        filter: ["drop-shadow(0 0 1px #fff)", "drop-shadow(0 0 3px #fff)", "drop-shadow(0 0 1px #fff)"]
      } : {
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{
        duration: star.target ? 2 : 4,
        repeat: Infinity,
        delay: Math.random() * 2
      }}
    />
    
    {star.label && (
      <text 
        x={star.x} 
        y={star.y - 6 } 
        textAnchor="middle" 
        className="star-label permanent-show"
      >
        {star.label}
      </text>
    )}
  </motion.g>
))}
        </svg>
      </div>

      <motion.div 
        className="name-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="big-name">KIM<br/>JEONG<br/>SEONG</h1>
        <h2>우주의 질서와 바다의 유연함으로 웹의 생태계를 설계합니다.</h2><br/>
        <p className="sub-title">UI Designer & Web Publisher</p>
      </motion.div>
    </section>
  );
};

export default Name;