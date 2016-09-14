/**
 * Created by Preetham on 14/09/2016.
 */

angular.module("cart", [])
    .factory("cart", function () {
        var cartData = [];

        return {
            addProduct: function(count, id, name, price) {
                var addedToExitingItem = false;

                for(var i=0; i < cartData.length; i++) {
                    if(cartData[i].id == id) {
                        cartData[i].count++;
                        addedToExitingItem = true;
                        break;
                    }
                }

                if(!addedToExitingItem) {
                    cartData.push({
                        count: 1, id: id, name: name, price: price
                    });
                }
            },

            removeProduct: function (id) {
                for (var i = 0; i < cartData.length; i++) {
                    if(cartData[i].id == id) {
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
};

