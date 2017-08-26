const { pipe, juxt, tap, zipObj, keys, values,
        pipeP, flatten } = require('ramda');

const ofP = a => Promise.all(a);

const joinP = arrayP => pipe(
  juxt(arrayP),
  ofP
);

const pOf = res => Promise.resolve(res);

const convergeP = (f, arrayP) => pipeP(
  joinP(arrayP),
  (arrayR) => f(...arrayR)
);

const applySpecP = spec => pipeP(
  joinP(
    values(spec)
  ),
  zipObj(keys(spec)),
  pOf
);

module.exports = {
  joinP,
  convergeP,
  applySpecP,
  ofP,
  pOf
};
