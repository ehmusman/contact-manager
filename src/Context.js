import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'usman',
                email: 'usman@gmail.com',
                phone: '1234-345-34'

            },
            {
                id: 2,
                name: 'ehsan',
                email: 'ehsan@gmail.com',
                phone: '1234-345-34'

            },
            {
                id: 3,
                name: 'farooq',
                email: 'farooq@gmail.com',
                phone: '1234-345-34'

            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    };
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;
