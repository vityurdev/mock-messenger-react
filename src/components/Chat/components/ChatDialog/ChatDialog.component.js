import React, { PureComponent as Component } from 'react';
import './ChatDialog.styles.css';
import ChatMessage from './components/ChatMessage';

class ChatDialog extends Component {
  render() {
    const { currentInterlocutor, currentChat, name } = this.props;

    return (
      <ul className="chat__messages">
        {currentChat.messages.map(message => <ChatMessage key={message.messageId} name={name} currentInterlocutor={currentInterlocutor} message={message}/>)}
      </ul>
    )
  }
}

export default ChatDialog;