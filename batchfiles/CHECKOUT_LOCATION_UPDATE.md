# Checkout Location Selector Update

## What Changed

The checkout page now uses the **ph-locations** package from CDN to provide complete Philippine location data with cascading dropdowns.

## Features Implemented

### 1. **Complete Philippine Regions**
- All 17 regions of the Philippines are now available:
  - **NCR** (National Capital Region)
  - **Region I** (Ilocos Region)
  - **Region II** (Cagayan Valley)
  - **Region III** (Central Luzon)
  - **Region IV-A** (CALABARZON)
  - **Region IV-B** (MIMAROPA)
  - **Region V** (Bicol Region)
  - **Region VI** (Western Visayas) - includes Aklan, Iloilo, Antique, etc.
  - **Region VII** (Central Visayas)
  - **Region VIII** (Eastern Visayas)
  - **Region IX** (Zamboanga Peninsula)
  - **Region X** (Northern Mindanao)
  - **Region XI** (Davao Region)
  - **Region XII** (SOCCSKSARGEN)
  - **Region XIII** (Caraga)
  - **CAR** (Cordillera Administrative Region)
  - **BARMM** (Bangsamoro Autonomous Region)

### 2. **Cascading Dropdowns**
The location selectors now work automatically:

1. **Select Region** → Provinces for that region appear
2. **Select Province** → Cities/Municipalities for that province appear
3. **Select City/Municipality** → Barangays for that city appear

### 3. **Example Flow (Region VI)**
When you select **Region VI (Western Visayas)**:
- **Provinces** will show: Aklan, Antique, Capiz, Guimaras, Iloilo, Negros Occidental
- If you select **Aklan**:
  - **Cities/Municipalities** will show all municipalities in Aklan
- If you select a **Municipality** (e.g., Kalibo):
  - **Barangays** will show all barangays under that municipality

### 4. **Dynamic Shipping Rates**
Shipping rates are calculated based on the selected region:
- NCR: ₱65 (1-2 days)
- Nearby Luzon regions: ₱75-95 (2-3 days)
- Visayas regions: ₱95-105 (3-4 days)
- Mindanao regions: ₱110-120 (4-5 days)
- BARMM: ₱130 (5-6 days)

## Technical Implementation

### Files Modified

1. **checkout.html**
   - Changed script loading to use ES6 module
   - Removed hardcoded region options

2. **checkout.js**
   - Imported `ph-locations` from CDN: `https://cdn.skypack.dev/ph-locations`
   - Implemented async functions for location data fetching
   - Updated shipping rates for all 17 regions
   - Created cascading dropdown logic using ph-locations API

### Key Functions

- `populateRegions()` - Loads all Philippine regions
- `populateProvinces(regionCode)` - Loads provinces for selected region
- `populateCities(provinceCode)` - Loads cities/municipalities for selected province
- `populateBarangays(cityCode)` - Loads barangays for selected city
- `getShippingKey(regionName)` - Maps region names to shipping rates

## How to Test

1. Open `pages/checkout.html` in your browser
2. Add items to cart (or it will redirect to shop)
3. Fill in the shipping form:
   - Select **Region VI** (Western Visayas)
   - Notice provinces appear automatically (Aklan, Iloilo, Antique, etc.)
   - Select **Aklan**
   - Notice municipalities appear automatically
   - Select a municipality
   - Notice barangays appear automatically
4. Complete the form and proceed through checkout

## Package Used

- **Package**: ph-locations
- **CDN**: Skypack (https://cdn.skypack.dev/ph-locations)
- **Data Source**: Official Philippine Standard Geographic Code (PSGC)

## Notes

- All location data is fetched from the ph-locations package
- No need to maintain a local location database
- Data is always up-to-date with official PSGC data
- Works offline after first load (cached by browser)
