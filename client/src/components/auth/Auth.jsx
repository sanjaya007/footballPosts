import React, { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import img from "../../images/google.png";
import "../../css/auth.css";
import { addUser, loginUser } from "../../redux/actions/user";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  file: "",
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Auth = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [registerForm, setRegisterForm] = useState(false);
  const [inputData, setInputData] = useState(initialState);
  const [imgPreview, setImgPreview] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const errorState = useSelector((state) => {
    return state.error;
  });

  useEffect(() => {
    if (user) navigate("/");
    function gapiStart() {
      gapi.client.init({
        clientId:
          "397659852505-esc457rudovlem0c34hfcfmghdv3p35b.apps.googleusercontent.com",
        scope: "email",
      });
    }

    gapi.load("client:auth2", gapiStart);
  }, []);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

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
      acc[value] = obj[value].toString().trim();
      return acc;
    }, {});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInputData = trimmedBody(inputData);
    setInputData(trimmedInputData);

    dispatch({ type: "CLEAR", action: null });

    if (registerForm) {
      for (const keys in trimmedInputData) {
        if (trimmedInputData[keys] === "") {
          handleError();
          return false;
        }
      }
      dispatch(
        addUser(inputData, navigate, (callback) => {
          if (callback.message) {
            setErrorMsg(callback.message);
            handleError();
          }
        })
      );
    } else {
      if (trimmedInputData.email === "" || trimmedInputData.password === "") {
        handleError();
        return false;
      }
      dispatch(
        loginUser(
          { email: inputData.email, password: inputData.password },
          navigate,
          (callback) => {
            if (callback.message) {
              setErrorMsg(callback.message);
              handleError();
            }
          }
        )
      );
    }
  };

  const googleSuccess = async (response) => {
    const result = response?.profileObj;
    const token = response?.tokenId;

    try {
      dispatch({
        type: "AUTH",
        payload: { result, token, accountType: "google", status: "success" },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = async (error) => {
    console.log(error);
  };

  return (
    <div className="auth-box flex-css">
      <div className="account-box">
        <div className="title pb-2">
          <h1>{registerForm ? "Welcome" : "Log In"}</h1>
          {registerForm ? (
            <p>
              Sign Up to join our <br />
              football media
            </p>
          ) : (
            <p>
              Welcome to our <br />
              football media
            </p>
          )}
        </div>
        {registerForm && (
          <div className="input-row">
            <div className="input-box">
              <label>First Name</label> <br />
              <input name="firstName" type="text" onChange={handleChange} />
            </div>
          </div>
        )}
        {registerForm && (
          <div className="input-row">
            <div className="input-box">
              <label>Last Name</label> <br />
              <input name="lastName" type="text" onChange={handleChange} />
            </div>
          </div>
        )}
        <div className="input-row">
          <div className="input-box">
            <label>Email</label> <br />
            <input name="email" type="email" onChange={handleChange} />
          </div>
        </div>
        <div className="input-row">
          <div className="input-box">
            <label>Password</label> <br />
            <input name="password" type="password" onChange={handleChange} />
          </div>
        </div>
        {registerForm && (
          <div className="input-row">
            <div className="input-box">
              <label>Confirm Password</label> <br />
              <input
                name="confirmPassword"
                type="password"
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        {registerForm && (
          <div className="input-row">
            <div className="file-box flex-css">
              <FileBase64
                className="file-base-input"
                type="file"
                multiple={false}
                onDone={({ base64 }) => {
                  setInputData({ ...inputData, file: base64 });
                  setImgPreview("File uploaded !!");
                }}
              />
              <FileUploadIcon />
              <p>Upload</p>
            </div>
            <div className="img-preview flex-css">
              <p>{imgPreview}</p>
            </div>
          </div>
        )}

        <div className="btn-container">
          <button onClick={handleSubmit}>
            {registerForm ? "Submit" : "Log In"}
          </button>
        </div>
        <div className="google-btn flex-css-row my-4">
          <img src={img} alt="google" />
          <p>Sign in with Google </p>
          <GoogleLogin
            clientId="397659852505-esc457rudovlem0c34hfcfmghdv3p35b.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Sign In with Google
              </button>
            )}
            buttonText="Login"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div className="note-text flex-css-row">
          <p>
            {registerForm ? "Already have account?" : "Don't have an account?"}
          </p>
          <span onClick={() => setRegisterForm((prev) => !registerForm)}>
            {registerForm ? "Login" : "Register"}
          </span>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={errorClose}>
        <Alert onClose={errorClose} severity="error">
          {errorMsg ? errorMsg : "All fields are required !"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Auth;
