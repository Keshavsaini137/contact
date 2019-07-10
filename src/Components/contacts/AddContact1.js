import React, { Component } from 'react'

class AddContact1 extends Component {
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    static defaultProps ={
        name: 'Keshav kdvn',
        email: 'frd@gmail.com',
        phone: '8521479963'
    }

    
    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">
                    AddContact
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                plactholder="Enter Name..."
                                defaultValue={name}
                                
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                plactholder="Enter Email..."
                                defaultValue={email}
                                
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="text"
                                name="phone"
                                className="form-control form-control-lg"
                                plactholder="Enter Phone..."
                                defaultValue={phone}
                                
                            />
                        </div>
                        <input 
                            type="submit" 
                            value="Add Contact"
                            className="btn btn-light btn-block"
                        />
                    </form>
                </div>
            </div>
        )
    }
}


export default AddContact1;