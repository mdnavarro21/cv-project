import React, {Component} from "react";

class Experience extends Component {
    render() {
        const { onChange, experienceState } = this.props;
        return (
            <section>
                <h1>Experience</h1>
                <form id = 'experience'>
                    <input
                        type = 'text'
                        name = 'companyName'
                        onChange = { onChange }
                        value = { experienceState.companyName }
                        id = 'company-name'
                        placeholder="Company Name"
                    />
                    <input
                        type = 'text'
                        name = 'positionTitle'
                        onChange = { onChange }
                        value = { experienceState.positionTitle }
                        id = 'position-title'
                        placeholder="Position Title"
                    />
                    <label htmlFor="main-tasks">Main Tasks:</label>
                    <textarea 
                        id="main-tasks" 
                        name="mainTasks" 
                        onChange = {onChange} 
                        value = {experienceState.mainTasks} 
                        rows="5" 
                        cols="33">
                    </textarea>
                    <label htmlFor="start-date">Start Date:</label>
                    <input
                        type = 'date'
                        name = 'startDate'
                        onChange = { onChange }
                        value = { experienceState.startDate }
                        id = 'start-date'
                    />
                    <label htmlFor="end-date">End Date:</label>
                    <input
                        type = 'date'
                        name = 'endDate'
                        onChange = { onChange }
                        value = { experienceState.endDate }
                        id = 'end-date'
                    />
                </form>
            </section>
        )
    }
}

export default Experience;