// orders.js
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const clearOrdersBtn = document.getElementById('clear-orders-btn');
    const proceedToPaymentBtn = document.getElementById('proceed-to-payment-btn');

    function renderCartItems() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = document.querySelector('.cart-count');
        const cartCountFromStorage = localStorage.getItem('cartCount') || 0;
        cartCount.textContent = cartCountFromStorage;
        let total = 0;
    
        const cartGrid = document.querySelector('.cart-grid');
        cartGrid.innerHTML = '';
    
        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <p>Quantity: ${product.quantity}</p>
            `;
            cartGrid.appendChild(cartItem);
            total += product.price * product.quantity;
        });
    
        totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    }

      // Function to clear orders
    function clearOrders() {
      localStorage.removeItem('cart');
      localStorage.removeItem('cartCount');
      renderCartItems(); 
    }

     // Event listener for clearing orders
     clearOrdersBtn.addEventListener('click', clearOrders);

     // Event listener for proceeding to payment
     proceedToPaymentBtn.addEventListener('click', function() {
         alert('Proceeding to payment!');
         // Redirect to payment page
         window.location.href = 'payment.html';
     });

    renderCartItems();
});