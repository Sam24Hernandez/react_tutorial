// Renderizado condicional
import React from 'react';

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
       this.setState({isLoggedIn: true});
    }

     handleLogoutClick() {
       this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        let message;
        const messages = ['Hola lindo!', 'Hey!', 'Llámame'];

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
            message = <Mailbox unreadMessages={messages} />;

        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <hr />
                {/**Ejemplo con If...Else en una línea condicion ? true : false */}
                El usuario está <b>{isLoggedIn ? 'conectado' : 'desconectado'}.</b>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}  
                {message}  
                <hr />            
            </div>
        );
    }
}

function UserGreeting(props) {
  return <h1>¡Bienvenido de nuevo!</h1>;
}

function GuestGreeting(props) {
  return <h1>Por favor, inicie.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Iniciar sesión
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Cerrar sesión
    </button>
  );
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        /** If en una línea con operador lógico && */
        <div>
            {unreadMessages.length > 0 && 
                <p>
                    Tienes {unreadMessages.length} mensajes sin leer.
                </p>
            }
        </div>
    );
}

export default LoginControl;