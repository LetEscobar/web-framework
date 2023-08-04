import logo from './logo.svg'
import './App.css'
import { render } from '@testing-library/react'
import { Component } from 'react'

// Componentes baseados em estados são chamados de componentes stateful
// Componentes baseados em funções são chamados de componentes stateless
// function App() {}

class App extends Component {
    // criando um estado de posts
    state = {
        // criando um array de objetos
        posts: [
            {
                id: 1,
                title: 'Título 1',
                body: 'Corpo 1'
            },
            {
                id: 2,
                title: 'Título 2',
                body: 'Corpo 2'
            },
            {
                id: 3,
                title: 'Título 3',
                body: 'Corpo 3'
            }
        ]
    }

    render() {
        // Todos os estados precisam de uma função para alterá-los
        const { posts } = this.state

        return (
            <div className="App">
                {/* se eu quero um retorno preciso colocar parênteses, se eu não quiser retorno, posso usar chaves */}
                {posts.map(post => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <h3>{post.body}</h3>
                    </div>
                ))}
            </div>
        )
    }
}

export default App
