(function() {
  'use strict';

  describe('Create a new class to handle binary numbers: ', function() {

    describe('Case for numbers', function() {

      it('should return 1 for 1', function() {
        expect(new Binary('1').toDecimal()).toEqual(1);
      });

      it('should return 2 for 10', function() {
        expect(new Binary('10').toDecimal()).toEqual(2);
      });

      it('should return 9 for 1001', function() {
        expect(new Binary('1001').toDecimal()).toEqual(9);
      });

    });

    describe('Case for strings', function() {

      it('should return 0 for "carrot"', function() {
        expect(new Binary('carrot').toDecimal()).toEqual(0);
      });

    });

  });


})();
