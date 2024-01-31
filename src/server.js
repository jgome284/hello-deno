// import express module from npm
import express from "npm:express@4";

const app = express();

app.get("/", (request, response) => {
  // some of the things that can be configure on the request
  console.log("Protocol: " + request.protocol)                     // "http"
  console.log("Hostname: " + request.hostname)                     // "localhost"
  console.log("Path: " + request.path)                             // "/"
  console.log("Original URL: " + request.originalUrl)              // "/"
  console.log("Subdomains: " + request.subdomains)                 // "[]"
  console.log("Content Type: " + request.header('Content-Type'))   // "undefined"
  console.log("User Agent: " + request.header('user-agent'))       // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36..."
  console.log("Authorization: " + request.header('Authorization')) // "undefined"
  
  // response to send on GET request
  response.send("Hello from Express!");
});

// run app on localhost:3000`
console.log("Express app is listening on localhost:3000 👂")
app.listen(3000);