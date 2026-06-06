// ---- MENU ITEMS ----
const menuItems = [
    {
        name: "Ethiopian Jebena Coffee",
        category: "coffee",
        desc: "Traditional pot-brewed Ethiopian coffee served with popcorn, the authentic ceremony experience.",
        img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Espresso",
        category: "coffee",
        desc: "Bold, rich espresso pulled from freshly roasted Ethiopian Arabica beans.",
        img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Macchiato",
        category: "coffee",
        desc: "Ethiopia's most beloved daily drink — a short, strong espresso topped with a dash of foam.",
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Fresh Tea Selection",
        category: "coffee",
        desc: "A curated selection of herbal and black teas, brewed fresh and served hot.",
        img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Vanilla Layer Cake",
        category: "cakes",
        desc: "Light, fluffy vanilla sponge layered with fresh cream and topped with a delicate glaze.",
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Chocolate Fudge Cake",
        category: "cakes",
        desc: "Rich, indulgent chocolate cake with velvety fudge frosting. Our most popular dessert.",
        img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Fresh Fruit Tart",
        category: "cakes",
        desc: "Buttery pastry shell filled with custard cream and topped with fresh seasonal fruits.",
        img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Croissant & Pastries",
        category: "cakes",
        desc: "Freshly baked croissants, muffins, and morning pastries made in-house daily.",
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Full Ethiopian Breakfast",
        category: "food",
        desc: "Firfir, eggs, fresh bread, and a pot of coffee — the perfect way to start your day.",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Special Burger",
        category: "food",
        desc: "Our signature burger — juicy, freshly made patty with house sauce and crisp toppings.",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Quick Bites & Snacks",
        category: "food",
        desc: "Small plates and light snacks perfect for a mid-day catch-up over coffee.",
        img: "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Lunch Plate",
        category: "food",
        desc: "Daily rotating lunch specials with generous portions of Ethiopian and international dishes.",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
    },
];

// ---- REVIEWS (from Google Maps screenshots) ----
const reviews = [
    { name: "S A", meta: "Local Guide · 38 reviews", rating: 5, text: "Amazing service. Love it.", time: "4 years ago" },
    { name: "Ruth", meta: "11 reviews · 8 photos", rating: 5, text: "I ordered a delicious cake and vanilla pastries from Lidiya's Cafe. Tasted so fresh and the staff are so friendly. I highly recommend visiting if you are ever near Kebena.", time: "A year ago" },
    { name: "Danny Mia", meta: "1 review", rating: 5, text: "Test the difference with an excellent service. The food and coffee quality here is genuinely impressive.", time: "11 months ago" },
    { name: "Hayat Jemal", meta: "3 reviews", rating: 4, text: "Their food is so good, I loved it so much. You should try their special burger — it is really something.", time: "3 years ago" },
    { name: "Rezan Hasan", meta: "7 reviews · 26 photos", rating: 5, text: "Great food, good service! Clean place and the staff are welcoming. Will definitely come back.", time: "3 years ago" },
    { name: "Teddy", meta: "13 reviews · 2,269 photos", rating: 5, text: "Solid spot in Addis. Food quality is good and the atmosphere is very casual and comfortable. Great for solo dining or with groups.", time: "A year ago" },
];

// ---- RENDER MENU ----
function renderMenu() {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;
    menuItems.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'menu-card animate-on-scroll';
        div.dataset.category = item.category;
        div.style.transitionDelay = (i % 4 * 0.08) + 's';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="menu-img">
            <div class="menu-body">
                <div class="menu-cat">${item.category}</div>
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
            </div>
        `;
        grid.appendChild(div);
    });
    observeElements();
}

// ---- FILTER MENU ----
function filterMenu(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.menu-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// ---- RENDER REVIEWS ----
function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    if (!grid) return;
    reviews.forEach((r, i) => {
        const div = document.createElement('div');
        div.className = 'review-card animate-on-scroll';
        div.style.transitionDelay = (i * 0.08) + 's';
        const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
        const initials = r.name.split(' ').map(w => w[0]).join('').slice(0, 2);
        div.innerHTML = `
            <div class="review-stars">${stars}</div>
            <p class="review-text">"${r.text}"</p>
            <div class="review-author">
                <div class="review-avatar">${initials}</div>
                <div>
                    <div class="review-name">${r.name}</div>
                    <div class="review-meta">${r.meta} &middot; ${r.time}</div>
                </div>
            </div>
        `;
        grid.appendChild(div);
    });
    observeElements();
}

// ---- FAQ ----
function toggleFaq(btn) {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-a');
    const isOpen = btn.classList.contains('open');

    document.querySelectorAll('.faq-q.open').forEach(b => {
        b.classList.remove('open');
        b.parentElement.querySelector('.faq-a').classList.remove('open');
    });

    if (!isOpen) {
        btn.classList.add('open');
        answer.classList.add('open');
    }
}

// ---- MOBILE MENU ----
function initMobileMenu() {
    const btn = document.getElementById('mobile-btn');
    const links = document.getElementById('nav-links');
    if (btn && links) {
        btn.addEventListener('click', () => links.classList.toggle('active'));
        links.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => links.classList.remove('active'));
        });
    }
}

// ---- NAVBAR SCROLL EFFECT ----
function initNavbarScroll() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    });
}

// ---- SCROLL ANIMATIONS ----
function observeElements() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => observer.observe(el));
}

// ---- INIT ----
window.onload = () => {
    renderMenu();
    renderReviews();
    initMobileMenu();
    initNavbarScroll();
    observeElements();
};
