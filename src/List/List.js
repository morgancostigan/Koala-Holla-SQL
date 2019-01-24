import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

class List extends Component {

    componentDidMount() {
        this.getKoalaList();
    }

    getKoalaList() {
        console.log('getKoalaList');
        this.props.dispatch({ type: 'FETCH_KOALAS' })
    }//end getKoalaList

    render() {

        let tableContent = this.props.reduxStore.koalaList.map((each) => {
            return (<TableRow key={each.id}>
                <TableCell>{each.name}</TableCell>
                <TableCell>{each.gender}</TableCell>
                <TableCell>{each.age}</TableCell>
                <TableCell>{each.ready_to_transfer}<Button>
                    Yes</Button></TableCell>
                <TableCell><Button>
                    Transfer</Button></TableCell>
                <TableCell>{each.notes}</TableCell>
            </TableRow>);
        })
        
        return (
            <div>
                {/* <p> {JSON.stringify(this.props.reduxStore.koalaList)} </p> */}
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Ready To Transfer</TableCell>
                        <TableCell>Transfer</TableCell>
                        <TableCell>Notes</TableCell>

                    </TableRow>    
                </TableHead> 
                <TableBody>
                    {tableContent}
                </TableBody>


            </div>
        )
    }
} 


const mapStateToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStateToProps)(List);
