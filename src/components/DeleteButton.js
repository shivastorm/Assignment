import React from "react";

const DeleteButton = ({ postId, handleDelete }) => {
  const handleClick = () => {
    handleDelete(postId);
  
  };

  return (
    <button onClick={handleClick} style={{borderRadius:10,
      borderWidth:1,
      padding:10,
      width:"30%",backgroundColor:"white",color:"black"    
    }}>
      Delete
    </button>
  );
};

export default DeleteButton;
