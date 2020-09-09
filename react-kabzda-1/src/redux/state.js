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
    ]
  },
  sidebar: {}
},
getState () {
  return  this._state;
},
_callSubscriber() {
  console.log('State changet');
},
addPost () {

  let newPost = {
    id: 5,
    message: this._state.profilePage.newPostText,
    likesCount: 0
  };
  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostText = '';
 this._callSubscriber(this._state);
},
updateNewPostText (newTex) {
  this._state.profilePage.newPostText = newTex;
  this._callSubscriber(this._state);
},
subscribe (observer) {
  this._callSubscriber = observer;
}
}



export default store;
window.store = store;