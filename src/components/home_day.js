import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

class HomeDay extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked: this.props.checked
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.onDayClick(this.props.day, event.target.checked);
    }
    render()
    {
        return (
            <div className="col one-seventh cookbook-checkbox">
                <input type="radio"
                       name="cookbook-checkbox-day"
                       id={ "cookbook-day-" + this.props.day }
                       defaultChecked={ this.state.checked }
                       onChange={ this.handleChange }/>
                <label htmlFor={ "cookbook-day-" + this.props.day }>
                    { this.props.dayName }
                </label>
            </div>
        );
    }
}

export default HomeDay;