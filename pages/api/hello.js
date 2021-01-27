// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const si = require("systeminformation");

export default (req, res) => {
  si.osInfo()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  si.currentLoad()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  si.processes()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  si.services("*")
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  si.dockerInfo()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  console.log("Test page app");
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
