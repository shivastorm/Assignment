import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
//import { StyleSheet } from 'react-native';
import "./style.css"
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteButton from "./DeleteButton";
import PostDetailDialog from "./PostDetailDialog";
import { display } from "@mui/system";

const PostList = ({ posts, searchQuery, handleDelete }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredPosts.map((post) => (
        <Card key={post.id} className="maincard">
          <CardContent style={{borderWidth:"15px",borderColor:"black",margin:5,borderRadius:20}}>
            <Typography variant="h6" style={{fontSize:"x-large"}}>{post.title}</Typography>
            <Typography style={{borderColor:"black",borderWidth:5}}>{post.body}</Typography>
            <CardContent style={{width:300, display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <DeleteButton postId={post.id} handleDelete={handleDelete}/>
            <button onClick={() => setSelectedPost(post)}
            className="cmtbutton">
              Show Comments</button>
            </CardContent>
          </CardContent>
        </Card>
      ))}
      {selectedPost && (
        <PostDetailDialog
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
};

export default PostList;
 
