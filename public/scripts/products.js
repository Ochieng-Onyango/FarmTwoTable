document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");
    const products = [
        {name: 'Fresh Eggs', category: 'eggs', price: 8.0, image: './images/egg.jpg' },
        { name: 'Meat', category: 'meat', price: 10.00, image: './images/meat.jpg' },
        { name: 'Chicken', category: 'chicken', price: 13.00, image: './images/chicken.png' },
        { name: 'Fertilised Eggs', category: 'eggs', price: 8.0, image: './images/eggs.jpg' },
        { name: 'Chopped-Chicken-Meat', category: 'meat', price: 10.00, image: './images/chopped.webp' },
        { name: 'Cockrel', category: 'chicken', price: 13.00, image: './images/cockrel.webp' },
        { name: 'Turkey', category: 'turkey', price: 20.00, image: './images/turkey.jpg' },
        { name: 'Turkey-Eggs', category: 'eggs', price: 10.00, image: './images/turkey-eggs.jpg' },
        { name: 'Marinated-Turkey', category: 'meat', price: 15.00, image: './images/marinated-turkey.jpg' },
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const categorySelect = document.getElementById('category');
    const productList = document.querySelector('.product-list');
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.querySelector('.cart-count');

    // Initialize cart count
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let cartCount = 0;
        cart.forEach(product => {
            cartCount += product.quantity;
        });
        localStorage.setItem('cartCount', cartCount);
        document.querySelector('.cart-count').textContent = cartCount;
    }
    updateCartCount(); // Initial call to set the cart count

    const cartSection = document.getElementById('cart-section');
    const cartItems = document.getElementById('cart-items');

    function renderProducts(category) {
        let filteredProducts = products;
        if (category !== 'all') {
            filteredProducts = products.filter(product => product.category === category);
        }

        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <button class="btn add-to-cart">Add to Cart</button>
            `;
            productList.appendChild(productItem);

            const addToCartButton = productItem.querySelector('.add-to-cart');
            addToCartButton.addEventListener('click', () => {
                addToCart(product);
            });
        });
    }

    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            renderProducts(this.value);
        });
    }

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the product already exists in the cart
        const existingProductIndex = cart.findIndex(item => item.name === product.name);

        if (existingProductIndex !== -1) {
            // If the product exists, increase the quantity
            cart[existingProductIndex].quantity += 1;
        } else {
            // If the product does not exist, add it with a quantity of 1
            product.quantity = 1;
            cart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} added to cart!`);
    }

    function renderCartItems() {
        cartItems.innerHTML = '';
        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
            renderCartItems();
        });
    } else {
        console.error("Cart icon not found");
    }

    renderProducts('all'); // Call the renderProducts function initially
});
