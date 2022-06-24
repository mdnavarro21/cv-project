import React, { Component } from 'react'
import Form from './main-components/Form'
import Overview from './main-components/Overview'
import '../styles/Main.css';

class Main extends Component {
    constructor(){
        super()

        this.state = {
            general: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNo: '',                
            },
            
            education: {
                schoolName: '',
                degreeName: '',
                programName: '',
                dateOfStudy: ''             
            },

            experience: {
                companyName: '',
                positionTitle: '',
                mainTasks: '',
                startDate: '',
                endDate: '',
            },

            isSubmitted: false,
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const section = target.parentNode.id;
        const object = this.state[section];
        let {[name]: _, ...spread} = object
        this.setState({
            [section]: {
                ...spread,
                [name]: value,
            }
        });
    };

    onFormSubmit = () => {
        this.setState({
            isSubmitted: true
        })
    }

    render() {
        return (
            <main>
                <Form handleInputChange = {this.handleInputChange} mainState = {this.state} onFormSubmit = {this.onFormSubmit}/>
                {this.state.isSubmitted && <Overview mainState = {this.state}/>}
            </main>
        )
    }
}

export default Main