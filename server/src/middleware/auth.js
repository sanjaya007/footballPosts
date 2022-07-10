import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const authtype = req.headers.authtype;

    let decodedData;

    if (authtype === "custom") {
      decodedData = jwt.verify(
        token,
        "iamsanjayapaudelandiamafullstackwebdeveloper"
      );
      req.userId = decodedData?.id;
      req.userName = decodedData?.name;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
      req.userName = decodedData?.name;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
