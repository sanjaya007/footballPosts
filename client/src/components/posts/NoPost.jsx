import React from "react";
import WarningIcon from "@material-ui/icons/Warning";

const NoPost = () => {
  return (
    <>
      <div className="no-post-box flex-css-column">
        <WarningIcon />
        <h1> No posts available !</h1>
      </div>
    </>
  );
};

export default NoPost;
