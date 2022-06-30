import React, { useState } from "react";
import Form from "./main-components/Form";
import Overview from "./main-components/Overview";
import "../styles/Main.css";

const Main = () => {
  const [mainState, setMainState] = useState({
    general: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
    },

    education: {
      schoolName: "",
      degreeName: "",
      programName: "",
      dateOfStudy: "",
    },

    experience: {
      companyName: "",
      positionTitle: "",
      mainTasks: "",
      startDate: "",
      endDate: "",
    },

    isSubmitted: false,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const section = target.parentNode.id;
    const object = mainState[section];
    let { [name]: _, ...spread } = object;
    setMainState((prevState) => {
      return {
        ...prevState,
        [section]: {
          ...spread,
          [name]: value,
        },
      };
    });
  };

  const onFormSubmit = () => {
    setMainState((prevState) => {
      return {
        ...prevState,
        isSubmitted: true,
      };
    });
  };

  return (
    <main>
      <Form
        handleInputChange={handleInputChange}
        mainState={mainState}
        onFormSubmit={onFormSubmit}
      />
      {mainState.isSubmitted && <Overview mainState={mainState} />}
    </main>
  );
};
/* Class implementation
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
}*/

export default Main;
