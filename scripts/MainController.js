(function() {

    'use strict';

    angular
        .module('formlyApp')
        .controller('MainController', MainController);

    function MainController(charclass) {

    var vm = this;

    // The object that is references in index.html
    vm.maker = {};
    
    // An array of objects that make the form fields. Formly is cool like that :)
    vm.makerFields = [
        {
            key: 'first_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'First Name',
                placeholder: 'Your name',
                required: true
            }
        },
        {
            key: 'last_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Last Name',
                placeholder: 'Family name',
                required: true
            }
        },
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'Email address',
                placeholder: 'butt@butt.com',
                required: true
            }
        },
        {
            key: 'human',
            type: 'checkbox',
            templateOptions: {
                label: 'Are you a human?',
            },
            hideExpression: '!model.email'
        },
        {
            key: 'charclass',
            type: 'select',
            templateOptions: {
                label: 'Your Character Class',
                options: charclass.getClasses()
            },
            hideExpression: '!model.email'
        },
    ];  
}

})();