import React, {PureComponent as Component} from 'react';
import './ChatList.styles.css';
import ChatPreview from './components/ChatPreview';

class ChatList extends Component {
    render() {
        const { chats, toggleDialog, setCurrentInterlocutor, readAllMessagesFrom } = this.props;

        return (
            <ul className="chat__list"> 
                {chats.map(chat => <ChatPreview key={chat.chatId} chat={chat} setCurrentInterlocutor={setCurrentInterlocutor} toggleDialog={toggleDialog} readAllMessagesFrom={readAllMessagesFrom}/>)}
            </ul> 
        )
    }
}

export default ChatList;