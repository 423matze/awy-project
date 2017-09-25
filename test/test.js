describe('This Test', function() {
    it('should always return true', function() {
    expect(true).toBe(true);
    });
})

// test
describe('getGrid', function(){
 it('zähle zusammen',function(){
     expect(getGrid(400)).toBe(500);
     expect(getGrid(200)).toBe(300);
 })
});