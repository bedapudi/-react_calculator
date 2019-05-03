import React from 'react';
import Display from './Display'

let resultShowed = false
export default class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.state = {display: null}
    }

    buttonClick = (type, value) => {
        console.log("button click", type, value)
        let { display} = this.state
        if(resultShowed){
            display = ''
            this.setState({display: display})
            resultShowed = false
        }
        if(type === 'number'){
            if(!display){
                display = value.toString()
            } else {
                display = display + value.toString()
            }
            this.setState({display: display})
        } else if (type === 'symbol'){
            switch(value) {
                case 'clear':
                    this.setState({display: ''})
                    break;
                case 'add':
                    if(!display){
                        alert("Please enter the number first")
                    } else{
                        display = display + " + "
                        this.setState({display: display})
                    }
                    break;
                case 'subtract':
                    if(!display){
                        alert("Please enter the number first")
                    } else{
                        display = display + " - "
                        this.setState({display: display})
                    }
                    break;
                case 'multiply':
                    if(!display){
                        alert("Please enter the number first")
                    } else{
                        display = display + " * "
                        this.setState({display: display})
                    }
                    break;
                case 'divide':
                    if(!display){
                        alert("Please enter the number first")
                    } else{
                        display = display + " / "
                        this.setState({display: display})
                    }
                    break;
                case 'sign':
                    if(!display){
                        alert("Please enter the number first")
                    } else{
                        display = parseInt(display)
                        if(typeof(display)!== 'number'){
                            alert("Invalid input for sign!")
                        } else {
                            if(display> 0){
                                this.setState({display: '-'+ display})
                            } else {
                                Math.abs(display)
                                this.setState({display: Math.abs(display)})
                            }
                            
                        }
                    }
                    break;
                case 'square':
                    if(!display){
                        alert("Please enter the number first")
                    } else{
                        display = parseInt(display)
                        if(typeof(display)!== 'number'){
                            alert("Invalid input for square!")
                        } else {
                            this.setState({display: display * display })
                        }
                    }
                    break;
                case 'root':
                    if(!display){
                        alert("Please enter the number first")
                    } else{
                        display = parseInt(display)
                        if(typeof(display)!== 'number'){
                            alert("Invalid input for root!")
                        } else {
                            this.setState({display: Math.sqrt(display)})
                        }
                    }
                    break;

                case 'equal':
                    if(!display){
                        alert("Please enter the number first")
                    } else{
                        let result = eval(display)
                        this.setState({display: display + " = " + result})
                        resultShowed = true
                    }
                    break;
                default:
              }
            //find result when clicked
        }
    }

    render(){
        let { type } = this.props
        let { display } = this.state
        return(<div>
            <Display data={display}/>
            <table className="calculator-grid">
                <tbody>
                    <tr>
                        <td onClick={()=>this.buttonClick("number", 1)}>1</td>
                        <td onClick={()=>this.buttonClick("number", 2)}>2</td>
                        <td onClick={()=>this.buttonClick("number", 3)}>3</td>
                        <td onClick={()=>this.buttonClick("symbol", "add")}>Add(+)</td>
                    </tr>
                    <tr>
                        <td onClick={()=>this.buttonClick("number", 4)}>4</td>
                        <td onClick={()=>this.buttonClick("number", 5)}>5</td>
                        <td onClick={()=>this.buttonClick("number", 6)}>6</td>
                        <td onClick={()=>this.buttonClick("symbol", "subtract")}>Subtract(-)</td>
                    </tr>
                    <tr>
                        <td onClick={()=>this.buttonClick("number", 7)}>7</td>
                        <td onClick={()=>this.buttonClick("number", 8)}>8</td>
                        <td onClick={()=>this.buttonClick("number", 9)}>9</td>
                        <td onClick={()=>this.buttonClick("symbol", "multiply")}>Multiply(*)</td>
                    </tr>
                    <tr>
                        <td onClick={()=>this.buttonClick("symbol", "clear")}>Clear</td>
                        <td onClick={()=>this.buttonClick("number", 0)}>0</td>
                        <td onClick={()=>this.buttonClick("symbol", "equal")}>=</td>
                        <td onClick={()=>this.buttonClick("symbol", "divide")}>Divide(/)</td>
                    </tr>
                    {type === "scientific"? 
                    <tr>
                    <td onClick={()=>this.buttonClick("symbol", "sign")}>Sign</td>
                    <td onClick={()=>this.buttonClick("symbol", "square")}>x<sup>2</sup></td>
                    <td onClick={()=>this.buttonClick("symbol", "root")}>&#8730;</td>
                    <td></td>
                    </tr>: null}
                </tbody>
            </table>
        </div>)
    }
}