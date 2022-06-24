import React, {Component} from "react";

class Education extends Component {

    render() {
        const { onChange, educationState } = this.props;
        return (
            <form id = 'education'>
                <label htmlFor="school-name">School Name:
                    <input
                        type = 'text'
                        name = 'schoolName'
                        onChange = { onChange }
                        value = { educationState.schoolName }
                        id = 'school-name'
                    />
                </label>
                <label htmlFor="degree-name">Degree Name: 
                    <input
                        type = 'text'
                        name = 'degreeName'
                        onChange = { onChange }
                        value = { educationState.degreeName }
                        id = 'degree-name'
                    />
                </label>
                <label htmlFor="program-name">Program Name: 
                    <input
                        type = 'text'
                        name = 'programName'
                        onChange = { onChange }
                        value = { educationState.programName }
                        id = 'program-name'
                    />
                </label>

                <label htmlFor="date-of-study">Date of Study:
                    <input
                        type = 'date'
                        name = 'dateOfStudy'
                        onChange = { onChange }
                        value = { educationState.dateOfStudy }
                        id = 'date-of-study'
                    />
                </label>

            </form>
        )
    }
}

export default Education;