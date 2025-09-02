import jwt from "jsonwebtoken"

function auth(req, res, next) {
  // 1️⃣ Get token from headers
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // 2️⃣ Verify token
  jwt.verify(token, process.env.CLIENT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    // 3️⃣ Attach user info to request object
    req.user = decoded;
    next(); // proceed to the next middleware or route handler
  });
}

export default auth