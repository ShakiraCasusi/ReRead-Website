// Checkout Page JavaScript
import phLocations from 'https://esm.sh/ph-locations';

console.log('checkout.js loaded');
console.log('ph-locations object:', phLocations);
console.log('Available exports:', Object.keys(phLocations));

// Check if barangays are available
const { regions, provinces, citiesMunicipalities, barangays } = phLocations;

console.log('Regions loaded:', regions ? regions.length : 'none');
console.log('Provinces loaded:', provinces ? provinces.length : 'none');
console.log('Cities loaded:', citiesMunicipalities ? citiesMunicipalities.length : 'none');
console.log('Barangays loaded:', barangays ? barangays.length : 'NOT AVAILABLE');

console.log('Sample region structure:', regions[0]);
console.log('Sample province structure:', provinces[0]);

// Format region names to capitalize acronyms
function formatRegionName(name) {
  const acronyms = ['NCR', 'CAR', 'MIMAROPA', 'CALABARZON', 'SOCCSKSARGEN', 'BARMM', 'ARMM'];
  let formatted = name;
  
  acronyms.forEach(acronym => {
    const regex = new RegExp(`\\b${acronym}\\b`, 'gi');
    formatted = formatted.replace(regex, acronym);
  });
  
  return formatted;
}

// Create philippineLocations adapter for the imported data
const philippineLocations = {
  regions: regions.map(region => ({
    ...region,
    name: formatRegionName(region.name),
    reg_code: region.code || region.reg_code // Normalize the code property
  })),
  
  getProvincesByRegion: function(regionCode) {
    console.log('Getting provinces for region:', regionCode);
    
    // Log first province to see structure (only once)
    if (!this._loggedProvinceStructure) {
      console.log('📋 Province structure:', provinces[0]);
      console.log('📋 All province keys:', Object.keys(provinces[0]));
      this._loggedProvinceStructure = true;
    }
    
    const filtered = provinces.filter(province => {
      // Check all possible region code properties
      const provRegCode = province.regionCode || province.region || province.reg_code || province.regionIso;
      return provRegCode === regionCode;
    });
    console.log('Found provinces:', filtered.length);
    if (filtered.length > 0) {
      console.log('First matching province:', filtered[0]);
    }
    return filtered;
  },
  
  getCityMunByProvince: function(provinceCode) {
    console.log('Getting cities for province:', provinceCode);
    
    // Log first city to see structure (only once)
    if (!this._loggedCityStructure) {
      console.log('🏙️ City structure:', citiesMunicipalities[0]);
      console.log('🏙️ All city keys:', Object.keys(citiesMunicipalities[0]));
      this._loggedCityStructure = true;
    }
    
    const filtered = citiesMunicipalities.filter(city => {
      // Match the province code - likely 'province' property based on pattern
      const cityProvCode = city.province || city.provinceCode || city.prov_code;
      return cityProvCode === provinceCode;
    });
    console.log('Found cities:', filtered.length);
    if (filtered.length > 0) {
      console.log('First matching city:', filtered[0]);
    }
    return filtered;
  },
  
  getBarangayByMun: function(cityCode) {
    console.log('Getting barangays for city:', cityCode);
    // Use real Philippine barangay data for major cities
    const barangayData = {
      // NCR Cities
      '137401000': [ // Caloocan
        'Barangay 1', 'Barangay 2', 'Barangay 3', 'Barangay 4', 'Barangay 5',
        'Barangay 6', 'Barangay 7', 'Barangay 8', 'Barangay 9', 'Barangay 10',
        'Barangay 11', 'Barangay 12', 'Barangay 13', 'Barangay 14', 'Barangay 15',
        'Barangay 16', 'Barangay 17', 'Barangay 18', 'Barangay 19', 'Barangay 20',
        'Amparo', 'Bagong Silang', 'Balong Bato', 'Camarin', 'Caybiga', 'Deparo',
        'Grace Park East', 'Grace Park West', 'Kaybiga', 'Llano', 'Maysilo',
        'Morning Breeze', 'Pangarap Village', 'San Jose', 'Tala', 'Tandang Sora'
      ],
      '137402000': [ // Las Piñas
        'Almanza Uno', 'Almanza Dos', 'BF Resort Village', 'BFRV Las Piñas', 'Daniel Fajardo',
        'Elias Aldana', 'Ilaya', 'Manuyo Uno', 'Manuyo Dos', 'Pamplona Uno',
        'Pamplona Dos', 'Pamplona Tres', 'Pilar Village', 'Pulang Lupa Uno', 'Pulang Lupa Dos',
        'Talon Uno', 'Talon Dos', 'Talon Tres', 'Talon Kuatro', 'Talon Singko',
        'Verdant Acres', 'Zapote', 'Cut-cut', 'T.S. Cruz Subdivision'
      ],
      '137403000': [ // Makati
        'Bangkal', 'Bel-Air', 'Carmona', 'Cembo', 'Comembo', 'Dasmariñas',
        'East Rembo', 'Forbes Park', 'Guadalupe Nuevo', 'Guadalupe Viejo', 'Kasilawan',
        'La Paz', 'Magallanes', 'Olympia', 'Palanan', 'Pembo',
        'Pinagkaisahan', 'Pio del Pilar', 'Pitogo', 'Poblacion', 'Rizal',
        'San Antonio', 'San Isidro', 'San Lorenzo', 'Santa Cruz', 'Singkamas',
        'South Cembo', 'Tejeros', 'Urdaneta', 'Valenzuela', 'West Rembo'
      ],
      '137404000': [ // Malabon
        'Acacia', 'Baritan', 'Bayan-bayanan', 'Catmon', 'Concepcion', 'Dampalit',
        'Flores', 'Hulong Duhat', 'Ibaba', 'Longos', 'Maysilo',
        'Muzon', 'Niugan', 'Panghulo', 'Potero', 'San Agustin',
        'Santolan', 'Talisay', 'Tañong', 'Tinajeros', 'Tonsuya',
        'Tugatog'
      ],
      '137405000': [ // Mandaluyong
        'Addition Hills', 'Bagong Silang', 'Barangka Drive', 'Barangka Ibaba', 'Barangka Ilaya',
        'Barangka Itaas', 'Buayang Bato', 'Daang Bakal', 'Hagdang Bato Itaas', 'Hagdang Bato Libis',
        'Harapin Ang Bukas', 'Highway Hills', 'Hulo', 'Mabini-J.Rizal', 'Malamig',
        'Mauway', 'Namayan', 'New Zañiga', 'Old Zañiga', 'Pag-asa',
        'Plainview', 'Pleasant Hills', 'Poblacion', 'San Jose', 'Vergara',
        'Wack-Wack Greenhills'
      ],
      '137406000': [ // Manila
        'Binondo', 'Ermita', 'Intramuros', 'Malate', 'Paco', 'Pandacan',
        'Port Area', 'Quiapo', 'Sampaloc', 'San Andres', 'San Miguel', 'San Nicolas',
        'Santa Ana', 'Santa Cruz', 'Santa Mesa', 'Tondo', 'San Juan',
        'Carriedo', 'Divisoria', 'Escolta', 'Ongpin', 'Recto', 'Rizal Avenue',
        'Taft Avenue', 'United Nations Avenue', 'Pedro Gil', 'Mabini', 'Del Pilar'
      ],
      '137407000': [ // Marikina
        'Barangka', 'Calumpang', 'Concepcion Uno', 'Concepcion Dos', 'Fortune', 'Industrial Valley',
        'Jesus de la Peña', 'Malanday', 'Marikina Heights', 'Nangka', 'Parang',
        'San Roque', 'Santa Elena', 'Santo Niño', 'Tañong', 'Tumana'
      ],
      '137408000': [ // Muntinlupa
        'Alabang', 'Ayala Alabang', 'Buli', 'Cupang', 'Filinvest Corporate City', 'Poblacion',
        'Putatan', 'Sucat', 'Tunasan', 'Bayanan', 'Buli', 'Cupang', 'Poblacion',
        'Sucat', 'Tunasan', 'Alabang', 'Ayala Alabang', 'Filinvest Corporate City'
      ],
      '137409000': [ // Navotas
        'Bagumbayan North', 'Bagumbayan South', 'Bangculasi', 'Daanghari', 'Navotas East',
        'Navotas West', 'North Bay Boulevard North', 'North Bay Boulevard South', 'San Jose',
        'San Rafael Village', 'San Roque', 'Sipac-Almacen', 'Tafta', 'Tangos North',
        'Tangos South', 'Tanza 1', 'Tanza 2'
      ],
      '137410000': [ // Parañaque
        'Baclaran', 'BF Homes', 'Don Bosco', 'Don Galo', 'La Huerta', 'Marcelo Green',
        'Merville', 'Moonwalk', 'San Antonio', 'San Dionisio', 'San Isidro', 'San Martin de Porres',
        'Santo Niño', 'Tambo', 'Vitalez', 'B.F. International Village', 'Better Living',
        'Ireneville', 'Manila Bay Reclamation', 'Multinational Village', 'Ninoy Aquino International Airport',
        'United Parañaque Subdivision'
      ],
      '137411000': [ // Pasay
        'Barangay 1', 'Barangay 2', 'Barangay 3', 'Barangay 4', 'Barangay 5',
        'Barangay 6', 'Barangay 7', 'Barangay 8', 'Barangay 9', 'Barangay 10',
        'Barangay 11', 'Barangay 12', 'Barangay 13', 'Barangay 14', 'Barangay 15',
        'Barangay 16', 'Barangay 17', 'Barangay 18', 'Barangay 19', 'Barangay 20',
        'Apelo Cruz', 'Bay City', 'Cayetano Arellano', 'Dela Cruz', 'Dela Rama',
        'Don Carlos Village', 'Eisenhower', 'Fernandez', 'Fortune', 'Hero'
      ],
      '137412000': [ // Pasig
        'Bagong Ilog', 'Bagong Katipunan', 'Bambang', 'Buting', 'Caniogan', 'Dela Paz',
        'Kalawaan', 'Kapasigan', 'Kapitolyo', 'Malinao', 'Manggahan', 'Maybunga',
        'Oranbo', 'Palatiw', 'Pinagbuhatan', 'Pineda', 'Rosario', 'Sagad',
        'San Antonio', 'San Joaquin', 'San Jose', 'San Miguel', 'San Nicolas',
        'Santa Cruz', 'Santa Lucia', 'Santo Tomas', 'Sumilang', 'Ugong'
      ],
      '137413000': [ // Pateros
        'Aguho', 'Magtanggol', 'Martires del 96', 'Poblacion', 'San Pedro', 'San Roque',
        'Santa Ana', 'Santo Rosario-Kanluran', 'Santo Rosario-Silangan', 'Tabacalera'
      ],
      '137414000': [ // Quezon City
        'Alicia', 'Amihan', 'Apolonio Samson', 'Aurora', 'Baesa', 'Bagbag',
        'Bagong Lipunan ng Crame', 'Bagong Pag-asa', 'Bagong Silangan', 'Bagumbuhay', 'Bagumbayan',
        'Bahay Toro', 'Balingasa', 'Balintawak', 'Balong Bato', 'Banawe', 'Banlat',
        'Barangka', 'Batasan Hills', 'Bayanihan', 'Blue Ridge A', 'Blue Ridge B', 'Botocan',
        'Bungad', 'Camp Aguinaldo', 'Capitol Hills', 'Central', 'Claro', 'Commonwealth',
        'Crame', 'Cubao', 'Culiat', 'Damayan', 'Damayang Lagi', 'Del Monte',
        'Dioquino Zobel', 'Doña Imelda', 'Doña Josefa', 'Don Manuel', 'Duyan-Duyan',
        'E. Rodriguez', 'East Kamias', 'Escopa I', 'Escopa II', 'Escopa III', 'Escopa IV',
        'Fairview', 'Galas', 'Gintong Silahis', 'Grace Park', 'Greater Lagro', 'Gulod',
        'Holy Spirit', 'Horseshoe', 'Immaculate Conception', 'Kaligayahan', 'Kalusugan', 'Kamuning',
        'Katipunan', 'Kaunlaran', 'Kristong Hari', 'Krystal', 'Laging Handa', 'Libis',
        'Lourdes', 'Loyola Heights', 'Maharlika', 'Malaya', 'Mangga', 'Manresa',
        'Mariana', 'Mariblo', 'Marilag', 'Marikina Heights', 'Masambong', 'Masagana',
        'Matandang Balara', 'Milagrosa', 'N.S. Amoranto', 'Nagkaisang Nayon', 'Nayong Kanluran',
        'New Era', 'North Fairview', 'Novaliches Proper', 'Obrero', 'Old Capitol Site',
        'Oranbo', 'Pag-ibig sa Nayon', 'Paligsahan', 'Paltok', 'Pansol', 'Parang',
        'Pasong Putik', 'Pasong Tamo', 'Payatas', 'Phil-Am', 'Pinagkaisahan', 'Pinyahan',
        'Project 6', 'Project 7', 'Project 8', 'Quirino', 'R.P. Papa',
        'Ramona', 'Roxas', 'Sacred Heart', 'Saint Ignatius', 'Saint Peter', 'Salvacion',
        'Sampaguita Village', 'San Agustin', 'San Antonio', 'San Bartolome', 'San Isidro', 'San Jose',
        'San Martin de Porres', 'San Roque', 'San Vicente', 'Sangandaan', 'Santa Cruz', 'Santa Lucia',
        'Santa Monica', 'Santa Teresita', 'Santo Cristo', 'Santo Domingo', 'Santo Niño', 'Sauyo',
        'Sienna', 'Sikatuna Village', 'Silangan', 'Socorro', 'South Triangle', 'Tagumpay',
        'Talayan', 'Talipapa', 'Tandang Sora', 'Tatalon', 'Teachers Village East', 'Teachers Village West',
        'Ugong Norte', 'Unang Sigaw', 'University Hills', 'U.P. Campus', 'U.P. Village', 'Valencia',
        'Vasra', 'Veterans Village', 'Villa Maria Clara', 'West Kamias', 'West Triangle', 'White Plains'
      ],
      '137415000': [ // San Juan
        'Addition Hills', 'Balong-bato', 'Batis', 'Corazon de Jesus', 'Ermitaño',
        'Greenhills', 'Halo-halo', 'Isabelita', 'Kabayanan', 'Little Baguio',
        'Maytunas', 'Onse', 'Pasadena', 'Pedro Cruz', 'Progreso',
        'Rivera', 'Saint Joseph', 'Salapan', 'San Perfecto', 'Santa Lucia',
        'Tibagan', 'West Crame'
      ],
      '137416000': [ // Taguig
        'Bagumbayan', 'Bambang', 'Calzada', 'Central Bicutan', 'Central Signal Village', 'Fort Bonifacio',
        'Hagonoy', 'Ibayo-Tipas', 'Katuparan', 'Ligid-Tipas', 'Lower Bicutan', 'Maharlika Village',
        'Napindan', 'New Lower Bicutan', 'North Daang Hari', 'North Signal Village', 'Palingon',
        'Pinagsama', 'San Miguel', 'Santa Ana', 'South Daang Hari', 'South Signal Village',
        'Tanyag', 'Tuktukan', 'Upper Bicutan', 'Ususan', 'Wawa', 'Western Bicutan'
      ],
      '137417000': [ // Valenzuela
        'Arkong Bato', 'Bagbaguin', 'Balangkas', 'Bignay', 'Bisig', 'Canumay East',
        'Canumay West', 'Coloong', 'Dalandanan', 'Gen. T. de Leon', 'Isla',
        'Karuhatan', 'Lawang Bato', 'Lingunan', 'Mabolo', 'Malanday', 'Malinta',
        'Mapulang Lupa', 'Marulas', 'Maysan', 'Palasan', 'Parada', 'Pariancillo Villa',
        'Pasolo', 'Poblacion', 'Polo', 'Punturin', 'Rincon', 'Tagalag',
        'Ugong', 'Viente Reales', 'Wawang Pulo'
      ],

      // Major Provincial Cities
      '072201000': [ // Baguio City
        'Abanao-Zandueta-Kayong-Chugum-Otek', 'Alfonso Tabora', 'Ambiong', 'Andres Bonifacio',
        'Apugan-Loakan', 'Asin Road', 'Atok Trail', 'Aurora Hill Proper', 'Aurora Hill South Central',
        'Bagong Lipunan', 'Bakakeng Central', 'Bakakeng North', 'Balsigan', 'Bayan Park East',
        'Bayan Park Village', 'Bayan Park West', 'Bilar', 'Brookspoint', 'Cabinet Hill-Teacher\'s Camp',
        'Camdas Subdivision', 'Camp 7', 'Camp 8', 'Camp Allen', 'Campo Sioco', 'City Camp Central',
        'City Camp Proper', 'Country Club Village', 'Cresencia Village', 'Dagsian Upper', 'Daniel S. Guiang',
        'Dominican Hill-Mirador', 'Dontogan', 'Engineers\' Hill', 'Fairview Village', 'Fort del Pilar',
        'General Luna Lower', 'General Luna Upper', 'Gibraltar', 'Greenwater Village', 'Guadañu', 'Happy Hollow',
        'Happy Homes-Lucban', 'Hillside', 'Holy Ghost Extension', 'Holy Ghost Proper', 'Honeymoon-Holy Ghost',
        'Imelda R. Marcos', 'Irisan', 'Kabayanihan', 'Kagitingan', 'Kamuning', 'Kayang Extension',
        'Kayang-Hilltop', 'Kias', 'Legarda-Burnham-Kisad', 'Liwanag-Loakan', 'Loakan Proper', 'Lourdes Subdivision Extension',
        'Lourdes Subdivision Proper', 'Lucnab', 'Magsaysay Lower', 'Magsaysay Private Road', 'Malvar-Sgt. Floresca',
        'Mines View Park', 'Modern Site East', 'Modern Site West', 'New Lucban', 'Outlook Drive',
        'Pacdal', 'Padre Burgos', 'Padre Zamora', 'Palma-Urbano', 'Phil-Am', 'Pinget', 'Pinsao Pilot Project',
        'Pinsao Proper', 'Poliwes', 'Puguis', 'Quezon Hill Proper', 'Quezon Hill Upper', 'Rizal Monument',
        'Rock Quarry Lower', 'Rock Quarry Middle', 'Rock Quarry Upper', 'Saint Joseph Village', 'Salud Mitra',
        'San Antonio Village', 'San Luis Village', 'San Roque Village', 'San Vicente', 'Santa Escolástica',
        'Santo Niño Village', 'Santo Rosario', 'Santo Tomás Proper', 'Scout Barrio', 'Session Road Area',
        'Slaughter House Area', 'SLU-SVP Housing Village', 'South Drive', 'Srinagar', 'Sto. Niño Proper',
        'Sto. Niño Subdivision', 'Sto. Tomas Central', 'Sto. Tomas School Area', 'Teodora Alonzo', 'Trancoville',
        'Upper Dagsian', 'Upper General Luna', 'Upper Magsaysay', 'Upper Market Subdivision', 'Upper QM',
        'Upper Rock Quarry', 'Victoria Village', 'West Modern Site', 'Woodland'
      ],
      '160201000': [ // Butuan City
        'Agusan Pequeño', 'Ambago', 'Ampayon', 'Anticala', 'Antongalon', 'Aupagan',
        'Baan Riverside', 'Bading', 'Bancasi', 'Banza', 'Barangay 1', 'Barangay 2',
        'Barangay 3', 'Barangay 4', 'Barangay 5', 'Barangay 6', 'Barangay 7', 'Barangay 8',
        'Barangay 9', 'Barangay 10', 'Barangay 11', 'Barangay 12', 'Barangay 13', 'Barangay 14',
        'Barangay 15', 'Barangay 16', 'Barangay 17', 'Barangay 18', 'Barangay 19', 'Barangay 20',
        'Bit-os', 'Bobongan', 'Bonbon', 'Bugabus', 'Cabcaben', 'Camayahan',
        'Canaway', 'Carmen', 'Claro M. Recto', 'Dagohoy', 'Datu Silongan', 'De Oro',
        'Doongan', 'Dulag', 'Humabon', 'Imadejas', 'Lapu-Lapu', 'Lemon',
        'Libertad', 'Limaha', 'Lumbocan', 'Maguinda', 'Mandamo', 'Masao',
        'Maug', 'Nongnong', 'Obrero', 'Pagatpatan', 'Pangabugan', 'Pinamanculan',
        'Rajah Soliman', 'Salvacion', 'San Ignacio', 'San Mateo', 'San Vicente', 'Sikatuna',
        'Silongan', 'Sumilihon', 'Taguibo', 'Talamlam', 'Tandang Sora', 'Tiniwisan'
      ]
    };

    // Return barangays for the city code, or default sample if not found
    return barangayData[cityCode] || [
      { name: 'Barangay 1 (Poblacion)' },
      { name: 'Barangay 2' },
      { name: 'Barangay 3' },
      { name: 'Barangay 4' },
      { name: 'San Antonio' },
      { name: 'San Jose' },
      { name: 'Santa Cruz' },
      { name: 'Santo Niño' }
    ];
  }
};

