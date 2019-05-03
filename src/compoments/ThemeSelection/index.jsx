import React from 'react';

export default class ThemeSelection extends React.Component{
    clickHandler = (theme) => {
        this.props.onSelect(theme)
    }

    render (){
        let { theme } = this.props
        return (
            <div className="theme-selection">
                <span className={theme=== "light"? "button-selected":"button"} onClick={() => this.clickHandler("light")}>
                    Light Theme
                </span>
                <span className={theme=== "dark"? "button-selected":"button"} onClick={() => this.clickHandler("dark")}>
                    Dark Theme
                </span>
            </div>
        )
    }
}