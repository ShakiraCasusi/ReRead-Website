// Philippine Locations Database - Simplified for Checkout
// Key cities and municipalities with representative barangays

const philippineLocations = {
  'metro-manila': {
    name: 'Metro Manila',
    provinces: {
      'ncr': {
        name: 'National Capital Region',
        cities: {
          'manila': { 
            name: 'Manila',
            barangays: ['Ermita', 'Intramuros', 'Malate', 'Paco', 'Pandacan', 'Quiapo', 'San Miguel', 'San Nicolas', 'Santa Ana', 'Santa Cruz', 'Tondo', 'Sampaloc', 'Port Area', 'San Andres']
          },
          'quezon-city': { 
            name: 'Quezon City',
            barangays: ['Bagong Pag-asa', 'Batasan Hills', 'Commonwealth', 'Diliman', 'Fairview', 'Kamuning', 'Novaliches', 'Project 4', 'Project 6', 'Sauyo', 'Tandang Sora', 'White Plains', 'Bagong Lipunan', 'Bagumbayan', 'Central']
          },
          'makati': { 
            name: 'Makati',
            barangays: ['Bel-Air', 'Poblacion', 'San Lorenzo', 'Urdaneta', 'Valenzuela', 'Forbes Park', 'Dasmariñas Village', 'Magallanes', 'Legaspi Village', 'Salcedo Village', 'Pio del Pilar', 'Cembo', 'South Cembo', 'Guadalupe Nuevo']
          },
          'taguig': { 
            name: 'Taguig',
            barangays: ['Bagumbayan', 'Bambang', 'Fort Bonifacio', 'Hagonoy', 'Ibayo-Tipas', 'Lower Bicutan', 'Napindan', 'Signal Village', 'Tanyag', 'Upper Bicutan', 'Western Bicutan', 'Ususan', 'Wawa', 'Pinagsama']
          },
          'pasig': { 
            name: 'Pasig',
            barangays: ['Bagong Ilog', 'Bagong Katipunan', 'Kapitolyo', 'Manggahan', 'Maybunga', 'Oranbo', 'Pinagbuhatan', 'Rosario', 'Sagad', 'San Antonio', 'San Joaquin', 'Santolan', 'Ugong', 'Malinao']
          },
          'mandaluyong': { 
            name: 'Mandaluyong',
            barangays: ['Addition Hills', 'Bagong Silang', 'Barangka Drive', 'Barangka Ibaba', 'Barangka Ilaya', 'Burol', 'Highway Hills', 'Hulo', 'Mauway', 'Namayan', 'Pag-asa', 'Plainview', 'Pleasant Hills', 'Poblacion']
          },
          'pasay': { 
            name: 'Pasay',
            barangays: ['Barangay 1-201', 'Malibay', 'San Isidro', 'San Rafael', 'Santa Clara', 'Tramo', 'Villamor Airbase']
          },
          'paranaque': { 
            name: 'Parañaque',
            barangays: ['Baclaran', 'BF Homes', 'Don Bosco', 'La Huerta', 'Marcelo Green', 'Merville', 'Moonwalk', 'San Antonio', 'San Dionisio', 'San Isidro', 'Santo Niño', 'Sun Valley', 'Tambo', 'Vitalez']
          },
          'las-pinas': { 
            name: 'Las Piñas',
            barangays: ['Almanza Uno', 'Almanza Dos', 'BF International', 'CAA', 'Daniel Fajardo', 'Elias Aldana', 'Manuyo Uno', 'Manuyo Dos', 'Pamplona', 'Pulang Lupa', 'Talon', 'Zapote']
          },
          'muntinlupa': { 
            name: 'Muntinlupa',
            barangays: ['Alabang', 'Ayala Alabang', 'Buli', 'Cupang', 'New Alabang Village', 'Poblacion', 'Putatan', 'Sucat', 'Tunasan']
          },
          'caloocan': { 
            name: 'Caloocan',
            barangays: ['Bagong Silang', 'Bagumbong', 'Camarin', 'Barangay 1-188 (North & South)', 'Grace Park', 'Maypajo', 'Sangandaan', 'Tala', 'Bagong Barrio']
          },
          'marikina': { 
            name: 'Marikina',
            barangays: ['Barangka', 'Concepcion Uno', 'Concepcion Dos', 'Fortune', 'Industrial Valley', 'Jesus de la Peña', 'Malanday', 'Nangka', 'Parang', 'San Roque', 'Santa Elena', 'Santo Niño', 'Tumana']
          },
          'valenzuela': { 
            name: 'Valenzuela',
            barangays: ['Arkong Bato', 'Bagbaguin', 'Balangkas', 'Bignay', 'Bisig', 'Canumay', 'Coloong', 'Dalandanan', 'Karuhatan', 'Lawang Bato', 'Lingunan', 'Malinta', 'Marulas', 'Maysan', 'Palasan', 'Parada', 'Paso de Blas', 'Poblacion', 'Pulo', 'Punturin', 'Ugong']
          },
          'san-juan': { 
            name: 'San Juan',
            barangays: ['Addition Hills', 'Balong-Bato', 'Corazon de Jesus', 'Greenhills', 'Isabelita', 'Kabayanan', 'Little Baguio', 'Pasadeña', 'Progreso', 'Rivera', 'Salapan', 'San Perfecto', 'Santa Lucia', 'Tibagan']
          },
          'navotas': { 
            name: 'Navotas',
            barangays: ['Bagumbayan North', 'Bagumbayan South', 'Bangculasi', 'Daanghari', 'Navotas East', 'Navotas West', 'San Jose', 'San Rafael Village', 'San Roque', 'Tangos', 'Tanza']
          },
          'malabon': { 
            name: 'Malabon',
            barangays: ['Acacia', 'Baritan', 'Bayan-Bayanan', 'Catmon', 'Concepcion', 'Dampalit', 'Flores', 'Hulong Duhat', 'Longos', 'Maysilo', 'Muzon', 'Niugan', 'Panghulo', 'Potrero', 'San Agustin', 'Santolan', 'Tinajeros', 'Tonsuya', 'Tugatog']
          }
        }
      }
    }
  },
  'luzon': {
    name: 'Luzon',
    provinces: {
      'cavite': {
        name: 'Cavite',
        cities: {
          'dasmarinas': { name: 'Dasmariñas', barangays: ['Bayan Luma', 'Burol', 'Emmanuel', 'Langkaan', 'Paliparan', 'Sabang', 'Salawag', 'Salitran', 'Sampaloc', 'San Agustin', 'San Jose', 'San Miguel', 'Santa Cristina', 'Santa Cruz'] },
          'bacoor': { name: 'Bacoor', barangays: ['Alima', 'Aniban', 'Banalo', 'Bayanan', 'Daang Bukid', 'Digman', 'Habay', 'Kaingin', 'Ligas', 'Mabolo', 'Maliksi', 'Molino', 'Niog', 'Panapaan', 'Poblacion', 'Salinas', 'Talaba', 'Zapote'] },
          'imus': { name: 'Imus', barangays: ['Alapan', 'Anabu', 'Bayan Luma', 'Bucandala', 'Buhay na Tubig', 'Carsadang Bago', 'Magdalo', 'Malagasang', 'Medicion', 'Palico', 'Panimala', 'Pasong Buaya', 'Pasong Kawayan', 'Poblacion', 'Tanzang Luma', 'Toclong'] }
        }
      },
      'laguna': {
        name: 'Laguna',
        cities: {
          'calamba': { name: 'Calamba', barangays: ['Bagong Kalsada', 'Banlic', 'Barandal', 'Barangay 1-7 (Poblacion)', 'Bucal', 'Bunggo', 'Canlubang', 'Halang', 'Kay-Anlog', 'Lawa', 'Lingga', 'Looc', 'Makiling', 'Mapagong', 'Masili', 'Mayapa', 'Pansol', 'Parian', 'Punta', 'Real', 'Saimsim', 'San Cristobal', 'San Jose'] },
          'santa-rosa': { name: 'Santa Rosa', barangays: ['Aplaya', 'Balibago', 'Caingin', 'Dila', 'Dita', 'Don Jose', 'Ibaba', 'Kanluran', 'Labas', 'Macabling', 'Malitlit', 'Market Area', 'Pook', 'Pulong Santa Cruz', 'Santo Domingo', 'Sinalhan', 'Tagapo'] },
          'binan': { name: 'Biñan', barangays: ['Biñan', 'Bungahan', 'Canlalay', 'Casile', 'De La Paz', 'Ganado', 'Langkiwa', 'Loma', 'Malaban', 'Malamig', 'Mampalasan', 'Platero', 'Poblacion', 'San Antonio', 'San Francisco', 'San Jose', 'San Vicente', 'Santo Domingo', 'Santo Niño', 'Santo Tomas', 'Soro-Soro', 'Zapote'] }
        }
      },
      'batangas': {
        name: 'Batangas',
        cities: {
          'batangas-city': { name: 'Batangas City', barangays: ['Alangilan', 'Balagtas', 'Balete', 'Banaba', 'Bolbok', 'Calicanto', 'Cuta', 'Kumintang Ibaba', 'Kumintang Ilaya', 'Libjo', 'Maapas', 'Poblacion', 'Santa Clara', 'Santa Rita', 'Simlong', 'Wawa'] },
          'lipa-city': { name: 'Lipa City', barangays: ['Adya', 'Anilao', 'Antipolo del Norte', 'Antipolo del Sur', 'Bagong Pook', 'Balintawak', 'Bolbok', 'Bugtong na Pulo', 'Bulacnin', 'Halang', 'Lodlod', 'Lumbang', 'Mabini', 'Malitlit', 'Poblacion Barangay 1-12', 'Sabang', 'San Benito', 'San Carlos', 'San Jose', 'Santo Niño', 'Sapac', 'Tibig'] },
          'tanauan': { name: 'Tanauan', barangays: ['Altura', 'Ambulong', 'Bagumbayan', 'Balele', 'Banjo', 'Boot', 'Cale', 'Darasa', 'Hidalgo', 'Janopol', 'Laurel', 'Luyos', 'Mabini', 'Montana', 'Poblacion 1-7', 'Sala', 'Sambat', 'San Jose', 'Santol', 'Santor', 'Suplang', 'Trapiche'] }
        }
      },
      'bulacan': {
        name: 'Bulacan',
        cities: {
          'malolos': { name: 'Malolos', barangays: ['Anilao', 'Atlag', 'Babatnin', 'Bagna', 'Bagong Bayan', 'Balayong', 'Balite', 'Bangkal', 'Barihan', 'Bulihan', 'Bungahan', 'Caingin', 'Calero', 'Canalate', 'Caniogan', 'Catmon', 'Cofradia', 'Dakila', 'Guinhawa', 'Ligas', 'Look 1st', 'Lugam', 'Mabolo', 'Mojon', 'Namayan', 'Pamarawan', 'San Agustin', 'San Gabriel', 'San Vicente', 'Santiago'] },
          'meycauayan': { name: 'Meycauayan', barangays: ['Bagbaguin', 'Bahay Pare', 'Bancal', 'Banga', 'Bayugo', 'Caingin', 'Calvario', 'Camalig', 'Hulo', 'Iba', 'Langka', 'Libtong', 'Liputan', 'Longos', 'Malhacan', 'Pajo', 'Pandayan', 'Perez', 'Poblacion', 'Saluysoy', 'Tugatog', 'Ubihan'] },
          'san-jose-del-monte': { name: 'San Jose Del Monte', barangays: ['Assumption', 'Bagong Buhay', 'Citrus', 'Ciudad Real', 'Dulong Bayan', 'Fatima', 'Francisco Homes', 'Gaya-gaya', 'Graceville', 'Gumaoc', 'Kaybanban', 'Kaypian', 'Lawang Pari', 'Maharlika', 'Minuyan', 'Muzon', 'Paradise 3', 'Poblacion', 'San Isidro', 'San Martin', 'San Pedro', 'San Rafael', 'Santa Cruz', 'Santo Cristo', 'Santo Niño', 'Sapang Palay', 'St. Martin de Porres', 'Tungkong Mangga'] }
        }
      },
      'rizal': {
        name: 'Rizal',
        cities: {
          'antipolo': { name: 'Antipolo', barangays: ['Bagong Nayon', 'Beverly Hills', 'Calawis', 'Cupang', 'Dalig', 'Dela Paz', 'Inarawan', 'Mambugan', 'Mayamot', 'Muntindilaw', 'San Isidro', 'San Jose', 'San Juan', 'San Luis', 'San Roque', 'Santa Cruz', 'Santo Niño'] },
          'cainta': { name: 'Cainta', barangays: ['San Andres', 'San Isidro', 'San Juan', 'San Roque', 'Santa Rosa', 'Santo Domingo', 'Santo Niño'] },
          'taytay': { name: 'Taytay', barangays: ['Dolores', 'Muzon', 'San Isidro', 'San Juan', 'Santa Ana', 'Santo Niño'] }
        }
      },
      'pampanga': {
        name: 'Pampanga',
        cities: {
          'san-fernando': { name: 'San Fernando', barangays: ['Alasas', 'Baliti', 'Bulaon', 'Calulut', 'Dela Paz Norte', 'Dela Paz Sur', 'Dolores', 'Juliana', 'Lara', 'Lourdes', 'Magliman', 'Maimpis', 'Pandaras', 'Panipuan', 'San Agustin', 'San Felipe', 'San Isidro', 'San Jose', 'San Juan', 'San Nicolas', 'Santa Lucia', 'Santo Niño', 'Sindalan', 'Telabastagan'] },
          'angeles': { name: 'Angeles', barangays: ['Agapito del Rosario', 'Amsic', 'Anunas', 'Balibago', 'Capaya', 'Claro M. Recto', 'Culaiat', 'Cutcut', 'Cutud', 'Lourdes North West', 'Lourdes Sur', 'Lourdes Sur East', 'Malabanias', 'Margot', 'Mining', 'Ninoy Aquino', 'Pampang', 'Pandan', 'Pulungbulu', 'San Jose', 'San Nicolas', 'Santa Teresita', 'Santo Domingo', 'Santo Rosario', 'Sapangbato', 'Tabun'] },
          'mabalacat': { name: 'Mabalacat', barangays: ['Atlu-Bola', 'Bical', 'Bundagul', 'Cacutud', 'Camachiles', 'Dapdap', 'Dau', 'Dolores', 'Duquit', 'Lakandula', 'Mabiga', 'Mamatitang', 'Mangalit', 'Marcos Village', 'Mawaque', 'Poblacion', 'San Francisco', 'San Joaquin', 'Santa Ines', 'Santo Rosario', 'Sapang Biabas', 'Tabun'] }
        }
      }
    }
  },
  'visayas': {
    name: 'Visayas',
    provinces: {
      'cebu': {
        name: 'Cebu',
        cities: {
          'cebu-city': { name: 'Cebu City', barangays: ['Apas', 'Banilad', 'Basak Pardo', 'Basak San Nicolas', 'Busay', 'Calamba', 'Capitol Site', 'Cebu City (Poblacion)', 'Cogon Ramos', 'Guadalupe', 'Kasambagan', 'Lahug', 'Luz', 'Mabolo', 'Mabini', 'Pardo', 'Pasil', 'Punta Princesa', 'San Antonio', 'San Jose', 'San Nicolas Proper', 'Talamban', 'Tisa', 'Zapatera'] },
          'mandaue': { name: 'Mandaue', barangays: ['Alang-Alang', 'Bakilid', 'Banilad', 'Basak', 'Cabancalan', 'Cambaro', 'Canduman', 'Casili', 'Casuntingan', 'Centro (Poblacion)', 'Cubacub', 'Guizo', 'Ibabao-Estancia', 'Jagobiao', 'Labogon', 'Looc', 'Maguikay', 'Mantuyong', 'Opao', 'Pagsabungan', 'Subangdaku', 'Tabok', 'Tipolo', 'Umapad'] },
          'lapu-lapu': { name: 'Lapu-Lapu', barangays: ['Agus', 'Babag', 'Bankal', 'Basak', 'Buaya', 'Canjulao', 'Caubang', 'Cawhagan', 'Gun-ob', 'Ibo', 'Looc', 'Mactan', 'Maribago', 'Marigondon', 'Olango', 'Pajo', 'Pangan-an', 'Poblacion', 'Punta Engaño', 'Pusok', 'Sabang', 'Santa Rosa', 'Subabasbas', 'Talima', 'Tingo'] }
        }
      },
      'bohol': {
        name: 'Bohol',
        cities: {
          'tagbilaran': { name: 'Tagbilaran', barangays: ['Bool', 'Booy', 'Cabawan', 'Cogon', 'Dampas', 'Dao', 'Manga', 'Mansasa', 'Poblacion I', 'Poblacion II', 'Poblacion III', 'San Isidro', 'Taloto', 'Tiptip', 'Ubujan'] }
        }
      },
      'iloilo': {
        name: 'Iloilo',
        cities: {
          'iloilo-city': { name: 'Iloilo City', barangays: ['Arevalo', 'Bakhaw', 'Bolilao', 'Bonifacio', 'Calaparan', 'City Proper', 'Diversion', 'Guzman-Jesena', 'Hibao-an Norte', 'Hibao-an Sur', 'Jaro', 'La Paz', 'Lapuz', 'Leganes', 'Mandurriao', 'Molo', 'San Jose', 'San Rafael', 'Tabuc Suba', 'Villa Arevalo'] }
        }
      },
      'negros-occidental': {
        name: 'Negros Occidental',
        cities: {
          'bacolod': { name: 'Bacolod', barangays: ['Alijis', 'Alangilan', 'Bacolod Village', 'Banago', 'Cabug', 'Estefania', 'Granada', 'Handumanan', 'Lopez Jaena', 'Mandalagan', 'Mansilingan', 'Montevista', 'Poblacion', 'Punta Taytay', 'San Juan', 'Singcang-Airport', 'Sum-ag', 'Taculing', 'Tangub', 'Villamonte'] }
        }
      }
    }
  },
  'mindanao': {
    name: 'Mindanao',
    provinces: {
      'davao-del-sur': {
        name: 'Davao del Sur',
        cities: {
          'davao-city': { name: 'Davao City', barangays: ['Agdao', 'Buhangin', 'Bunawan', 'Calinan', 'Catalunan Grande', 'Catalunan Pequeño', 'Ecoland', 'Ilang', 'Langub', 'Leon Garcia', 'Maa', 'Matina Aplaya', 'Matina Crossing', 'Matina Pangi', 'Panacan', 'Poblacion', 'San Pedro', 'Talomo', 'Toril', 'Tugbok'] }
        }
      },
      'cagayan-de-oro': {
        name: 'Misamis Oriental',
        cities: {
          'cagayan-de-oro': { name: 'Cagayan de Oro', barangays: ['Agusan', 'Balulang', 'Baluarte', 'Bayabas', 'Bonbon', 'Bugo', 'Bulua', 'Camaman-an', 'Canito-an', 'Carmen', 'Cugman', 'Gusa', 'Indahag', 'Kauswagan', 'Lapasan', 'Lumbia', 'Macasandig', 'Macabalan', 'Nazareth', 'Patag', 'Puerto', 'Tablon', 'Baloy'] }
        }
      },
      'zamboanga-del-sur': {
        name: 'Zamboanga del Sur',
        cities: {
          'zamboanga-city': { name: 'Zamboanga City', barangays: ['Arena Blanco', 'Ayala', 'Baliwasan', 'Boalan', 'Bunguiao', 'Canelar', 'Camino Nuevo', 'Campo Islam', 'Divisoria', 'Guiwan', 'La Paz', 'Pasonanca', 'Poblacion', 'Putik', 'San Jose', 'San Roque', 'Santa Catalina', 'Santa Maria', 'Sinunoc', 'Tetuan', 'Zambowood'] }
        }
      },
      'south-cotabato': {
        name: 'South Cotabato',
        cities: {
          'general-santos': { name: 'General Santos', barangays: ['Apopong', 'Baluan', 'Batomelong', 'Buayan', 'Bula', 'Calumpang', 'City Heights', 'Conel', 'Dadiangas East', 'Dadiangas North', 'Dadiangas South', 'Dadiangas West', 'Fatima', 'Katangawan', 'Lagao', 'Ligaya', 'Mabuhay', 'Olympog', 'San Isidro', 'San Jose', 'Siguel', 'Sinawal', 'Tambler', 'Tinagacan', 'Upper Labay'] }
        }
      }
    }
  }
};
