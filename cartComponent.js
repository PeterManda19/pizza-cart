function cartComponent() {
    return {
      cart: [],
      showPayButton: false,
      paymentAmount: 0.00,
      isPaymentValid: true,
      localStorageKey: "perfectPizzaCart",
  
      addToCart: function (pizzaName, pizzaPrice) {
        const existingPizza = this.cart.find(
          item => item.name === pizzaName && item.price === pizzaPrice
        );
  
        if (existingPizza) {
          existingPizza.quantity++;
          existingPizza.amount = existingPizza.price * existingPizza.quantity;
        } else {
          this.cart.push({
            name: pizzaName,
            price: pizzaPrice,
            quantity: 1,
            amount: pizzaPrice
          });
        }
  
        this.saveCartToLocalStorage();
      },
  
      buyPizza: function (pizzaName, pizzaPrice) {
        this.addToCart(pizzaName, pizzaPrice);
      },
  
      pizzaAdded: function (pizzaName) {
        return this.cart.some(item => item.name === pizzaName);
      },
  
      removeFromCart: function (pizzaName, pizzaPrice) {
        const index = this.cart.findIndex(item => item.name === pizzaName && item.price === pizzaPrice);
        if (index !== -1) {
          const pizza = this.cart[index];
          if (pizza.quantity > 1) {
            pizza.quantity--;
            pizza.amount = pizza.price * pizza.quantity;
          } else {
            this.cart.splice(index, 1);
          }
        }
  
        this.saveCartToLocalStorage();
      },
  
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
  
      message: "Thank you for choosing Perfect Pizza!",
  
      checkout: function () {
        if (this.cart.length === 0 || !this.isPaymentValid) return;
  
        const paymentAmount = parseFloat(this.paymentAmount);
        const totalCost = parseFloat(this.calculateTotal());
  
        if (!isNaN(paymentAmount) && paymentAmount >= totalCost) {
          this.message = "Payment successful! Enjoy your pizzas!";
          this.cart = [];
          this.showPayButton = false;
          this.paymentAmount = 0.00;
          this.saveCartToLocalStorage();
        } else {
          this.message = "Sorry, the payment amount is not sufficient.";
        }
      },
  
      getCartItemCost: function (pizzaName, pizzaPrice) {
        const pizza = this.cart.find(item => item.name === pizzaName && item.price === pizzaPrice);
        if (pizza) {
          return (pizza.price * pizza.quantity).toFixed(2);
        }
        return '0.00';
      },
  
      saveCartToLocalStorage: function () {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cart));
      },
  
      loadCartFromLocalStorage: function () {
        const cartData = localStorage.getItem(this.localStorageKey);
        if (cartData) {
          this.cart = JSON.parse(cartData);
        }
      },
  
      validatePayment: function () {
        const paymentAmount = parseFloat(this.paymentAmount);
        const totalCost = parseFloat(this.calculateTotal());
        this.isPaymentValid = !isNaN(paymentAmount) && paymentAmount >= totalCost;
      }
    };
  }
  
  const app = cartComponent();
  app.loadCartFromLocalStorage();
  