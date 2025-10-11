# 🎨 Bootstrap 5.3.2 Integration Guide - Re;Read Website

## ✅ Step 1: Bootstrap CDN Added

### Files Updated with Bootstrap:
- ✅ `index.html` - Homepage
- ✅ `pages/shop.html` - Shop page  
- ✅ `pages/cart.html` - Shopping cart

### Bootstrap CDN Links Added:

**In `<head>` section (Before custom CSS):**
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
      rel="stylesheet" 
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" 
      crossorigin="anonymous">
```

**Before `</body>` closing tag (Before custom JS):**
```html
<!-- Bootstrap Bundle (includes Popper) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
        crossorigin="anonymous"></script>
```

---

## 📝 Step 2: Remaining HTML Files to Update

Add the same Bootstrap CDN links to:
- [ ] `pages/about.html`
- [ ] `pages/sell.html`
- [ ] `pages/signin.html`

**Quick Instructions:**
1. Add Bootstrap CSS link after Font Awesome, before custom CSS
2. Add Bootstrap JS before custom scripts at the end of body
3. Maintain the order: Bootstrap first, then custom files

---

## 🎨 Step 3: Bootstrap Components to Implement

### A. Navigation Bar (Bootstrap Navbar)
**Current:** Custom navbar with dropdown
**Update to:** Bootstrap Navbar component

```html
<!-- Example Bootstrap Navbar Structure -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Re;Read</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" 
             data-bs-toggle="dropdown">Browse</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Romance</a></li>
            <li><a class="dropdown-item" href="#">Adventure</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### B. Buttons (Bootstrap Button Classes)
**Current Buttons to Update:**
- Add to Cart buttons → `btn btn-primary`
- View buttons → `btn btn-outline-secondary`
- Filter buttons → `btn btn-light`
- Submit buttons → `btn btn-success`

**Example:**
```html
<!-- Before -->
<button class="add-to-cart" onclick="addToCart()">Add to Cart</button>

<!-- After (keeping onclick functionality) -->
<button class="btn btn-primary add-to-cart" onclick="addToCart()">
  <i class="fas fa-shopping-cart"></i> Add to Cart
</button>
```

### C. Forms (Bootstrap Form Classes)
**Update forms in:**
- Search bar → `form-control`
- Login/Signin forms → `form-control`, `form-label`
- Contact forms → `form-control`, `form-floating`

**Example:**
```html
<!-- Search Bar -->
<div class="input-group">
  <input type="text" class="form-control" placeholder="Search books...">
  <button class="btn btn-outline-secondary" type="button">
    <i class="fas fa-search"></i>
  </button>
</div>

<!-- Form Field -->
<div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input type="email" class="form-control" id="email" placeholder="name@example.com">
</div>
```

---

## 📐 Step 4: Bootstrap Grid System

### Current Layout Classes:
Your site already uses `.container` and custom grids. Update to Bootstrap grid:

```html
<!-- Books Grid with Bootstrap -->
<div class="container">
  <div class="row g-4">
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card book-card">
        <img src="book.jpg" class="card-img-top" alt="Book">
        <div class="card-body">
          <h5 class="card-title">Book Title</h5>
          <p class="card-text">Author Name</p>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
    <!-- Repeat for other books -->
  </div>
</div>
```

### Responsive Breakpoints:
- `col-12` - Full width on mobile
- `col-sm-6` - 2 columns on small tablets (≥576px)
- `col-md-4` - 3 columns on tablets (≥768px)
- `col-lg-3` - 4 columns on desktop (≥992px)

---

## 🎨 Step 5: Bootstrap Utility Classes

### Spacing Utilities (Replace custom margins/paddings):
```css
/* Before (CSS) */
.section { margin-top: 32px; padding-bottom: 64px; }

/* After (HTML classes) */
<div class="section mt-4 pb-5">
```

**Common Utilities:**
- `mt-3` = margin-top: 1rem
- `mb-4` = margin-bottom: 1.5rem
- `p-5` = padding: 3rem
- `mx-auto` = margin: 0 auto

### Text & Alignment:
- `text-center` - Center text
- `text-end` - Right align
- `fw-bold` - Bold text
- `fs-5` - Font size 5

### Colors:
- `bg-primary` - Primary background
- `text-success` - Green text
- `bg-light` - Light gray background
- `border-primary` - Primary colored border

---

## 🧪 Step 6: Testing with Apache Server

### A. Apache Setup Verification
1. **Check Apache Status:**
   ```bash
   # Windows
   httpd -v
   
   # Linux/Mac
   apache2 -v
   ```

