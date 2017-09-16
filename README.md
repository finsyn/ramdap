# Ramda Promise Helpers

Just a few functions for working with promises in [Ramda](http://ramdajs.com/docs/).

## Functions

### ofP
`[Promise] -> Promise`
Creates one promise out of an array of promises

### pOf
`a -> Promise`
Turns any value into a promise that just resolves to that value

### joinP
`[(a -> Promise)] -> (a -> Promise)`
Creates one promise returning functions out of multiple promise returning functions.
The returned function will output an array of all the resulting resolved values. 

## Installation
```
npm i ramdap
```

