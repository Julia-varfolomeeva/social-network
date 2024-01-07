const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

 let initialState={
  posts: [
    { id: 1, message: "Hi, how are you?", likeCount: 20 },
    { id: 2, message: "It is my first post", likeCount: 50 },
    { id: 3, message: "It is my first post", likeCount: 30 },
    { id: 4, message: "It is my first post", likeCount: 10 },
    { id: 5, message: "It is my first post", likeCount: 5 },
  ],
  newPostText: "Введи текст сообщения",

 }

const profileReducer = (state = initialState, action) => {

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
