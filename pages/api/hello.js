// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const si = require("systeminformation");

export default (req, res) => {
  si.osInfo()
    .then((data) => console.log(JSON.stringify(data)))
    .catch((error) => console.error(error));

  si.processes()
    .then((data) => console.log(JSON.stringify(data)))
    .catch((error) => console.error(error));

  si.dockerInfo()
    .then((data) => console.log(JSON.stringify(data)))
    .catch((error) => console.error(error));

  var request = require("request");
  var options = {
    method: "GET",
    url: "https://5ff8565f10778b00170431fe.mockapi.io/builds",
  };

  res.setHeader("Cache-Control", "s-maxage=20, stale-while-revalidate");

  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.statusCode = 200;
    res.json(response.body);
  });
};
