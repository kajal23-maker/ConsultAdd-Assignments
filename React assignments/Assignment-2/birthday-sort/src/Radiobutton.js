import React, { Component } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

class Radiobutton extends Component {

    constructor(props) {
        super(props);
    }
    sortName = () => {
        this.props.json.sort((a, b) => a.Name.localeCompare(b.Name));
        this.props.change(this.props.json);
    }
    sortAge = () => {
        this.props.json.sort((a, b) => a.birthdate.localeCompare(b.birthdate));
        this.props.change(this.props.json);
    }
    render() {
        return (
            <div className='btn'>
                <input type="radio" name="table" id="name" onClick={this.sortName} />
                <label for="name">Sort by Name</label>
                <input type="radio" name="table" id="birthdate" onClick={this.sortAge} />
                <label for="birthdate">Sort by Birthdate</label>
            </div>
        );
    }
}

export default Radiobutton;