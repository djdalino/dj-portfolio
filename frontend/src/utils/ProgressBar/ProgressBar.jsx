import React from "react";
import "./ProgressBar.css";
const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      let windowHeight = window.scrollY;
      if (windowHeight > 450) {
        setTimeout(() => {
          const newStyle = {
            opacity: 1,
            width: `${done}%`,
          };

          setStyle(newStyle);
        }, 200);
      }
    });
  }, [done]);
  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
};

export default Progress;
