import { useState, useRef } from "react";

const CreatePost = ({ user, handleAddPost }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) return;
    const post = { content, image, user };
    handleAddPost(post);
    setContent("");
    setImage(null);
    imageInputRef.current.value = "";
  };

  return (
    <div>
      <h1>create new post</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={content}
          type="text"
          placeholder="add post content"
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="file"
          ref={imageInputRef}
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
