# 🚀 Apache Server Testing Guide - Re;Read Website

## 📋 Prerequisites

Before testing, ensure you have:
- ✅ Apache Server installed (XAMPP, WAMP, or standalone Apache)
- ✅ Bootstrap CDN links added to HTML files
- ✅ All files in proper directory structure
- ✅ No syntax errors in HTML/CSS/JS files

---

## 🔧 Step-by-Step Apache Setup

### Option 1: Using XAMPP (Recommended for Windows)

#### 1. Install XAMPP
- Download from: https://www.apachefriends.org/
- Install to default location: `C:\xampp\`

#### 2. Configure Apache
```bash
# Default configuration works for most cases
# Config file location: C:\xampp\apache\conf\httpd.conf
```

#### 3. Copy Project to htdocs
```bash
# Copy your project folder
Source: C:\Users\Client\Documents\WST\ReRead Website
Target: C:\xampp\htdocs\reread\

# Command (run in Command Prompt):
xcopy "C:\Users\Client\Documents\WST\ReRead Website" "C:\xampp\htdocs\reread\" /E /I /Y
```

#### 4. Start Apache
1. Open **XAMPP Control Panel**
2. Click **Start** next to Apache
3. Wait for status to show **green** and display port (usually :80)

#### 5. Access Website
Open browser and go to:
```
http://localhost/reread/index.html
```

---

### Option 2: Using Windows Apache (Standalone)

#### 1. Install Apache
```bash
# Download Apache from: https://httpd.apache.org/download.cgi
# Install to: C:\Apache24\
```

#### 2. Configure Document Root
Edit `C:\Apache24\conf\httpd.conf`:
```apache
DocumentRoot "C:/Users/Client/Documents/WST/ReRead Website"
<Directory "C:/Users/Client/Documents/WST/ReRead Website">
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```

#### 3. Start Apache Service
```bash
# Open Command Prompt as Administrator
cd C:\Apache24\bin
httpd.exe -k install
httpd.exe -k start
```

#### 4. Access Website
```
http://localhost/index.html
```

---

### Option 3: Using Node.js http-server (Quick Alternative)

If Apache is complicated, use Node.js simple server:

```bash
# Install Node.js from: https://nodejs.org/
# Then install http-server globally:
npm install -g http-server

# Navigate to project folder:
cd "C:\Users\Client\Documents\WST\ReRead Website"

# Start server:
http-server -p 8080

# Access at:
http://localhost:8080
```

---

## ✅ Verification Checklist

### 1. Apache Server Status
- [ ] Apache service is running
- [ ] Port 80 (or 8080) is not blocked
- [ ] No errors in Apache error log
- [ ] Green status in XAMPP Control Panel

### 2. File Permissions (Important!)
```bash
# Ensure Apache can read files
# Windows: Right-click folder → Properties → Security
# Add "Everyone" with Read & Execute permissions
```

### 3. Browser Access
- [ ] Can open http://localhost
- [ ] Can see Apache welcome page
- [ ] Can navigate to your project directory

---

## 🧪 Testing Your Bootstrap Integration

### Test 1: Homepage Load
```
URL: http://localhost/reread/index.html
```

**Expected Results:**
- [x] Page loads without errors
- [x] Bootstrap styles visible (modern look)
- [x] All images display correctly
- [x] Navigation menu works
- [x] No console errors (F12 → Console tab)

### Test 2: Bootstrap Components

#### A. Navigation Bar
1. Click on **Browse** dropdown
   - ✅ Dropdown should open with smooth animation
   - ✅ Should show all genre categories
   - ✅ Clicking items should navigate to shop page with filters

2. Try on mobile view (F12 → Toggle device toolbar)
   - ✅ Hamburger menu appears on small screens
   - ✅ Menu slides in/out on click
   - ✅ All links remain accessible

#### B. Buttons
1. Navigate to Shop page: `http://localhost/reread/pages/shop.html`
2. Test "Add to Cart" buttons:
   - ✅ Button has Bootstrap styling
   - ✅ Hover effect works
   - ✅ Click adds item to cart
   - ✅ Notification appears
   - ✅ Cart badge updates

3. Test filter buttons:
   - ✅ Filter dropdown opens
   - ✅ Selected filter applies
   - ✅ Results update correctly

