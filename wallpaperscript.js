// LiveScape JavaScript Functionality

// Sample data
const categories = [
    {
        id: 1,
        name: "Abstract Art",
        count: "2,500+",
        image: "https://i.pinimg.com/736x/e1/2d/c6/e12dc629913f2ed3bd231c766e2a0566.jpg",
        icon: "fas fa-palette",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        id: 2,
        name: "Nature",
        count: "3,200+",
        image: "https://i.pinimg.com/1200x/a6/90/9c/a6909cf47df97e0dddae61da00bc27db.jpg",
        icon: "fas fa-mountain",
        gradient: "from-green-500 to-emerald-500"
    },
    {
        id: 3,
        name: "Sci-Fi & Cyberpunk",
        count: "1,800+",
        image: "https://i.pinimg.com/736x/0e/fb/00/0efb00c2f771e7b58189570309b0f90a.jpg",
        icon: "fas fa-bolt",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        id: 4,
        name: "Minimal",
        count: "1,500+",
        image: "https://i.pinimg.com/1200x/b9/ff/ae/b9ffaeca36007388cd9b65c9a1a36461.jpg",
        icon: "fas fa-bolt",
        gradient: "from-gray-500 to-slate-500"
    },
    {
        id: 5,
        name: "Anime",
        count: "2,100+",
        image: "https://i.pinimg.com/736x/70/b2/18/70b218e6460b2d779fef09cdf7d17f51.jpg",
        icon: "fas fa-star",
        gradient: "from-pink-500 to-violet-500"
    },
    {
        id: 6,
        name: "Gaming",
        count: "1,300+",
        image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
        icon: "fas fa-gamepad",
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 7,
        name: "classic",
        count: "1,500+",
        image: "https://i.pinimg.com/736x/ac/f1/b8/acf1b88c976aabdaba77be1668b3e04e.jpg",
        icon: "fas fa-star",
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 8,
        name: "Meow",
        count: "1,200+",
        image: "https://i.pinimg.com/736x/ad/ad/46/adad46df2d934a5e3321052495fd1fc4.jpg",
        icon: "fas fa-bolt",
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 9,
        name: "Lord Hanuman",
        count: "2,500+",
        image: "https://i.pinimg.com/736x/f9/ff/21/f9ff2122c549af96ac230ee44cdd9ec0.jpg",
        icon: "fas fa-bolt",
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 10,
        name: "Lord Shiva",
        count: "2,300+",
        image: "https://i.pinimg.com/736x/6e/ae/06/6eae061cd6587e7306a84f670ea892c4.jpg",
        icon: "fas fa-bolt",
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 11,
        name: "Cars",
        count: "2,100+",
        image: "https://i.pinimg.com/1200x/6b/74/ab/6b74aba51244054936a8e5ca918c2be0.jpg",
        icon: "fas fa-bolt",
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 11,
        name: "Cartoon",
        count: "2,000+",
        image: "https://i.pinimg.com/736x/a4/19/8c/a4198cf6d4f7db5861b17bb72f52576e.jpg",
        icon: "fas fa-star",
        gradient: "from-orange-500 to-red-500"
    }
];

