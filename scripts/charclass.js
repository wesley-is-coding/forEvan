(function(){

    'use strict';

    angular
        .module('formlyApp')
        .factory('charclass', charclass);
        
        function charclass() {
            function getClasses() {
                return [
                    {
                        "name": "Mage",
                        "value":"mage"
                    },
                    {
                        "name":"Warrior",
                        "value":"warrior"
                    },
                    {
                        "name":"Priest",
                        "value":"priest"
                    },
                    {
                        "name":"Thief",
                        "value":"thief"
                    },
                    {
                        "name":"Shaman",
                        "value":"shaman"
                    }
                ];
            }

            return {
                getClasses: getClasses
            }
        }
        
})();