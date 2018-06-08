const { tapP, convergeP, applySpecP } = require('./index');
const { always, tap, pipe } = require('ramda');
const t = require('tap');

const oneP = () => Promise.resolve([1, 2]);
const twoP = () => Promise.resolve([3, 4]);

t.test('converge with promises', t => {

  convergeP(
    t.end, [
      oneP,
      twoP
    ])(null);
});

t.test('applySpec with promises', t => {

  applySpecP({
    a: oneP,
    b: twoP
  })(null)
  .then(({ a, b }) => {
    t.match(a, [1, 2]);
    t.match(b, [3, 4]);
    t.end();
  });

});

t.test('tap with promises', t => {

  const code = 'testing'

  tapP(oneP)(code)
    .then(res => {
      t.equals(res, code)
      t.end()
    })
});
