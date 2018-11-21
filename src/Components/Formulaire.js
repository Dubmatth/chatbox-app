import React, { Component } from 'react'

class Formulaire extends Component {

    state = {
        message: ''
    }

    createMessage = () => {
        const { addMessage, pseudo } = this.props
        const message = {
            pseudo,
            message: this.state.message
        }
        addMessage(message)

        this.setState({ message: '' })
    }

    onSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    onChange = event => {
        event.preventDefault()
        const message = event.target.value;
        this.setState({ message })
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
                    maxLength="140" 
                    onChange={this.onChange}
                />
                <div className="info">140</div>
                <button type="submit">Envoyer !</button>
            </form>
        )
    }

}

export default Formulaire
