import { useContext } from "react";
import { UserContext, PostContext } from "../App";

const Post = ({ image, content, user, id }) => {
  const userCtx = useContext(UserContext);
  const { dispatch } = useContext(PostContext);

  const handleDeletePost = () => {
    dispatch({ type: "DELETE_POST", payload: { id } });
  };

  const isCurrentUser = userCtx === user;
  return (
    <>
      <img
        src={URL.createObjectURL(image)}
        alt="img"
        style={{
          height: 300,
          width: 300,
          objectFit: "cover",
        }}
      />
      <p>{content}</p>
      <p
        style={{
          color: isCurrentUser ? "green" : "",
        }}
      >
        {user}
      </p>
      {isCurrentUser && (
        <div>
          <button onClick={handleDeletePost}>delete</button>
        </div>
      )}
    </>
  );
};

export default Post;
