import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

const PostDetailDialog = ({ post, onClose }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the selected post
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
        );
        if (response.ok) {
          const data = await response.json();
          setComments(data);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [post.id]);

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogContent style={{backgroundColor:"white"}}>
        <Typography variant="h6">{post.title}</Typography>
        <Typography>{post.body}</Typography>
        <Typography variant="h6">Comments:</Typography>
        {comments.map((comment) => (
          <div key={comment.id}>
            <Typography variant="subtitle1">{comment.name}</Typography>
            <Typography>{comment.body}</Typography>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default PostDetailDialog;
