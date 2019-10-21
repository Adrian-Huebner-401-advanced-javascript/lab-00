'use strict';

let pol = require('../../pol');

describe('proof of life', () => {

  it('lives by default', () => {
    expect(pol.isAlive()).toBeTruthy();
  });

  it('dies with a param', () => {
    expect(pol.isAlive('x')).toBeFalsy();
  });

});