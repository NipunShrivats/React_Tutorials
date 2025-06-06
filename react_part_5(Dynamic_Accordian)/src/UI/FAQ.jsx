import React from "react";

export default function FAQ({ curData, onToggle, isActive }) {
  const { id, question, answer } = curData;

  return (
    <>
      <li key={id}>
        <div className="accordion-grid">
          <p>{question}</p>
          <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
            {isActive ? "Close" : "Show"}
          </button>
        </div>
        <p>{isActive && answer}</p>
      </li>
    </>
  );
}
