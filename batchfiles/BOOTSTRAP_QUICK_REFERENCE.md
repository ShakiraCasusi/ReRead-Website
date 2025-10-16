# 🎨 Bootstrap Quick Reference - Re;Read Website

## 📌 Quick Copy-Paste Bootstrap Classes

### Navigation Bar Classes
```html
<!-- Add these classes to your existing navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Re;Read</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
```

### Button Classes
```html
<!-- Primary CTA buttons -->
<button class="btn btn-primary">Add to Cart</button>

<!-- Secondary buttons -->
<button class="btn btn-outline-secondary">View Details</button>

<!-- Success buttons (checkout) -->
<button class="btn btn-success">Proceed to Checkout</button>

<!-- Small buttons -->
<button class="btn btn-sm btn-primary">Quick Add</button>

<!-- Large buttons -->
<button class="btn btn-lg btn-primary">Shop Now</button>
```

### Card Components
```html
<!-- Book Card with Bootstrap -->
<div class="card h-100">
  <img src="book.jpg" class="card-img-top" alt="Book Title">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">Book Title</h5>
    <p class="card-text">Author Name</p>
    <p class="card-text fw-bold text-primary">₱250</p>
    <button class="btn btn-primary mt-auto">Add to Cart</button>
  </div>
</div>
```

### Form Controls
```html
<!-- Search Input -->
<div class="input-group">
  <input type="text" class="form-control" placeholder="Search books...">
  <button class="btn btn-outline-secondary" type="button">
    <i class="fas fa-search"></i>
  </button>
</div>

<!-- Select Dropdown -->
<select class="form-select" aria-label="Sort by">
  <option selected>Sort by: Featured</option>
  <option value="1">Price: Low to High</option>
  <option value="2">Price: High to Low</option>
</select>

<!-- Checkbox -->
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="remember">
  <label class="form-check-label" for="remember">
    Remember me
  </label>
</div>
```

### Grid System
```html
<!-- Responsive Book Grid -->
<div class="container">
  <div class="row g-4">
    <!-- Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols -->
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <!-- Book card here -->
    </div>
  </div>
</div>
```

### Utility Classes

#### Spacing
```html
<!-- Margin -->
<div class="mt-3">Margin top 3</div>
<div class="mb-4">Margin bottom 4</div>
<div class="my-5">Margin vertical 5</div>
<div class="mx-auto">Margin horizontal auto (center)</div>

<!-- Padding -->
<div class="pt-3">Padding top 3</div>
<div class="pb-4">Padding bottom 4</div>
<div class="py-5">Padding vertical 5</div>
<div class="px-3">Padding horizontal 3</div>
```

#### Text
```html
<!-- Alignment -->
<p class="text-start">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-end">Right aligned</p>

<!-- Weight -->
<p class="fw-bold">Bold text</p>
<p class="fw-normal">Normal weight</p>
<p class="fw-light">Light weight</p>

<!-- Size -->
<h1 class="fs-1">Heading size 1</h1>
<p class="fs-6">Small text</p>
```

#### Colors
```html
<!-- Background Colors -->
<div class="bg-primary text-white">Primary background</div>
<div class="bg-success text-white">Success background</div>
<div class="bg-light">Light background</div>

<!-- Text Colors -->
<p class="text-primary">Primary text</p>
<p class="text-success">Success text</p>
<p class="text-danger">Danger text</p>
<p class="text-muted">Muted text</p>
```

#### Display & Flexbox
```html
<!-- Display -->
<div class="d-none">Hidden</div>
<div class="d-block">Block</div>
<div class="d-flex">Flexbox container</div>

<!-- Flexbox -->
<div class="d-flex justify-content-between">
  <div>Left</div>
  <div>Right</div>
</div>

<div class="d-flex align-items-center">
  Vertically centered items
</div>

<div class="d-flex flex-column">
  Vertical stack
</div>
```

---

## 🔄 Converting Existing Components

### 1. Update Shop Filter Buttons
**Before:**
```html
<button class="filter-btn active" data-filter="genre">
  Genre <i class="fas fa-chevron-down"></i>
</button>
```

