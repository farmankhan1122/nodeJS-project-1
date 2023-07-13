const teachers = [
  {
    id: 1,
    name: "sajid khan",
    age: 30,
  },
  {
    id: 2,
    name: "shahrukh khan",
    age: 23,
  },
  {
    id: 3,
    name: "farman khan",
    age: 20,
  },
];
const students = [
  {
    id: 1,
    name: "farman khan",
    age: 17,
  },
  {
    id: 2,
    name: "sher",
    age: 18,
  },
  {
    id: 3,
    name: "sohil",
    age: 18,
  },
];
const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const split = url.split("/").filter(Boolean);
  if (split[0] == "students") {
    if (split.length == 1) {
      res.end(JSON.stringify(students));
      res.writeHead(200, { "content-type": "application/json" });
    } else if (split.length == 2) {
      const studentWithid = students.find((x) => x.id == split[1]);
      if (studentWithid) {
        res.end(JSON.stringify(studentWithid));
        res.writeHead(200, { "content-type": "application/json" });
      } else {
        res.end("<h1>page note found<h1>");
        res.writeHead(404);
      }
    }
  } else if (split[0] == "teachers") {
    if (split.length == 1) {
      res.end(JSON.stringify(teachers));
      res.writeHead(200, { "content-type": "application/json" });
    } else if (split.length == 2) {
      const teacherWithid = teachers.find((x) => x.id == split[1]);
      if (teacherWithid) {
        res.end(JSON.stringify(teacherWithid));
        res.writeHead(200, { "content-type": "application/json" });
      } else {
        res.end("<h1>page note found<h1>");
        res.writeHead(404);
      }
    }
  } else {
    res.end("<h1>page note found<h1>");
    res.writeHead(404);
  }
});

server.listen(8080, "127.0.0.1", () => {
  console.log("listning to port no. 8080");
});
