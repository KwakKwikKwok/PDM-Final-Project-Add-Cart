let cart = []; 
let total = 0; 

function toggleCart() {
    const cartBox = document.getElementById('cartBox');
    cartBox.style.display = cartBox.style.display === 'none' ? 'block' : 'none';
}

function updateQuantity(event, itemName, itemPrice) {
    const quantityDisplay = document.getElementById(`quantity-${itemName}`);
    let quantity = parseInt(quantityDisplay.textContent);

    if (event.target.classList.contains('increment')) {
        quantity++;
    } else if (event.target.classList.contains('decrement') && quantity > 0) {
        quantity--;
    }

    quantityDisplay.textContent = quantity;

    if (quantity > 0) {
        addItemToCart(itemName, itemPrice, quantity);
    } else {
        removeItemFromCart(itemName);
    }
}

function addItemToCart(itemName, itemPrice, quantity) {
    console.log(`Adding item: ${itemName}, Price: ${itemPrice}, Quantity: ${quantity}`);

    const existingItemIndex = cart.findIndex(item => item.name === itemName);
    if (existingItemIndex === -1) {
        cart.push({ name: itemName, price: itemPrice, quantity: quantity });
        total += itemPrice * quantity; 
    } else {
        const existingItem = cart[existingItemIndex];
        total -= existingItem.price * existingItem.quantity;
        existingItem.quantity = quantity;
        total += itemPrice * quantity;
    }

    updateCartDisplay();
}

function removeItemFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        total -= item.price * item.quantity; 
        cart.splice(itemIndex, 1);
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('total-price');
    const cartTotalDisplay = document.getElementById('cart-total-display');

    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        const cartItemContent = document.createElement('div');
        cartItemContent.classList.add('cart-item-content');

        cartItemContent.innerHTML = `
            <span class="quantity">${item.quantity}x</span>
            <span class="name">${item.name}</span>
            <span class="price">Rp ${(item.price * item.quantity)}</span>
        `;

        cartItemElement.appendChild(cartItemContent);
        cartItemsContainer.appendChild(cartItemElement);
    });

    const formattedTotal = `Rp ${total}`;
    totalPriceElement.innerText = formattedTotal;
    cartTotalDisplay.textContent = formattedTotal;
}

document.querySelector('.make-order-btn').addEventListener('click', function(event) {
    if (cart.length === 0) {
        event.preventDefault();
        alert("Your cart is empty! Please add items to your cart before proceeding.");
    }
});
