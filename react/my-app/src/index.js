/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

const ENTER = 13;

class App extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      messages: Immutable.List(),
      message: 'Amazing',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleKeyUp(e) {
    if (e.keyCode !== ENTER) return;
    this.setState({
      messages: this.state.messages.push(Immutable.Map({ text: this.state.message, completed: false })),
      message: '',
    });
  }

  handleMessageClick(index) {
    const message = this.state.messages.get(index);
    this.setState({
      messages: this.state.messages.set(index, message.set('completed', !message.get('completed'))),
    });
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange} onKeyUp={this.handleKeyUp} value={this.state.message} />
        {this.state.message}
        <hr/>
        <ul>
          {this.state.messages.map((message, index) => (
            <li style={message.get('completed') ? {
              textDecoration:'line-through'
            } : {}}
            key={index}
            onClick={this.handleMessageClick.bind(this, index)}>{message.get('text')}</li>
          ))}
        </ul>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