#### C. Forms
1. Test search bar in navigation:
   - ✅ Input has Bootstrap form-control styling
   - ✅ Can type text
   - ✅ Search button works
   - ✅ Pressing Enter triggers search

2. If signin page exists:
   - ✅ Form fields have proper styling
   - ✅ Validation works
   - ✅ Submit button functions

### Test 3: Responsive Grid System

**Resize browser window to test breakpoints:**

#### Mobile (< 576px)
- ✅ Books display in single column
- ✅ Navigation collapses to hamburger
- ✅ Text remains readable
- ✅ All content fits without horizontal scroll

#### Tablet (768px - 991px)
- ✅ Books display in 2-3 columns
- ✅ Navigation shows full menu
- ✅ Spacing looks appropriate

#### Desktop (≥ 992px)
- ✅ Books display in 4 columns
- ✅ Full navigation bar visible
- ✅ Optimal spacing between elements

### Test 4: JavaScript Functionality

#### Shop Page Functions
```
URL: http://localhost/reread/pages/shop.html
```

1. **Filtering:**
   - [x] Click genre filter → Shows only Romance books
   - [x] Click quality filter → Shows only "Like New" books
   - [x] Click price filter → Shows books in price range
   - [x] Multiple filters combine correctly

2. **Search:**
   - [x] Type "Harry Potter" → Shows relevant results
   - [x] Type nonsense → Shows "No results" message
   - [x] Clear search → Shows all books again

3. **Pagination:**
   - [x] Page 1, 2, 3 buttons appear
   - [x] Clicking page 2 shows next 12 books
   - [x] "Previous" disabled on page 1
   - [x] "Next" disabled on last page

4. **Cart Operations:**
   - [x] Add book → Cart count increases
   - [x] Click cart icon → Redirects to cart page
   - [x] Cart page shows added items
   - [x] Can update quantity
   - [x] Can remove items

### Test 5: Cross-Browser Compatibility

Test in multiple browsers on your Apache server:

#### Chrome
```bash
http://localhost/reread/index.html
```
- [ ] All Bootstrap components work
- [ ] No console errors
- [ ] Animations smooth

#### Firefox
```bash
http://localhost/reread/index.html
```
- [ ] Styles render correctly
- [ ] Dropdowns function
- [ ] Forms work

#### Edge
```bash
http://localhost/reread/index.html
```
- [ ] Compatible with Chromium-based Edge
- [ ] All features functional

---

## 🐛 Troubleshooting Common Issues

### Issue 1: Apache Won't Start

**Error:** Port 80 already in use

**Solution:**
```bash
# Check what's using port 80
netstat -ano | findstr :80

# Option A: Stop conflicting service (like IIS)
net stop http

# Option B: Change Apache port
# Edit httpd.conf: Listen 8080
# Then access: http://localhost:8080/reread/
```

### Issue 2: 404 Not Found Error

**Solution:**
```bash
# Verify file path is correct
# Check DocumentRoot in httpd.conf
# Ensure file names match exactly (case-sensitive on Linux)

# Common mistake:
http://localhost/reread/Index.html  ❌ (capital I)
http://localhost/reread/index.html  ✅ (lowercase i)
```

### Issue 3: Bootstrap Not Loading

**Symptoms:** Page looks unstyled, like plain HTML

**Check:**
1. Internet connection (Bootstrap loads from CDN)
2. Open browser DevTools (F12) → Network tab
3. Look for failed requests (red lines)
4. Check if Bootstrap CSS file loaded (status 200)

**Solution:**
```html
<!-- Verify this link in <head> -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
      rel="stylesheet">

<!-- Check browser console for errors -->
```

### Issue 4: JavaScript Not Working

**Symptoms:** Buttons don't respond, dropdowns won't open

**Check:**
```javascript
// Open Console (F12) and look for errors like:
// "$ is not defined" - jQuery missing
// "bootstrap is not defined" - Bootstrap JS not loaded
```

**Solution:**
```html
<!-- Ensure correct load order at end of <body> -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="../scripts/main.js"></script>
<script src="../scripts/shop.js"></script>
```

### Issue 5: Images Not Loading

**Symptoms:** Broken image icons, no book covers

**Solution:**
```bash
# Check image paths are correct relative to HTML file
# shop.html is in pages/ folder, so images need ../

# From pages/shop.html:
<img src="../images/book.jpg">  ✅ Correct
<img src="images/book.jpg">     ❌ Wrong
```

