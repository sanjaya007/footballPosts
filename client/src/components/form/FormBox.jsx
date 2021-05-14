import React, { useState } from "react";
import { Form } from "react-bootstrap";
import FileBase from "react-file-base64";
import { Button } from "@material-ui/core";
import "../../css/form.css";
import { useDispatch } from "react-redux";
import { addPosts } from "../../redux/actions/posts";

const FormBox = () => {
  const [inputData, setInputData] = useState({
    title: "",
    caption: "",
    tags: "",
    file: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPosts(inputData));
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
            color="primary"
            size="large"
            fullWidth
          >
            Submit
          </Button>
          <Button
            className="clear-btn mt-2"
            variant="contained"
            color="disabled"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </Form>
        <div className="my_captcha"></div>
      </div>
    </>
  );
};

export default FormBox;
