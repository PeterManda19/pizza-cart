/**
 * Alpine.js component for managing the shopping cart functionality
 */
function cartComponent() {
    return {
        // Cart items
        cart: [],

        /**
         * Add a pizza to the cart
         * @param {Object} pizza - The pizza object to add to the cart
         */
        addToCart: function (name, price) {
            // Check if the selected pizza is already in the cart
            const existingPizza = this.cart.find(
                item => item.name === name && item.price === price);

            if (existingPizza) {
                existingPizza.quantity++;
            } else {
                this.cart.push({
                    name: name,
                    price: price,
                    quantity: 1
                });
            }
        },

        /**
         * Remove a pizza from the cart
         * @param {number} index - The index of the pizza item to remove
         */
        removeFromCart: function (index) {
            this.cart.splice(index, 1);
        },

        /**
         * Calculate the total cost of the items in the cart
         * @returns {string} - The total cost in the format '0.00'
         */
        calculateTotal: function () {
            if (this.cart.length === 0) {
                return '0.00';
            }

            let total = 0;
            for (let i = 0; i < this.cart.length; i++) {
                const pizza = this.cart[i];
                total += pizza.price * pizza.quantity;
            }
            return total.toFixed(2);
        },

        // Message to be displayed
        message: "Thank you for choosing Perfect Pizza!",

        /**
         * Get the payment amount (total cost)
         * @returns {string} - The payment amount in the format '0.00'
         */
        paymentAmount: function () {
            return this.calculateTotal();
        },

       /**
         * Checkout function
         */
        checkout: function () {
            if (this.cart.length === 0) return;

            const paymentAmount = parseFloat(this.paymentAmount());
            const paymentInput = prompt("Enter payment amount:");
            const enteredAmount = parseFloat(paymentInput);

            if (!isNaN(enteredAmount) && enteredAmount >= paymentAmount) {
                alert("Enjoy your pizzas!");
                this.cart = [];
            } else {
                alert("Sorry, that is not enough money!");
            }
        },
    };
};