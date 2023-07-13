function cartComponent() {
    return {
      // Create component properties and methods

      // Cart items
    cart: [],

    // Add a pizza to the cart
    addToCart: function (pizza) {
      // Logic to add the selected pizza to the cart
      // Push the selected pizza to the cart array
      this.cart.push(pizza);
    },

    // Remove a pizza from the cart
    removeFromCart: function (index) {
      // Logic to remove a pizza from the cart at the given index
      // Splice the pizza from the cart array based on the index
      this.cart.splice(index, 1);
    },

    // Calculate the total cost of the items in the cart
    calculateTotal: function () {
      // Logic to calculate the total price of the items in the cart
      let total = 0;
      for (let i = 0; i < this.cart.length; i++) {
        total += this.cart[i].price;
      }
      return total;
    },

    // Message to be displayed
    message: "Thank you for choosing Perfect Pizza!",

    // Payment amount (Total cost)
    paymentAmount: function () {
      return this.calculateTotal();
    },

    // Checkout function
    checkout: function () {
      // Logic for the checkout process
      //Displaying a confirmation message
      alert("Payment successful! Thank you for your order!");
    },
  };
};
