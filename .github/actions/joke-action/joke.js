<<<<<<< HEAD
// joke action code 
=======
const request = require("request-promise");

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true,
};

async function getJoke() {
  const res = await request(options);
  return res.joke;
}

module.exports = getJoke;
>>>>>>> de9181415a2062b03918e22c57ab75b6bb2dedf1
