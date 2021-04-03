const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const traningData = data.map(item => ({
  input: item.text,
  output: item.category
}));

network.train(traningData, {
  iterations: 2000,
  log: true,
  logPeriod: 10
});

const output = network.run('I fixed the power supply');
console.log(`Category: ${output}`);
