import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { deletePosts } from "../../redux/actions/posts";
import { useDispatch } from "react-redux";

function PostItem({ info, setCurrentId }) {
  const [like, setLike] = useState(false);
  const [dialogueOpen, setDialogueOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleLike = () => {
    setLike(!like);
  };

  const handleDialogueOpen = () => {
    setDialogueOpen(true);
  };

  const handleDialogueClose = () => {
    setDialogueOpen(false);
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

  console.log(info);

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
                onClick={handleDialogueOpen}
              />
            </div>
          </div>
          <div className="like-details">
            <p className="m-0">
              <span className="total-likes"> 7 </span> <span> Likes </span>
            </p>
          </div>
          <div className="caption-data">
            <div className="caption-title">
              <h1>{info.title}</h1>
            </div>
            <div className="caption-info">
              <p className="mb-1">{info.caption}</p>
            </div>
            <div className="hash-tags">
              <p className="mb-0">{handleTags(info.tags)}</p>
            </div>
          </div>
          <div className="author-details flex-row-sb">
            <p className="post-time mb-1">{moment(info.createdAt).fromNow()}</p>
            <p className="author-name mb-1">
              - <span> Sanjaya Paudel </span>
            </p>
          </div>
        </div>
        <Dialog
          open={dialogueOpen}
          onClose={handleDialogueClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Once you delete your post, you cannot undo it !!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => dispatch(deletePosts(info._id))}
              color="primary"
            >
              Yes
            </Button>
            <Button onClick={handleDialogueClose} color="primary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default PostItem;
