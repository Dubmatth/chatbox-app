import React, { Component } from 'react'
import './App.css'
import Formulaire from './Components/Formulaire'
import Message from './Components/Message'

import base from './base'

class App extends Component {

  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo, 
  }

  componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${Date.now()}`] = message
    this.setState({ messages })
  }

  render () {

    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <Message 
          key={key}
          pseudo={this.state.messages[key].pseudo}
          message={this.state.messages[key].message}
        />
      ))

    return (
      <div className='box'>
        <div>
          <div className="messages">
            <div className="message">
              { messages }             
            </div>
          </div>
        </div>
        <Formulaire
            length={140} 
            addMessage={this.addMessage} 
            pseudo={this.state.pseudo}
          />
      </div>
    )
  }
}

export default App
