import React, { useState, useEffect } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CreateIcon from "@material-ui/icons/Create";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DownloadIcon from "@mui/icons-material/Download";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { deletePosts, likePosts } from "../../redux/actions/posts";
import { useDispatch } from "react-redux";

function PostItem({ info, setCurrentId }) {
  const [like, setLike] = useState(false);
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  console.log(user);
  console.log(info);

  const alreadyLiked = info.likes.find(
    (id) => id === user?.result?.googleId || id === user?.result?._id
  );

  useEffect(() => {
    if (alreadyLiked) {
      setLike(() => true);
    } else {
      console.log("dislike");
      setLike(() => false);
    }
  }, [info]);

  const handleLike = (id) => {
    dispatch(likePosts(id));
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
          <div className="actions-btns flex-css-row-sb py-1">
            <div className="icons1">
              {!like ? (
                <FavoriteBorderIcon
                  className="icon like-icon"
                  onClick={() => handleLike(info._id)}
                />
              ) : (
                <FavoriteIcon
                  className="icon like-icon"
                  onClick={() => handleLike(info._id)}
                />
              )}

              {info?.creator === user?.result?._id ||
              info?.creator === user?.result?.googleId ? (
                <CreateIcon
                  className="icon edit-icon"
                  onClick={() => setCurrentId(info._id)}
                />
              ) : null}
            </div>
            <div className="icons2 flex-css-row">
              <a href={info.file} className="download-link" download>
                <DownloadIcon />
              </a>

              {info?.creator === user?.result?._id ||
              info?.creator === user?.result?.googleId ? (
                <DeleteOutlineIcon
                  className="icon delete-icon ms-2"
                  onClick={handleDialogueOpen}
                />
              ) : null}
            </div>
          </div>
          <div className="like-details">
            <p className="m-0">
              <span className="total-likes"> {info.likes.length} </span>
              <span> {info.likes.length > 1 ? "Likes" : "Like"} </span>
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
          <div className="author-details flex-css-row-sb">
            <p className="post-time mb-1">{moment(info.createdAt).fromNow()}</p>
            <p className="author-name mb-1">
              - <span title={info.author}> {info.author} </span>
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
              onClick={() => {
                handleDialogueClose();
                dispatch(deletePosts(info._id));
              }}
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
