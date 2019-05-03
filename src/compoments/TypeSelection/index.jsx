import React from 'react';

export default class TypeSelection extends React.Component{
    clickHandler = (type) => {
        this.props.onSelect(type)
    }

    render (){
        let { type } = this.props
        return (
            <div className="type-selection">
                <span className={type=== "standard"? "button-selected":"button"} onClick={() => this.clickHandler("standard")}>
                    Standard
                </span>
                <span className={type=== "scientific"? "button-selected":"button"} onClick={() => this.clickHandler("scientific")}>
                    Scientific
                </span>
            </div>
        )
    }
}