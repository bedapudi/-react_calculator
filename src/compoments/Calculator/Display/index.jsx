import React from 'react';
export default class Display extends React.Component {
    render(){
        let { data, theme } = this.props
        return(
            <input type="text" className = 'calculator-display' value={data}></input>
        )
    }
}