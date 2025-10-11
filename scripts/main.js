// scripts/main.js - Re;Read Website Functionality

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTypingAnimation();
    initScrollAnimations();
    initSearchFunctionality();
    initDropdownNavigation();
    initCartFunctionality();
    initFilterFunctionality();
    loadCartFromLocalStorage();
    console.log('Re;Read website initialized successfully');
});

// TYPING ANIMATION - Per letter
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.display = 'inline-block';
    
    let index = 0;
    
    function typeNextCharacter() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeNextCharacter, 50); // 50ms per character
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                typingElement.style.borderRight = 'none';
            }, 500);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeNextCharacter, 1000);
}

// SCROLL ANIMATIONS - All sections
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            } else {
                // Remove animation class when element leaves viewport
                entry.target.classList.remove('animate-in');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
        '.animate-down, .animate-up, .fade-in, .slide-in-left, .slide-in-right, ' +
        '.new-releases, .featured-section, .stats-section, .filters, ' +
        '.section-header, .books-grid, .stats, article, .book-card'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in'); // Add fade-in class if not already present
        observer.observe(el);
    });

    // Special observer for stats with scroll reveal
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stats > div').forEach((stat, index) => {
                    setTimeout(() => {
                        stat.style.opacity = '0';
                        stat.style.transform = 'translateY(30px)';
                        setTimeout(() => {
                            stat.style.transition = 'all 0.6s ease';
                            stat.style.opacity = '1';
                            stat.style.transform = 'translateY(0)';
                        }, 50);
                    }, index * 150);
                });
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.stats').forEach(stats => {
        statsObserver.observe(stats);
    });
}

// Search functionality
function initSearchFunctionality() {
    const searchInputs = document.querySelectorAll('.search-bar input');
    const searchButtons = document.querySelectorAll('.search-bar button');

    searchInputs.forEach((input, index) => {
        const button = searchButtons[index];

        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(this.value);
            }
        });

        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                performSearch(input.value);
            });
        }
    });
}

function performSearch(query) {
    if (!query.trim()) {
        showNotification('Please enter a search term', 'warning');
        return;
    }

    console.log('Searching for:', query);
    showNotification(`Searching for: "${query}"`, 'info');
}

// Dropdown navigation functionality
function initDropdownNavigation() {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const dropdown = this.closest('.dropdown');
            const isActive = dropdown.classList.contains('active');
            
            // Close all dropdowns
            document.querySelectorAll('.dropdown').forEach(d => {
                d.classList.remove('active');
            });
            
            // Toggle current dropdown
            if (!isActive) {
                dropdown.classList.add('active');
            }
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    const genreLinks = document.querySelectorAll('.dropdown-content a');
    genreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const genre = this.textContent.trim();
            console.log('Selected genre:', genre);
            this.closest('.dropdown').classList.remove('active');
            showNotification(`Filtering by: ${genre}`, 'success');
        });
    });
}

// Cart functionality
function initCartFunctionality() {
    const addToCartBtns = document.querySelectorAll('.add-to-cart, .btn-add-to-cart');
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            const bookCard = this.closest('.book-card, article');
            if (bookCard) {
                const title = bookCard.querySelector('h3')?.textContent || 'Unknown Book';
                const price = bookCard.querySelector('.price')?.textContent || '₱0';

                addToCart({
                    title: title,
                    price: price,
                    quantity: 1
                });

                // Add animation to button
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                },

                showNotification(`${title} added to cart!`, 'success');
            }
        });
    });

    const quantityBtns = document.querySelectorAll('.quantity button');
    quantityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            const quantitySpan = this.parentNode.querySelector('span');
            let quantity = parseInt(quantitySpan.textContent);

            if (action === '+' && quantity < 99) {
                quantity++;
            } else if (action === '-' && quantity > 1) {
                quantity--;
            }

            quantitySpan.textContent = quantity;
            updateCartTotal();
        });
    });

    const removeBtns = document.querySelectorAll('.btn-remove');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            if (cartItem) {
                if (confirm('Remove this item from cart?')) {
                    cartItem.remove();
                    updateCartTotal();
                    showNotification('Item removed from cart', 'info');
                }
            }
        });
    });

    const checkoutBtns = document.querySelectorAll('.btn-primary.block');
    checkoutBtns.forEach(btn => {
        if (btn.textContent.includes('Checkout')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('Proceeding to checkout...', 'info');
            });
        }
    });
}

