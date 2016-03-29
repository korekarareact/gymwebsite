import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                <h2>{this.props.params.gymName}</h2>
            </div>
        )
    }
})