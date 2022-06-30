import React from "react";
import Education from "./form-sections/Education";
import General from "./form-sections/General";
import Experience from "./form-sections/Experience";
import "../../styles/Form.css";

const Form = ({ handleInputChange, mainState, onFormSubmit }) => {
  return (
    <div id="cv-form-container">
      <General
        handleInputChange={handleInputChange}
        generalState={mainState.general}
      />
      <Education
        handleInputChange={handleInputChange}
        educationState={mainState.education}
      />
      <Experience
        handleInputChange={handleInputChange}
        experienceState={mainState.experience}
      />
      <button type="submit" onClick={onFormSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Form;
