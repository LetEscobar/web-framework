import './styles.css'
import { Component } from 'react';

export class Button extends Component {
    render() {
        const {text, action} = this.props;
        return <button onClick={action}>{text}</button>;
    }
}