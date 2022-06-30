import React from "react";

const General = ({ handleInputChange, generalState }) => {
  return (
    <section>
      <h1>General Information</h1>
      <form id="general">
        <input
          type="text"
          name="firstName"
          onChange={handleInputChange}
          value={generalState.firstName}
          id="first-name"
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          onChange={handleInputChange}
          value={generalState.lastName}
          id="last-name"
          placeholder="Last Name"
        />
        <input
          type="text"
          name="email"
          onChange={handleInputChange}
          value={generalState.email}
          id="email"
          placeholder="Email Address"
        />

        <input
          type="tel"
          id="phoneNo"
          name="phoneNo"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          placeholder="Phone Number"
          onChange={handleInputChange}
          value={generalState.phoneNo}
        />
      </form>
    </section>
  );
};

export default General;
