import React, { Component } from 'react'

class Connexion extends Component {
    render() {
        return (
            <div className="connexionBox">
                <form className="connexion">
                    <input type="text" placeholder="Pseudo" required/>
                    <button className="" type="submit">Go</button>
                </form>
            </div>
        )
    }

}

export default Connexion