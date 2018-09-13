import React, {PureComponent as Component} from 'react';
import './ChatMessage.styles.css';
import classNames from 'classnames';

class ChatMessage extends Component {
  getTimeFromISODate(isoDate) {
    const time = new Date(isoDate);
    return `${time.getHours()}:${time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes()}`;
  }

  render() {
    const { message, name } = this.props;
    
    const messageClassName = classNames({
      message: true,
      'message--mine': name === message.senderName
    })
    
    return (
      <li className="chat__message">
        <article className={messageClassName}>
          {message.messageText}
          <time className="message__when">{this.getTimeFromISODate(message.time)}</time>
        </article>
      </li>
      
    )
  }
}

export default ChatMessage;