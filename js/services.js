var data = [
    {
        id: 1,
        name: "Shoes",
        price: 70,
        quantity: 1
    },
    {
        id: 2,
        name: "Hat",
        price: 32,
        quantity: 1
    },
    {
        id: 3,
        name: "Umbrella",
        price: 28,
        quantity: 1
    },
    {
        id: 4,
        name: "Gloves",
        price: 45,
        quantity: 1
    },
    {
        id: 5,
        name: "Scarf",
        price: 25,
        quantity: 1
    }
];

angular.module('itemsService',[])
.factory('items', function(){
       return data;
    });

angular.module('userService',[])
    .factory('user', function(){
        console.log('factory');
        return {name:'', email:''};
    });