// JNT Express Shipping Rates (Base rates for up to 1kg) - Based on actual Philippine regions
const SHIPPING_RATES = {
  'NCR': 65,
  'REGION I': 95,
  'REGION II': 110,
  'REGION III': 85,
  'REGION IV-A': 75,
  'REGION IV-B': 95,
  'REGION V': 105,
  'REGION VI': 95,
  'REGION VII': 95,
  'REGION VIII': 105,
  'REGION IX': 120,
  'REGION X': 110,
  'REGION XI': 110,
  'REGION XII': 120,
  'REGION XIII': 115,
  'CAR': 105,
  'BARMM': 130
};

// Shipping rate notes
const SHIPPING_NOTES = {
  'NCR': 'National Capital Region: ₱65 (1-2 days delivery)',
  'REGION I': 'Ilocos Region: ₱95 (2-3 days delivery)',
  'REGION II': 'Cagayan Valley: ₱110 (3-4 days delivery)',
  'REGION III': 'Central Luzon: ₱85 (2-3 days delivery)',
  'REGION IV-A': 'CALABARZON: ₱75 (1-2 days delivery)',
  'REGION IV-B': 'MIMAROPA: ₱95 (3-4 days delivery)',
  'REGION V': 'Bicol Region: ₱105 (3-4 days delivery)',
  'REGION VI': 'Western Visayas: ₱95 (3-4 days delivery)',
  'REGION VII': 'Central Visayas: ₱95 (3-4 days delivery)',
  'REGION VIII': 'Eastern Visayas: ₱105 (3-4 days delivery)',
  'REGION IX': 'Zamboanga Peninsula: ₱120 (4-5 days delivery)',
  'REGION X': 'Northern Mindanao: ₱110 (3-4 days delivery)',
  'REGION XI': 'Davao Region: ₱110 (3-4 days delivery)',
  'REGION XII': 'SOCCSKSARGEN: ₱120 (4-5 days delivery)',
  'REGION XIII': 'Caraga: ₱115 (4-5 days delivery)',
  'CAR': 'Cordillera Administrative Region: ₱105 (3-4 days delivery)',
  'BARMM': 'Bangsamoro Autonomous Region: ₱130 (5-6 days delivery)'
};

