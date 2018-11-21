import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAf9dEX9vtRraA0pSHwjepdSQ5el3alzCA",
    authDomain: "chatbox-app-566da.firebaseapp.com",
    databaseURL: "https://chatbox-app-566da.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp } 
export default base