import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import Login from "./components/Login";
import PostList from "./components/PostList";
import postReducer from "./reducer";

export const UserContext = createContext();
export const PostContext = createContext({
  posts: [],
});

function App() {
  const initialPostState = useContext(PostContext);
  const [state, dispatch] = useReducer(postReducer, initialPostState);
  const [user, setUser] = useState("");
  // const [posts, setPosts] = useState([]);

  // const handleAddPost = useCallback(
  //   (newPost) => {
  //     setPosts([newPost, ...state.posts]);
  //   },
  //   [posts]
  // );

  useEffect(() => {
    document.title = user ? `${user}'s feed` : "please login";
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
