const Header = ({ user, setUser }) => {
  return (
    <div>
      <p>welcome, {user}!</p>
      <button onClick={() => setUser("")}>Logout</button>
    </div>
  );
};

export default Header;
