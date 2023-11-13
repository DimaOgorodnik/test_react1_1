import React, { useState } from "react";
import Counter from "./COMPONENTS/Counter";
import PostList from "./COMPONENTS/PostList";

import MyButton from "./COMPONENTS/UI/button/MyButton";
import MyInput from "./COMPONENTS/UI/input/MyInput";
import "./styles/App.css";

function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [posts, setPosts] = useState([
    { id: 1, title: "React App1", body: "This is the best comments number 1" },
    { id: 2, title: "React App2", body: "This is the best comments number 2" },
    { id: 3, title: "React App3", body: "This is the best comments number 3" },
  ]);

  const addNewPost = (e) => {
    e.preventDefault();
    console.log();
    // Add the new post to the posts array
    const newPost = { id: posts.length + 1, title: value, body: value2 };

    setPosts([...posts, newPost]);
    setValue("");
    setValue2("");
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={value}
          setValue={setValue}
          type="text"
          placeholder="Name Post"
        />
        <MyInput
          value={value2}
          setValue={setValue2}
          type="text"
          placeholder="Description Post"
        />
        <MyButton click={addNewPost}>Create New Post</MyButton>
      </form>
      <Counter />

      <PostList posts={posts} title="Posts for React" />
    </div>
  );
}

export default App;
