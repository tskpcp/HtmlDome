describe('PhoneCat conteollers', function(){
	describe('PhoneListCtrl',function(){
		it('should crente "Phones" model with 2 phones',function(){
			var scope={},
			ctrl=new PhoneListCtrl(scope);
			expect(scope.phones.length).toBe(2);
		});
	});
});
