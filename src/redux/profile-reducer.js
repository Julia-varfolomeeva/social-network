const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: // 'ADD-POST' как методб пишем большими буквами
      let NewPost = {
        // у этого метода нет атрибута для принятия
        id: 6,
        message: state.newPostText,
        likeCount: 0,
      };
      state.posts.push(NewPost);
      state.newPostText = "Введи текст сообщения";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText; // этот метод принимал атрибут newText
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
