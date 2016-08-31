(function () {
	"use strict";

	describe('angularjs homepage todo list', function() {
		it('should add a todo', function() {
			browser.get('http://staging/');
			element(by.model('vm.user.username')).sendKeys('france');
			element(by.model('vm.user.password')).sendKeys('france');
			element(by.id('loginButton')).click();
			browser.pause();
			//expect(browser.getTitle()).toEqual('3D Repo');

			/*
			element(by.model('todoList.todoText')).sendKeys('write first protractor test');
			element(by.css('[value="add"]')).click();

			var todoList = element.all(by.repeater('todo in todoList.todos'));
			expect(todoList.count()).toEqual(3);
			expect(todoList.get(2).getText()).toEqual('write first protractor test');

			// You wrote your first test, cross it off the list
			todoList.get(2).element(by.css('input')).click();
			var completedAmount = element.all(by.css('.done-true'));
			expect(completedAmount.count()).toEqual(2);
			*/
		});
	});
}());
