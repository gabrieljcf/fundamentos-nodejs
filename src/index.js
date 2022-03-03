const express = require("express");

const app = express();

app.get("/courses", (request, response) => {
  return response.json(["NodeJs", "NestJs", "AdonisJs", "Express"]);
});

app.post("/courses", (request, response) => {
  return response.json(["NodeJs", "NestJs", "AdonisJs", "Express", "GraphQl"]);
});

app.put("/courses/:id", (request, response) => {
  return response.json([
    "NodeJs",
    "NestJs",
    "AdonisJs",
    "ExpressJs",
    "GraphQl",
  ]);
});

app.patch("/courses/:id", (request, response) => {
    return response.json([
      "NodeJs",
      "NestJs",
      "AdonisJs",
      "ExpressJs",
      "GraphQL",
    ]);
  });

app.delete("/courses/:id", (request, response) => {
  return response.json(["NodeJs", "NestJs", "AdonisJs", "ExpressJs"]);
});

app.listen(3333, () => console.log("App running on port 3333"));
