<<<<<<< HEAD
// joke action code 
=======
const getJoke = require("./joke");
const core = require("@actions/core");

async function run() {
  const joke = await getJoke();
  console.log(joke);
  core.setOutput("joke-output", joke);
}

run();
>>>>>>> de9181415a2062b03918e22c57ab75b6bb2dedf1
