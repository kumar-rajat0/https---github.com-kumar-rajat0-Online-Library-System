import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The URL you entered does not exist:</p>

      <p style={{ color: "red", fontWeight: "bold" }}>
        {location.pathname}
      </p>

      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
