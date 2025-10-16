// Checkout Page JavaScript - Fixed Version
import phLocations from 'https://cdn.skypack.dev/ph-locations';

console.log('✅ Checkout.js loaded');

// Test if phLocations is available
console.log('📦 phLocations:', phLocations);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', async function() {
    console.log('🚀 DOM Ready, initializing...');
    
    try {
        // Test regions
        const regions = phLocations.regions;
        console.log('📍 Total regions found:', regions.length);
        console.log('📍 Sample regions:', regions.slice(0, 3));
        
        await initializeCheckout();
    } catch (error) {
        console.error('❌ Error:', error);
        alert('Error loading location data: ' + error.message);
    }
});

async function initializeCheckout() {
    console.log('Starting initialization...');
    
    // Populate regions immediately
    await populateRegions();
    
    // Setup event listeners
    setupEventListeners();
    
    console.log('✅ Initialization complete');
}

// Populate regions
async function populateRegions() {
    const regionSelect = document.getElementById('region');
    if (!regionSelect) {
        console.error('❌ Region select not found!');
        return;
    }
    
    console.log('Loading regions...');
    
    try {
        const regions = phLocations.regions;
        
        regionSelect.innerHTML = '<option value="">Select Region</option>';
        
        regions.forEach(region => {
            const option = document.createElement('option');
            option.value = region.reg_code;
            option.textContent = region.name;
            option.setAttribute('data-region-name', region.name);
            regionSelect.appendChild(option);
        });
        
        console.log('✅ Regions loaded:', regions.length);
    } catch (error) {
        console.error('❌ Error loading regions:', error);
    }
}

// Setup event listeners
function setupEventListeners() {
    const regionSelect = document.getElementById('region');
    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');
    
    if (regionSelect) {
        regionSelect.addEventListener('change', handleRegionChange);
        console.log('✅ Region listener added');
    }
    
    if (provinceSelect) {
        provinceSelect.addEventListener('change', handleProvinceChange);
        console.log('✅ Province listener added');
    }
    
    if (citySelect) {
        citySelect.addEventListener('change', handleCityChange);
        console.log('✅ City listener added');
    }
}

// Handle region change
async function handleRegionChange(e) {
    const regionCode = e.target.value;
    const regionName = e.target.options[e.target.selectedIndex]?.text || '';
    
    console.log('🔄 Region changed:', regionName, regionCode);
    
    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');
    const barangaySelect = document.getElementById('barangay');
    
    // Reset dropdowns
    citySelect.innerHTML = '<option value="">Select Province First</option>';
    citySelect.disabled = true;
    barangaySelect.innerHTML = '<option value="">Select City First</option>';
    barangaySelect.disabled = true;
    
    if (!regionCode) {
        provinceSelect.innerHTML = '<option value="">Select Region First</option>';
        provinceSelect.disabled = true;
        return;
    }
    
    // Show loading
    provinceSelect.innerHTML = '<option value="">Loading provinces...</option>';
    provinceSelect.disabled = true;
    
    try {
        const provinces = phLocations.getProvincesByRegion(regionCode);
        console.log('📍 Provinces found:', provinces.length);
        
        provinceSelect.innerHTML = '<option value="">Select Province</option>';
        
        provinces.forEach(province => {
            const option = document.createElement('option');
            option.value = province.prov_code;
            option.textContent = province.name;
            provinceSelect.appendChild(option);
        });
        
        provinceSelect.disabled = false;
        console.log('✅ Provinces loaded');
    } catch (error) {
        console.error('❌ Error loading provinces:', error);
        provinceSelect.innerHTML = '<option value="">Error loading provinces</option>';
        provinceSelect.disabled = false;
    }
}

// Handle province change
async function handleProvinceChange(e) {
    const provinceCode = e.target.value;
    const provinceName = e.target.options[e.target.selectedIndex]?.text || '';
    
    console.log('🔄 Province changed:', provinceName, provinceCode);
    
    const citySelect = document.getElementById('city');
    const barangaySelect = document.getElementById('barangay');
    
    // Reset barangay
    barangaySelect.innerHTML = '<option value="">Select City First</option>';
    barangaySelect.disabled = true;
    
    if (!provinceCode) {
        citySelect.innerHTML = '<option value="">Select Province First</option>';
        citySelect.disabled = true;
        return;
    }
    
    // Show loading
    citySelect.innerHTML = '<option value="">Loading cities...</option>';
    citySelect.disabled = true;
    
    try {
        const cities = phLocations.getCityMunByProvince(provinceCode);
        console.log('🏙️ Cities found:', cities.length);
        
        citySelect.innerHTML = '<option value="">Select City/Municipality</option>';
        
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.mun_code;
            option.textContent = city.name;
            citySelect.appendChild(option);
        });
        
        citySelect.disabled = false;
        console.log('✅ Cities loaded');
    } catch (error) {
        console.error('❌ Error loading cities:', error);
        citySelect.innerHTML = '<option value="">Error loading cities</option>';
        citySelect.disabled = false;
    }
}

// Handle city change
async function handleCityChange(e) {
    const cityCode = e.target.value;
    const cityName = e.target.options[e.target.selectedIndex]?.text || '';
    
    console.log('🔄 City changed:', cityName, cityCode);
    
    const barangaySelect = document.getElementById('barangay');
    
    if (!cityCode) {
        barangaySelect.innerHTML = '<option value="">Select City First</option>';
        barangaySelect.disabled = true;
        return;
    }
    
    // Show loading
    barangaySelect.innerHTML = '<option value="">Loading barangays...</option>';
    barangaySelect.disabled = true;
    
    try {
        const barangays = phLocations.getBarangayByMun(cityCode);
        console.log('🏘️ Barangays found:', barangays.length);
        
        barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
        
        barangays.forEach(barangay => {
            const option = document.createElement('option');
            option.value = barangay.name;
            option.textContent = barangay.name;
            barangaySelect.appendChild(option);
        });
        
        barangaySelect.disabled = false;
        console.log('✅ Barangays loaded');
    } catch (error) {
        console.error('❌ Error loading barangays:', error);
        barangaySelect.innerHTML = '<option value="">Error loading barangays</option>';
        barangaySelect.disabled = false;
    }
}
