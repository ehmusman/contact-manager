import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
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
        ]
    }
    render() {
        const { contacts } = this.state;
        return (
            <div>
                {contacts.map(contact =>
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                )}
            </div>
        )
    }
}

export default Contacts;