// Cart management
let cart = [];

function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.title === item.title);

    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }

    updateCartCount();
    updateCartTotal();
    saveCartToLocalStorage();
}

function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    console.log(`Cart count: ${cartCount}`);
}

function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let subtotal = 0;

    cartItems.forEach(item => {
        const priceText = item.querySelector('.current')?.textContent || '₱0';
        const price = parseFloat(priceText.replace('₱', '').replace(',', ''));
        const quantity = parseInt(item.querySelector('.quantity span')?.textContent || '1');
        subtotal += price * quantity;
    });

    const subtotalElement = document.querySelector('.summary-row span');
    const totalElement = document.querySelector('.summary-total span');

    if (subtotalElement) {
        const itemCount = cartItems.length;
        subtotalElement.textContent = `Subtotal (${itemCount} items)`;
    }

    if (totalElement) {
        const shipping = 50;
        const total = subtotal + shipping;
        totalElement.textContent = `₱${total.toLocaleString()}`;
    }

    const subtotalAmount = document.querySelector('.summary-row:last-of-type span');
    if (subtotalAmount && subtotalElement && subtotalElement.textContent.includes('Subtotal')) {
        subtotalAmount.textContent = `₱${subtotal.toLocaleString()}`;
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem('rereadCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('rereadCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Notification system with types
function showNotification(message, type = 'success') {
    const colors = {
        success: '#10b981',
        warning: '#f59e0b',
        info: '#3b82f6',
        error: '#ef4444'
    };

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.success};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-weight: 500;
        font-size: 15px;
        max-width: 400px;
        transform: translateX(450px);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);

    // Slide out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(450px)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Filter functionality
function initFilterFunctionality() {
    const filterDropdowns = document.querySelectorAll('.filter-dropdown');
    
    filterDropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.filter-btn');
        const content = dropdown.querySelector('.filter-dropdown-content');
        
        if (btn && content) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const isActive = dropdown.classList.contains('active');
                
                // Close all other dropdowns
                filterDropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                if (!isActive) {
                    dropdown.classList.add('active');
                } else {
                    dropdown.classList.remove('active');
                }
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.filter-dropdown')) {
            filterDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Handle filter selections
    const filterLinks = document.querySelectorAll('.filter-dropdown-content a');
    filterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filterType = this.closest('.filter-dropdown').querySelector('.filter-btn').dataset.filter;
            const filterValue = this.textContent.trim();
            
            console.log(`Filter ${filterType}: ${filterValue}`);
            
            // Close dropdown
            this.closest('.filter-dropdown').classList.remove('active');
            
            // Apply filter
            applyFilter(filterType, filterValue);
        });
    });

    // Sort button functionality
    const sortBtn = document.querySelector('.sort-btn');
    if (sortBtn) {
        sortBtn.addEventListener('click', function() {
            showNotification('Sorting applied', 'info');
        });
    }
}

function applyFilter(filterType, filterValue) {
    console.log(`Applying filter: ${filterType} = ${filterValue}`);
    showNotification(`Filter applied: ${filterValue}`, 'success');
}

// Add smooth scrolling to all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to hero images on scroll
window.addEventListener('scroll', function() {
    const heroImages = document.querySelector('.hero-images');
    if (heroImages && window.scrollY < 800) {
        const scrolled = window.scrollY;
        heroImages.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

console.log('Re;Read - All scripts loaded successfully');
                