const wallpapers = [
    {
        id: 1,
        title: "Ice Fall ",
        category: "Nature",
        image: "https://cdn.wallpapersafari.com/89/32/qBUXso.gif",
        resolution: "4K",
        downloads: "12.5K",
        isLive: true
    },
    {
        id: 2,
        title: "Abstract Flow",
        category: "abstract",
        image: "https://media3.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
        resolution: "4K",
        downloads: "8.2K",
        isLive: true
    },
    {
        id: 3,
        title: "Mountain cloud",
        category: "Nature",
        image: "https://i.pinimg.com/736x/d2/c9/bf/d2c9bf07268844a420c26de0f7c0ad08.jpg",
        resolution: "4K",
        downloads: "15.1K",
        isLive: false
    },
    {
        id: 4,
        title: "Cyberpunk City",
        category: "sci-fi",
        image: "https://wallpaperaccess.com/full/8264412.gif",
        resolution: "4K",
        downloads: "9.8K",
        isLive: true
    },
    {
        id: 5,
        title: "Neon Dreams",
        category: "abstract",
        image: "https://i.pinimg.com/originals/7d/2a/9f/7d2a9fca264faa93561f72b5fc885fec.gif",
        resolution: "8K",
        downloads: "6.4K",
        isLive: true
    },
    {
        id: 6,
        title: "Forest Vibe",
        category: "nature",
        image: "https://i.pinimg.com/736x/b1/28/75/b1287535ba52f75a71242471163b309d.jpg",
        resolution: "4K",
        downloads: "11.3K",
        isLive: false
    },
    {
        id: 7,
        title: "House Near Lake",
        category: "nature",
        image: "https://i.pinimg.com/736x/bc/c7/08/bcc708bc04f8cd8dc90b686ff925473d.jpg",
        resolution: "4K",
        downloads: "11.3K",
        isLive: false
    },
        {
        id: 8,
        title: "Network",
        category: "abstract",
        image: "https://media.giphy.com/media/jpZvG8KmaVtF6/source.gif",
        resolution: "8K",
        downloads: "6.4K",
        isLive: true
    },
        {
        id: 9,
        title: "Midnight life",
        category: "abstract",
        image: "https://i.pinimg.com/1200x/70/f2/7a/70f27a2597baad85ac220bd83ea1739c.jpg",
        resolution: "4K",
        downloads: "11.3K",
        isLive: false
    },
        {
        id: 10,
        title: "Mountain sunset",
        category: "Nature",
        image: "https://i.pinimg.com/736x/c9/33/83/c9338352a9b38c65157a5d73e05bf68f.jpg",
        resolution: "4K",
        downloads: "15.1K",
        isLive: false
    },
        {
        id: 11,
        title: "Street Way",
        category: "Track",
        image: "https://i.pinimg.com/1200x/90/bb/a5/90bba54f0a6d88fee75eeea877364a12.jpg",
        resolution: "4K",
        downloads: "15.1K",
        isLive: false
    },
        {
        id: 12,
        title: "Arm Force",
        category: "Warrior",
        image: "https://i.pinimg.com/736x/7c/4f/73/7c4f73d87c541e5e2ba61b1eab391df4.jpg",
        resolution: "4K",
        downloads: "25.1K",
        isLive: false
    },
        {
        id: 13,
        title: "Universe",
        category: "space",
        image: "https://i.pinimg.com/1200x/00/6f/24/006f2405540d5eb0e4b925d9faf6bca1.jpg",
        resolution: "4K",
        downloads: "15.1K",
        isLive: false
    },
        {
        id: 14,
        title: "Galaxy",
        category: "space",
        image: "https://i.pinimg.com/736x/eb/62/2d/eb622df9755835c26774bbe1932f1571.jpg",
        resolution: "5K",
        downloads: "15.1K",
        isLive: false
    },
        {
        id: 15,
        title: "Aerospace",
        category: "sci-fi",
        image: "https://i.pinimg.com/736x/47/53/01/475301949390a2360465885d1ef49691.jpg",
        resolution: "5K",
        downloads: "15.1K",
        isLive: false
    },
];

const filters = [
    { id: "all", label: "All", count: wallpapers.length },
    { id: "live", label: "Live", count: wallpapers.filter(w => w.isLive).length },
    { id: "abstract", label: "Abstract", count: wallpapers.filter(w => w.category === "abstract").length },
    { id: "nature", label: "Nature", count: wallpapers.filter(w => w.category === "nature").length },
    { id: "space", label: "Space", count: wallpapers.filter(w => w.category === "space").length },
    { id: "sci-fi", label: "Sci-Fi", count: wallpapers.filter(w => w.category === "sci-fi").length }
];

// State
let currentFilter = "all";
let favorites = new Set();

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const categoriesGrid = document.getElementById('categoriesGrid');
const galleryFilters = document.getElementById('galleryFilters');
const galleryGrid = document.getElementById('galleryGrid');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupMobileMenu();
    renderCategories();
    renderFilters();
    renderWallpapers();
    setupSmoothScrolling();
    setupAnimations();
}

// Mobile Menu
function setupMobileMenu() {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close mobile menu when clicking nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.style.display = 'none';
        }
    });
}

