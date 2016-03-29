import React from 'react';

var List = React.createClass({
    render : function() {
        var items = [];
        var input = this.props.filter.toLowerCase();
        this.props.data.map(function(item) {
            if (item.text.toLowerCase().indexOf(input)) {
                return;
            } else {
                items.push(<div><span><img src={item.icon} /><p>{ item.text }</p></span></div>);
            }
        });
        console.log(items);
        return (
            <div > { items } </div>
        )
    }
});


var Filter = React.createClass({
    filterTrigger : function() {
        this.props.filterUpdate(this.refs.filterInput.getDOMNode().value);
    },
    render : function() {
        return (
            <form>
                <input type = 'text' ref = 'filterInput'placeholder = '輸入名稱 ex:跑步機'
                       value = { this.props.filterVal }
                       onChange = { this.filterTrigger } />
            </form>
        )
    }
});


var FilterApp = React.createClass({
    getInitialState : function() {
        return {
            filterText: ''
        }
    },
    stateUpdate : function(value) {
        this.setState({
            filterText: value
        });
    },
    render : function() {

        return (
            <div>
                <Filter filterVal = { this.state.filterText } filterUpdate = { this.stateUpdate } />
                <br />
                <List data = { this.props.data }  filter = { this.state.filterText } />
            </div>
        )
    }
});

module.exports = FilterApp;