import React, {Component} from "react";
import '../../styles/Overview.css'
class Overview extends Component {

    render() {
        const { mainState } = this.props;
        const { general, education, experience } = mainState;
        return (
            <div id = 'cv-overview'>
                <section id = 'header'>
                    <h1>{general.firstName} {general.lastName}</h1>
                    <p>{general.email}</p>
                    <p>{general.phoneNo}</p>
                </section>
                <section id = ''>
                    <h3>{education.schoolName}</h3>
                </section>
                <section>
                    <h3>{experience.companyName}</h3>
                </section>
            </div>
        )
    }
}

export default Overview;