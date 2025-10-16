// Shop Page JavaScript - Books Database and Functionality
console.log("shop.js loaded successfully");

// Books Database - Real existing books with actual covers
const booksDatabase = [
  // ROMANCE (8 books)
  {
    id: 1,
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "Romance",
    quality: "Like New",
    price: 250,
    originalPrice: 450,
    rating: 4.8,
    image: "The Fault in Our Stars.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Me Before You",
    author: "Jojo Moyes",
    genre: "Romance",
    quality: "Very Good",
    price: 320,
    originalPrice: 550,
    rating: 4.6,
    image: "Me Before You.jpg",
    isNew: true,
  },
  {
    id: 3,
    title: "The Notebook",
    author: "Nicholas Sparks",
    genre: "Romance",
    quality: "Good",
    price: 180,
    originalPrice: 350,
    rating: 4.5,
    image:
      "https://i.pinimg.com/736x/82/c4/9a/82c49a3063475b9b259782451116a55c--the-notebook-nicholas-sparks-library-cards.jpg",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    quality: "New",
    price: 280,
    originalPrice: 480,
    rating: 4.9,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.7bJprntwV1Fxtv72bdzmkAHaLc?pid=Api&P=0&h=180",
  },
  {
    id: 5,
    title: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    genre: "Romance",
    quality: "Fair",
    price: 150,
    originalPrice: 300,
    rating: 4.3,
    image: "https://m.media-amazon.com/images/I/41dANE3dYjS.jpg",
  },
  {
    id: 6,
    title: "Ang Mutya ng Section E",
    author: "Lara Krizzel Flores",
    genre: "Romance",
    quality: "Very Good",
    price: 150,
    originalPrice: 500,
    rating: 4.7,
    image: "Ang Mutya ng Section E.jpg",
    featured: true,
    isNew: true,
  },
  {
    id: 7,
    title: "Eleanor & Park",
    author: "Rainbow Rowell",
    genre: "Romance",
    quality: "Like New",
    price: 240,
    originalPrice: 420,
    rating: 4.8,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.t-u1Q-W77-oF0OVjTpHQHwHaLW?pid=Api&P=0&h=180",
  },
  {
    id: 8,
    title: "The Rosie Project",
    author: "Graeme Simsion",
    genre: "Romance",
    quality: "Good",
    price: 200,
    originalPrice: 380,
    rating: 4.4,
    image:
      "https://cdn.penguin.co.uk/dam-assets/books/9781405912792/9781405912792-jacket-large.jpg",
  },

  // ADVENTURE (8 books)
  {
    id: 9,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    quality: "Very Good",
    price: 280,
    originalPrice: 450,
    rating: 4.7,
    image: "The Alchemist.jpg",
    featured: true,
  },
  {
    id: 10,
    title: "Life of Pi",
    author: "Yann Martel",
    genre: "Adventure",
    quality: "Like New",
    price: 320,
    originalPrice: 520,
    rating: 4.8,
    image:
      "https://diwanegypt.com/wp-content/uploads/2023/01/9781786894243.jpg",
  },
  {
    id: 11,
    title: "Into the Wild",
    author: "Jon Krakauer",
    genre: "Adventure",
    quality: "Good",
    price: 190,
    originalPrice: 380,
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/713SeNQjEAL._SL1428_.jpg",
  },
  {
    id: 12,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Adventure",
    quality: "New",
    price: 380,
    originalPrice: 550,
    rating: 4.9,
    image:
      "https://i.pinimg.com/originals/27/cf/91/27cf91f605923223613909c7b9d2219f.jpg",
  },
  {
    id: 13,
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    genre: "Adventure",
    quality: "Fair",
    price: 140,
    originalPrice: 300,
    rating: 4.2,
    image:
      "http://images.macmillan.com/folio-assets/macmillan_us_frontbookcovers_1000H/9780812505085.jpg",
  },
  {
    id: 14,
    title: "The Call of the Wild",
    author: "Jack London",
    genre: "Adventure",
    quality: "Very Good",
    price: 160,
    originalPrice: 320,
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/81gC9oXiMHL.jpg",
  },
  {
    id: 15,
    title: "Around the World in 80 Days",
    author: "Jules Verne",
    genre: "Adventure",
    quality: "Like New",
    price: 200,
    originalPrice: 380,
    rating: 4.8,
    image: "https://images.thenile.io/r1000/9781509827855.jpg",
  },
  {
    id: 16,
    title: "Robinson Crusoe",
    author: "Daniel Defoe",
    genre: "Adventure",
    quality: "Good",
    price: 150,
    originalPrice: 290,
    rating: 4.4,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.1eNhPIbp9zGlKFRQo7omywHaLc?pid=Api&P=0&h=180",
  },

  // BUSINESS (7 books)
  {
    id: 17,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    genre: "Business",
    quality: "New",
    price: 620,
    originalPrice: 950,
    rating: 4.9,
    image: "The 48 Laws of Power.png",
    featured: true,
    isNew: true,
  },
  {
    id: 18,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Business",
    quality: "Like New",
    price: 380,
    originalPrice: 580,
    rating: 4.8,
    image:
      "https://cdn.kobo.com/book-images/c81ea4de-cfb7-415d-8634-314aad041fdb/353/569/90/False/rich-dad-poor-dad-9.jpg",
  },
  {
    id: 19,
    title: "Good to Great",
    author: "James C. Collins",
    genre: "Business",
    quality: "Very Good",
    price: 420,
    originalPrice: 600,
    rating: 4.7,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUAV3qje59Dy_cs2xEJbdqTwFyrGgvUk5Qg&s",
  },
  {
    id: 20,
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    quality: "Good",
    price: 380,
    originalPrice: 550,
    rating: 4.6,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629999184i/10127019.jpg",
  },
  {
    id: 21,
    title: "Zero to One",
    author: "Peter Thiel",
    genre: "Business",
    quality: "Fair",
    price: 320,
    originalPrice: 480,
    rating: 4.3,
    image: "https://cdn2.penguin.com.au/covers/original/9780753555200.jpg",
  },
  {
    id: 22,
    title: "The E-Myth Revisited",
    author: "Michael E. Gerber",
    genre: "Business",
    quality: "Very Good",
    price: 350,
    originalPrice: 520,
    rating: 4.7,
    image: "https://cdn.gramedia.com/uploads/products/its5d8tcy9.jpg",
  },
  {
    id: 23,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Business",
    quality: "Like New",
    price: 280,
    originalPrice: 450,
    rating: 4.8,
    image:
      "https://m.media-amazon.com/images/I/61IxJuRI39L._UF1000,1000_QL80_.jpg",
  },

  // EDUCATION (6 books)
  {
    id: 24,
    title: "Noli Me Tangere",
    author: "Jose Rizal",
    genre: "Education",
    quality: "New",
    price: 280,
    originalPrice: 450,
    rating: 4.9,
    image: "https://images.penguinrandomhouse.com/cover/9780143039693",
  },
  {
    id: 25,
    title: "El Filibusterismo",
    author: "Jose Rizal",
    genre: "Education",
    quality: "Like New",
    price: 280,
    originalPrice: 450,
    rating: 4.8,
    image:
      "https://i.pinimg.com/originals/ed/c3/62/edc3622b98ad0fd81999757a690fa70a.jpg",
  },
  {
    id: 26,
    title: "How to Win Friends",
    author: "Dale Carnegie",
    genre: "Education",
    quality: "Very Good",
    price: 320,
    originalPrice: 480,
    rating: 4.6,
    image:
      "https://miro.medium.com/v2/resize:fit:562/1*L-wIluP6f-DkLm_gSrFp6Q.png",
  },
  {
    id: 27,
    title: "The 7 Habits",
    author: "Stephen Covey",
    genre: "Education",
    quality: "Good",
    price: 380,
    originalPrice: 550,
    rating: 4.5,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.BjaMNuDJxolKJrbi9R6kIwHaLR?pid=Api&P=0&h=180",
  },
  {
    id: 28,
    title: "Outliers",
    author: "Malcolm Gladwell",
    genre: "Education",
    quality: "Fair",
    price: 280,
    originalPrice: 420,
    rating: 4.3,
    image:
      "https://www.hachettebookgroup.com/wp-content/uploads/2017/06/HBGAuthors_Malcolm-Gladwell_Outliers_Paperback.jpg?resize=133",
  },
  {
    id: 29,
    title: "Mindset",
    author: "Carol S. Dweck",
    genre: "Education",
    quality: "Very Good",
    price: 360,
    originalPrice: 520,
    rating: 4.7,
    image:
      "http://www.bibdsl.co.uk/imagegallery2/publisher/batch547/9781780332000.JPG",
  },

  // FINANCIAL LITERACY (7 books)
  {
    id: 30,
    title: "The Total Money Makeover",
    author: "Dave Ramsey",
    genre: "Financial",
    quality: "New",
    price: 420,
    originalPrice: 650,
    rating: 4.9,
    image: "https://m.media-amazon.com/images/I/81eCiKyn8IL._SL1500_.jpg",
  },
  {
    id: 31,
    title: "The Millionaire Next Door",
    author: "Thomas J. Stanley",
    genre: "Financial",
    quality: "Like New",
    price: 350,
    originalPrice: 520,
    rating: 4.8,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348313018i/998.jpg",
  },
  {
    id: 32,
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    genre: "Financial",
    quality: "Very Good",
    price: 220,
    originalPrice: 380,
    rating: 4.7,
    image:
      "https://covers.storytel.com/jpg-640/9789354864186.96ef61b4-122c-488f-8f06-4b2850a6a8d5?optimize=high",
  },
  {
    id: 33,
    title: "Your Money or Your Life",
    author: "Vicki Robin",
    genre: "Financial",
    quality: "Good",
    price: 320,
    originalPrice: 480,
    rating: 4.6,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1699646424i/5634236.jpg",
  },
  {
    id: 34,
    title: "I Will Teach You to Be Rich",
    author: "Ramit Sethi",
    genre: "Financial",
    quality: "Fair",
    price: 380,
    originalPrice: 550,
    rating: 4.2,
    image:
      "https://cdn.kobo.com/book-images/4a9a927c-1454-49d2-91f8-93e11cebdcc0/1200/1200/False/i-will-teach-you-to-be-rich-second-edition-2.jpg",
  },
  {
    id: 35,
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    genre: "Financial",
    quality: "Very Good",
    price: 480,
    originalPrice: 680,
    rating: 4.7,
    image: "https://i.harperapps.com/hcanz/covers/9780061745171/y648.jpg",
  },
  {
    id: 36,
    title: "The Barefoot Investor",
    author: "Scott Pape",
    genre: "Financial",
    quality: "Like New",
    price: 380,
    originalPrice: 550,
    rating: 4.8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcmpkjobHl2kKzAuMAiAdI6-8sXsQmOs2M3w&s",
  },

  // MEMOIR (6 books)
  {
    id: 37,
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    quality: "Like New",
    price: 420,
    originalPrice: 600,
    rating: 4.8,
    image: "https://cdn2.penguin.com.au/covers/original/9780099511021.jpg",
  },
  {
    id: 38,
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Memoir",
    quality: "Very Good",
    price: 480,
    originalPrice: 680,
    rating: 4.7,
    image: "https://cdn2.penguin.com.au/covers/original/9780241334140.jpg",
  },
  {
    id: 39,
    title: "The Glass Castle",
    author: "Jeannette Walls",
    genre: "Memoir",
    quality: "Good",
    price: 280,
    originalPrice: 420,
    rating: 4.5,
    image:
      "https://2.bp.blogspot.com/-WK7o1K62DjE/UQQP8d_afBI/AAAAAAAACh8/4xGQDpYpB3Q/s400/the-glass-castle-book.jpg",
  },
  {
    id: 40,
    title: "When Breath Becomes Air",
    author: "Paul Kalanithi",
    genre: "Memoir",
    quality: "New",
    price: 380,
    originalPrice: 550,
    rating: 4.9,
    image:
      "https://tse4.mm.bing.net/th/id/OIP._i3k60tiBT9OFDYwv-TuXQHaLT?pid=Api&P=0&h=180",
  },
  {
    id: 41,
    title: "Born a Crime",
    author: "Trevor Noah",
    genre: "Memoir",
    quality: "Fair",
    price: 320,
    originalPrice: 480,
    rating: 4.3,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.WbFkM0dqN_YUxTud_FkurAHaLX?pid=Api&P=0&h=180",
  },
  {
    id: 42,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    genre: "Memoir",
    quality: "Very Good",
    price: 250,
    originalPrice: 400,
    rating: 4.6,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.L6Mj-G6PyXe-mcFZLM4J5QHaML?pid=Api&P=0&h=180",
  },

  // SELF-HELP (8 books)
  {
    id: 43,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    quality: "New",
    price: 550,
    originalPrice: 850,
    rating: 4.9,
    image: "Atomic Habits.jpg",
    featured: true,
    isNew: true,
  },
  {
    id: 44,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    genre: "Self-Help",
    quality: "Like New",
    price: 380,
    originalPrice: 550,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
  },
  {
    id: 45,
    title: "You Are a Badass",
    author: "Jen Sincero",
    genre: "Self-Help",
    quality: "Very Good",
    price: 320,
    originalPrice: 480,
    rating: 4.7,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.1Z44lTp1g1CagcnIYq46YQAAAA?pid=Api&P=0&h=180",
  },
  {
    id: 46,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    genre: "Self-Help",
    quality: "Good",
    price: 280,
    originalPrice: 420,
    rating: 4.6,
    image:
      "https://cdn.kobo.com/book-images/59e80730-aaad-4b30-ac1d-fd5952880c01/1200/1200/False/the-power-of-now-1.jpg",
  },
  {
    id: 47,
    title: "Daring Greatly",
    author: "Brené Brown",
    genre: "Self-Help",
    quality: "Fair",
    price: 280,
    originalPrice: 420,
    rating: 4.4,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8e/Daring_Greatly_Book_Cover.png",
  },
  {
    id: 48,
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    genre: "Self-Help",
    quality: "Very Good",
    price: 250,
    originalPrice: 380,
    rating: 4.7,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630664059i/6596.jpg",
  },
  {
    id: 49,
    title: "I Decided to Live as Me",
    author: "Kim Soo-hyun",
    genre: "Self-Help",
    quality: "Like New",
    price: 480,
    originalPrice: 700,
    rating: 4.8,
    image: "I Decided To Live As Me.jpg",
    isNew: true,
  },
  {
    id: 50,
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    genre: "Self-Help",
    quality: "Good",
    price: 420,
    originalPrice: 600,
    rating: 4.5,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.ybYaaT3ebWRZtAp__fgqOwHaLX?pid=Api&P=0&h=180",
  },

  // SPIRITUAL (5 books)
  {
    id: 51,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    genre: "Spiritual",
    quality: "Like New",
    price: 250,
    originalPrice: 400,
    rating: 4.8,
    image: "The Little Prince.jpg",
    featured: true,
    isNew: true,
  },
  {
    id: 52,
    title: "Siddhartha",
    author: "Hermann Hesse",
    genre: "Spiritual",
    quality: "Very Good",
    price: 200,
    originalPrice: 350,
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/81nzjWW5FFL._SL1500_.jpg",
  },
  {
    id: 53,
    title: "The Prophet",
    author: "Kahlil Gibran",
    genre: "Spiritual",
    quality: "Good",
    price: 180,
    originalPrice: 320,
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/715NgyTt9FL._SL1500_.jpg",
  },
  {
    id: 54,
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    genre: "Spiritual",
    quality: "New",
    price: 320,
    originalPrice: 480,
    rating: 4.9,
    image:
      "https://www.justologist.com/content/images/2023/06/9781846046384-1.jpg",
  },
  {
    id: 55,
    title: "The Celestine Prophecy",
    author: "James Redfield",
    genre: "Spiritual",
    quality: "Fair",
    price: 180,
    originalPrice: 320,
    rating: 4.3,
    image:
      "https://www.hachettebookgroup.com/wp-content/uploads/2018/09/9781538730263.jpg?fit=443%2C675",
  },

  // WOMEN (5 books)
  {
    id: 56,
    title: "Lean In",
    author: "Sheryl Sandberg",
    genre: "Women",
    quality: "New",
    price: 380,
    originalPrice: 550,
    rating: 4.9,
    image: "https://cdn2.penguin.com.au/covers/original/9780753541647.jpg",
  },
  {
    id: 57,
    title: "Bad Feminist",
    author: "Roxane Gay",
    genre: "Women",
    quality: "Like New",
    price: 320,
    originalPrice: 480,
    rating: 4.8,
    image: "https://m.media-amazon.com/images/I/91onBEiNeYL.jpg",
  },
  {
    id: 58,
    title: "We Should All Be Feminists",
    author: "Chimamanda Ngozi Adichie",
    genre: "Women",
    quality: "Very Good",
    price: 180,
    originalPrice: 300,
    rating: 4.7,
    image:
      "https://africanbookaddict.files.wordpress.com/2015/01/adichie-feminist.jpg?w=324",
  },
  {
    id: 59,
    title: "I Am Malala",
    author: "Malala Yousafzai",
    genre: "Women",
    quality: "Good",
    price: 280,
    originalPrice: 420,
    rating: 4.6,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.V_IUiWQ2KIk61q6PqafvkgHaLe?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 60,
    title: "The Moment of Lift",
    author: "Melinda Gates",
    genre: "Women",
    quality: "Fair",
    price: 320,
    originalPrice: 480,
    rating: 4.4,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1540299907i/40776644.jpg",
  },
];

