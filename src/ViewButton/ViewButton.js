import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class ViewButton extends Component {
    handleClick = () => {
        if (this.props.inputView) {
            this.props.dispatch({ type: 'SET_LIST' });
        } else {
            this.props.dispatch({ type: 'SET_INPUT' });
        }
    }
    render() {
        const { inputView } = this.props;
        const buttonText = inputView ? 'Show List' : 'Add Koala';
        return (
            <div>
                <Button
                    onClick={this.handleClick}
                >{buttonText}
                </Button>
            </div>
        );
    }
} 

const mapStateToProps = ({ inputView }) => ({ inputView });

export default connect(mapStateToProps)(ViewButton);
