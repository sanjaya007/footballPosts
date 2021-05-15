import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import FileBase from "react-file-base64";
import { Button } from "@material-ui/core";
import "../../css/form.css";
import { useSelector, useDispatch } from "react-redux";
import { addPosts } from "../../redux/actions/posts";
import { updatePosts } from "../../redux/actions/posts";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FormBox = ({ currentId }) => {
  const [inputData, setInputData] = useState({
    title: "",
    caption: "",
    tags: "",
    file: "",
  });
  console.log(inputData);

  const [open, setOpen] = useState(false);

  const posts = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (posts) setInputData(posts);
  }, [posts]);

  const handleError = () => {
    setOpen(true);
  };

  const errorClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const trimmedBody = (obj) => {
    return Object.keys(obj).reduce((acc, value) => {
      acc[value] = obj[value].trim();
      return acc;
    }, {});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePosts(currentId, inputData));
    } else {
      const trimmedInputData = trimmedBody(inputData);

      for (const keys in trimmedInputData) {
        if (trimmedInputData[keys] === "") {
          handleError();
          return false;
        }
      }

      dispatch(addPosts(trimmedInputData));
    }
  };

  const clear = () => {};

  return (
    <>
      <div className="form-box p-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Control
              type="text"
              placeholder="Title..."
              value={inputData.title}
              onChange={(e) =>
                setInputData({ ...inputData, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="caption">
            <Form.Control
              type="text"
              placeholder="Caption..."
              value={inputData.caption}
              onChange={(e) =>
                setInputData({ ...inputData, caption: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="tags">
            <Form.Control
              type="text"
              placeholder="Hash Tags..."
              value={inputData.tags}
              onChange={(e) =>
                setInputData({ ...inputData, tags: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setInputData({ ...inputData, file: base64 })
              }
            />
          </Form.Group>
          <Button
            className="submit-btn"
            type="submit"
            variant="contained"
            size="large"
            fullWidth
          >
            {currentId ? "Update" : "Post"}
          </Button>
          <Button
            className="clear-btn mt-2"
            variant="contained"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </Form>
        <Snackbar open={open} autoHideDuration={2000} onClose={errorClose}>
          <Alert onClose={errorClose} severity="error">
            All fields are required !
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default FormBox;
