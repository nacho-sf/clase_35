import React, { Component } from 'react';
import party_img from '../../../assets/party.jpg';
import Button from '@mui/material/Button';

import {userContext} from '../../../context/userContext';

class Home extends Component {

    static contextType = userContext; //Contexto desde JS

    constructor(props) {
      super(props)
    
      this.username = React.createRef();

      this.state = {
        username:""
      }

    }



    sendName = () => {
        //***CONSUMER***
        const {login} = this.context; // Consume el contexto desde JS
        
        login(this.state.username);//enviar nombre por contexto
        alert("Nombre enviado: " + this.state.username);
    
        // Vaciar input + state
        this.username.current.value = "";
        this.setState({ username: "" });
    }

    handleChange = () => {
        const username = this.username.current.value; //Leer campo por referencia
        this.setState({ username });
    }




    render() {
        return <div>
            <h1>Welcome to de Party</h1>
                <img src={party_img} className="party_img" alt="party" />
                <div>
                    <h1>Tus sugerencias</h1>
                    <input type="text" ref={this.username} onChange={this.handleChange} />
                    {this.state.username ? <Button variant="contained" onClick={this.sendName}>LOGIN</Button> :""}
                </div>
            </div>;

    }
}

export default Home;