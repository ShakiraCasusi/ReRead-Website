// scripts/signin.js - JavaScript for the signin page

document.addEventListener('DOMContentLoaded', function() {
    initSigninPage();
});

function initSigninPage() {
    initTabSwitching();
    initFormValidation();
    initSocialLogin();
    initPasswordToggle();
}

function initTabSwitching() {
    const signinTab = document.getElementById('tab-signin');
    const signupTab = document.getElementById('tab-signup');

    if (signinTab && signupTab) {
        // Handle tab switching via labels (since radio buttons are hidden)
        const signinLabel = document.querySelector('label[for="tab-signin"]');
        const signupLabel = document.querySelector('label[for="tab-signup"]');

        if (signinLabel) {
            signinLabel.addEventListener('click', function() {
                showPanel('signin');
            });
        }

        if (signupLabel) {
            signupLabel.addEventListener('click', function() {
                showPanel('signup');
            });
        }
    }
}

function showPanel(panelType) {
    const signinPanel = document.querySelector('.panel-signin');
    const signupPanel = document.querySelector('.panel-signup');

    if (panelType === 'signin') {
        if (signinPanel) signinPanel.style.display = 'block';
        if (signupPanel) signupPanel.style.display = 'none';

        // Update radio button
        const signinRadio = document.getElementById('tab-signin');
        const signupRadio = document.getElementById('tab-signup');

        if (signinRadio) signinRadio.checked = true;
        if (signupRadio) signupRadio.checked = false;
    } else {
        if (signinPanel) signinPanel.style.display = 'none';
        if (signupPanel) signupPanel.style.display = 'block';

        // Update radio button
        const signinRadio = document.getElementById('tab-signin');
        const signupRadio = document.getElementById('tab-signup');

        if (signinRadio) signinRadio.checked = false;
        if (signupRadio) signupRadio.checked = true;
    }
}

function initFormValidation() {
    // Sign in form validation
    const signinForm = document.querySelector('.panel-signin');
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;

            if (validateSigninForm(email, password)) {
                submitSignin(email, password);
            }
        });

        // Real-time validation
        const inputs = this.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateSigninField(this);
            });

            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }

    // Sign up form validation
    const signupForm = document.querySelector('.panel-signup');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelectorAll('input[type="password"]')[0].value;
            const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;

            if (validateSignupForm(email, password, confirmPassword)) {
                submitSignup(email, password);
            }
        });

        // Real-time validation
        const inputs = this.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateSignupField(this);
            });

            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });

        // Password confirmation validation
        const passwordInputs = this.querySelectorAll('input[type="password"]');
        if (passwordInputs.length >= 2) {
            passwordInputs[1].addEventListener('input', function() {
                validatePasswordConfirmation(passwordInputs[0].value, this.value, this);
            });
        }
    }
}

function validateSigninField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    if (field.type === 'email') {
        if (!value) {
            isValid = false;
            errorMessage = 'Email is required';
        } else if (!isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    } else if (field.type === 'password') {
        if (!value) {
            isValid = false;
            errorMessage = 'Password is required';
        } else if (value.length < 6) {
            isValid = false;
            errorMessage = 'Password must be at least 6 characters';
        }
    }

    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError(field);
    }

    return isValid;
}

function validateSignupField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    if (field.type === 'email') {
        if (!value) {
            isValid = false;
            errorMessage = 'Email is required';
        } else if (!isValidEmail(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    } else if (field.type === 'password') {
        if (!value) {
            isValid = false;
            errorMessage = 'Password is required';
        } else if (value.length < 8) {
            isValid = false;
            errorMessage = 'Password must be at least 8 characters';
        } else if (!isStrongPassword(value)) {
            isValid = false;
            errorMessage = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
        }
    }

    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError(field);
    }

    return isValid;
}

function validatePasswordConfirmation(password, confirmPassword, field) {
    if (confirmPassword && password !== confirmPassword) {
        showFieldError(field, 'Passwords do not match');
        return false;
    } else {
        clearFieldError(field);
        return true;
    }
}

function validateSigninForm(email, password) {
    return isValidEmail(email) && password.length >= 6;
}

function validateSignupForm(email, password, confirmPassword) {
    return isValidEmail(email) &&
           password.length >= 8 &&
           isStrongPassword(password) &&
           password === confirmPassword;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isStrongPassword(password) {
    // At least 8 characters, one uppercase, one lowercase, one number
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);

    return password.length >= 8 && hasUpperCase && hasLowerCase && hasNumbers;
}

function showFieldError(field, message) {
    clearFieldError(field);

    field.style.borderColor = '#ef4444';

    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #ef4444;
        font-size: 14px;
        margin-top: 4px;
        margin-bottom: 8px;
    `;

    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function clearFieldError(field) {
    field.style.borderColor = '';
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function initPasswordToggle() {
    const passwordInputs = document.querySelectorAll('input[type="password"]');

    passwordInputs.forEach(input => {
        // Create toggle button
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
        toggleBtn.className = 'password-toggle';
        toggleBtn.style.cssText = `
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            cursor: pointer;
            color: #6b7280;
            font-size: 16px;
        `;

        // Position the input group relatively
        const inputGroup = input.parentNode;
        if (inputGroup && inputGroup.classList.contains('input-group')) {
            inputGroup.style.position = 'relative';

            inputGroup.appendChild(toggleBtn);

            toggleBtn.addEventListener('click', function() {
                if (input.type === 'password') {
                    input.type = 'text';
                    this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
                } else {
                    input.type = 'password';
                    this.innerHTML = '<i class="fa-solid fa-eye"></i>';
                }
            });
        }
    });
}

function initSocialLogin() {
    const googleBtns = document.querySelectorAll('.social-btn.google');
    const facebookBtns = document.querySelectorAll('.social-btn.facebook');

    googleBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Placeholder for Google OAuth
            alert('Google login integration coming soon!');
        });
    });

    facebookBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Placeholder for Facebook OAuth
            alert('Facebook login integration coming soon!');
        });
    });
}

function submitSignin(email, password) {
    // Show loading state
    const submitBtn = document.querySelector('.panel-signin .btn');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Signing In...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // For demo purposes, accept any valid email/password
        if (isValidEmail(email) && password.length >= 6) {
            // Store user session (in a real app, this would be a JWT token)
            localStorage.setItem('rereadUser', JSON.stringify({
                email: email,
                signinTime: new Date().toISOString()
            }));

            alert('Sign in successful! Welcome back to Re;Read.');

            // Redirect to home page
            window.location.href = '../index.html';
        } else {
            alert('Invalid credentials. Please try again.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }, 1500);
}

function submitSignup(email, password) {
    // Show loading state
    const submitBtn = document.querySelector('.panel-signup .btn');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Creating Account...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        // For demo purposes, accept any valid signup
        if (isValidEmail(email) && password.length >= 8) {
            alert('Account created successfully! Welcome to Re;Read.');

            // Redirect to sign in or home page
            window.location.href = '../index.html';
        } else {
            alert('Error creating account. Please try again.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }, 1500);
}

// Check if user is already signed in
function checkAuthStatus() {
    const user = localStorage.getItem('rereadUser');
    if (user) {
        // User is signed in, could show different UI
        console.log('User is signed in:', JSON.parse(user).email);
    }
}

// Initialize auth check
checkAuthStatus();
