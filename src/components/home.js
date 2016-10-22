import React, { Component, PropTypes } from 'react';
import { withRouter, Link } from 'react-router';
import HomeDay from './home_day';
import HomeMoment from './home_moment';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            day: 0,
            moment: ""
        }
        console.log(this.props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleMomentClick = this.handleMomentClick.bind(this);
        this.handleViewRecipesClick = this.handleViewRecipesClick.bind(this);
    }

    handleMomentClick(moment, checked){
        this.setState({
            moment: checked ? moment : ""
        });
    }

    handleDayClick(day, checked){
        this.setState({
            day: checked ? day : 0
        });
    }

    handleViewRecipesClick(e){
        e.preventDefault();
        if(this.state.moment && this.state.day > 0){
            this.props.router.push(`recipes/${this.state.day}/${this.state.moment}`);
        }else{
            alert("Indica momento y día");
        }
    }

    render(){
        const days = {
            1: "Lunes",
            2: "Martes",
            3: "Miércoles",
            4: "Jueves",
            5: "Viernes",
            6: "Sábado",
            7: "Domingo"
        };
        const moments = {
            "food": "Comida",
            "dinner": "Cena"
        };
        let momentsElems = [];
        Object.keys(moments).forEach((keyMoment) => {
            momentsElems.push(<HomeMoment moment={ keyMoment }
                                          momentName={ moments[keyMoment] }
                                          checked={ this.state.moment === keyMoment }
                                          onMomentClick={ this.handleMomentClick }
                                          key={ keyMoment }/>)
        });
        let daysElems = [];
        Object.keys(days).map((keyDay) => {
            daysElems.push(<HomeDay day={ keyDay >>> 0 }
                                    dayName={ days[keyDay] }
                                    checked={ this.state.day === keyDay }
                                    onDayClick={ this.handleDayClick }
                                    key={ keyDay }/>);
        });
        return (
            <div className="cookbook-home col one-whole">
                <h1>Elija momento y día</h1>
                <div className="cookbook-checkbox-moments col two-thirds">
                    { momentsElems }
                </div>
                <div className="cookbook-checkbox-days col four-fifths">
                    { daysElems }
                </div>

                <div className="cookbook-checkbox-button col one-whole">
                    <Link to="/recipes/all">Ver todo</Link><small> - o - </small>
                    <a href="#" onClick={ this.handleViewRecipesClick }>
                        Ver seleccionado &gt;&gt;
                    </a>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);