// Render Categories
function renderCategories() {
    categoriesGrid.innerHTML = categories.map((category, index) => `
        <div class="category-card scale-in" style="animation-delay: ${index * 0.1}s">
            <div class="category-bg">
                <img src="${category.image}" alt="${category.name}" class="category-image">
                <div class="category-overlay"></div>
            </div>
            <div class="category-content">
                <div class="category-meta">
                    <div class="category-icon">
                        <i class="${category.icon}"></i>
                    </div>
                    <span class="category-count">${category.count} wallpapers</span>
                </div>
                <h3 class="category-name">${category.name}</h3>
                <div class="category-explore">
                    <span>Explore</span>
                    <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
                </div>
            </div>
        </div>
    `).join('');

    // Add click handlers
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const category = categories[index];
            filterWallpapers(category.name.toLowerCase().replace(/[^a-z]/g, ''));
        });
    });
}

// Render Filters
function renderFilters() {
    galleryFilters.innerHTML = filters.map(filter => `
        <button class="filter-btn ${filter.id === currentFilter ? 'active' : ''}" data-filter="${filter.id}">
            ${filter.label}
            <span class="filter-count">${filter.count}</span>
        </button>
    `).join('');

    // Add click handlers
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            setActiveFilter(filter);
            filterWallpapers(filter);
        });
    });
}

