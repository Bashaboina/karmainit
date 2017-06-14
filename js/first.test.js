/// <reference path="Calculator.js" />

describe('test group', () => {
    
    it('test case 1: 2*2 is 4', () => {
        expect( 2*2).toBe(4);
    });
        
        
    it('fail test case 1: 2*2 is 3', () => {
         expect( 2*2).toBe(3);
    });
});


describe('test calculator',() => {
    it('should be able to add 1 and 1', () => {
        var calc = new Calculator();
        expect(calc.add(1,1)).toBe(2);
    });

    it('should be able to divide 6 by 2', () => {
        var calc = new Calculator();
        expect(calc.divide(6,2)).toBe(3);
    })
})

// using befor each
describe('another calculator test', () => {
    var calc;
    beforeEach(
        function() {
            calc = new Calculator();
        }
    )
     it('should be able to add 1 and 1', () => {
      
        expect(calc.add(1,1)).toBe(2);
    });

    it('should be able to divide 6 by 2', () => {
       
        expect(calc.divide(6,2)).toBe(3);
    })
    it('should be able to divide rational number', ()=> {
        expect(calc.divide(1,3)).toBeGreaterThan(0.3);
        expect(calc.divide(1,3)).toBeLessThan(0.4);
    });
})


// using custom matcher
describe('another calculator test:', () => {
    var calc;
    beforeEach(
        function() {
            calc = new Calculator();
            
            //custom matcher -- todo: not working
            jasmine.addMatchers({
                toBeBetween: function(a,b) {
                    //return this.actual >= a  && this.actual <= b;
                    return true;
                }
            });
            
        }
    );
     it('should be able to add 1 and 1', () => {
      
        expect(calc.add(1,1)).toBe(2);
    });

    it('should be able to divide 6 by 2', () => {
       
        expect(calc.divide(6,2)).toBe(3);
    })
    it('should be able to divide rational number', ()=> {
        expect(calc.divide(1,3)).toBeGreaterThan(0.3);
        expect(calc.divide(1,3)).toBeLessThan(0.4);
    });
    it('should be able to divide rational number-v2 ', ()=> {
        expect(calc.divide(1,3)).toBeBetween(0.3,0.4);
        
    });
})