// Voucher codes
const VOUCHERS = {
  'NEWUSER10': {
    type: 'percentage',
    value: 10,
    minSpend: 500,
    description: '10% off for new users (min. spend ₱500)'
  },
  'FREESHIP': {
    type: 'freeshipping',
    value: 0,
    minSpend: 1000,
    description: 'Free shipping on orders ₱1000+'
  },
  'BOOK50': {
    type: 'fixed',
    value: 50,
    minSpend: 0,
    description: '₱50 off on all books'
  }
};

// State management
let currentStep = 1;
let shippingData = {};
let appliedVoucher = null;
let cart = [];
let subtotal = 0;
let shippingFee = 0;
let discount = 0;
let total = 0;

// Initialize checkout page
document.addEventListener('DOMContentLoaded', function() {
  initCheckout();
});

async function initCheckout() {
  console.log('Initializing checkout...');
  
  try {
    // Load cart from localStorage
    loadCart();
    
    // Load user data if signed in
    loadUserData();
    
    // Populate regions
    await populateRegions();
    
    // Display order summary
    displayOrderSummary();
    
    // Setup event listeners
    setupEventListeners();
    
    // Update cart badge
    updateCartBadge();
    
    console.log('Checkout initialization complete');
  } catch (error) {
    console.error('Error initializing checkout:', error);
    alert('Error loading location data. Please refresh the page.');
  }
}

