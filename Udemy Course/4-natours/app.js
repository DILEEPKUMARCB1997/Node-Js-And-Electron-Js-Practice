const express = require("express");
const fs = require("fs");
const port = 3000;

const app = express();

app.use(express.json()); // Middleware for modifying the incoming request data

// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ message: "Hello from the Server Side!", app: "Natours" });
// });

// app.post("/", (req, res) => {
//   res.send("You con post to this end point....");
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    status: "Success",
    results: tours.length,
    data: { tours },
  });
});

app.post("/api/v1/tours", (req, res) => {
  //   console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "Success",
        data: {
          tour: newTour,
        },
      });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}....`);
});
