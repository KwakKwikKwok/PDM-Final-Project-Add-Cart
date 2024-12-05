let cart = []; // Array to store cart items
let total = 0; // Variable to store the total price

// Toggle the cart visibility
function toggleCart() {
    const cartBox = document.getElementById('cartBox');
    cartBox.style.display = cartBox.style.display === 'none' ? 'block' : 'none';
}

// Function to update the quantity and add item to the cart
function updateQuantity(event, itemName, itemPrice) {
    const quantityDisplay = document.getElementById(`quantity-${itemName}`);
    let quantity = parseInt(quantityDisplay.textContent);

    if (event.target.classList.contains('increment')) {
        quantity++;
    } else if (event.target.classList.contains('decrement') && quantity > 0) {
        quantity--;
    }

    quantityDisplay.textContent = quantity;

    // Add item to cart if quantity > 0, else remove it
    if (quantity > 0) {
        addItemToCart(itemName, itemPrice, quantity);
    } else {
        removeItemFromCart(itemName);
    }
}

// Function to add item to the cart
function addItemToCart(itemName, itemPrice, quantity) {
    console.log(`Adding item: ${itemName}, Price: ${itemPrice}, Quantity: ${quantity}`);

    const existingItemIndex = cart.findIndex(item => item.name === itemName);
    if (existingItemIndex === -1) {
        // Add new item to the cart
        cart.push({ name: itemName, price: itemPrice, quantity: quantity });
        total += itemPrice * quantity; // Add to the total price
    } else {
        // Update quantity and total for existing item
        const existingItem = cart[existingItemIndex];
        total -= existingItem.price * existingItem.quantity; // Remove old total for this item
        existingItem.quantity = quantity;
        total += itemPrice * quantity; // Add new total for this item
    }

    updateCartDisplay();
}

// Function to remove item from the cart
function removeItemFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        const item = cart[itemIndex];
        total -= item.price * item.quantity; // Remove total for this item
        cart.splice(itemIndex, 1); // Remove the item from the cart
        updateCartDisplay();
    }
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('total-price');
    const cartTotalDisplay = document.getElementById('cart-total-display'); // Total in the total-container

    cartItemsContainer.innerHTML = ''; // Clear the cart items container

    // Loop through each item in the cart array and display it
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

    // Update the total price display in both cart box and total-container
    const formattedTotal = `Rp ${total}`;
    totalPriceElement.innerText = formattedTotal; // In the cart box
    cartTotalDisplay.textContent = formattedTotal; // In the total-container
}