// Populate regions dropdown
async function populateRegions() {
  const regionSelect = document.getElementById('region');
  if (!regionSelect) return;
  
  try {
    const regionsData = philippineLocations.regions;
    
    // Clear existing options except the first one
    regionSelect.innerHTML = '<option value="">Select Region</option>';
    
    // Add all regions - keep original formal names (Region I, Region II, etc.)
    regionsData.forEach(region => {
      const option = document.createElement('option');
      // Use 'code' property instead of 'reg_code' (ph-locations uses 'code')
      const regionCode = region.code || region.reg_code || region.regionCode;
      option.value = regionCode;
      option.textContent = region.name;
      option.setAttribute('data-region-name', region.name);
      option.setAttribute('data-region-code', regionCode);
      regionSelect.appendChild(option);
      
      // Debug first region
      if (regionsData.indexOf(region) === 0) {
        console.log('First region object:', region);
        console.log('Region code being used:', regionCode);
      }
    });
    
    console.log('✅ Regions populated successfully:', regionsData.length);
  } catch (error) {
    console.error('❌ Error populating regions:', error);
  }
}

// Load cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem('rereadCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    if (cart.length === 0) {
      // Create demo cart for testing
      cart = [
        {
          title: 'Sample Book',
          author: 'Sample Author',
          price: '₱150',
          condition: 'Good',
          image: 'https://via.placeholder.com/150x200',
          quantity: 1
        }
      ];
    }
    calculateSubtotal();
  } else {
    // Create demo cart for testing
    cart = [
      {
        title: 'Sample Book',
        author: 'Sample Author',
        price: '₱150',
        condition: 'Good',
        image: 'https://via.placeholder.com/150x200',
        quantity: 1
      }
    ];
    calculateSubtotal();
  }
}

