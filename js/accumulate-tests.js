
'use strict';

describe('Create an accumulator to store the results of computations on lists: ', function() {

  describe('Case for an empty list', function () {

    it('should return [] for []', function() {
      var accumulator = function(e) { return e * e; };
      expect([]).toEqual(accumulate([], accumulator));
    });

  });

  describe('Case for computations on numbers', function () {

    it('should return [1, 4, 9] for [1, 2, 3]', function() {
      var accumulator = function(number) {
        return number * number;
      };

      var result = accumulate([1, 2, 3], accumulator);

      expect([1, 4, 9]).toEqual(result);
    });

  });

  describe('Case for computations on strings', function () {

    it('should return ["HELLO", "WORLD"] for "hello world".split(/" "/)', function() {
      var accumulator = function(word) {
        return word.toUpperCase();
      };

      var result = accumulate('hello world'.split(/\s/), accumulator);

      expect(['HELLO', 'WORLD']).toEqual(result);
    });

    it('should return ["eht", "kciuq", "nworb", "xof", "ctw"] for "the quick brown fox etc".split(/" "/)', function() {
      var accumulator = function(word) {
        return word.split('').reverse().join('');
      };

      var result = accumulate('the quick brown fox etc'.split(/\s/), accumulator);

      expect(["eht", "kciuq", "nworb", "xof", "cte"]).toEqual(result);
    });

  });

  describe('Case for recursive computations.', function () {

    it('should accumulate recursively', function() {
      var result = accumulate('a b c'.split(/\s/), function(char) {
        return accumulate('1 2 3'.split(/\s/), function(digit) {
          return char + digit;
        });
      });

      expect([["a1", "a2", "a3"], ["b1", "b2", "b3"], ["c1", "c2", "c3"]]).toEqual(result);
    });

  });

});
