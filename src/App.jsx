import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll, useTransform, useSpring } from "framer-motion";
import Name from "./contents/Name";
import About from "./contents/About";
import Work from "./contents/Work";
import Contact from "./contents/Contact";
import Tool_sns from "./contents/Tool_sns";

import "./App.css";

// (별, 별자리) 
const tinyStars = Array.from({ length: 300 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 0.4 + 0.2,
  delay: Math.random() * 5,
  duration: 2 + Math.random() * 3,
}));

const capricornStars = [
  { id: 1, x: 10, y: 40, size: 2.5 },
  { id: 2, x: 20, y: 42, size: 1.8 },
  { id: 3, x: 35, y: 43, size: 2.2 },
  { id: 4, x: 50, y: 45, size: 2.0 },
  { id: 5, x: 85, y: 35, size: 1.5 },
  { id: 6, x: 90, y: 22, size: 2.8 },
  { id: 7, x: 80, y: 50, size: 2.2 },
  { id: 8, x: 65, y: 75, size: 1.5 },
  { id: 9, x: 58, y: 82, size: 2.5 },
  { id: 10, x: 30, y: 62, size: 2.2 },
];

const constellationPath =
  "10,40 20,42 35,43 50,45 85,35 90,22 80,50 65,75 58,82 30,62 10,40";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false); 
  const [navStyle, setNavStyle] = useState({
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#ffffff",
  });

  const [starOpacity, setStarOpacity] = useState(1);
  const [currentBg, setCurrentBg] = useState("#000000");

  const handleEnter = () => {
    setIsPageLoading(true); // 로딩 화면 시작

    setTimeout(() => {
      setIsActive(true);

      setTimeout(() => {
        setIsPageLoading(false);
      }, 1000);
    }, 480);
  };

  // 페이지 스크롤 진행도
  const { scrollYProgress } = useScroll();

  const seaY = useTransform(scrollYProgress, [0.7, 1], [0, -100]);

  const smoothSeaY = useSpring(seaY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (!isActive) {
      document.body.style.backgroundColor = "#000000"; 
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / (maxScroll || 1);

      let thumbColor = "#333333"; // 기본값 (상단)

      if (scrollPercent < 0.15) {
        setNavStyle({
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "#ffffff",
        });
        setStarOpacity(1);
        setCurrentBg("#000000");
        thumbColor = "#333333";
      } else if (scrollPercent < 0.4) {
        setNavStyle({ backgroundColor: "#1A467F", color: "#ffffff" });
        setStarOpacity(0.3);
        setCurrentBg("#050c1a");
        thumbColor = "#1A467F";
      } else if (scrollPercent < 0.59) {
        setNavStyle({ backgroundColor: "#1eacdb", color: "#ffffff" });
        setStarOpacity(0.05);
        setCurrentBg("#1eacdb");
        thumbColor = "#1eacdb";
      } else if (scrollPercent < 0.95) {
        setNavStyle({ backgroundColor: "#0a4be5", color: "#ffffff" });
        setStarOpacity(0.05);
        setCurrentBg("#0a4be5");
        thumbColor = "#0a4be5";
      } else {
        setNavStyle({
          backgroundColor: "rgba(221, 203, 177, 0.95)",
          color: "#333333",
        });
        setStarOpacity(0);
        setCurrentBg("#ddcbb1");
        thumbColor = "#ddcbb1";
      }

      document.body.style.backgroundColor = currentBg;
      document.body.style.transition = "background-color 1.5s ease";

      let styleTag = document.getElementById("dynamic-scrollbar");
      if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "dynamic-scrollbar";
        document.head.appendChild(styleTag);
      }

      styleTag.innerHTML = `
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: transparent !important; /* 이제 진짜 투명하게 비침! */
        }
        ::-webkit-scrollbar-thumb {
          background-color: ${thumbColor} !important;
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
      `;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isActive]);

  const menuItems = [
    { id: "About", label: "About" },
    { id: "Work", label: "Work" },
    { id: "Contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    if (id === "top" || id === "Name") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      const offset = 72;
      window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
    }
  };

  const transparentBg = { backgroundColor: "transparent" };

  return (
    <div
      className="app-container"
      style={{
        backgroundColor: currentBg,
        transition: "background-color 1s ease",
        minHeight: "100vh",
      }}
    >
      {/* 블랙 전환 로딩 화면 */}
      <AnimatePresence>
        {isPageLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundColor: "#000000",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{
                color: "white",
                letterSpacing: "8px",
                fontSize: "40px",
                fontWeight: "600",
              }}
            >
              LOADING...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 배경 고정 별 */}
      <div
        className="background-stars-fixed-layer"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: 0,
          opacity: starOpacity,
          transition: "opacity 2s ease",
          pointerEvents: "none",
        }}
      >
        <svg
          className="stars-svg-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          style={{ width: "100%", height: "100%" }}
        >
          {tinyStars.map((star) => (
            <motion.path
              key={star.id}
              d={`M ${star.x} ${star.y - star.size} 
                  L ${star.x + star.size * 0.05} ${star.y - star.size * 0.05} 
                  L ${star.x + star.size * 0.4} ${star.y} 
                  L ${star.x + star.size * 0.05} ${star.y + star.size * 0.05} 
                  L ${star.x} ${star.y + star.size} 
                  L ${star.x - star.size * 0.05} ${star.y + star.size * 0.05} 
                  L ${star.x - star.size * 0.4} ${star.y} 
                  L ${star.x - star.size * 0.05} ${star.y - star.size * 0.05} Z`}
              fill="white"
              animate={{ opacity: [0.1, 0.7, 0.1], scale: [0.9, 1.1, 0.9] }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}
        </svg>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{
              y: 0,
              backgroundColor: navStyle.backgroundColor,
            }}
            transition={{
              y: { delay: 0.5, duration: 0.5 },
              backgroundColor: { duration: 0.8, ease: "easeInOut" },
            }}
            style={{ zIndex: 1000 }}
          >
            <Name isLogo={true} onLogoClick={() => scrollToSection("top")} />
            <div className="nav-links">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  className="nav-item"
                  animate={{ color: navStyle.color }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isActive ? (
          /* ---------------- 로딩/인트로 화면 ---------------- */
          <motion.header
            key="intro"
            className="intro-view"
            onClick={handleEnter} 
            exit={{
              opacity: 0,
              filter: "blur(20px)",
              transition: { duration: 1 },
            }}
            style={{
              backgroundColor: "#000000",
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="intro-top-layout">
              <motion.div
                className="top-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2 }}
              />
              <img
                src="SVG/상단왼쪽.svg"
                alt=""
                className="top-svg top-left"
              />
              <motion.img
                src="SVG/상단별.svg"
                alt=""
                className="top-svg top-center"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <img
                src="SVG/상단오른쪽.svg"
                alt=""
                className="top-svg top-right"
              />
            </div>

            <div
              className="intro-main-content"
              style={{
                position: "relative",
                width: "100%",
                textAlign: "center",
              }}
            >
              <img
                src="SVG/뒷배경이미지.svg"
                alt=""
                className="bg-static-svg"
              />
              <motion.img
                src="SVG/뒷배경타원.svg"
                className="bg-ellipse-svg"
                style={{ x: "-50%", y: "-50%" }}
                animate={{ rotateX: [0, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              <motion.svg
                viewBox="0 0 100 100"
                className="capricorn-svg"
                style={{ x: "-50%", y: "-50%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
              >
                <motion.polyline
                  points={constellationPath}
                  fill="none"
                  stroke="white"
                  strokeWidth="0.2"
                />
                {capricornStars.map((star) => (
                  <circle
                    key={star.id}
                    cx={star.x}
                    cy={star.y}
                    r={star.size / 3}
                    fill="white"
                  />
                ))}
              </motion.svg>

              <div className="intro-title-area">
                {/* 왼쪽 이미지 */}
                <motion.img
                  src="SVG/왼쪽이미지.svg"
                  className="title-svg title-deco-left"
                  initial={{ opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }}
                  animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{
                    duration: 2,
                    delay: 0.8,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                />

                {/* 중앙 타이틀 */}
                <motion.img
                  src="SVG/title.svg"
                  alt="Title"
                  className="title-svg-main"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                />

                {/* 오른쪽 이미지 */}
                <motion.img
                  src="SVG/오른쪽이미지.svg"
                  className="title-svg title-deco-right"
                  initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
                  animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{
                    duration: 2,
                    delay: 0.8,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                />
              </div>
            </div>

            <motion.p
              className="enter-text"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {" "}
              CLICK TO ENTER{" "}
            </motion.p>
          </motion.header>
        ) : (

          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ position: "relative", zIndex: 1 }}
          >
            <div style={transparentBg}>
              <Name id="Name" isLogo={false} />
            </div>
            <div style={transparentBg}>
              <About id="About" />
            </div>
            <div style={transparentBg}>
              <Tool_sns id="Tool_sns" />
            </div>
            <div style={transparentBg}>
              <Work id="Work" />
            </div>

            <motion.div
              className="mid-image-section"
              style={{ position: "relative", zIndex: 2 }}
            >
              <motion.div
                className="sea_bac"
                style={{
                  y: smoothSeaY, 
                }}
              />
              <motion.img
                src="contact_object.png"
                alt="Bottle"
                className="contact-bottle"
                initial={{ y: -150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                style={{ zIndex: 999 }}
              />
            </motion.div>

            <Contact id="Contact" />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
