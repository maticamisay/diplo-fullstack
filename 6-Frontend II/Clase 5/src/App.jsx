import { useEffect, useState } from "react";
import { Post } from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((respuestaDelServer) => respuestaDelServer.json())
      .then((respuestaDelServer) => {
        return setPosts(respuestaDelServer);
      });
  }, []);

  return (
    <>
      {posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </>
  );
}

export default App;
