import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { deletePosts } from "../../redux/actions/posts";
import { useDispatch } from "react-redux";

function PostItem({ info, setCurrentId }) {
  const [like, setLike] = useState(false);

  const dispatch = useDispatch();

  const toggleLike = () => {
    setLike(!like);
  };

  const handleTags = (tags) => {
    const arrTags = tags.split(",");

    let finalTags = "";
    for (let i = 0; i < arrTags.length; i++) {
      arrTags[i] = arrTags[i].trim();
      arrTags[i] = "#" + arrTags[i];
      finalTags += arrTags[i] + " ";
    }
    return finalTags;
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
              <DeleteOutlineIcon
                className="icon delete-icon"
                onClick={() => dispatch(deletePosts(info._id))}
              />
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
              <p className="mb-2">{handleTags(info.tags)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostItem;
