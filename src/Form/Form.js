import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {

    state = {
        name: '',
        gender: 'female',
        age: '',
        notes: '',
    };

    postNewKoala = (event) => {
        event.preventDefault();

        if (this.state.name && this.state.age) {
            console.log('this.state', this.state);
            
            this.props.dispatch({
                type: 'ADD_KOALA',
                payload: {
                    name: this.state.name,
                    gender: this.state.gender,
                    age: this.state.age,
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
                            <select name="gender" onChange={this.handleInputChangeFor('gender')}>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                            </select>
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



const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(Form);
