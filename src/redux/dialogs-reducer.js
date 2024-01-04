const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
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
