// Renderizado condicional
import React from 'react';

class List extends React.Component {

    render() {
        const numbers = [1, 2, 3, 4, 5];
        const posts = [
            {id: 1, title: 'Hola Mundo', content: 'Bienvenido a aprendiendo React!'},
            {id: 2, title: 'Instalación', content: 'Puedes instalar React desde npm.'}
        ];
        return (
            <div>   
                <NumberList numbers={numbers} />
                <Blog posts={posts} />
            </div>
        );
    }
}

/*
// Ejemplo: Uso Incorrecto de Key
function ListItem(props) {
    const value = props.value;
    return (
        // Mal! No hay necesidad de especificar la key aqui:
        <li key={value.toString()}>
            {value}
        </li>
    );
}

function NumberList(props) {
    const numbers = props.numbers;
    // Mal! La key debería haber sido especificada aqui:
    const listItems = numbers.map((number) => <ListItem value={number} />);

    return (
        <ul>{listItems}</ul>
    );
}
*/

// Ejemplo: Uso Correcto de Key
function ListItem(props) {
    // Correcto! No hay necesidad de especificar la key aqui:
    return (<li>{props.value}</li>);
}

function NumberList(props) {
    const numbers = props.numbers;
    // Correcto! La key debería haber sido especificada dentro del array:
    const listItems = numbers.map((number) => <ListItem key={number.toString()} value={number} />);

    return (
        <ul>{listItems}</ul>
    );
}

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
    );

    const content = props.posts.map((post) => 
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    return (
        <div>
            {sidebar}
            <br />
            {content}
        </div>
    );
}


export default List;