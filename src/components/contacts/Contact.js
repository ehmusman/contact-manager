import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
    state = {
        showContactDetail: false
    }
    onDeleteClick = () => {
        this.props.deleteClickHandler();
    }


    render() {
        const { name, email, phone } = this.props.contact;
        const { showContactDetail } = this.state;
        return (
            <div className='card card-body mb-3'>
                <h1 className="card-heading">
                    {name} {" "}
                    <i className="fas fa-sort-down" style={{ cursor: "pointer" }}
                        onClick={() => this.setState({
                            showContactDetail: !this.state.showContactDetail
                        })}
                    >
                    </i>
                    <i className="fas fa-times" style={{ color: 'red', cursor: 'pointer', float: 'right' }}
                        onClick={this.onDeleteClick}
                    ></i>
                </h1>
                {showContactDetail ?
                    (
                        <ul className="list-group">
                            <li className="list-group-item">
                                phone: {phone}
                            </li>
                            <li className="list-group-item">
                                email: {email}
                            </li>
                        </ul>

                    )
                    : null}

            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;