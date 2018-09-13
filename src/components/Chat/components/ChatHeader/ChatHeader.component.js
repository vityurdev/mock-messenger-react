import React, {PureComponent as Component} from 'react';
import './ChatHeader.styles.css';

class ChatHeader extends Component {
  render() {
    const { isDialog, toggleDialog, currentInterlocutor } = this.props;

    return (        
      <header className="header">
        {
          isDialog 
          ?
          <React.Fragment>
            <figure className="header__back-button" onClick={toggleDialog}></figure>
            <h1 className="header__title">{currentInterlocutor}</h1>
          </React.Fragment>
          :
          <React.Fragment>
            <h1 className="header__title">{this.props.name}</h1>
            <figure className="header__unread">{this.props.unreadMessages}</figure>
          </React.Fragment>
        }
      </header>
    )
  }
}

export default ChatHeader;