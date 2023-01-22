import React, { Component } from 'react';
import Radiobutton from './Radiobutton';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        fetch('https://my-json-server.typicode.com/kajal23-maker/myAPI/users').then((res) =>
            res.json()
        ).then((data) => {
            this.setState({
                data: data
            })
        })
    }

    change = (newdata) => {
        this.setState({
            data: newdata
        })
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Birthdate</th>
                    </tr>
                    {this.state.data.map(i =>
                        <tr>
                            <td>{i.Name}</td>
                            <td>{i.birthdate}</td>
                        </tr>
                    )}
                </table>
                <Radiobutton json={this.state.data} change={this.change}></Radiobutton>
            </div >
        );
    }
}

export default Table;