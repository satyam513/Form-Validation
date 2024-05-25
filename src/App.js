import React, { useState } from "react";
import Form from "./components/Form";
import SuccessPage from "./components/SuccessPage";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data) => {
    setFormData(data);
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <SuccessPage formData={formData} />
      )}
    </div>
  );
};

export default App;
