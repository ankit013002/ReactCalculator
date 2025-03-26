import { useState, useRef, useEffect } from "react";
import "./screen.css";

const Screen = (props) => {
  const [fontSize, setFontSize] = useState(16);

  const workingTextRef = useRef();

  useEffect(() => {
    const container = workingTextRef.current?.parentElement;
    const text = workingTextRef.current;
    if (!text || !container) return;

    let newFontSize = fontSize;
    text.style.fontSize = `${newFontSize}px`;

    while (text.scrollWidth > container.clientWidth && newFontSize > 10) {
      setFontSize(fontSize - 1);
      text.style.fontSize = `${newFontSize}px`;
    }

    setFontSize(newFontSize);
  }, [props.workingScreen]);

  return (
    <div className="main-screen-container">
      <div className="main-screen">
        <div className="set-state">{props.computedScreen}</div>
        <div className="working-state">
          <div className="update-value-state">{props.updatingValue}</div>
          <div
            className="working-value-state"
            ref={workingTextRef}
            style={{ fontSize: `${fontSize}px` }}
          >
            {props.workingScreen}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
