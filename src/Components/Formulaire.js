import React, { Component } from 'react'

class Formulaire extends Component {

    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const { addMessage, pseudo, length } = this.props
        const message = {
            pseudo,
            message: this.state.message
        }
        addMessage(message)

        this.setState({ message: '', length: length })
    }

    onSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    onKeyUp = event => {
        if(event.key === 'Enter'){
            this.createMessage()
        }
    }

    onChange = event => {
        event.preventDefault()
        const message = event.target.value;
        const length = this.props.length - message.length
        this.setState({ message, length })
    }

    render(){
        return (
            <form 
                className="form"
                onSubmit={this.onSubmit}
            >
                <textarea 
                    value={this.state.message}
                    required 
                    maxLength={this.props.length} 
                    onKeyUp={this.onKeyUp}
                    onChange={this.onChange}
                />
                <div className="info">{this.state.length}</div>
                <button type="submit">Envoyer !</button>
            </form>
        )
    }

}

export default Formulaire