// Render Wallpapers
function renderWallpapers() {
    const filteredWallpapers = getFilteredWallpapers();
    
    galleryGrid.innerHTML = filteredWallpapers.map((wallpaper, index) => `
        <div class="wallpaper-card scale-in" style="animation-delay: ${index * 0.1}s">
            <div class="wallpaper-image-container">
                <img src="${wallpaper.image}" alt="${wallpaper.title}" class="wallpaper-image">
                <div class="wallpaper-overlay"></div>
                
                <div class="wallpaper-badges">
                    ${wallpaper.isLive ? '<span class="wallpaper-badge live"><i class="fas fa-play" style="margin-right: 0.25rem;"></i>Live</span>' : ''}
                    <span class="wallpaper-badge resolution">${wallpaper.resolution}</span>
                </div>
                
                <button class="wallpaper-favorite ${favorites.has(wallpaper.id) ? 'active' : ''}" data-id="${wallpaper.id}">
                    <i class="fas fa-heart"></i>
                </button>
                
                <div class="wallpaper-actions">
                    <button class="wallpaper-action primary" data-id="${wallpaper.id}">
                        <i class="fas fa-download" style="margin-right: 0.5rem;"></i>Download
                    </button>
                    <button class="wallpaper-action" data-id="${wallpaper.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="wallpaper-action" data-id="${wallpaper.id}">
                        <i class="fas fa-share"></i>
                    </button>
                </div>
            </div>
            
            <div class="wallpaper-content">
                <h3 class="wallpaper-title">${wallpaper.title}</h3>
                <div class="wallpaper-meta">
                    <span style="text-transform: capitalize;">${wallpaper.category}</span>
                    <span>${wallpaper.downloads} downloads</span>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners
    setupWallpaperActions();
}

// Setup Wallpaper Actions
function setupWallpaperActions() {
    // Favorite buttons
    const favoriteButtons = document.querySelectorAll('.wallpaper-favorite');
    favoriteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            toggleFavorite(id);
        });
    });

    // Download buttons
    const downloadButtons = document.querySelectorAll('.wallpaper-action.primary');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            downloadWallpaper(id);
        });
    });

    // View buttons
    const viewButtons = document.querySelectorAll('.wallpaper-action:not(.primary)');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            const action = this.querySelector('i').classList.contains('fa-eye') ? 'view' : 'share';
            handleWallpaperAction(id, action);
        });
    });
}

// Filter Functions
function setActiveFilter(filterId) {
    currentFilter = filterId;
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filterId);
    });
}

function filterWallpapers(filter) {
    currentFilter = filter;
    renderWallpapers();
    renderFilters();
}

function getFilteredWallpapers() {
    if (currentFilter === "all") return wallpapers;
    if (currentFilter === "live") return wallpapers.filter(w => w.isLive);
    return wallpapers.filter(w => w.category === currentFilter);
}

// Wallpaper Actions
function toggleFavorite(id) {
    if (favorites.has(id)) {
        favorites.delete(id);
    } else {
        favorites.add(id);
    }
    
    const favoriteBtn = document.querySelector(`[data-id="${id}"].wallpaper-favorite`);
    if (favoriteBtn) {
        favoriteBtn.classList.toggle('active', favorites.has(id));
    }
    
    showToast(favorites.has(id) ? 'Added to favorites!' : 'Removed from favorites!');
}

function downloadWallpaper(id) {
    const wallpaper = wallpapers.find(w => w.id === id);
    if (wallpaper) {
        showToast(`Downloading ${wallpaper.title}...`);
        // In a real app, this would trigger an actual download
        setTimeout(() => {
            showToast('Download completed!');
        }, 2000);
    }
}

function handleWallpaperAction(id, action) {
    const wallpaper = wallpapers.find(w => w.id === id);
    if (wallpaper) {
        if (action === 'view') {
            showToast(`Viewing ${wallpaper.title}`);
            // In a real app, this would open a modal or new page
        } else if (action === 'share') {
            showToast(`Sharing ${wallpaper.title}`);
            // In a real app, this would open share options
        }
    }
}

// Smooth Scrolling
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = 64; // Header height
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations
function setupAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Parallax effect for hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Toast Notifications
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.cssText = `
        position: fixed;
        top: 5rem;
        right: 1rem;
        background: var(--bg-secondary);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        border: 1px solid var(--border);
        box-shadow: var(--glow-primary);
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
        backdrop-filter: blur(10px);
    `;
    toast.textContent = message;

    document.body.appendChild(toast);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, 3000);
}

// Search Functionality
const searchInputs = document.querySelectorAll('.search-input');
searchInputs.forEach(input => {
    input.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        searchWallpapers(query);
    });
});

function searchWallpapers(query) {
    if (!query) {
        renderWallpapers();
        return;
    }

    const filteredWallpapers = wallpapers.filter(wallpaper => 
        wallpaper.title.toLowerCase().includes(query) ||
        wallpaper.category.toLowerCase().includes(query)
    );

    // Update gallery with search results
    galleryGrid.innerHTML = filteredWallpapers.map((wallpaper, index) => `
        <div class="wallpaper-card scale-in" style="animation-delay: ${index * 0.1}s">
            <div class="wallpaper-image-container">
                <img src="${wallpaper.image}" alt="${wallpaper.title}" class="wallpaper-image">
                <div class="wallpaper-overlay"></div>
                
                <div class="wallpaper-badges">
                    ${wallpaper.isLive ? '<span class="wallpaper-badge live"><i class="fas fa-play" style="margin-right: 0.25rem;"></i>Live</span>' : ''}
                    <span class="wallpaper-badge resolution">${wallpaper.resolution}</span>
                </div>
                
                <button class="wallpaper-favorite ${favorites.has(wallpaper.id) ? 'active' : ''}" data-id="${wallpaper.id}">
                    <i class="fas fa-heart"></i>
                </button>
                
                <div class="wallpaper-actions">
                    <button class="wallpaper-action primary" data-id="${wallpaper.id}">
                        <i class="fas fa-download" style="margin-right: 0.5rem;"></i>Download
                    </button>
                    <button class="wallpaper-action" data-id="${wallpaper.id}">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="wallpaper-action" data-id="${wallpaper.id}">
                        <i class="fas fa-share"></i>
                    </button>
                </div>
            </div>
            
            <div class="wallpaper-content">
                <h3 class="wallpaper-title">${wallpaper.title}</h3>
                <div class="wallpaper-meta">
                    <span style="text-transform: capitalize;">${wallpaper.category}</span>
                    <span>${wallpaper.downloads} downloads</span>
                </div>
            </div>
        </div>
    `).join('');

    setupWallpaperActions();
}

// Newsletter Subscription
const newsletterInputs = document.querySelectorAll('.newsletter-input');
const newsletterBtns = document.querySelectorAll('.newsletter button');

newsletterBtns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const email = newsletterInputs[index].value;
        if (email && isValidEmail(email)) {
            showToast('Successfully subscribed to newsletter!');
            newsletterInputs[index].value = '';
        } else {
            showToast('Please enter a valid email address.');
        }
    });
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Random wallpaper functionality
const surpriseButtons = document.querySelectorAll('.btn:contains("Surprise Me")');
document.addEventListener('click', function(e) {
    if (e.target.closest('.btn') && e.target.textContent.includes('Surprise Me')) {
        const randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
        showToast(`Surprise! Showing ${randomWallpaper.title}`);
        
        // Scroll to gallery and highlight the random wallpaper
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    }
});

// Add fadeOut animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);