// Global variables
let currentPage = 1;
const booksPerPage = 12;
let filteredBooks = [...booksDatabase];
let activeFilters = {
  genre: "all",
  quality: "all",
  price: "all",
  sort: "featured",
  search: "",
  special: null, // For 'featured' or 'new' filters
};

// Initialize shop page
document.addEventListener("DOMContentLoaded", function () {
  initShopPage();
});

function initShopPage() {
  console.log("initShopPage() called");

  initFilters();
  initSearch();
  initPagination();
  updateCartBadge();

  // Read URL parameters for auto-filtering
  const urlParams = new URLSearchParams(window.location.search);
  const genreParam = urlParams.get("genre");
  const filterParam = urlParams.get("filter");

  console.log("URL params:", { genre: genreParam, filter: filterParam });

  // Apply URL filters if present
  if (genreParam) {
    activeFilters.genre = genreParam;
    const genreLink = document.querySelector(`[data-genre="${genreParam}"]`);
    if (genreLink) {
      document
        .querySelectorAll("[data-genre]")
        .forEach((l) => l.classList.remove("active"));
      genreLink.classList.add("active");

      // Update button text
      const genreBtn = document.querySelector(
        '.filter-btn[data-filter="genre"]'
      );
      if (genreBtn) {
        genreBtn.childNodes[0].textContent = genreParam + " ";
      }
    }
  } else {
    const defaultGenre = document.querySelector('[data-genre="all"]');
    if (defaultGenre) defaultGenre.classList.add("active");
  }

  // Apply special filters (Featured, New)
  if (filterParam === "featured") {
    activeFilters.special = "featured";
  } else if (filterParam === "new") {
    activeFilters.special = "new";
  }

  // Set default active filters
  const defaultQuality = document.querySelector('[data-quality="all"]');
  const defaultPrice = document.querySelector('[data-price="all"]');

  if (defaultQuality) defaultQuality.classList.add("active");
  if (defaultPrice) defaultPrice.classList.add("active");

  console.log("Shop page initialized with filters:", activeFilters);

  renderBooks();
}

