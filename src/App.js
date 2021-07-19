import { useState, useEffect, useCallback } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import Login from "./components/Login";
import PostList from "./components/PostList";

const functionsCount = new Set();

function App() {
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  const handleAddPost = useCallback(
    (newPost) => {
      setPosts([newPost, ...posts]);
    },
    [posts]
  );
  console.log(handleAddPost);

  useEffect(() => {
    document.title = user ? `${user}'s feed` : "please login";
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddPost={handleAddPost} />
      <PostList posts={posts} />
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}

export default App;
