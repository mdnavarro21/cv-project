import React, {Component} from "react";
import Education from "./form-sections/Education";
import General from "./form-sections/General";
import Experience from './form-sections/Experience'
import '../../styles/Form.css'
class Form extends Component {

    render() {
        const { handleInputChange, mainState, onFormSubmit } = this.props;
        return (
            <div id = 'cv-form-container'>
                <General onChange = {handleInputChange} generalState = {mainState.general}/>
                <Education onChange = {handleInputChange} educationState = {mainState.education}/>
                <Experience onChange = {handleInputChange} experienceState = {mainState.experience}/>
                <button type = 'submit' onClick = {onFormSubmit}>Submit</button>
            </div>
        )
    }
}

export default Form;