import React from 'react';
import './App.css';
import TypeSelection from './TypeSelection'
import ThemeSelection from './ThemeSelection'
import Calculator from './Calculator'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      type : "standard",
      theme: "light"
    }
  }

   typeSelect = type => this.setState({type: type})
   themeSelect = theme => this.setState({theme: theme})
  
  render (){
    let { type, theme } = this.state
    return (
      <div className="App">
        <div className={theme === "light"?"light-theme": "dark-theme"}>
          <TypeSelection 
            type={type}
            onSelect= {this.typeSelect}
           />
          <ThemeSelection 
            theme={theme}
            onSelect= {this.themeSelect}
          />
          <Calculator
          type = {type}
          />

        </div>
      </div>
    )
  }
}