### Issue 6: CSS Conflicts

**Symptoms:** Styling looks weird, buttons misaligned

**Solution:**
```html
<!-- Ensure custom CSS loads AFTER Bootstrap -->
<link href="bootstrap.min.css" rel="stylesheet">
<link href="styles.css" rel="stylesheet"> <!-- After Bootstrap -->

<!-- In your CSS, use !important if needed -->
.book-card {
    max-width: 320px !important;
}
```

---

## 📊 Performance Testing

### 1. Page Load Speed
```bash
# Open DevTools → Network tab
# Reload page
# Check load times:
```
- Bootstrap CSS: < 100ms ✅
- Bootstrap JS: < 150ms ✅
- Total page load: < 2 seconds ✅

### 2. Resource Sizes
- HTML files: < 100 KB each
- CSS files: < 200 KB combined
- JS files: < 300 KB combined
- Images: < 500 KB each (optimized)

### 3. Console Warnings
```javascript
// Check for warnings (F12 → Console)
// Common acceptable warnings:
// - Font Awesome version notices ✓
// - Third-party cookie warnings ✓

// Errors to fix:
// - "Failed to load resource" ❌
// - "Uncaught TypeError" ❌
// - "Mixed Content" ❌
```

---

## ✅ Final Testing Checklist

Before considering testing complete:

### Functionality Tests
- [ ] All pages load successfully
- [ ] Navigation works across all pages
- [ ] Search functionality operational
- [ ] Filter system functions correctly
- [ ] Add to cart works on all books
- [ ] Cart page displays items correctly
- [ ] Quantity updates work
- [ ] Remove from cart works
- [ ] Pagination buttons function
- [ ] All links navigate correctly

### Visual Tests
- [ ] Bootstrap styles applied consistently
- [ ] Custom branding preserved
- [ ] Images display correctly
- [ ] Icons render properly
- [ ] Color scheme consistent
- [ ] Typography readable
- [ ] Spacing appropriate
- [ ] Buttons styled uniformly

### Responsive Tests
- [ ] Mobile view (375px) works
- [ ] Tablet view (768px) works
- [ ] Desktop view (1920px) works
- [ ] No horizontal scrolling
- [ ] Touch targets adequate size
- [ ] Text remains readable
- [ ] Images scale properly

### Browser Tests
- [ ] Chrome (latest version)
- [ ] Firefox (latest version)
- [ ] Edge (latest version)
- [ ] Safari (if available)

### Performance Tests
- [ ] Page loads in < 3 seconds
- [ ] No console errors
- [ ] Smooth animations
- [ ] Quick interactions
- [ ] Efficient resource loading

---

## 📝 Test Results Template

Use this template to document your testing:

```
Date: ___________
Tester: ___________
Apache Version: ___________
Bootstrap Version: 5.3.2

✅ PASSED TESTS:
- Homepage loads successfully
- Shop page filters work
- Cart functionality intact
- [Add more...]

❌ FAILED TESTS:
- [List any issues found]

🔧 FIXES APPLIED:
- [List solutions implemented]

📊 PERFORMANCE METRICS:
- Homepage load time: ___ ms
- Shop page load time: ___ ms
- Console errors: ___

💡 NOTES:
- [Any additional observations]
```

---

## 🎯 Success Criteria

Your Bootstrap integration is successful when:

1. ✅ All pages load without errors on Apache
2. ✅ Bootstrap components render correctly
3. ✅ All JavaScript functionality preserved
4. ✅ Responsive design works across devices
5. ✅ No console errors in browser
6. ✅ Page load times < 3 seconds
7. ✅ Cross-browser compatibility verified
8. ✅ Custom styles override Bootstrap appropriately

---

## 📚 Additional Resources

- **Apache Documentation:** https://httpd.apache.org/docs/
- **XAMPP Forums:** https://community.apachefriends.org/
- **Bootstrap Testing:** https://getbootstrap.com/docs/5.3/getting-started/browsers-devices/
- **Browser DevTools:** https://developer.chrome.com/docs/devtools/

---

**Ready to Start Testing?**

1. Ensure Apache is running
2. Navigate to http://localhost/reread/
3. Follow the testing checklist above
4. Document any issues found
5. Apply fixes as needed
6. Re-test after fixes

**Good luck! 🚀**
