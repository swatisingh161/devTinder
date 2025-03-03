// Handle Auth Middleware for all requests GET, POST, PATCH, DELETE
const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorised = token === "xyz";
  if (!isAdminAuthorised) {
    res.status(401).send("Unauthorised Access");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "xyz";
  const isUserAuthorised = token === "xyz";
  if (!isUserAuthorised) {
    res.status(401).send("Unauthorised Access");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
