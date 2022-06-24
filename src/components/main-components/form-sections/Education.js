import React, {Component} from "react";

class Education extends Component {

    render() {
        const { onChange, educationState } = this.props;
        return (
            <section>
                <h1>Education Section</h1>
                <form id = 'education'>
                    <input
                        type = 'text'
                        name = 'schoolName'
                        onChange = { onChange }
                        value = { educationState.schoolName }
                        id = 'school-name'
                        placeholder="School"
                    />
                    <input
                        type = 'text'
                        name = 'degreeName'
                        onChange = { onChange }
                        value = { educationState.degreeName }
                        id = 'degree-name'
                        placeholder="Degree Name"
                    />
                    <input
                        type = 'text'
                        name = 'programName'
                        onChange = { onChange }
                        value = { educationState.programName }
                        id = 'program-name'
                        placeholder="Program Name"
                    />
                    <label htmlFor="date-of-study">Date of Study:</label>
                    <input
                            type = 'date'
                            name = 'dateOfStudy'
                            onChange = { onChange }
                            value = { educationState.dateOfStudy }
                            id = 'date-of-study'
                        />
                </form>
            </section>
        )
    }
}

export default Education;