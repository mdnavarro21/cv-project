import React, {Component} from "react";

class General extends Component {

    render() {
        const { onChange, generalState } = this.props;
        return (
            <form id = 'general'>
                <label htmlFor="first-name">First Name:
                    <input
                        type = 'text'
                        name = 'firstName'
                        onChange = { onChange }
                        value = { generalState.firstName }
                        id = 'first-name'
                    />
                </label>
                <label htmlFor="last-name">Last Name: 
                    <input
                        type = 'text'
                        name = 'lastName'
                        onChange = { onChange }
                        value = { generalState.lastName }
                        id = 'last-name'
                    />
                </label>
                <label htmlFor="email">Email: 
                    <input
                        type = 'text'
                        name = 'email'
                        onChange = { onChange }
                        value = { generalState.email }
                        id = 'email'
                    />
                </label>
                <label htmlFor="phoneNo">Phone Number:
                    <input
                        type = 'text'
                        name = 'phoneNo'
                        onChange = { onChange }
                        value = { generalState.phoneNo }
                        id = 'phoneNo'
                    />
                </label>

            </form>
        )
    }
}

export default General;