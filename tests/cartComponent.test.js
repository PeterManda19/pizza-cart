describe('cartComponent', function () {
  // Test case for adding a pizza to the cart
  it('should add a pizza to the cart', function () {
    // Initialize the cart component
    const component = cartComponent();

    // Call the addToCart method
    component.addToCart('Large Pizza', 114.90);

    // Check if the pizza is added to the cart
    assert.strictEqual(component.cart.length, 1);
    assert.deepEqual(component.cart[0], { name: 'Large Pizza', price: 114.90, quantity: 1 });
  });

  // Test case for removing a pizza from the cart
  it('should remove a pizza from the cart', function () {
    // Initialize the cart component
    const component = cartComponent();

    // Add a pizza to the cart
    component.addToCart('Medium Pizza', 79.90);

    // Call the removeFromCart method
    component.removeFromCart(0);

    // Check if the pizza is removed from the cart
    assert.strictEqual(component.cart.length, 0);
  });

  // Test case for calculating the total cost
  it('should calculate the correct total cost', function () {
    // Initialize the cart component
    const component = cartComponent();

    // Add pizzas to the cart
    component.addToCart('Small Pizza', 47.90);
    component.addToCart('Medium Pizza', 79.90);
    component.addToCart('Large Pizza', 114.90);

    // Calculate the total cost
    const totalCost = component.calculateTotal();

    // Check if the total cost is calculated correctly
    assert.strictEqual(totalCost, '242.70');
  });
});
