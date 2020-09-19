const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store ={
  _state : {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how ara you?', likesCount: 12 },
      { id: 2, message: 'It\'s my life', likesCount: 11 },
      { id: 3, message: 'Blala', likesCount: 12 },
      { id: 4, message: 'Dada', likesCount: 11 }
    ],
    newPostText: '123'

  },

  dialogsPage: {

    dialogs: [
      { id: 1, name: 'Witold' },
      { id: 2, name: 'Sergio' },
      { id: 3, name: 'Andre' },
      { id: 4, name: 'Ivan' },
      { id: 5, name: 'Alex' },
      { id: 6, name: 'Den' },
    ],

    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is yor?' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo' },
      { id: 5, message: 'Yo' },
    ],
    newMessageBody:""
  },
  sidebar: {}
},
_callSubscriber() {
  console.log('State changet');
},
getState () {
  return  this._state;
},
subscribe (observer) {
  this._callSubscriber = observer;
},
dispatch (action) {

if(action.type ===ADD_POST){
  let newPost = {
    id: 5,
    message: this._state.profilePage.newPostText,
    likesCount: 0
  };
  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostText = '';
 this._callSubscriber(this._state);
} else if (action.type === UPDATE_NEW_POST_TEXT){
  this._state.profilePage.newPostText = action.newTex;
  this._callSubscriber(this._state);
}
else if (action.type === UPDATE_NEW_MESSAGE_BODY){
  this._state.dialogsPage.newMessageBody = action.body;
  this._callSubscriber(this._state);
}
else if (action.type === SEND_MESSAGE){
  let body =this._state.dialogsPage.newMessageBody;
  this._state.dialogsPage.newMessageBody = '';
  this._state.dialogsPage.messages.push({id: 6, message: body});
  this._callSubscriber(this._state);
}
}
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body:body})
  

export default store;
window.store = store;