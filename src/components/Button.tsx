import React, { useEffect, useState } from "react";
import "../App.css";

interface Props {
  onClick: () => void;
  children: string;
}

function Button({ onClick, children }: Props) {
  return (
    <button type="button" className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
