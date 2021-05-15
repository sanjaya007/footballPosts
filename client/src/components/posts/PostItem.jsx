import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function PostItem({ info, setCurrentId }) {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <>
      <div className="post-box">
        <div className="image-container">
          <img
            src={info.file}
            className="img-fluid img-responsive"
            alt="posts"
          />
        </div>
        <div className="image-desc px-2">
          <div className="actions-btns flex-row-sb py-1">
            <div className="icons1">
              {!like ? (
                <FavoriteBorderIcon
                  className="icon like-icon"
                  onClick={toggleLike}
                />
              ) : (
                <FavoriteIcon className="icon like-icon" onClick={toggleLike} />
              )}

              <CreateIcon
                className="icon edit-icon"
                onClick={() => setCurrentId(info._id)}
              />
            </div>
            <div className="icons2">
              <DeleteOutlineIcon className="icon delete-icon" />
            </div>
          </div>
          <div className="caption-data">
            <div className="caption-title">
              <h1>{info.title}</h1>
            </div>
            <div className="caption-info">
              <p className="mb-1">{info.caption}</p>
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
