import React, {Component} from "react";

class General extends Component {

    render() {
        const { onChange, generalState } = this.props;
        return (
            <section>
                <h1>General Information</h1>
                <form id = 'general'>
                    <input
                        type = 'text'
                        name = 'firstName'
                        onChange = { onChange }
                        value = { generalState.firstName }
                        id = 'first-name'
                        placeholder="First Name"
                    />
                    <input
                        type = 'text'
                        name = 'lastName'
                        onChange = { onChange }
                        value = { generalState.lastName }
                        id = 'last-name'
                        placeholder="Last Name"
                    />
                    <input
                        type = 'text'
                        name = 'email'
                        onChange = { onChange }
                        value = { generalState.email }
                        id = 'email'
                        placeholder="Email Address"
                    />

                    <input 
                        type="tel" 
                        id="phoneNo" 
                        name="phoneNo" 
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        placeholder="Phone Number"
                        onChange = { onChange }
                        value = { generalState.phoneNo }
                    />
                </form>
            </section>
        )
    }
}

export default General;