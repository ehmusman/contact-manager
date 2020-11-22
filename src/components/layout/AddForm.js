import React, { Component } from 'react'
import { Consumer } from '../../Context'
import uuid from 'uuid'

class AddForm extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        if (name !== '' && email !== '' && phone !== '') {
            const newContact = {
                id: uuid(),
                name,
                email,
                phone
            }
            dispatch({
                type: 'ADD_CONTACT',
                payload: newContact
            })
            this.setState({
                name: '',
                email: '',
                phone: ''
            })
        }
        else {
            alert("please fill all fields")
        }
    }
    render() {
        const { name, email, phone } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <h1 className="card-header h2">Add Contact</h1>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name" className="h4">Name</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg mb-2"
                                            placeholder="Enter Name..."
                                            name="name"
                                            value={name}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="h4">Email</label>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg mb-2"
                                            placeholder="Enter Email..."
                                            name="email"
                                            value={email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone" className="h4">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg mb-2"
                                            placeholder="Enter phone..."
                                            name="phone"
                                            value={phone}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <input type="submit"
                                        className="btn btn-primary btn-block py-2"
                                        value="Submit"
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddForm;