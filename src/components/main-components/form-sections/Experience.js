import React from "react";

const Experience = ({ handleInputChange, experienceState }) => {
  return (
    <section>
      <h1>Experience</h1>
      <form id="experience">
        <input
          type="text"
          name="companyName"
          onChange={handleInputChange}
          value={experienceState.companyName}
          id="company-name"
          placeholder="Company Name"
        />
        <input
          type="text"
          name="positionTitle"
          onChange={handleInputChange}
          value={experienceState.positionTitle}
          id="position-title"
          placeholder="Position Title"
        />
        <label htmlFor="main-tasks">Main Tasks:</label>
        <textarea
          id="main-tasks"
          name="mainTasks"
          onChange={handleInputChange}
          value={experienceState.mainTasks}
          rows="5"
          cols="33"
        ></textarea>
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          name="startDate"
          onChange={handleInputChange}
          value={experienceState.startDate}
          id="start-date"
        />
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          name="endDate"
          onChange={handleInputChange}
          value={experienceState.endDate}
          id="end-date"
        />
      </form>
    </section>
  );
};

export default Experience;
