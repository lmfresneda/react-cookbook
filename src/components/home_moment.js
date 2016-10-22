import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

class HomeMoment extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked: this.props.checked ? true : false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.onMomentClick(this.props.moment, event.target.checked);
    }
    render() {
        return (
            <div className="col one-half cookbook-checkbox">
                <input type="radio"
                       name="cookbook-checkbox-moment"
                       id={ "cookbook-day-" + this.props.moment }
                       defaultChecked={ this.state.checked }
                       onChange={ this.handleChange }/>
                <label htmlFor={ "cookbook-day-" + this.props.moment }>
                    { this.props.momentName }
                </label>
            </div>
        );
    }
}

export default HomeMoment;