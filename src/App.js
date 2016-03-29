import React from 'react'
import NavLink from './NavLink'
import ToggleBtn from './ToggleBtn/ToggleBtn'
export default React.createClass({
    render() {
        return (
            <div id="wrapper">
                <div className="header">
                    <h1 className="main-title">GYM健身網</h1>
                    <ToggleBtn />
                    <ul role="nav">
                        <li className="main-navbar"><NavLink to="/about">About Us</NavLink></li>
                        <li className="main-navbar"><NavLink to="/gym">健身房</NavLink></li>
                        <li className="main-navbar"><NavLink to="/coach">私人教練</NavLink></li>
                        <li className="main-navbar"><NavLink to="/secondhand">二手買賣</NavLink></li>
                    </ul>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
})