const core =  require('@actions/core');
const github = require('@actions/github');

try {
  // fetch the value of the input 'who-to-greet' specified in action.yml
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`hello ${nameToGreet}!`);
  // Recored the time of greeting as an output
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
} catch (error) {
  //handle erors and indicate failure
  core.setFailed(error.message);
}
