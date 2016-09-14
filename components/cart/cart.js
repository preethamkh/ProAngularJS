/**
 * Created by Preetham on 14/09/2016.
 */

angular.module("cart", [])
    .factory("cart", function () {
        var cartData = [];

        return {
            addProduct: function (id, name, price) {
                var addedToExitingItem = false;

                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].id == id) {
                        cartData[i].count++;
                        addedToExitingItem = true;
                        break;
                    }
                }

                if (!addedToExitingItem) {
                    cartData.push({
                        count: 1, id: id, name: name, price: price
                    });
                }
            },

            removeProduct: function (id) {
                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].id == id) {
                        cartData.splice(i, 1);
                        break;
                    }
                }
            },

            getProducts: function () {
                return cartData;
            }
        }
    })
    .directive("cartSummary", function (cart) {
        return {
            restrict: "E", // Directive can only be applied as an element
            templateUrl: "components/cart/cartSummary.html", // specifies the url of the partial view which will be inserted into the directive's element
            controller: function ($scope) { // provides data and behaviours to the partial view

                var cartData = cart.getProducts();
                $scope.total = function () {
                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total = cartData[i].price * cartData[i].count;
                    }
                    return total;
                }

                $scope.itemCount = function () {
                    var total = 0;
                    for (var i = 0; i < cartData.length; i++) {
                        total += cartData[i].count;
                    }
                    return total;
                }

            }
        }
    });

