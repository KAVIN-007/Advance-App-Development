import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const VerifyButton = ({ buttonText, buttonStyle, onClick }) => {
  const [locked, setLocked] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const handleClick = () => {
    onClick();
    setLocked(true);
    setRemainingTime(15); // Set initial remaining time
  };

  useEffect(() => {
    let timer = null;

    if (locked) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime > 1) {
            return prevTime - 1;
          } else {
            setLocked(false);
            clearInterval(timer);
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [locked]);

  return (
    <button
      onClick={handleClick}
      disabled={locked}
      className={`${buttonStyle} ${locked ? "text-red-500" : "text-green-500"}`}
    >
      <span>
        {buttonText} {remainingTime > 0 && `(${remainingTime})`}
      </span>
    </button>
  );
};

// PropTypes validation
VerifyButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VerifyButton;
