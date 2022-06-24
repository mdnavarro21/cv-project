import React, {Component} from "react";

class Experience extends Component {
    render() {
        const { onChange, experienceState } = this.props;
        return (
            <form id = 'experience'>
                <label htmlFor="company-name">Company Name: 
                    <input
                        type = 'text'
                        name = 'companyName'
                        onChange = { onChange }
                        value = { experienceState.companyName }
                        id = 'company-name'
                    />
                </label>
                <label htmlFor="position-title">Position Title: 
                    <input
                        type = 'text'
                        name = 'positionTitle'
                        onChange = { onChange }
                        value = { experienceState.positionTitle }
                        id = 'position-title'
                    />
                </label>
                <label htmlFor="main-tasks">Main Tasks: 
                    <input
                        type = 'textarea'
                        name = 'mainTasks'
                        onChange = { onChange }
                        value = { experienceState.mainTasks }
                        id = 'main-tasks'
                    />
                </label>
                <label htmlFor="main-tasks">Main Tasks: 
                    <input
                        type = 'textarea'
                        name = 'mainTasks'
                        onChange = { onChange }
                        value = { experienceState.mainTasks }
                        id = 'main-tasks'
                    />
                </label>
                <label htmlFor="start-date">Start Date: 
                    <input
                        type = 'date'
                        name = 'startDate'
                        onChange = { onChange }
                        value = { experienceState.startDate }
                        id = 'start-date'
                    />
                </label>
                <label htmlFor="end-date">End Date: 
                    <input
                        type = 'date'
                        name = 'endDate'
                        onChange = { onChange }
                        value = { experienceState.endDate }
                        id = 'end-date'
                    />
                </label>
            </form>
        )
    }
}

export default Experience;