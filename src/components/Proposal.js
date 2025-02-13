import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Proposal.css";

const Proposal = () => {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState([]); 

  const moveNoButton = () => {
    const speedFactor = 2;
    setNoPosition({
      x: (Math.random() * 300 - 150) * speedFactor,
      y: (Math.random() * 300 - 150) * speedFactor
    });
  };

  useEffect(() => {
    if (accepted) {
      const interval = setInterval(() => {
        setHearts((prevHearts) => [
          ...prevHearts,
          {
            id: Math.random(),
            x: Math.random() * window.innerWidth, 
            size: Math.random() * 40 + 10, 
            duration: Math.random() * 3 + 2 
          }
        ]);
      }, 500);

      return () => clearInterval(interval);
    }
  }, [accepted]);

  return (
    <div className="proposal-container">
      {accepted ? (
        <>
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDVlMHQ0ZGt4cWs5bzY5dm5qcWN6N3Z6M2lndW4zdGozaGh0N2ZpbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/udiIFmPkJQzkI/giphy.gif"
            alt="Cute Love GIF"
            className="proposal-gif"
          />
          <h1>Yay! I Love You Forever! 💍❤️ 너무 너무 사랑해 우리 애기💞</h1>

          {/* Floating hearts animation */}
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              className="floating-heart"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -window.innerHeight }}
              transition={{ duration: heart.duration, ease: "easeOut" }}
              style={{
                left: heart.x,
                fontSize: heart.size
              }}
            >
              💖
            </motion.div>
          ))}
        </>
      ) : (
        <>
          <h1>Can you be my soulmate forever? 💕</h1>
          <motion.button whileHover={{ scale: 1.1 }} onClick={() => setAccepted(true)}>
            Yes 💖
          </motion.button>
          <motion.button
            onHoverStart={moveNoButton}
            animate={{ x: noPosition.x, y: noPosition.y }}
          >
            No 😭
          </motion.button>
        </>
      )}
    </div>
  );
};

export default Proposal;