**After (Add Bootstrap classes):**
```html
<button class="btn btn-light dropdown-toggle filter-btn active" 
        data-filter="genre" data-bs-toggle="dropdown">
  Genre
</button>
```

### 2. Update Book Cards
**Before:**
```html
<article class="book-card">
  <div class="badge">Like New</div>
  <figure class="book-image">
    <img src="book.jpg" alt="">
  </figure>
  <h3>Book Title</h3>
  <p class="author">Author</p>
  <p class="price">₱250</p>
  <button onclick="addToCart()">Add to Cart</button>
</article>
```

**After (Add Bootstrap):**
```html
<article class="card book-card h-100">
  <span class="badge bg-success position-absolute top-0 end-0 m-2">Like New</span>
  <img src="book.jpg" class="card-img-top" alt="Book Title">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">Book Title</h5>
    <p class="card-text text-muted">Author</p>
    <p class="card-text fw-bold text-primary">₱250</p>
    <button class="btn btn-primary mt-auto" onclick="addToCart()">
      <i class="fas fa-shopping-cart"></i> Add to Cart
    </button>
  </div>
</article>
```

### 3. Update Search Bar
**Before:**
```html
<div class="search-container">
  <input type="text" placeholder="Search books...">
  <button><i class="fas fa-search"></i></button>
</div>
```

**After:**
```html
<div class="input-group search-container">
  <input type="text" class="form-control" placeholder="Search books...">
  <button class="btn btn-outline-secondary">
    <i class="fas fa-search"></i>
  </button>
</div>
```

### 4. Update Pagination
**Before:**
```html
<div class="pagination">
  <button class="prev">Previous</button>
  <button class="page active">1</button>
  <button class="page">2</button>
  <button class="next">Next</button>
</div>
```

**After:**
```html
<nav aria-label="Page navigation">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

---

## 🎯 Specific Page Updates

### Index.html (Homepage)

#### Hero Section
```html
<section class="hero bg-light py-5">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <h1 class="display-4 fw-bold">Find Your Next Great Read</h1>
        <p class="lead">Buy and sell pre-loved books across the Philippines</p>
        <a href="pages/shop.html" class="btn btn-primary btn-lg">
          Shop Now <i class="fas fa-arrow-right ms-2"></i>
        </a>
      </div>
      <div class="col-lg-6">
        <img src="images/hero-books.jpg" class="img-fluid" alt="Books">
      </div>
    </div>
  </div>
</section>
```

#### Featured Books Grid
```html
<section class="featured-section py-5">
  <div class="container">
    <h2 class="text-center mb-4">Featured Books</h2>
    <div class="row g-4">
      <div class="col-6 col-md-4 col-lg-3">
        <!-- Book card -->
      </div>
      <!-- Repeat for more books -->
    </div>
  </div>
</section>
```

### Shop.html (Shop Page)

#### Filter Sidebar
```html
<aside class="col-lg-3">
  <div class="card mb-4">
    <div class="card-header">
      <h5 class="mb-0">Filters</h5>
    </div>
    <div class="card-body">
      <!-- Genre Filter -->
      <h6 class="mb-3">Genre</h6>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="romance">
        <label class="form-check-label" for="romance">Romance</label>
      </div>
      <!-- More filters -->
    </div>
  </div>
</aside>
```

#### Products Grid
```html
<main class="col-lg-9">
  <div class="row g-4">
    <div class="col-12 col-sm-6 col-md-4 col-xl-3">
      <!-- Book card -->
    </div>
  </div>
</main>
```

### Cart.html (Shopping Cart)

#### Cart Table
```html
<div class="table-responsive">
  <table class="table table-hover align-middle">
    <thead class="table-light">
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <img src="book.jpg" class="me-3" style="width: 50px;" alt="">
            <div>
              <h6 class="mb-0">Book Title</h6>
              <small class="text-muted">Author Name</small>
            </div>
          </div>
        </td>
        <td>₱250</td>
        <td>
          <input type="number" class="form-control form-control-sm" 
                 value="1" min="1" style="width: 70px;">
        </td>
        <td class="fw-bold">₱250</td>
        <td>
          <button class="btn btn-sm btn-danger">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

