import React from "react";

const UnderConstruction: React.FC = () => {

  return (<div className="container">
      <div className="content">
        <h1 className="title">
          <span role="img" aria-label="construction">
            🚧
          </span>{" "}
          Under Construction{" "}
          <span role="img" aria-label="construction">
            🚧
          </span>
        </h1>
        <p className="subtitle">
          We’re building something amazing! Stay tuned.
        </p>
        <div className="glow-button">
          <button onClick={() => alert('Thank you for visiting!')}>Notify Me</button>
        </div>
      </div>
    </div>)
};

export default UnderConstruction;