// Render books on page
function renderBooks() {
  const booksGrid = document.getElementById("booksGrid");
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const booksToShow = filteredBooks.slice(startIndex, endIndex);

  if (booksToShow.length === 0) {
    booksGrid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>No books found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>
    `;
    return;
  }

  booksGrid.innerHTML = booksToShow
    .map((book) => {
      // Check if image is local or external URL
      const imageSrc = book.image.startsWith("http")
        ? book.image
        : `../images/${book.image}`;
      return `
    <article class="book-card" data-id="${book.id}" data-genre="${book.genre}" data-quality="${book.quality}" data-price="${book.price}">
      <div class="badge">${book.quality}</div>
      <figure class="book-image">
        <img src="${imageSrc}" alt="" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/f3f4f6/6b7280?text=Book+Cover'; this.style.opacity='1';">
      </figure>
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <p class="price">₱${book.price} <span class="original-price">₱${book.originalPrice}</span></p>
      <p class="rating">${book.rating} ★</p>
      <div class="book-actions">
        <button class="add-to-cart" onclick="addToCartFromShop(${book.id})">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
        <a href="#" class="view-book">View</a>
      </div>
    </article>
    `;
    })
    .join("");

  updateResultsCount();
  updatePagination();
}

// Add to cart function
function addToCartFromShop(bookId) {
  const book = booksDatabase.find((b) => b.id === bookId);
  if (!book) return;

  const cart = JSON.parse(localStorage.getItem("rereadCart")) || [];
  const existingItem = cart.find((item) => item.title === book.title);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    // Use correct image path for cart
    const cartImage = book.image.startsWith("http")
      ? book.image
      : `images/${book.image}`;
    cart.push({
      title: book.title,
      author: book.author,
      price: `₱${book.price}`,
      image: cartImage,
      quantity: 1,
      condition: book.quality,
      seller: "Sold by Re;Read",
    });
  }

  localStorage.setItem("rereadCart", JSON.stringify(cart));
  updateCartBadge();
  showNotification(`${book.title} added to cart!`, "success");
}

// Update cart badge
function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("rereadCart")) || [];
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const cartBadge = document.getElementById("cartBadge");

  if (cartBadge) {
    cartBadge.textContent = count;
    cartBadge.setAttribute("data-count", count);
    cartBadge.style.display = count > 0 ? "flex" : "none";
  }
}

// Initialize filters
function initFilters() {
  console.log("Initializing shop filters...");

  // Genre filter
  const genreLinks = document.querySelectorAll("[data-genre]");
  console.log("Found genre links:", genreLinks.length);

  genreLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      activeFilters.genre = this.dataset.genre;

      // Update active state
      document
        .querySelectorAll("[data-genre]")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      console.log("Genre filter applied:", this.dataset.genre);

      // Update button text
      const genreBtn = document.querySelector(
        '.filter-btn[data-filter="genre"]'
      );
      if (genreBtn) {
        const displayText =
          this.dataset.genre === "all" ? "Genre" : this.textContent.trim();
        genreBtn.childNodes[0].textContent = displayText + " ";
      }

      applyFilters();
      closeAllDropdowns();
    });
  });

  // Quality filter
  document.querySelectorAll("[data-quality]").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      activeFilters.quality = this.dataset.quality;

      // Update active state
      document
        .querySelectorAll("[data-quality]")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      console.log("Quality filter applied:", this.dataset.quality);

      // Update button text
      const qualityBtn = document.querySelector(
        '.filter-btn[data-filter="quality"]'
      );
      if (qualityBtn) {
        const displayText =
          this.dataset.quality === "all" ? "Quality" : this.textContent.trim();
        qualityBtn.childNodes[0].textContent = displayText + " ";
      }

      applyFilters();
      closeAllDropdowns();
    });
  });

  // Price filter
  document.querySelectorAll("[data-price]").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      activeFilters.price = this.dataset.price;

      // Update active state
      document
        .querySelectorAll("[data-price]")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");

      console.log("Price filter applied:", this.dataset.price);

      // Update button text
      const priceBtn = document.querySelector(
        '.filter-btn[data-filter="price"]'
      );
      if (priceBtn) {
        const displayText =
          this.dataset.price === "all" ? "Price" : this.textContent.trim();
        priceBtn.childNodes[0].textContent = displayText + " ";
      }

      applyFilters();
      closeAllDropdowns();
    });
  });

  // Sort filter
  document.querySelectorAll("[data-sort]").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      activeFilters.sort = this.dataset.sort;
      document.getElementById("currentSort").textContent = this.textContent;
      applyFilters();
      closeAllDropdowns();
    });
  });

  // Dropdown toggle
  const filterBtns = document.querySelectorAll(".filter-btn, .sort-btn");
  console.log("Found filter buttons:", filterBtns.length);

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      console.log("Filter button clicked:", this.dataset.filter || "sort");

      const dropdown = this.parentElement;
      const isActive = dropdown.classList.contains("active");

      closeAllDropdowns();

      if (!isActive) {
        dropdown.classList.add("active");
        console.log("Dropdown opened");
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", closeAllDropdowns);
}

function closeAllDropdowns() {
  document
    .querySelectorAll(".filter-dropdown, .sort-dropdown")
    .forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
}

// Apply all filters
function applyFilters() {
  filteredBooks = booksDatabase.filter((book) => {
    // Genre filter
    if (activeFilters.genre !== "all" && book.genre !== activeFilters.genre) {
      return false;
    }

    // Quality filter
    if (
      activeFilters.quality !== "all" &&
      book.quality !== activeFilters.quality
    ) {
      return false;
    }

    // Price filter
    if (activeFilters.price !== "all") {
      const price = book.price;
      const range = activeFilters.price;

      if (range === "0-100" && price >= 100) return false;
      if (range === "100-200" && (price < 100 || price >= 200)) return false;
      if (range === "200-300" && (price < 200 || price >= 300)) return false;
      if (range === "300-500" && (price < 300 || price >= 500)) return false;
      if (range === "500-800" && (price < 500 || price >= 800)) return false;
      if (range === "800-1000" && (price < 800 || price >= 1000)) return false;
      if (range === "1000+" && price < 1000) return false;
    }

    // Special filters (Featured, New)
    if (activeFilters.special === "featured" && !book.featured) {
      return false;
    }
    if (activeFilters.special === "new" && !book.isNew) {
      return false;
    }

    // Search filter
    if (activeFilters.search) {
      const searchTerm = activeFilters.search.toLowerCase();
      const searchable =
        `${book.title} ${book.author} ${book.genre}`.toLowerCase();
      if (!searchable.includes(searchTerm)) {
        return false;
      }
    }

    return true;
  });

  // Apply sorting
  switch (activeFilters.sort) {
    case "price-low":
      filteredBooks.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredBooks.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filteredBooks.sort((a, b) => b.rating - a.rating);
      break;
    default: // featured
      // Keep original order
      break;
  }

  currentPage = 1;
  console.log(`Filtered to ${filteredBooks.length} books`);
  renderBooks();
}

// Initialize search
function initSearch() {
  const searchInput = document.getElementById("searchInput");
  let searchTimeout;

  searchInput.addEventListener("input", function () {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      activeFilters.search = this.value;
      applyFilters();
    }, 300);
  });
}

// Initialize pagination
function initPagination() {
  document.querySelector(".prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderBooks();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  document.querySelector(".next-btn").addEventListener("click", () => {
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderBooks();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

// Update pagination UI
function updatePagination() {
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const pageNumbers = document.getElementById("pageNumbers");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // Update buttons state
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages || totalPages === 0;

  // Generate page numbers
  pageNumbers.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      const pageBtn = document.createElement("button");
      pageBtn.className = `page-number ${i === currentPage ? "active" : ""}`;
      pageBtn.textContent = i;
      pageBtn.addEventListener("click", () => {
        currentPage = i;
        renderBooks();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      pageNumbers.appendChild(pageBtn);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      const ellipsis = document.createElement("span");
      ellipsis.textContent = "...";
      ellipsis.style.padding = "0 8px";
      ellipsis.style.color = "#6b7280";
      pageNumbers.appendChild(ellipsis);
    }
  }
}

// Update results count
function updateResultsCount() {
  const resultsCount = document.getElementById("resultsCount");
  resultsCount.textContent = filteredBooks.length;
}

// Show notification
function showNotification(message, type = "success") {
  const colors = {
    success: "#10b981",
    error: "#ef4444",
    info: "#3b82f6",
  };

  const notification = document.createElement("div");
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${colors[type]};
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    font-weight: 600;
    z-index: 1000;
    animation: slideIn 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  `;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}
