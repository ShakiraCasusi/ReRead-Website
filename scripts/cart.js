// scripts/cart.js - JavaScript for the cart page

document.addEventListener('DOMContentLoaded', function() {
    initCartPage();
});

function initCartPage() {
    initCartCalculations();
    initQuantityControls();
    initRemoveButtons();
    initCheckoutProcess();
    initContinueShopping();
    loadCartFromStorage();
}

function initCartCalculations() {
    // Calculate totals when page loads and when quantities change
    updateCartTotal();

    // Auto-update when quantities change (already handled by main.js)
    // but we can add additional logic here if needed
}

function initQuantityControls() {
    const quantityBtns = document.querySelectorAll('.quantity button');

    quantityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            const quantitySpan = this.parentNode.querySelector('span');
            const cartItem = this.closest('.cart-item');
            let quantity = parseInt(quantitySpan.textContent);

            if (action === '+' && quantity < 99) {
                quantity++;
                quantitySpan.textContent = quantity;
                updateItemTotal(cartItem, quantity);
                showNotification('Quantity increased');
            } else if (action === '-' && quantity > 1) {
                quantity--;
                quantitySpan.textContent = quantity;
                updateItemTotal(cartItem, quantity);
                showNotification('Quantity decreased');
            }

            // Update overall cart total
            updateCartTotal();
        });
    });
}

function updateItemTotal(cartItem, quantity) {
    if (!cartItem) return;

    const priceElement = cartItem.querySelector('.current');
    const totalElement = cartItem.querySelector('.item-total');

    if (priceElement) {
        const price = parseFloat(priceElement.textContent.replace('₱', '').replace(',', ''));
        const total = price * quantity;

        if (totalElement) {
            totalElement.textContent = `₱${total}`;
        }
    }
}

function initRemoveButtons() {
    const removeBtns = document.querySelectorAll('.btn-remove');

    removeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            const itemTitle = cartItem?.querySelector('.item-title')?.textContent || 'Item';

            if (confirm(`Remove "${itemTitle}" from your cart?`)) {
                // Animate removal
                cartItem.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                cartItem.style.opacity = '0';
                cartItem.style.transform = 'translateX(-100%)';

                setTimeout(() => {
                    cartItem.remove();
                    updateCartTotal();
                    showNotification(`${itemTitle} removed from cart`);

                    // Check if cart is empty
                    checkEmptyCart();
                }, 300);
            }
        });
    });
}

function checkEmptyCart() {
    const cartItems = document.querySelectorAll('.cart-item');

    if (cartItems.length === 0) {
        showEmptyCartMessage();
    }
}

function showEmptyCartMessage() {
    const cartList = document.querySelector('.cart-items');
    const cartContainer = document.querySelector('.cart-container');

    if (cartList && cartContainer) {
        cartList.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    <i class="fa-solid fa-shopping-cart"></i>
                </div>
                <h3>Your cart is empty</h3>
                <p>Add some books to get started!</p>
                <a href="../index.html" class="btn primary">Continue Shopping</a>
            </div>
        `;

        // Hide the summary sidebar for empty cart
        const summary = document.querySelector('.summary');
        if (summary) {
            summary.style.display = 'none';
        }
    }
}

function initCheckoutProcess() {
    const checkoutBtns = document.querySelectorAll('.btn-primary.block');

    checkoutBtns.forEach(btn => {
        if (btn.textContent.includes('Checkout')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();

                const cartItems = document.querySelectorAll('.cart-item');
                if (cartItems.length === 0) {
                    alert('Your cart is empty. Add some items before checking out.');
                    return;
                }

                // Check if user is signed in
                const user = localStorage.getItem('rereadUser');
                if (!user) {
                    alert('Please sign in to proceed with checkout.');
                    window.location.href = 'signin.html';
                    return;
                }

                proceedToCheckout();
            });
        }
    });
}

function proceedToCheckout() {
    // Show loading state
    const checkoutBtn = document.querySelector('.btn-primary.block');
    const originalText = checkoutBtn.textContent;

    checkoutBtn.textContent = 'Processing...';
    checkoutBtn.disabled = true;

    // Simulate checkout process
    setTimeout(() => {
        alert('Order placed successfully! You will receive a confirmation email shortly.');

        // Clear cart
        localStorage.removeItem('rereadCart');
        document.querySelectorAll('.cart-item').forEach(item => item.remove());

        // Show empty cart message
        showEmptyCartMessage();

        // Reset button
        checkoutBtn.textContent = originalText;
        checkoutBtn.disabled = false;

    }, 2000);
}

function initContinueShopping() {
    const continueBtns = document.querySelectorAll('.btn-secondary.block');

    continueBtns.forEach(btn => {
        if (btn.textContent.includes('Continue')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = '../index.html';
            });
        }
    });
}

function loadCartFromStorage() {
    // Load any saved cart data and display items
    // This is a placeholder - in a real implementation, you'd load cart items from localStorage
    // and dynamically create the cart item elements

    console.log('Loading cart from storage...');
}

function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let subtotal = 0;
    let itemCount = 0;

    cartItems.forEach(item => {
        const priceElement = item.querySelector('.current');
        const quantityElement = item.querySelector('.quantity span');

        if (priceElement && quantityElement) {
            const price = parseFloat(priceElement.textContent.replace('₱', '').replace(',', ''));
            const quantity = parseInt(quantityElement.textContent);
            subtotal += price * quantity;
            itemCount += quantity;
        }
    });

    // Update order summary
    const subtotalElement = document.querySelector('.summary-row span');
    const totalElement = document.querySelector('.summary-total span');

    if (subtotalElement) {
        subtotalElement.textContent = `Subtotal (${itemCount} items)`;
    }

    if (totalElement) {
        const shipping = 50; // Fixed shipping cost
        const total = subtotal + shipping;
        totalElement.textContent = `₱${total}`;
    }

    // Update the subtotal amount (the second span in the row)
    const subtotalAmount = document.querySelector('.summary-row:last-of-type span:last-child');
    if (subtotalAmount) {
        subtotalAmount.textContent = `₱${subtotal}`;
    }
}

// Utility function to show notifications
function showNotification(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
if (!document.querySelector('#cart-notifications-styles')) {
    const style = document.createElement('style');
    style.id = 'cart-notifications-styles';
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}
