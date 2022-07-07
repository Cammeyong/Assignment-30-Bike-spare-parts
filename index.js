var app = angular.module("myApp", ['ngRoute']);

app.config( function($routeProvider) {
        
        $routeProvider
        .when('/home',  {
            templateUrl: "view/home.html"
        })
        .when('/bikeparts', {
            templateUrl: 'view/bikeparts.html',
            controller: 'myController'
        })
        .when('/cart', {
            templateUrl: 'view/cart.html'
        })
        .when('/register', {
            templateUrl: 'view/register.html'
        })
        .otherwise({
            redirectTo: '/home'
        })
    });

    app.controller('myController', ['$scope', function($scope) {
        $scope.items = [
        {
            img : "31-XaS2XgeL-300x300.jpg",
            brand : "Benelli TNT25/ TNT300/ TNT302 Front Fork Oil Seal",
            rating : "",
            price : 329
        },
        
        {
            img : "qu74MK6-300x300.jpg",
            brand : "Benelli TNT25/ TNT300/ TNT302/ TNT600i OEM Design Adjustable Brake Lever",
            rating : "",
            price : 2149
        },

        {
            img : "open-throttle-racers-benelli-fuel-pump-motor-300x300.jpg",
            brand : "Benelli TNT25/ TNT300/ TNT600i Compatible Fuel Pump Motor",
            rating : "",
            price : 3299
        },

        {
            img : "i8uOGNl-300x300.jpg",
            brand : "Benelli TNT25/TNT300/ 302/ TNT600i/ GT600 Rear Brake Mastery Cylinder",
            rating : "",
            price : "1849"
        },

        {
            img : "pKkSWBm-300x300.jpg",
            brand : "Benelli TNT25/TNT300/ 302/ TNT600i/ GT600 Sterring Ball Racer Set",
            rating : "",
            price : 1399
        },

        {
            img : "tnt250-clutch-cable-300x300.jpg",
            brand : "Benelli TNT250 Compatible Clutch Cable",
            rating : "",
            price : 699
        },
        
        {
            img : "benelli-250-Acci-cbale-300x300.jpg",
            brand : "Benelli TNT250 Compatible Throttle/ Accelerator Cable",
            rating : "",
            price : 699
        },
        
        {
            img : "eojqvGM-300x300.jpg",
            brand : "Benelli TNT250 Sprocket Set",
            rating : "",
            price : 2999
        },
        
        {
            img : "hbNGMEd-300x300.png",
            brand : "Benelli TNT300 2017 onwards Front Fork Oil Seal",
            rating : "",
            price : 299
        },
             
        {
            img : "benelli-ignition-coil-300x300.jpg",
            brand : "Benelli TNT300/ 302/TNT600i/ GT600 Metal Shell Compatible Ignition Coil",
            rating : "",
            price : 3499
        },
             
        {
            img : "EE2j7u3-300x300.jpg",
            brand : "Benelli TNT300/ TNT302 Compatible Throttle/ Accelerator Cable",
            rating : "",
            price : 1699
        },
             
        {
            img : "quMyFz7-300x300.jpg",
            brand : "Benelli TNT300/ TNT302 Magnet Coil",
            rating : "",
            price : 3799
        },
    ]

        $scope.carts = [];
    $scope.addProduct= function (item) {
    $scope.carts.push(item)
    };

    $scope.total = 0;
    $scope.quantity = 0;
    $scope.setTotals = function(product){

    if(product){
        
    $scope.total += product.price;
    $scope.quantity += 1;
    }
    }
    $scope.removeItem = function(product){
    if(product){
    $scope.carts.splice($scope.carts.indexOf(product), 1);
    $scope.total -= product.price;
    $scope.quantity -= 1;
    }
    }

    }]);

scrollUpButton = document.getElementById("scrollUp");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}