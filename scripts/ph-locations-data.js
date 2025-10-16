// Philippine Locations Database - Complete PSGC Data Compatible
// This follows the format expected by checkout.js

const philippineLocations = {
    regions: [
        { reg_code: '010000000', name: 'Region I (Ilocos Region)' },
        { reg_code: '020000000', name: 'Region II (Cagayan Valley)' },
        { reg_code: '030000000', name: 'Region III (Central Luzon)' },
        { reg_code: '040000000', name: 'Region IV-A (CALABARZON)' },
        { reg_code: '170000000', name: 'Region IV-B (MIMAROPA)' },
        { reg_code: '050000000', name: 'Region V (Bicol Region)' },
        { reg_code: '060000000', name: 'Region VI (Western Visayas)' },
        { reg_code: '070000000', name: 'Region VII (Central Visayas)' },
        { reg_code: '080000000', name: 'Region VIII (Eastern Visayas)' },
        { reg_code: '090000000', name: 'Region IX (Zamboanga Peninsula)' },
        { reg_code: '100000000', name: 'Region X (Northern Mindanao)' },
        { reg_code: '110000000', name: 'Region XI (Davao Region)' },
        { reg_code: '120000000', name: 'Region XII (SOCCSKSARGEN)' },
        { reg_code: '130000000', name: 'National Capital Region (NCR)' },
        { reg_code: '140000000', name: 'Cordillera Administrative Region (CAR)' },
        { reg_code: '150000000', name: 'Autonomous Region in Muslim Mindanao (ARMM)' },
        { reg_code: '160000000', name: 'Region XIII (Caraga)' }
    ],
    
    provinces: {
        // Region VI - Western Visayas
        '060000000': [
            { prov_code: '061200000', name: 'Aklan' },
            { prov_code: '061800000', name: 'Antique' },
            { prov_code: '061900000', name: 'Capiz' },
            { prov_code: '063000000', name: 'Iloilo' },
            { prov_code: '064500000', name: 'Negros Occidental' },
            { prov_code: '079700000', name: 'Guimaras' }
        ],
        // NCR
        '130000000': [
            { prov_code: '133900000', name: 'National Capital Region' }
        ],
        // Add more as needed - for demo, these are the main ones
        '040000000': [
            { prov_code: '042100000', name: 'Cavite' },
            { prov_code: '043400000', name: 'Laguna' },
            { prov_code: '041400000', name: 'Batangas' },
            { prov_code: '045600000', name: 'Rizal' },
            { prov_code: '045800000', name: 'Quezon' }
        ]
    },
    
    cities: {
        // Iloilo Province
        '063000000': [
            { mun_code: '063022000', name: 'Iloilo City' },
            { mun_code: '063001000', name: 'Ajuy' },
            { mun_code: '063002000', name: 'Alimodian' },
            { mun_code: '063004000', name: 'Anilao' },
            { mun_code: '063005000', name: 'Badiangan' },
            { mun_code: '063006000', name: 'Balasan' },
            { mun_code: '063007000', name: 'Banate' },
            { mun_code: '063008000', name: 'Barotac Nuevo' },
            { mun_code: '063009000', name: 'Barotac Viejo' },
            { mun_code: '063010000', name: 'Batad' }
        ],
        // Aklan Province
        '061200000': [
            { mun_code: '061201000', name: 'Altavas' },
            { mun_code: '061202000', name: 'Balete' },
            { mun_code: '061203000', name: 'Banga' },
            { mun_code: '061204000', name: 'Batan' },
            { mun_code: '061205000', name: 'Buruanga' },
            { mun_code: '061206000', name: 'Ibajay' },
            { mun_code: '061207000', name: 'Kalibo' },
            { mun_code: '061208000', name: 'Lezo' },
            { mun_code: '061209000', name: 'Libacao' },
            { mun_code: '061210000', name: 'Madalag' }
        ],
        // NCR
        '133900000': [
            { mun_code: '137401000', name: 'Manila' },
            { mun_code: '137402000', name: 'Mandaluyong City' },
            { mun_code: '137403000', name: 'Marikina City' },
            { mun_code: '137404000', name: 'Pasig City' },
            { mun_code: '137405000', name: 'Quezon City' },
            { mun_code: '137406000', name: 'San Juan City' },
            { mun_code: '137501000', name: 'Caloocan City' },
            { mun_code: '137502000', name: 'Malabon City' },
            { mun_code: '137503000', name: 'Navotas City' },
            { mun_code: '137504000', name: 'Valenzuela City' },
            { mun_code: '137601000', name: 'Las Piñas City' },
            { mun_code: '137602000', name: 'Makati City' },
            { mun_code: '137603000', name: 'Muntinlupa City' },
            { mun_code: '137604000', name: 'Parañaque City' },
            { mun_code: '137605000', name: 'Pasay City' },
            { mun_code: '137606000', name: 'Pateros' },
            { mun_code: '137607000', name: 'Taguig City' }
        ]
    },
    
    barangays: {
        // Iloilo City
        '063022000': [
            { name: 'Arevalo' },
            { name: 'City Proper' },
            { name: 'Jaro' },
            { name: 'La Paz' },
            { name: 'Lapuz' },
            { name: 'Mandurriao' },
            { name: 'Molo' },
            { name: 'Bakhaw' },
            { name: 'Balantang' },
            { name: 'Banuyao' }
        ],
        // Kalibo, Aklan
        '061207000': [
            { name: 'Andagao' },
            { name: 'Bachaw Norte' },
            { name: 'Bachaw Sur' },
            { name: 'Briones' },
            { name: 'Buswang' },
            { name: 'Estancia' },
            { name: 'Linabuan Norte' },
            { name: 'Linabuan Sur' },
            { name: 'Mabilo' },
            { name: 'Mobo' },
            { name: 'New Buswang' },
            { name: 'Poblacion' },
            { name: 'Tigayon' },
            { name: 'Tinigao' }
        ],
        // Manila
        '137401000': [
            { name: 'Ermita' },
            { name: 'Intramuros' },
            { name: 'Malate' },
            { name: 'Paco' },
            { name: 'Pandacan' },
            { name: 'Port Area' },
            { name: 'Quiapo' },
            { name: 'Sampaloc' },
            { name: 'San Andres' },
            { name: 'San Miguel' },
            { name: 'San Nicolas' },
            { name: 'Santa Ana' },
            { name: 'Santa Cruz' },
            { name: 'Tondo' }
        ]
    },
    
    // Helper methods
    getProvincesByRegion: function(regionCode) {
        return this.provinces[regionCode] || [];
    },
    
    getCityMunByProvince: function(provinceCode) {
        return this.cities[provinceCode] || [];
    },
    
    getBarangayByMun: function(cityCode) {
        return this.barangays[cityCode] || [];
    }
};
