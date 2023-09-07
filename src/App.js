import React, { useState, useEffect } from "react";
//import './App.css';
import PostList from "./components/PostList";
import SearchBar from "./components/SearchBar";
import RefreshButton from "./components/RefreshButton";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteQueue, setDeleteQueue] = useState(0);

  // Fetch posts from the API on initial load
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Handle post deletion
  const handleDelete = (postId) => {
    // Add the delete request to the queue
  //  setDeleteQueue([...deleteQueue, postId]);
    setDeleteQueue(deleteQueue + 1);
    const newArray = posts.filter(item => item.id !== postId);
    setPosts(newArray)

  };
const count=()=>{
 
}
  // Handle refresh
  const handleRefresh = async () => {
    try {
      // Clear local state
      setPosts([]);
      setSearchQuery("");
      setDeleteQueue([]);

      // Fetch posts from the API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.ok) {
        const data = await response.json();
        console.log("response===",data)
        setPosts(data);
      }
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  };

  return (
    <div className="App" >
    <div style={{backgroundColor:"#3b3a37",color:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:10}}>
      <h1 style={{marginBottom:10}}>Post Management Page</h1>
      <div style={{display:"flex",flexDirection:"row"}}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <RefreshButton handleRefresh={handleRefresh} />
      <h4> Deleting queue count {deleteQueue}</h4>
    </div>
    </div>
      <PostList
        posts={posts}
        searchQuery={searchQuery}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
