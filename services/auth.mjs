import pkg from "base-64";
const { decode } = pkg;

function decodeCredentials(authHeader) {
  const encodedCredentials = authHeader.trim().replace(/Basic\s+/i, "");

  const decodedCredentials = decode(encodedCredentials);

  return decodedCredentials.split(":");
}

export async function authMiddleware(req, res, next) {
  // Take the header and decode credentials
  const [username, password] = decodeCredentials(
    req.headers.authorization || "",
  );

  // Verify the credentials
  if (username === "admin" && password === "admin") {
    return next();
  }

  // Respond with authenticate header on auth failure.
  res.set("WWW-Authenticate", 'Basic realm="user_pages"');
  res.status(401).send("Authentication required.");
}
