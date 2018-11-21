import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {

    state = {
        pseudo: '',
        goToChat: false
    }

    onChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    } 

    onSubmit = event => {
        event.preventDefault()
        this.setState({goToChat: true})
    }

    render() {

        if (this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }

        return (
            <div className="connexionBox">
                <form className="connexion" onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        value={this.state.pseudo}
                        onChange={this.onChange} 
                        placeholder="Pseudo" 
                        required/>
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }

}

export default Connexion