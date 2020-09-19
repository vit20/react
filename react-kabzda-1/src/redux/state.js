import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
  _state: {
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
      newMessageBody: ""
    },
    sidebar: {

    }
  },
  _callSubscriber() {
    console.log('State changet');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }

}



export default store;
window.store = store;