#### Checkout Summary
```html
<div class="card">
  <div class="card-header bg-primary text-white">
    <h5 class="mb-0">Order Summary</h5>
  </div>
  <div class="card-body">
    <div class="d-flex justify-content-between mb-2">
      <span>Subtotal:</span>
      <span>₱250</span>
    </div>
    <div class="d-flex justify-content-between mb-2">
      <span>Shipping:</span>
      <span>₱50</span>
    </div>
    <hr>
    <div class="d-flex justify-content-between fw-bold fs-5">
      <span>Total:</span>
      <span class="text-primary">₱300</span>
    </div>
    <button class="btn btn-success w-100 mt-3">
      Proceed to Checkout
    </button>
  </div>
</div>
```

---

## 🎨 Bootstrap + Custom CSS Tips

### Override Bootstrap Carefully
```css
/* In your custom.css */

/* Keep Bootstrap base, customize colors */
.btn-primary {
  background-color: #8B4513; /* Your brand color */
  border-color: #8B4513;
}

.btn-primary:hover {
  background-color: #6B3410;
  border-color: #6B3410;
}

/* Customize cards */
.card {
  border-radius: 12px; /* Rounder corners */
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Adjust spacing */
.books-grid {
  gap: 24px; /* Custom gap instead of Bootstrap's */
}
```

### Combine Bootstrap with Custom Classes
```html
<!-- Use both Bootstrap utilities and custom classes -->
<div class="book-card card h-100 shadow-sm">
  <!-- Bootstrap: card h-100 shadow-sm -->
  <!-- Custom: book-card -->
</div>

<button class="btn btn-primary add-to-cart-btn">
  <!-- Bootstrap: btn btn-primary -->
  <!-- Custom: add-to-cart-btn (for JS targeting) -->
</button>
```

---

## ⚠️ Important Reminders

1. **Load Order Matters:**
   ```html
   <link href="bootstrap.min.css" rel="stylesheet">
   <link href="custom.css" rel="stylesheet"> <!-- After Bootstrap -->
   ```

2. **Don't Remove Existing Classes:**
   ```html
   <!-- ✅ GOOD: Add Bootstrap alongside existing -->
   <button class="add-to-cart btn btn-primary" onclick="addToCart()">
   
   <!-- ❌ BAD: Removing existing classes breaks JS -->
   <button class="btn btn-primary" onclick="addToCart()">
   ```

3. **Keep JavaScript Attributes:**
   ```html
   <!-- ✅ Keep onclick, data-id, etc. -->
   <button class="btn btn-primary" 
           onclick="addToCart()" 
           data-id="123">
     Add to Cart
   </button>
   ```

4. **Test After Each Change:**
   - Add Bootstrap classes
   - Save file
   - Refresh browser
   - Test functionality
   - Check for console errors

---

## 📏 Bootstrap Breakpoints Reference

```css
/* Bootstrap responsive breakpoints */
xs: < 576px   (Extra small - Mobile)
sm: ≥ 576px   (Small - Large mobile)
md: ≥ 768px   (Medium - Tablet)
lg: ≥ 992px   (Large - Small desktop)
xl: ≥ 1200px  (Extra large - Desktop)
xxl: ≥ 1400px (Extra extra large - Large desktop)
```

### Usage in Grid:
```html
<!-- Different columns for different screens -->
<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
  <!-- Mobile: 1 column (12/12) -->
  <!-- Tablet: 2 columns (6/12) -->
  <!-- Small desktop: 3 columns (4/12) -->
  <!-- Desktop: 4 columns (3/12) -->
  <!-- Large desktop: 6 columns (2/12) -->
</div>
```

---

## 🚀 Next Steps

1. Copy relevant sections from this guide
2. Paste into your HTML files
3. Adjust content to match your data
4. Test in browser
5. Make adjustments as needed

**Remember:** Bootstrap is a tool to enhance, not replace, your existing design!