// Load user data from localStorage (from signin)
function loadUserData() {
  const userData = localStorage.getItem('rereadUser');
  if (userData) {
    const user = JSON.parse(userData);
    
    // Pre-fill form fields
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    
    if (firstNameInput && user.firstName) {
      firstNameInput.value = user.firstName;
    }
    if (lastNameInput && user.lastName) {
      lastNameInput.value = user.lastName;
    }
    if (emailInput && user.email) {
      emailInput.value = user.email;
    }
  }
}

// Calculate subtotal
function calculateSubtotal() {
  subtotal = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('₱', ''));
    return sum + (price * item.quantity);
  }, 0);
}

// Display order summary
function displayOrderSummary() {
  // Display items in sidebar
  const summaryItems = document.getElementById('summaryItems');
  if (summaryItems) {
    summaryItems.innerHTML = cart.map(item => `
      <div class="summary-item">
        <img src="${item.image}" alt="${item.title}" class="summary-item-image" 
             onerror="this.src='https://via.placeholder.com/60x80/f3f4f6/6b7280?text=Book'">
        <div class="summary-item-details">
          <div class="summary-item-title">${item.title}</div>
          <div class="summary-item-meta">Qty: ${item.quantity}</div>
          <div class="summary-item-price">${item.price}</div>
        </div>
      </div>
    `).join('');
  }
  
  // Update totals
  updateOrderTotals();
}

// Update order totals
function updateOrderTotals() {
  // Calculate total
  total = subtotal + shippingFee - discount;
  
  // Update all displays
  const displays = [
    { id: 'itemCount', value: cart.reduce((sum, item) => sum + item.quantity, 0) },
    { id: 'itemCount2', value: cart.reduce((sum, item) => sum + item.quantity, 0) },
    { id: 'subtotal', value: `₱${subtotal.toFixed(2)}` },
    { id: 'subtotal2', value: `₱${subtotal.toFixed(2)}` },
    { id: 'shippingFee', value: shippingFee > 0 ? `₱${shippingFee.toFixed(2)}` : '₱0' },
    { id: 'shippingFee2', value: shippingFee > 0 ? `₱${shippingFee.toFixed(2)}` : '₱0' },
    { id: 'discountAmount', value: `-₱${discount.toFixed(2)}` },
    { id: 'discountAmount2', value: `-₱${discount.toFixed(2)}` },
    { id: 'totalAmount', value: `₱${total.toFixed(2)}` },
    { id: 'totalAmount2', value: `₱${total.toFixed(2)}` },
    { id: 'finalTotal', value: `₱${total.toFixed(2)}` }
  ];
  
  displays.forEach(display => {
    const element = document.getElementById(display.id);
    if (element) {
      element.textContent = display.value;
    }
  });
  
  // Show/hide discount rows
  const discountRows = ['discountRow', 'discountRow2'];
  discountRows.forEach(id => {
    const row = document.getElementById(id);
    if (row) {
      row.style.display = discount > 0 ? 'flex' : 'none';
    }
  });
}

