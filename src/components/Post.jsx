const Post = ({ image, content, user }) => {
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
      <p>{user}</p>
    </>
  );
};

export default Post;
