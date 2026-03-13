import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./contents.css";

const Artwork = ({ id }) => {
  const totalItems = 10;

  const artItems = Array.from({ length: totalItems }, (_, i) => i + 1);

  const [selectedImg, setSelectedImg] = useState(null);
  const scrollRef = useRef(null);

  const closeModal = () => setSelectedImg(null);

  return (
    <section id={id} className="content-section artwork-section">
      <h2 className="section-title">ARTWORK</h2>
      <div className="accent-line"></div>

      <div className="artwork-drag-wrapper" ref={scrollRef}>
        <motion.div
          className="artwork-gallery"
          drag="x"
          dragConstraints={scrollRef}
          whileTap={{ cursor: "grabbing" }}
        >
          {artItems.map((num) => {
            const imgNumber = String(num).padStart(2, "0");
            const imgSrc = `${import.meta.env.BASE_URL}artwork_${imgNumber}.png`;

            return (
              <motion.div
                key={num}
                className="artwork-item"
                onClick={() => setSelectedImg(imgSrc)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="artwork-thumb">
                  <img
                    src={imgSrc}
                    alt={`artwork-${imgNumber}`}
                    draggable="false"
                  />
                  <div className="artwork-overlay">
                    <span className="view-text">VIEW</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="artwork-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={closeModal}
                aria-label="닫기"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <img src={selectedImg} alt="Original Artwork" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Artwork;
