import logo from './logo.svg'
import './App.css'
import { render } from '@testing-library/react'
import { Component } from 'react'

// Componentes baseados em estados são chamados de componentes stateful
// Componentes baseados em funções são chamados de componentes stateless
// function App() {}

class App extends Component {
    constructor(props) {
        // super chama o construtor da classe pai
        super(props)
        // this.handleClick = this.handleClick.bind(this)

        this.state = {
            name: 'Letícia',
            counter: 0
        }
    }

    // substituir o bind(this) pelo arrow function
    handleClick = () => {
        const { name } = this.state
        console.log(`Cliquei em ${name}`)
        this.setState({ name: 'Nome mudou' })
    }

    handleClickButton = () => {
        const { counter } = this.state
        console.log(`Cliquei no botão`)
        this.setState({ counter: counter + 1 })
    }

    render() {
        // Todos os estados precisam de uma função para alterá-los
        const { name, counter } = this.state

        return (
            // className é obrigatório, pois class é uma palavra reservada do JS
            // react não permite fazer return de mais de uma tag, por isso, é necessário colocar tudo dentro de uma div ou de um react fragment (<> </>)
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        <span onClick={this.handleClick}>
                            {name} - {counter}
                        </span>
                        <br />
                        <br />
                        <button onClick={this.handleClickButton}>Botão</button>
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* Dentro das chaves eu posso colocar códigos js */}A
                        soma de 1 + 1 é {1 + 1}
                    </a>
                </header>
            </div>
        )
    }
}

// O export default é obrigatório, pois é o que permite que o componente seja importado em outros arquivos
export default App

// extensão jsx é opcional, mas é uma boa prática para diferenciar os arquivos que contém html junto com js
