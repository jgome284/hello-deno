// Local import of person module
import Person, { sayHello } from "./person.ts";

// Create object through Person interface
const jose: Person = {
  lastName: "Gomez",
  firstName: "Jose",
};

// Say hello and print to stdout
console.log(sayHello(jose));

/* 
Serve HTTP requests with the given handler.
Defaults to port 8000 on local host: "127.0.0.1".
*/
Deno.serve((_request: Request) => {
    return new Response(sayHello(jose));
  });