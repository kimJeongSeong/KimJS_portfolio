import React from "react";
import { motion } from "framer-motion";
import "./contents.css";

const About = () => {
  return (
    <section id="About" className="content-section about-container">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">ABOUT</h2>
        <div className="accent-line"></div>

        <div className="about-main-layout">
          <div className="about-top-section">
            <div className="about-profile-image">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Kim JeongSeong"
              />
            </div>

            <div className="about-text-wrapper">
              <p className="intro-main">
                사라질 유성이 아닌,
                <br />
                <strong>본질의 중력을 설계하는 별</strong>
              </p>
              <p className="intro-sub">
                하늘의 별이 바다의 온도를 만나 불가사리가 되듯, <br />
                저는 차가운 코드 위에 디자인이라는 온기를 불어넣어 살아 숨 쉬는
                경험을 만듭니다. <br />
                <br />
                SBS 아카데미에서 웹 퍼블리싱의 단단한 기초를 다지며 기술의
                언어를 배웠고, 단순히 화면을 구성하는 것을 넘어 손끝에서
                피어나는 픽셀 드로잉으로 저만의 고유한 이야기를 시각화하는
                과정에 진심을 담았습니다. <br />
                <br />
                <strong>
                  광활한 우주의 신비로움부터 깊은 바다의 고요함까지, <br />
                  제가 가진 색채의 온도로 사용자에게 잊지 못할 찰나를 선물하고
                  싶습니다.
                </strong>
              </p>
            </div>
          </div>

          <div className="about-info-grid">
            <div className="info-item">
              <span>INFO</span>
              <p>
                <strong>Name</strong> 김 정성
              </p>
              <p>
                <strong>Birth date</strong> 2000.01.18
              </p>
              <p>
                <strong>E-mail</strong> kimjs000118@gmail.com
              </p>
              <p>
                <strong>Call Me</strong> +82 10 4202 9122
              </p>
            </div>
            <div className="info-item">
              <span>EDUCATION</span>
              <p>
                <strong>2026.</strong> SBS컴퓨터아카데미(산대특)
              </p>
              <p>
                <strong>2022.</strong> 계명대 식품영양학과 졸업
              </p>
            </div>
            <div className="info-item">
              <span>CERTIFICATE</span>
              <p>Adobe Photoshop </p>
              <p>Adobe Illustrator</p>
              <p>Adobe InDesign</p>
              <p>컴퓨터그래픽기능사</p>
              <p>웹디자인개발기능사(필기)</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
