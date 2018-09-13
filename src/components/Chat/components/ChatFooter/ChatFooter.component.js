import React, { PureComponent as Component } from 'react';
import './ChatFooter.styles.css';

class ChatFooter extends Component {
  state = {
    value: ''
  }

  changeInput = event => {
    this.setState({value: event.target.value})
  }


  render() {
    const { sendMessage, currentInterlocutor } = this.props;
    const { value } = this.state;

    const submitByEnter = (event) => {
      if (event.keyCode === 13) {
        value && sendMessage(this.state.value, currentInterlocutor);
        this.setState({value: ''})
      }
    }

    const submitByClick = () => {
      value && sendMessage(this.state.value, currentInterlocutor);
      this.setState({value: ''});
    }

    return (
      <footer className="input">    
        <input type="text" value={value} placeholder="Send Message" className="input__textarea" onChange={this.changeInput} 
          onKeyUp={submitByEnter}        
        />
        <button className="input__submit-button" 
          onClick={submitByClick}
        >
        </button>
      </footer>
    )
  }
}

export default ChatFooter;