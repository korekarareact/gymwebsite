import React from 'react';
import NavLink from '../NavLink'

var ToggleBtn = React.createClass({
    getInitialState: function() {
        return {
            switch: false
            };
    },
    onClick: function() {
        this.setState({switch: !this.state.switch});
    },
    handleClick: function() {
        this.setState({switch: !this.state.switch});
    },
    render: function() {
        var variant;
        if(this.state.switch){
            variant = 'toggle-btn-item on';
        } else {
            variant = 'toggle-btn-item off';
        }
        const togglebtn = (
            <div>
                <input type="button" className="toggle-btn" onClick={this.onClick} value="選單">
                </input>
                <ul role="nav">
                    <li className={variant}><NavLink to="/about" onClick={this.handleClick}>About Us</NavLink></li>
                    <li className={variant}><NavLink to="/gym" onClick={this.handleClick}>健身房</NavLink></li>
                    <li className={variant}><NavLink to="/coach" onClick={this.handleClick}>私人教練</NavLink></li>
                    <li className={variant}><NavLink to="/secondhand" onClick={this.handleClick}>二手買賣</NavLink></li>
                </ul>
            </div>);
        return (
            <div>{togglebtn}</div>
        );
    }
});

module.exports = ToggleBtn;