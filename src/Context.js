import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component{
    state = {
        contacts: [
            {
              id: "1",
              name: "keshav",
              email: "keshav@gmail.com",
              phone: "5874569874"
            },
            {
              id: "2",
              name: "sonu",
              email: "sonu@gmail.com",
              phone: "7412589632"
            },
            {
              id: "3",
              name: "raju",
              email: "raju@gmail.com",
              phone: "9874563214"
            }
        ]
    };
    
    render() {
        return(
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer = Context.Consumer;
