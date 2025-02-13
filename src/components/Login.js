import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [inputs, setInputs] = useState({ date: "", name: "", word: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const correctAnswers = {
    date: "2024-10-10",
    name: "남산타워",
    word: "040917"
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputs.date === correctAnswers.date &&
      inputs.name.toLowerCase() === correctAnswers.name.toLowerCase() &&
      inputs.word.toLowerCase() === correctAnswers.word.toLowerCase()
    ) {
      onLogin();
      navigate("/memories");
    } else {
      setError("🥺😭 Try again baby 💖");
    }
  };

  return (
    <div className="login-container">
      <div className="hearts">
        <span className="heart">💖</span>
        <span className="heart">💖</span>
        <span className="heart">💖</span>
        <span className="heart">💖</span>
        <span className="heart">💖</span>
        <span className="heart">💖</span>
        <span className="heart">💖</span>
        <span className="heart">💖</span>
        <span className="heart">💖</span>
        <span className="heart">💖</span>
      </div>
      {error && <p className="error-message">{error}</p>}

      <div className="heart-top">
      <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTBiNzI5NmdrcWVqODk1enZqdTJkYWtmd3JiMXNmd2llenFobGlpYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TllKZTFPTcZvq/giphy.gif"
            alt="Cute Love GIF"
            className="proposal-gif"
          />
      </div>
      <div className="heart-down">
      <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDJzcDhndnpzcjNneXhka3p0aWRremV0MHFoYnVidjh3dmN0c3BoeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bt8FwKXiNKRkQ/giphy.gif"
            alt="Cute Love GIF"
            className="proposal-gift"
          />
      </div>

      <motion.h1 
        className="welcome-text"
        animate={{ scale: 1.1 }} 
        transition={{ repeat: Infinity, duration: 2 }}>
        Welcome my baby 💕
      </motion.h1>

      <form onSubmit={handleSubmit} className="input-container">

        <div className="input-wrapper">
          <label className={inputs.date ? "floating-label active" : "floating-label"}>
            Enter our anniversary date? 💘
          </label>
          <input type="date" name="date" value={inputs.date} onChange={handleChange} required />
        </div>

        <input type ="text" name="name" onChange={handleChange} placeHolder = "첫 데이트 장소" required/>

        <input type="text" name="word" onChange={handleChange} placeholder="슌이 생일 6자리" required />

        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Enter 💖
        </motion.button>
      </form>
    </div>
  );
};

export default Login;
