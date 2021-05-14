import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import img from "../../images/ronaldo.jpg";

function PostItem({ info }) {
  return (
    <>
      <div className="post-box">
        <div className="image-container">
          <img src={img} className="img-fluid img-responsive" alt="posts" />
        </div>
        <div className="image-desc px-2">
          <div className="actions-btns flex-row-sb py-1">
            <div className="icons1">
              <FavoriteBorderIcon className="icon like-icon" />
              <CreateIcon className="icon edit-icon" />
            </div>
            <div className="icons2">
              <DeleteOutlineIcon className="icon" />
            </div>
          </div>
          <div className="caption-data">
            <div className="caption-title">
              <h1>{info.title}</h1>
            </div>
            <div className="caption-info">
              <p class="mb-1">{info.caption}</p>
            </div>
            <div className="hash-tags">
              <p className="mb-2">{info.tags}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostItem;
