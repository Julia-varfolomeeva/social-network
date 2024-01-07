const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState={
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
}

const dialogsReducer = (state= initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let NewMessage = {
        id: 6,
        message: state.newMessageText,
      };
      let NewDialog = {
        id: 6,
        name: "Julia",
        imageItem: (
          <img src="https://ouch-cdn2.icons8.com/njV9HbmnIAeeWK2Mr2u39BUSLIBf2f2jjNf93ghnw1g/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTIx/LzYyOTBlMmU4LWQ2/NmMtNDgzMS1hOWFl/LTUwNDQ3M2ZkMWZj/NS5wbmc.png" />
        ),
      };
      state.dialogs.push(NewDialog);
      state.messages.push(NewMessage);
      state.newMessageText = "Введите ваше сообщение";
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;

    default:
      return state;
  }
};
export const addMessageActionCreator = () => {
  return { type: SEND_MESSAGE };
};

export const updateNewMessageTextActionCreator = (message) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message };
};

export default dialogsReducer;
