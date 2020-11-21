import React, { Component } from 'react'

class Contact extends Component {
    render() {
        const { name, email, phone } = this.props;
        return (
            <div className='card card-body mb-3'>
                <h1 className="card-heading">
                    {name}
                </h1>
                <ul className="list-group">
                    <li className="list-group-item">
                        phone: {phone}
                    </li>
                    <li className="list-group-item">
                        email: {email}
                    </li>
                </ul>

            </div>
        )
    }
}


export default Contact;