import React from 'react';

import './style.css'

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isValid: true
        }

        this.onBlur = this.onBlur.bind(this);
    }


    onBlur(event) {
        const {handleValidate, handleChange, name} = this.props;
        const value = event.currentTarget.value;

        handleChange(name, value);
        if(!handleValidate) return;
        if(value === '') return;

        const isValid = handleValidate(value);
        console.log(isValid);

        this.setState({isValid});
    }

    render() {
        const {type, placeholder, invalidMessage} = this.props;
        const {isValid} = this.state;

        return (
            <div>
                <input type={type} placeholder={placeholder} onBlur={this.onBlur}/>
                {!isValid && <div style={{color: 'red'}}>{invalidMessage}</div>}
            </div>
        )
    }
}

export default Input;