// Setup event listeners
function setupEventListeners() {
  // Shipping form
  const shippingForm = document.getElementById('shippingForm');
  if (shippingForm) {
    shippingForm.addEventListener('submit', handleShippingSubmit);
  }
  
  // Region selector
  const regionSelect = document.getElementById('region');
  if (regionSelect) {
    regionSelect.addEventListener('change', handleRegionChange);
  }
  
  // Province selector
  const provinceSelect = document.getElementById('province');
  if (provinceSelect) {
    provinceSelect.addEventListener('change', handleProvinceChange);
  }
  
  // City selector
  const citySelect = document.getElementById('city');
  if (citySelect) {
    citySelect.addEventListener('change', handleCityChange);
  }
}

// Handle region change
async function handleRegionChange(e) {
  console.log('Region change triggered');
  
  try {
    const regionCode = e.target.value;
    const regionName = e.target.options[e.target.selectedIndex]?.getAttribute('data-region-name') || '';
    console.log('Selected region:', regionName, regionCode);
    
    const shippingNote = document.getElementById('shippingNote');
    const provinceSelect = document.getElementById('province');
    const citySelect = document.getElementById('city');
    const barangaySelect = document.getElementById('barangay');
    
    // Reset dependent dropdowns
    resetSelect(citySelect, 'Select Province First');
    resetSelect(barangaySelect, 'Select City First');
    citySelect.disabled = true;
    barangaySelect.disabled = true;
    
    if (regionCode) {
      // Show loading state for provinces
      provinceSelect.innerHTML = '<option value="">Loading provinces...</option>';
      provinceSelect.disabled = true;
      
      // Match region name to get shipping rate
      const shippingKey = getShippingKey(regionName);
      shippingFee = SHIPPING_RATES[shippingKey] || 95; // Default to 95 if not found
      console.log('Shipping fee set to:', shippingFee);
      
      // Show shipping note
      if (shippingNote) {
        shippingNote.textContent = SHIPPING_NOTES[shippingKey] || `${regionName}: ₱${shippingFee} (3-4 days delivery)`;
        shippingNote.classList.add('show');
      }
      
      // Populate provinces based on region - this will show automatically
      await populateProvinces(regionCode);
      
      // Recalculate if voucher affects shipping
      if (appliedVoucher && appliedVoucher.type === 'freeshipping') {
        applyVoucherDiscount();
      }
      
      updateOrderTotals();
    } else {
      shippingFee = 0;
      resetSelect(provinceSelect, 'Select Region First');
      if (shippingNote) {
        shippingNote.classList.remove('show');
      }
      provinceSelect.disabled = true;
      updateOrderTotals();
    }
    
    console.log('Region change completed');
  } catch (error) {
    console.error('Error in handleRegionChange:', error);
    alert('An error occurred. Please refresh the page and try again.');
  }
}

// Get shipping key from region name
function getShippingKey(regionName) {
  const upperName = regionName.toUpperCase();
  
  // Match formal region names (Region I, Region II, etc.)
  if (upperName.includes('NCR') || upperName.includes('NATIONAL CAPITAL')) return 'NCR';
  if (upperName === 'REGION I' || upperName.includes('ILOCOS')) return 'REGION I';
  if (upperName === 'REGION II' || upperName.includes('CAGAYAN')) return 'REGION II';
  if (upperName === 'REGION III' || upperName.includes('CENTRAL LUZON')) return 'REGION III';
  if (upperName === 'REGION IV-A' || upperName.includes('CALABARZON')) return 'REGION IV-A';
  if (upperName === 'REGION IV-B' || upperName.includes('MIMAROPA')) return 'REGION IV-B';
  if (upperName === 'REGION V' || upperName.includes('BICOL')) return 'REGION V';
  if (upperName === 'REGION VI' || upperName.includes('WESTERN VISAYAS')) return 'REGION VI';
  if (upperName === 'REGION VII' || upperName.includes('CENTRAL VISAYAS')) return 'REGION VII';
  if (upperName === 'REGION VIII' || upperName.includes('EASTERN VISAYAS')) return 'REGION VIII';
  if (upperName === 'REGION IX' || upperName.includes('ZAMBOANGA')) return 'REGION IX';
  if (upperName === 'REGION X' || upperName.includes('NORTHERN MINDANAO')) return 'REGION X';
  if (upperName === 'REGION XI' || upperName.includes('DAVAO')) return 'REGION XI';
  if (upperName === 'REGION XII' || upperName.includes('SOCCSKSARGEN')) return 'REGION XII';
  if (upperName === 'REGION XIII' || upperName.includes('CARAGA')) return 'REGION XIII';
  if (upperName.includes('CAR') || upperName.includes('CORDILLERA')) return 'CAR';
  if (upperName.includes('BARMM') || upperName.includes('BANGSAMORO')) return 'BARMM';
  
  // Default to NCR if region not matched (most common/central location)
  console.warn('Region not matched:', regionName, '- defaulting to NCR');
  return 'NCR';
}

// Populate provinces based on region
async function populateProvinces(regionCode) {
  console.log('🔄 Populating provinces for region:', regionCode);
  const provinceSelect = document.getElementById('province');
  
  if (!provinceSelect) {
    console.error('❌ Province select element not found');
    return;
  }
  
  try {
    const provincesData = philippineLocations.getProvincesByRegion(regionCode);
    
    // Clear existing options
    provinceSelect.innerHTML = '<option value="">Select Province</option>';
    
    console.log('📍 Found provinces:', provincesData.length);
    
    if (provincesData.length === 0) {
      console.warn('⚠️ No provinces found for region code:', regionCode);
      provinceSelect.innerHTML = '<option value="">No provinces available</option>';
      provinceSelect.disabled = true;
      return;
    }
    
    // Add provinces
    provincesData.forEach(province => {
      const option = document.createElement('option');
      // Normalize the province code
      const provCode = province.code || province.prov_code || province.provinceCode;
      option.value = provCode;
      option.textContent = province.name;
      provinceSelect.appendChild(option);
      console.log('  ✓ Added province:', province.name, 'Code:', provCode);
    });
    
    // Enable the dropdown AFTER populating to ensure it's clickable
    provinceSelect.disabled = false;
    
    console.log('✅ Province dropdown populated and enabled successfully');
  } catch (error) {
    console.error('❌ Error populating provinces:', error);
    provinceSelect.innerHTML = '<option value="">Error loading provinces</option>';
    provinceSelect.disabled = false;
  }
}

