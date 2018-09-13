import React, {PureComponent as Component} from 'react';
import './ChatPreview.styles.css';
import classNames from 'classnames';

class ChatPreview extends Component {


  

  render() {
    const { chat, toggleDialog, setCurrentInterlocutor, readAllMessagesFrom } = this.props;
    const unreadMessagesAmount = chat.messages.filter(message => !message.isRead).length; 
    
    const unreadClassName = classNames({
      'chat-preview__unread-count': true,
      'chat-preview__unread-count--read': unreadMessagesAmount === 0
    })

    const lastMessageText = chat.messages[chat.messages.length-1].messageText;

    const showDialog = () => {
      toggleDialog();
      setCurrentInterlocutor(chat.participantName);
      readAllMessagesFrom(chat.participantName);
    }

    return (
      <li className="chat__list-item" onClick={showDialog}>
        <article className="chat-preview">
          <h1 className="chat-preview__name">{chat.participantName}</h1>
          <h2 className="chat-preview__last-message">{lastMessageText}</h2>
          <figure className={unreadClassName}>{unreadMessagesAmount ? unreadMessagesAmount : null}</figure>
        </article>
      </li>
    )
  }
}

export default ChatPreview;