2. **Locate Document Root:**
   - **XAMPP:** `C:\xampp\htdocs\`
   - **WAMP:** `C:\wamp\www\`
   - **Linux:** `/var/www/html/`

3. **Copy Project to Server:**
   ```bash
   # Copy entire project
   cp -r "C:\Users\Client\Documents\WST\ReRead Website" "C:\xampp\htdocs\reread"
   ```

### B. Start Apache Server

**Using XAMPP:**
1. Open XAMPP Control Panel
2. Click "Start" next to Apache
3. Verify green "Running" status

**Using Command Line:**
```bash
# Windows
httpd -k start

# Linux
sudo systemctl start apache2
```

### C. Access Your Website
Open browser and navigate to:
```
http://localhost/reread/index.html
```

Or if in htdocs root:
```
http://localhost/index.html
```

---

## ✅ Testing Checklist

### Bootstrap Integration Tests:

#### 1. **Visual Verification**
- [ ] Page loads without style conflicts
- [ ] Bootstrap styles are applied (check button appearance)
- [ ] Responsive breakpoints work (resize browser)
- [ ] Custom CSS still overrides where intended

#### 2. **Navigation Bar**
- [ ] Dropdown menus work on click
- [ ] Mobile hamburger menu appears on small screens
- [ ] Links navigate correctly
- [ ] Hover states work properly

#### 3. **Buttons**
- [ ] All buttons maintain onclick functionality
- [ ] Bootstrap hover effects work
- [ ] Button icons display correctly
- [ ] Cart buttons add items successfully

#### 4. **Forms**
- [ ] Search bar works with Bootstrap styling
- [ ] Form inputs accept text correctly
- [ ] Form submission events still fire
- [ ] Validation messages display properly

#### 5. **Grid System**
- [ ] Books display in correct columns
- [ ] Layout adapts to screen size:
  - Mobile (< 576px): 1 column
  - Tablet (768px): 2-3 columns
  - Desktop (≥992px): 4 columns
- [ ] Gap spacing is consistent

#### 6. **JavaScript Functionality**
- [ ] Filter system works correctly
- [ ] Add to cart functionality intact
- [ ] Search feature operational
- [ ] Pagination buttons work
- [ ] No console errors

### Browser Compatibility:
Test in multiple browsers:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## 🐛 Common Issues & Solutions

### Issue 1: Bootstrap Overrides Custom Styles
**Solution:** Ensure custom CSS is loaded AFTER Bootstrap:
```html
<!-- Correct Order -->
<link href="bootstrap.min.css" rel="stylesheet">
<link href="custom.css" rel="stylesheet"> <!-- After Bootstrap -->
```

### Issue 2: Dropdown Not Working
**Solution:** Verify Bootstrap JS is loaded before custom scripts:
```html
<!-- Correct Order -->
<script src="bootstrap.bundle.min.js"></script>
<script src="main.js"></script> <!-- After Bootstrap -->
```

### Issue 3: Grid Not Responsive
**Solution:** Add viewport meta tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Issue 4: Buttons Lost Functionality
**Solution:** Keep existing onclick attributes:
```html
<button class="btn btn-primary" onclick="originalFunction()">
  Click Me
</button>
```

---

## 📊 Performance Tips

1. **Use CDN:** Bootstrap from CDN is cached globally
2. **Minified Files:** Always use `.min.css` and `.min.js`
3. **Load Order:** Bootstrap CSS first, JS at page bottom
4. **Custom CSS:** Only override what's necessary

---

## 🔗 Useful Bootstrap Resources

- **Official Docs:** https://getbootstrap.com/docs/5.3/
- **Components:** https://getbootstrap.com/docs/5.3/components/
- **Grid System:** https://getbootstrap.com/docs/5.3/layout/grid/
- **Utilities:** https://getbootstrap.com/docs/5.3/utilities/
- **Examples:** https://getbootstrap.com/docs/5.3/examples/

---

## 📝 Next Steps

1. ✅ Bootstrap CDN added to main files
2. ⏳ Add Bootstrap to remaining HTML files
3. ⏳ Update navigation to Bootstrap navbar component
4. ⏳ Apply Bootstrap button classes
5. ⏳ Update forms with Bootstrap form classes
6. ⏳ Implement Bootstrap grid system
7. ⏳ Add utility classes for spacing/alignment
8. ⏳ Test all functionality on Apache server
9. ⏳ Browser compatibility testing
10. ⏳ Mobile responsiveness testing

---

## 📌 Important Notes

- **Do NOT remove existing classes** - Add Bootstrap classes alongside
- **Test after each change** - Ensure JavaScript still works
- **Mobile-first approach** - Start with mobile layout, then scale up
- **Keep custom branding** - Bootstrap is a foundation, not a replacement

---

**Last Updated:** January 2025  
**Bootstrap Version:** 5.3.2  
**Project:** Re;Read Online Bookstore
