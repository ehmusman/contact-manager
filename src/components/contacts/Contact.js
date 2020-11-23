import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../../Context'

class Contact extends Component {
    state = {
        showContactDetail: false
    }
    onDeleteClick = (id, dispatch) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        })
    }


    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactDetail } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='card card-body mb-3'>

                            <h1 className="card-heading h3">
                                {name} {" "}
                                <i className="fa fa-sort-down" style={{ cursor: "pointer" }}
                                    onClick={() => this.setState({
                                        showContactDetail: !this.state.showContactDetail
                                    })}
                                >
                                </i>
                                <i className="fa fa-times" style={{ color: 'red', cursor: 'pointer', float: 'right' }}
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
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
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;