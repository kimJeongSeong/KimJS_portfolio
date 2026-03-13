import React from 'react'
import { motion } from "framer-motion";
import "./contents.css";

const Tool_sns = () => {
  const tools = [
      { name: "Photoshop", src: "tool_icon/Photoshop.png" },
      { name: "Illustrator", src: "tool_icon/Illustrator.png" },
      { name: "InDesign", src: "tool_icon/Indesgin.png" },
      { name: "React", src: "tool_icon/react.png" },
      { name: "Html5", src: "tool_icon/html.png" },
      { name: "Css3", src: "tool_icon/css.png" },
      { name: "Javascript", src: "tool_icon/javascript.png" },
      { name: "Procreate", src: "tool_icon/procreate.png" },
      { name: "Clipstudio", src: "tool_icon/clipstudio.png" },
      { name: "Figma", src: "tool_icon/figma.png" },
  ];

  return (
    <div className="tool-sns-container">
      {/* SNS 링크 */}
      <div className="sns-section">
        <h3 className="sns-title">CONNECT</h3>
        <div className="sns-buttons">
          <motion.button 
            className="sns-btn github"
            whileHover={{ y: -5 }}
            onClick={() => window.open("https://github.com/kimJeongSeong")}
          >
            GitHub
          </motion.button>

          <motion.button 
            className="sns-btn instagram"
            whileHover={{ y: -5 }}
            onClick={() => window.open("https://instagram.com/kim_sincerity")} 
          >
            Instagram
          </motion.button>

          {/* 노션 버튼 */}
          <motion.button 
            className="sns-btn notion"
            whileHover={{ y: -5 }}
            onClick={() => window.open("https://flat-wakeboard-53d.notion.site/Notion-32226207fef5802394f5c2277d85b571?source=copy_link")} 
          >
            Notion
          </motion.button>
        </div>
      </div>

      {/* 사용 가능 툴 그리드 섹션 */}
      <div className="tool-grid-section">
        <h3 className="tool-title">SKILL & TOOLS</h3>
        <div className="tool-grid">
          {tools.map((tool, index) => (
            <motion.div 
              key={index}
              className="tool-card"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <img src={tool.src} alt={tool.name} />
              <span>{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tool_sns;