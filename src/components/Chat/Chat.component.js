import React, { PureComponent as Component } from 'react';
import ChatHeader from './components/ChatHeader';
import ChatList from './components/ChatList';
import ChatDialog from './components/ChatDialog';
import ChatFooter from './components/ChatFooter';
import uuid from 'uuid/v1';

import './Chat.styles.css';

class Chat extends Component {
  state = {
    isDialog: false,
    name: "Vitaly Yurenya",
    currentInterlocutor: '',
    chats: [
      {
        participantId: '111',
        chatId: uuid(),
        participantName: "Daniel",
        messages: [
          {
            messageText: 'Hello, itsamee, Dan!',
            time: '2018-07-17T10:00:00.000Z',
            senderName: "Daniel",
            messageId: uuid(),            
            isRead: true
          },
          {
            messageText: 'Oh, hi, Dan!',
            time: '2018-07-17T11:00:00.000Z',
            senderName: 'Vitaly Yurenya',
            messageId: uuid(), 
            isRead: true
          },
          {
            messageText: 'Listen, I have a question.',
            time: '2018-07-17T12:00:00.000Z',
            senderName: "Daniel",
            messageId: uuid(), 
            isRead: false
          },
          {
            messageText: 'Are you busy right now? Let\'s vape and chill a little bit at lounge :)',
            time: '2018-07-17T13:00:00.000Z',
            senderName: "Daniel",
            messageId: uuid(), 
            isRead: false
          }
        ]
      },
      {
        participantId: '222', 
        participantName: 'Elon Musk',
        chatId: uuid(),
        messages: [
          {
            messageText: 'Hey wazzup, it\'s Elon!',
            time: '2018-07-17T14:00:00.000Z',
            senderName: "Elon Musk",
            messageId: uuid(), 
            isRead: true
          },
          {
            messageText: 'Imma launch my rockets into space! Ain\'t it cool, dawg?',
            time: '2018-07-17T15:00:00.000Z',
            senderName: "Elon Musk",
            messageId: uuid(), 
            isRead: true
          },
          {
            messageText: 'Are you even reading my messages???',
            time: '2018-07-17T16:00:00.000Z',
            senderName: "Elon Musk",
            messageId: uuid(), 
            isRead: true
          },
        ]
      },
      {
        participantId: '333',
        participantName: 'Mikhail',
        chatId: uuid(),
        messages: [
          {
            messageText: 'Hello, Vitaly! Have you finished that task with responsive markup?',
            time: '2018-07-17T17:00:00.000Z',
            senderName: "Mikhail",
            messageId: uuid(), 
            isRead: true
          },
          {
            messageText: 'Hey wassup Misha! Yeah, sure. You can now review it!',
            time: '2018-07-17T18:00:00.000Z',
            senderName: 'Vitaly Yurenya',
            messageId: uuid(), 
            isRead: true
          }

        ]
      },
      {
        participantId: '444',
        participantName: 'Pavel Durov',
        chatId: uuid(),
        messages: [
          {
            messageText: 'Psss.. Wanna join Telegram?',
            time: '2018-07-17T19:00:00.000Z',
            senderName: 'Pavel Durov',
            messageId: uuid(), 
            isRead: false
          }
        ]
      }
    ]
  }


  toggleDialog = () => {
    this.setState(prevState => ({
       isDialog: !prevState.isDialog
    }));
  }

  setCurrentInterlocutor = (participantName) => {
    this.setState(prevState => ({
      currentInterlocutor: participantName
    }))
  }

  readAllMessagesFrom = (participantName) => {
    this.setState(prevState => {
      const { chats } = prevState;
      
      const newChats = chats.map(chat => 
        chat.participantName === participantName
          ? {
            ...chat,
            messages: chat.messages.map(message => 
              message.isRead
                ? message
                : { ...message, isRead: true }
            ),
          } : chat
      );
      
      return { chats: newChats }     
    })
  }

  sendMessage = (messageText, currentInterlocutor) => {
    this.setState(prevState => { 
      const { chats } = prevState;

      const time = (new Date()).toISOString();
      const newMessage = {
        messageText,
        time,
        senderName: this.state.name,
        messageId: uuid(),
        isRead: true
      };
      const newChats = chats.map(chat => 
        chat.participantName === currentInterlocutor
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      );
    
      return { chats: newChats };
    })
  }


  render () {
    const { chats, isDialog, name, currentInterlocutor } = this.state;

    const unreadMessages = chats.map(chat => chat.messages)
      .reduce((prev, curr) => prev.concat(curr))
      .filter(message => !message.isRead).length;

    const currentChat = chats.find(chat => chat.participantName === currentInterlocutor);

    return (
      <React.Fragment>
        <ChatHeader isDialog={isDialog} currentInterlocutor={currentInterlocutor} name={name} unreadMessages={unreadMessages} toggleDialog={this.toggleDialog}/>
        {
          this.state.isDialog
          ?
          <React.Fragment>
            <ChatDialog name={name} currentInterlocutor={currentInterlocutor} currentChat={currentChat}/>
            <ChatFooter currentInterlocutor={currentInterlocutor} sendMessage={this.sendMessage} />
          </React.Fragment>
          :
          <ChatList chats={chats} toggleDialog={this.toggleDialog} setCurrentInterlocutor={this.setCurrentInterlocutor} readAllMessagesFrom={this.readAllMessagesFrom} />
        }
      </React.Fragment>
    );
  }
};

export default Chat;
