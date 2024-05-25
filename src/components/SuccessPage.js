import React from "react";
import "./Form.css";

const SuccessPage = ({ formData }) => {
  return (
    <div className="success-container">
      <h2>Success!</h2>
      <p>Details submitted:</p>
      <div className="card">
        <ul>
          {Object.entries(formData).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SuccessPage;
