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
                            <div>
                                <input type="radio" id="huey" name="drone" value="huey"
                                    checked />
                                    <label for="huey">Huey</label>
                            </div>

                                <div>
                                    <input type="radio" id="dewey" name="drone" value="dewey" />
                                        <label for="dewey">Dewey</label>
                            </div>
                            <input
                                type="text"
                                name="gender"
                                value={this.state.gender}
                                onChange={this.handleInputChangeFor('gender')}
                            />
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
