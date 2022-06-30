import React from "react";
import "../../styles/Overview.css";
const Overview = ({ mainState }) => {
  const { general, education, experience } = mainState;
  return (
    <div id="cv-overview">
      <section id="header">
        <h1>
          {general.firstName} {general.lastName}
        </h1>
        <p>{general.email}</p>
        <p>{general.phoneNo}</p>
      </section>
      <section id="">
        <h3>{education.schoolName}</h3>
        <h4>{education.degreeName}</h4>
        <h4>{education.programName}</h4>
        <h4>{education.dateOfStudy}</h4>
      </section>
      <section>
        <h3>{experience.companyName}</h3>
        <h4>{experience.positionTitle}</h4>
        <p>{experience.mainTasks}</p>
        <h4>{experience.startDate}</h4>
        <h4>{experience.endDate}</h4>
      </section>
    </div>
  );
};

export default Overview;
