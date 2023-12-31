import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import siteBarReducer from "./siteBar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likeCount: 20 },
        { id: 2, message: "It is my first post", likeCount: 50 },
        { id: 3, message: "It is my first post", likeCount: 30 },
        { id: 4, message: "It is my first post", likeCount: 10 },
        { id: 5, message: "It is my first post", likeCount: 5 },
      ],
      newPostText: "Введи текст сообщения",
    },
    dialogPage: {
      dialogs: [
        {
          id: 1,
          name: "Andrey",
          imageItem: (
            <img src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png" />
          ),
        },
        {
          id: 2,
          name: "Roma",
          imageItem: (
            <img src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png" />
          ),
        },
        {
          id: 3,
          name: "Sergey",
          imageItem: (
            <img src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png" />
          ),
        },
        {
          id: 4,
          name: "Julia",
          imageItem: (
            <img src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png" />
          ),
        },
        {
          id: 5,
          name: " Elizaveta",
          imageItem: (
            <img src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png" />
          ),
        },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hi, how are you?" },
        { id: 3, message: "Hi,everyone !" },
        { id: 4, message: "Hi, I am fine" },
        { id: 5, message: "yoyo" },
      ],
      newMessageText: "Введите ваше сообщение",
    },
    siteBar: {
      dialogs: [
        {
          id: 1,
          name: "Andrey",
          imageItem: (
            <img src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png" />
          ),
        },
        {
          id: 2,
          name: "Roma",
          imageItem: (
            <img src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png" />
          ),
        },
        {
          id: 3,
          name: "Sergey",
          imageItem: (
            <img src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png" />
          ),
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("state is changes");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //observer патерны наблюдатель почитать 11111
  },

  dispatch(action) {
    // action-это объект, какое то действие,которое приходит сюда и у него есть type ="какая то строка"
    this._state.profilePage = profileReducer(this._state.profilePage, action); // передаем profileReducer не весь state, а только  profilePage.
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._state.siteBar = siteBarReducer(this._state.siteBar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
