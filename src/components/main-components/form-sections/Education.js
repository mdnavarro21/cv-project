import React from "react";

const Education = ({ handleInputChange, educationState }) => {
  return (
    <section>
      <h1>Education Section</h1>
      <form id="education">
        <input
          type="text"
          name="schoolName"
          onChange={handleInputChange}
          value={educationState.schoolName}
          id="school-name"
          placeholder="School"
        />
        <input
          type="text"
          name="degreeName"
          onChange={handleInputChange}
          value={educationState.degreeName}
          id="degree-name"
          placeholder="Degree Name"
        />
        <input
          type="text"
          name="programName"
          onChange={handleInputChange}
          value={educationState.programName}
          id="program-name"
          placeholder="Program Name"
        />
        <label htmlFor="date-of-study">Graduation Date:</label>
        <input
          type="date"
          name="dateOfStudy"
          onChange={handleInputChange}
          value={educationState.dateOfStudy}
          id="date-of-study"
        />
      </form>
    </section>
  );
};

export default Education;
