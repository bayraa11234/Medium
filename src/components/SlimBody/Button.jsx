import React from "react";

export default function Button({ children }) {
  return (
    <div>
      <a className="btn body-btn">{children}</a>
    </div>
  );
}
