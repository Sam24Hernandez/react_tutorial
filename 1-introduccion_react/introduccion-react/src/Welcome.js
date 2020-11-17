import './Welcome.css';

// Componentes y Propiedades

function Welcome(props) {
  return (
    <div className="Welcome">
        <div className="UserInfo">
            <img src={props.author.avatarUrl} className="Avatar" alt={props.author.name} />
            <div className="UserInfo-name">
              {props.author.name}
            </div>
        </div>
         <div className="Comment-text">{props.text}</div>        
    </div>
  );
}

export default Welcome;
