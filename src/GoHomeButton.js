import React from "react";
import { useNavigate } from "react-router-dom";

function GoHomeButton() {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate("/")}>
      Go Home
    </button>
  );
}

export default GoHomeButton;
