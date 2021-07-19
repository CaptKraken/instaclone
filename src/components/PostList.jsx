import Post from "./Post";
const PostList = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post, i) => {
          return <Post key={i} {...post} />;
        })}
    </>
  );
};

export default PostList;
