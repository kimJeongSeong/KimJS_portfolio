import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import './contents.css';

const Work = () => {
  const projects = [
    { 
      id: 1, 
      title: "Weather App",
      tag: "[디자인·퍼블리싱·반응형]" , 
      tech: "React / HTML / CSS / Procreate / Photoshop / Illustrator ", 
      img: "/Thumbnail_img_01.png", 
      desc: "실시간 데이터를 100% 수작업 픽셀 아트로 재해석한 독창적인 인터랙티브 룸입니다. 창밖 풍경을 방 안으로 들여온 듯한 몰입감을 선사합니다.",
      github: "https://github.com/kimJeongSeong/Weather_project",
      site: "https://kimjeongseong.github.io/Weather_project/",
      notion: "https://flat-wakeboard-53d.notion.site/31f26207fef580408abffbf0f882639f" // 기획서 링크 추가
    },
    { 
      id: 2, 
      title: "Constellation Portfolio", 
      tag: "[디자인·퍼블리싱·반응형]" , 
      tech: "React / Framer Motion / GSAP", 
      img: "/work2.png", 
      desc: "염소자리 성도를 모티브로 한 드래그 기반의 인터랙티브 포트폴리오입니다.",
      github: "https://github.com/KimJeongSeong/star-portfolio",
      site: "#",
      notion: "#" 
    },
    { 
      id: 3, 
      title: "Character Storybook", 
      tag: "[디자인·퍼블리싱·반응형]" , 
      tech: "Illustration / Design", 
      img: "/work3.png", 
      desc: "보건소 협업 프로젝트로 진행된 어린이 건강 교육용 캐릭터 동화책입니다.",
      github: "https://github.com/KimJeongSeong/storybook-project",
      site: "#",
      notion: "#"
    },
  ];

  const constraintsRef = useRef(null);
  const dragX = useMotionValue(0);

  const handleCardClick = (url) => {
    if (Math.abs(dragX.get()) < 5) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleButtonClick = (e, url) => {
    e.stopPropagation(); 
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="Work" className="work-section">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="work-container"
      >
        <h2 className="section-title">WORK</h2>
        <div className="accent-line"></div>

        <div className="carousel-wrapper" ref={constraintsRef}>
          <motion.div 
            drag="x" 
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            style={{ x: dragX }}
            whileTap={{ cursor: "grabbing" }}
            className="inner-carousel"
          >
            {projects.map((project) => (
              <div key={project.id} className="work-item">
                <div 
                  className="work-card"
                  onClick={() => handleCardClick(project.site)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="work-image-wrapper">
                    <img src={project.img} alt={project.title} draggable="false" />
                  </div>

                  <div className="work-info">
                    <h3>{project.title}</h3>
                    <p className="work-tag">{project.tag}</p>
                    <span className="tech-tag">{project.tech}</span>
                    <p className="work-desc">{project.desc}</p>
                    
                    <div className="btn-group">
                      {/* 사이트 버튼 */}
                      <button 
                        type="button"
                        onClick={(e) => handleButtonClick(e, project.site)} 
                        className="action-btn site-btn"
                      >
                        <span>SITE</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </button>

                      {/* 깃허브 버튼 */}
                      <button 
                        type="button"
                        onClick={(e) => handleButtonClick(e, project.github)} 
                        className="action-btn github-btn"
                      >
                        <span>GITHUB</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </button>

                      {/* 노션 기획서 버튼 */}
                      <button 
                        type="button"
                        onClick={(e) => handleButtonClick(e, project.notion)} 
                        className="action-btn notion-btn"
                      >
                        <span>NOTION</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;