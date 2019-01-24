import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {

    state = {
        name: '',
        gender: '',
        age: '',
        ready_to_transfer: '',
        notes: '',
    };

    postNewKoala = (event) => {
        event.preventDefault();

        if (this.state.name && this.state.style && this.state.release && this.state.description) {
            this.props.dispatch({
                type: 'ADD_KOALA',
                payload: {
                    name: this.state.name,
                    gender: this.state.gender,
                    age: this.state.age,
                    ready_to_transfer: this.state.ready_to_transfer,
                    notes: this.state.notes,
                },
            })
        } else {
            // this.props.dispatch({ type: 'ADD_KOALA_ERROR' });
            console.log('complete all fields');
            
        }
    } // end postNewKoala


    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <form className='AddKoalaForm' onSubmit={this.postNewKoala}>
                    <h1>Add New Koala</h1>
                    <div>
                        <label htmlFor="name">
                            Koala Name:
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChangeFor('name')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="gender">
                            Gender
                            {/* ///////fix this */}
                            <div>
                                <input type="radio" id="female" name="gender" value="female" 
                                    onChange={this.handleInputChangeFor('gender')}
                                    checked />
                                    <label for="Female">Female</label>
                            </div>
                            <div>
                                <input type="radio" id="male" name="gender" value="male" 
                                onChange={this.handleInputChangeFor('gender')} />
                                    <label for="Male">Male</label>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="age">
                            Age
                            <input
                                type="number"
                                name="age"
                                value={this.state.age}
                                onChange={this.handleInputChangeFor('age')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="ready_to_transfer">
                            Ready To Transfer
                            <input
                                type="boolean"
                                name="ready_to_transfer"
                                value={this.state.ready_to_transfer}
                                onChange={this.handleInputChangeFor('ready_to_transfer')}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="notes">
                            Notes
                            <input
                                type="text"
                                name="notes"
                                value={this.state.notes}
                                onChange={this.handleInputChangeFor('notes')}
                            />
                        </label>
                    </div>
                    <div>
                        <input
                            className="SubmitNewKoala"
                            type="submit"
                            name="submit"
                            value="Submit New Koala"
                        />
                    </div>
                </form>
            </div>
        )
    }
} 



export default Form;