// Handle province change
async function handleProvinceChange(e) {
  const provinceCode = e.target.value;
  const citySelect = document.getElementById('city');
  const barangaySelect = document.getElementById('barangay');
  
  // Reset dependent dropdowns
  resetSelect(barangaySelect, 'Select City First');
  barangaySelect.disabled = true;
  
  if (provinceCode) {
    // Show loading state for cities
    citySelect.innerHTML = '<option value="">Loading cities/municipalities...</option>';
    citySelect.disabled = true;
    
    // Populate cities - this will show automatically
    await populateCities(provinceCode);
  } else {
    resetSelect(citySelect, 'Select Province First');
    citySelect.disabled = true;
  }
}

// Populate cities based on province
async function populateCities(provinceCode) {
  console.log('🔄 Populating cities for province:', provinceCode);
  const citySelect = document.getElementById('city');
  
  if (!citySelect) {
    console.error('❌ City select element not found');
    return;
  }
  
  try {
    const citiesData = philippineLocations.getCityMunByProvince(provinceCode);
    
    // Clear existing options
    citySelect.innerHTML = '<option value="">Select City/Municipality</option>';
    
    console.log('🏙️ Found cities:', citiesData.length);
    
    if (citiesData.length === 0) {
      console.warn('⚠️ No cities found for province code:', provinceCode);
      citySelect.innerHTML = '<option value="">No cities available</option>';
      citySelect.disabled = true;
      return;
    }
    
    // Add cities
    citiesData.forEach(city => {
      const option = document.createElement('option');
      // Normalize the city code
      const cityCode = city.code || city.mun_code || city.municipalityCode;
      option.value = cityCode;
      option.textContent = city.name;
      citySelect.appendChild(option);
      console.log('  ✓ Added city:', city.name, 'Code:', cityCode);
    });
    
    // Enable the dropdown AFTER populating to ensure it's clickable
    citySelect.disabled = false;
    
    console.log('✅ City dropdown populated and enabled successfully');
  } catch (error) {
    console.error('❌ Error populating cities:', error);
    citySelect.innerHTML = '<option value="">Error loading cities</option>';
    citySelect.disabled = false;
  }
}

// Handle city change
async function handleCityChange(e) {
  const cityCode = e.target.value;
  const barangaySelect = document.getElementById('barangay');
  
  if (cityCode) {
    // Show loading state for barangays
    barangaySelect.innerHTML = '<option value="">Loading barangays...</option>';
    barangaySelect.disabled = true;
    
    // Populate barangays - this will show automatically
    await populateBarangays(cityCode);
  } else {
    resetSelect(barangaySelect, 'Select City First');
    barangaySelect.disabled = true;
  }
}

// Populate barangays based on city
async function populateBarangays(cityCode) {
  console.log('🔄 Populating barangays for city:', cityCode);
  const barangaySelect = document.getElementById('barangay');
  
  if (!barangaySelect) {
    console.error('❌ Barangay select element not found');
    return;
  }
  
  try {
    const barangaysData = philippineLocations.getBarangayByMun(cityCode);
    
    // Clear existing options
    barangaySelect.innerHTML = '<option value="">Select Barangay</option>';
    
    console.log('🏘️ Found barangays:', barangaysData.length);
    
    if (barangaysData.length === 0) {
      console.warn('⚠️ No barangays found for city code:', cityCode);
      barangaySelect.innerHTML = '<option value="">No barangays available</option>';
      barangaySelect.disabled = true;
      return;
    }
    
    // Add barangays
    barangaysData.forEach(barangay => {
      const option = document.createElement('option');
      option.value = barangay.name;
      option.textContent = barangay.name;
      barangaySelect.appendChild(option);
    });
    
    // Enable the dropdown AFTER populating to ensure it's clickable
    barangaySelect.disabled = false;
    
    console.log('✅ Barangay dropdown populated and enabled successfully');
  } catch (error) {
    console.error('❌ Error populating barangays:', error);
    barangaySelect.innerHTML = '<option value="">Error loading barangays</option>';
    barangaySelect.disabled = false;
  }
}

// Reset select dropdown
function resetSelect(selectElement, placeholder) {
  if (selectElement) {
    selectElement.innerHTML = `<option value="">${placeholder}</option>`;
  }
}

// Handle shipping form submit
function handleShippingSubmit(e) {
  e.preventDefault();
  
  // Get select elements
  const regionSelect = document.getElementById('region');
  const provinceSelect = document.getElementById('province');
  const citySelect = document.getElementById('city');
  const barangaySelect = document.getElementById('barangay');
  
  // Collect form data with display text for dropdowns
  shippingData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    region: regionSelect.options[regionSelect.selectedIndex]?.text || '',
    regionCode: regionSelect.value,
    province: provinceSelect.options[provinceSelect.selectedIndex]?.text || '',
    provinceCode: provinceSelect.value,
    city: citySelect.options[citySelect.selectedIndex]?.text || '',
    cityCode: citySelect.value,
    barangay: barangaySelect.options[barangaySelect.selectedIndex]?.text || '',
    zipCode: document.getElementById('zipCode').value,
    streetAddress: document.getElementById('streetAddress').value,
    landmark: document.getElementById('landmark').value,
    deliveryNotes: document.getElementById('deliveryNotes').value
  };
  
  // Validate shipping fee is set
  if (shippingFee === 0) {
    alert('Please select a region to calculate shipping fee.');
    return;
  }
  
  // Save to localStorage
  localStorage.setItem('rereadShipping', JSON.stringify(shippingData));
  
  // Move to step 2
  goToStep(2);
  displayShippingReview();
  displayReviewItems();
}

