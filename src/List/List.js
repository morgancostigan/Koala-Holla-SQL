import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {

    componentDidMount() {
        this.getKoalaList();
    }

    getKoalaList() {
        console.log('getKoalaList');
        this.props.dispatch({ type: 'FETCH_KOALAS' })
    }//end getKoalaList

    render() {
        return (
            <div>
                <p> {JSON.stringify(this.props.reduxStore.koalaList)} </p>


            </div>
        )
    }
} 


const mapStateToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStateToProps)(List);
