import React, { Component } from 'react'
import Form from './main-components/Form'
import Overview from './main-components/Overview'


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
                dateOfStudy: '',                
            },

            experience: {
                companyName: '',
                positionTitle: '',
                mainTasks: '',
                startDate: '',
                endDate: '',
            }
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const section = target.parentNode.parentNode.id;
        const object = this.state[section];
        let {[name]: _, ...spread} = object
        this.setState({
            [section]: {
                ...spread,
                [name]: value,
            }
        });
    }

    render() {
        return (
            <main>
                <h2>Main Section</h2>
                <Form handleInputChange = {this.handleInputChange} mainState = {this.state}/>
                <Overview />
            </main>
        )
    }
}

export default Main