import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return (
            <div>
                <h2>私人教練</h2>
                <ul>
                    <li className="sub-navbar"><NavLink to="/coach/Tom">湯姆教練</NavLink></li>
                    <li className="sub-navbar"><NavLink to="/coach/Andy">安迪教練</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})