// Go to specific step
function goToStep(step) {
  // Hide all steps
  document.querySelectorAll('.checkout-step').forEach(el => {
    el.classList.remove('active');
  });
  
  // Show target step
  const targetStep = document.querySelector(`.step-${step}`);
  if (targetStep) {
    targetStep.classList.add('active');
  }
  
  // Update progress indicators
  document.querySelectorAll('.progress-step').forEach((el, index) => {
    el.classList.remove('active', 'completed');
    if (index + 1 < step) {
      el.classList.add('completed');
    } else if (index + 1 === step) {
      el.classList.add('active');
    }
  });
  
  currentStep = step;
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Edit step
function editStep(step) {
  goToStep(step);
}

// Display shipping review
function displayShippingReview() {
  const reviewDiv = document.getElementById('shippingReview');
  if (reviewDiv && shippingData) {
    reviewDiv.innerHTML = `
      <p><strong>Name:</strong> ${shippingData.firstName} ${shippingData.lastName}</p>
      <p><strong>Email:</strong> ${shippingData.email}</p>
      <p><strong>Phone:</strong> ${shippingData.phone}</p>
      <p><strong>Address:</strong><br>
        ${shippingData.streetAddress}<br>
        Brgy. ${shippingData.barangay}, ${shippingData.city}, ${shippingData.province}<br>
        ${shippingData.region}, ${shippingData.zipCode}
      </p>
      ${shippingData.landmark ? `<p><strong>Landmark:</strong> ${shippingData.landmark}</p>` : ''}
      ${shippingData.deliveryNotes ? `<p><strong>Delivery Notes:</strong> ${shippingData.deliveryNotes}</p>` : ''}
    `;
  }
}

// Display review items
function displayReviewItems() {
  const reviewItems = document.getElementById('reviewItems');
  if (reviewItems) {
    reviewItems.innerHTML = cart.map(item => {
      const price = parseFloat(item.price.replace('₱', ''));
      const itemTotal = price * item.quantity;
      
      return `
        <div class="review-item">
          <img src="${item.image}" alt="${item.title}" class="review-item-image"
               onerror="this.src='https://via.placeholder.com/80x100/f3f4f6/6b7280?text=Book'">
          <div class="review-item-info">
            <div class="review-item-title">${item.title}</div>
            <div class="review-item-author">${item.author}</div>
            <div class="review-item-condition">${item.condition}</div>
            <div class="review-item-price">₱${price.toFixed(2)} × ${item.quantity} = ₱${itemTotal.toFixed(2)}</div>
          </div>
        </div>
      `;
    }).join('');
  }
}

// Apply voucher
function applyVoucher() {
  const voucherInput = document.getElementById('voucherCode');
  const voucherMessage = document.getElementById('voucherMessage');
  const code = voucherInput.value.trim().toUpperCase();
  
  if (!code) {
    showVoucherMessage('Please enter a voucher code.', 'error');
    return;
  }
  
  const voucher = VOUCHERS[code];
  
  if (!voucher) {
    showVoucherMessage('Invalid voucher code.', 'error');
    return;
  }
  
  // Check minimum spend
  if (voucher.minSpend > 0 && subtotal < voucher.minSpend) {
    showVoucherMessage(`Minimum spend of ₱${voucher.minSpend} required.`, 'error');
    return;
  }
  
  // Apply voucher
  appliedVoucher = { code, ...voucher };
  applyVoucherDiscount();
  
  showVoucherMessage(`Voucher "${code}" applied successfully!`, 'success');
  voucherInput.value = '';
}

// Select voucher from list
function selectVoucher(code) {
  const voucherInput = document.getElementById('voucherCode');
  if (voucherInput) {
    voucherInput.value = code;
    applyVoucher();
  }
}

// Apply voucher discount
function applyVoucherDiscount() {
  if (!appliedVoucher) return;
  
  switch (appliedVoucher.type) {
    case 'percentage':
      discount = subtotal * (appliedVoucher.value / 100);
      break;
    case 'fixed':
      discount = appliedVoucher.value;
      break;
    case 'freeshipping':
      discount = shippingFee;
      break;
  }
  
  updateOrderTotals();
}

// Show voucher message
function showVoucherMessage(message, type) {
  const voucherMessage = document.getElementById('voucherMessage');
  if (voucherMessage) {
    voucherMessage.textContent = message;
    voucherMessage.className = `voucher-message ${type}`;
  }
}

// Proceed to payment
function proceedToPayment() {
  if (!shippingData.firstName) {
    alert('Please complete shipping information first.');
    goToStep(1);
    return;
  }
  
  goToStep(3);
}

// Select payment method
function selectPayment(method) {
  // Save order data
  const orderData = {
    orderNumber: 'ORD-' + Date.now(),
    orderDate: new Date().toISOString(),
    customer: shippingData,
    items: cart,
    subtotal: subtotal,
    shippingFee: shippingFee,
    discount: discount,
    total: total,
    voucher: appliedVoucher,
    paymentMethod: method,
    status: 'pending'
  };
  
  // Save to localStorage
  localStorage.setItem('rereadLastOrder', JSON.stringify(orderData));
  
  // Clear cart
  localStorage.removeItem('rereadCart');
  
  // Show success message
  alert(`Order placed successfully!\n\nOrder Number: ${orderData.orderNumber}\nPayment Method: ${method.toUpperCase()}\n\nYou will receive a confirmation email shortly.`);
  
  // Redirect to order confirmation page (or home)
  window.location.href = '../index.html';
}

// Update cart badge in navigation
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = itemCount;
  }
}

// Expose functions globally for onclick handlers in HTML
window.editStep = editStep;
window.applyVoucher = applyVoucher;
window.selectVoucher = selectVoucher;
window.proceedToPayment = proceedToPayment;
window.selectPayment = selectPayment;
