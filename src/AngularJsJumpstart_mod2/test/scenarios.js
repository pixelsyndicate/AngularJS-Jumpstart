describe('defaultCtrl', function () {

    it('should create "customers" model with 4 customers', function () {
        var scope = {},
            ctrl = new defaultCtrl(scope);

        expect(scope.customers.length).toBe(4);
    });

});
