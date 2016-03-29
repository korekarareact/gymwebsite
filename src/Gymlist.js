import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return (
            <div>
                <h2>健身房</h2>
                <ul>
                    <li className="sub-navbar"><NavLink to="/gym/Extrem">Extrem</NavLink></li>
                    <li className="sub-navbar"><NavLink to="/gym/Factory">Factory</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})