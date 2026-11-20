/**
 * SRUTHI THREADS & DESIGNS - MAIN INTERACTIVE ENGINE
 * Core JavaScript controlling navigation, search, filters, modals, lightbox, wishlist, custom orders & sliders.
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderAndNav();
    initWishlistSystem();
    initSearchEngine();
    initProductCatalog();
    initQuickViewModal();
    initLightboxGallery();
    initCustomDesignStudio();
    initContactForm();
    initTestimonialSlider();
    initScrollToTop();
    injectConfigValues();
});

/* ==========================================================================
   1. HEADER & NAVIGATION ENGINE
   ========================================================================== */
function initHeaderAndNav() {
    const header = document.querySelector('.site-header');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const drawerBackdrop = document.querySelector('.mobile-drawer-backdrop');
    const drawerCloseBtn = document.querySelector('.drawer-close-btn');

    // Sticky Header Scroll Transition
    function checkScroll() {
        if (window.scrollY > 40) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();

    // Mobile Drawer Toggle
    function toggleDrawer(open) {
        if (open) {
            mobileDrawer?.classList.add('open');
            drawerBackdrop?.classList.add('open');
            hamburgerBtn?.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            mobileDrawer?.classList.remove('open');
            drawerBackdrop?.classList.remove('open');
            hamburgerBtn?.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    hamburgerBtn?.addEventListener('click', () => {
        const isOpen = mobileDrawer?.classList.contains('open');
        toggleDrawer(!isOpen);
    });

    drawerCloseBtn?.addEventListener('click', () => toggleDrawer(false));
    drawerBackdrop?.addEventListener('click', () => toggleDrawer(false));

    // Active Page Link Highlight
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/* ==========================================================================
   2. WISHLIST ENGINE (LOCALSTORAGE + TOASTS)
   ========================================================================== */
const WISHLIST_KEY = 'sruthi_threads_wishlist';

function getWishlist() {
    try {
        const stored = localStorage.getItem(WISHLIST_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function saveWishlist(items) {
    try {
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
    } catch (e) {
        console.error("Failed to save wishlist", e);
    }
    updateWishlistBadges();
}

function updateWishlistBadges() {
    const items = getWishlist();
    const badges = document.querySelectorAll('.wishlist-count-badge');
    badges.forEach(b => {
        b.textContent = items.length;
        b.style.display = items.length > 0 ? 'flex' : 'none';
    });
}

function toggleWishlistProduct(productId) {
    const id = parseInt(productId, 10);
    let items = getWishlist();
    const index = items.indexOf(id);
    let added = false;

    if (index > -1) {
        items.splice(index, 1);
        showToast('Removed from your wishlist');
    } else {
        items.push(id);
        added = true;
        showToast('Added to your wishlist ❤️');
    }

    saveWishlist(items);

    // Update all matching toggle buttons on the page
    document.querySelectorAll(`.wishlist-toggle[data-id="${id}"]`).forEach(btn => {
        if (added) {
            btn.classList.add('active');
            btn.innerHTML = '♥';
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '♡';
        }
    });

    // If on wishlist page, re-render
    if (document.body.classList.contains('page-wishlist')) {
        renderWishlistPage();
    }
}

function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function initWishlistSystem() {
    updateWishlistBadges();

    // Delegate wishlist click
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.wishlist-toggle');
        if (btn) {
            e.preventDefault();
            e.stopPropagation();
            const id = btn.getAttribute('data-id');
            if (id) toggleWishlistProduct(id);
        }
    });

    if (document.body.classList.contains('page-wishlist')) {
        renderWishlistPage();
    }
}

function renderWishlistPage() {
    const grid = document.querySelector('#wishlist-grid');
    const emptyState = document.querySelector('#wishlist-empty');
    const toolbar = document.querySelector('#wishlist-toolbar');
    if (!grid) return;

    const wishlistIds = getWishlist();
    const wishlistProducts = products.filter(p => wishlistIds.includes(p.id));

    if (wishlistProducts.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        if (toolbar) toolbar.style.display = 'none';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (toolbar) toolbar.style.display = 'flex';

    grid.innerHTML = wishlistProducts.map(p => createProductCardHTML(p)).join('');

    // Setup Batch Enquiry Button
    const batchBtn = document.querySelector('#enquire-all-wishlist');
    if (batchBtn) {
        batchBtn.onclick = () => {
            const names = wishlistProducts.map(p => `• ${p.name} (${p.code})`).join('\n');
            const message = `Hello ${siteConfig.brandName},\n\nI have saved these designs to my wishlist and would like to enquire about pricing and customization:\n\n${names}\n\nPlease let me know how we can proceed.`;
            window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
        };
    }
}

/* ==========================================================================
   3. PRODUCT CATALOG & FILTER ENGINE
   ========================================================================== */
function createProductCardHTML(product) {
    const wishlist = getWishlist();
    const isWishlisted = wishlist.includes(product.id);
    const tagsHtml = (product.work || []).map(w => `<span class="work-pill">${w}</span>`).join('');
    const whatsappUrl = siteConfig.getProductEnquiryUrl(product);

    return `
        <div class="product-card" data-category="${product.category}" data-tags="${(product.tags || []).join(',')}">
            <div class="product-media">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy" onerror="this.src='images/hero/hero-banner.jpg'">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <button class="wishlist-toggle ${isWishlisted ? 'active' : ''}" data-id="${product.id}" title="Add to Wishlist" aria-label="Add to Wishlist">
                    ${isWishlisted ? '♥' : '♡'}
                </button>
            </div>
            <div class="product-body">
                <div class="product-meta-top">
                    <span class="product-category">${product.subCategory || product.category}</span>
                    <span class="product-code">${product.code || ''}</span>
                </div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-work-tags">${tagsHtml}</div>
                <div class="product-price-row">
                    <span class="product-price">${product.price || 'Price on Request'}</span>
                    <span class="product-custom-tag">✨ Custom Available</span>
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-sm quick-view-btn" data-id="${product.id}">View Details</button>
                    <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">WhatsApp</a>
                </div>
            </div>
        </div>
    `;
}

function initProductCatalog() {
    const catalogGrid = document.querySelector('#product-catalog-grid');
    if (!catalogGrid) return;

    // Determine current page category filter if any
    const pageCategory = catalogGrid.getAttribute('data-page-category') || 'All';
    let filteredList = products;

    if (pageCategory.toLowerCase() === 'bridal') {
        filteredList = products.filter(p => 
            p.category.toLowerCase() === 'bridal' || 
            (p.tags && p.tags.some(t => t.toLowerCase() === 'bridal')) || 
            (p.occasion && p.occasion.toLowerCase().includes('wedding'))
        );
    } else if (pageCategory.toLowerCase() === 'featured' || (document.body.classList.contains('page-home') && pageCategory === 'All')) {
        const featuredItems = products.filter(p => p.featured);
        filteredList = featuredItems.length > 0 ? featuredItems : products;
    } else if (pageCategory !== 'All') {
        filteredList = products.filter(p => p.category.toLowerCase() === pageCategory.toLowerCase());
    }

    renderProducts(filteredList);

    // Setup Filter Buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = (btn.getAttribute('data-filter') || 'all').toLowerCase();

            if (filterValue === 'all') {
                renderProducts(filteredList);
            } else {
                const results = filteredList.filter(p => {
                    const tagString = [
                        p.name,
                        p.category,
                        p.subCategory || '',
                        p.occasion || '',
                        (p.work || []).join(' '),
                        (p.tags || []).join(' '),
                        p.badge || '',
                        p.description || ''
                    ].join(' ').toLowerCase();

                    return tagString.includes(filterValue);
                });
                renderProducts(results);
            }
        });
    });

    function renderProducts(list) {
        if (list.length === 0) {
            catalogGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
                    <h3 style="font-family: var(--font-heading); color: var(--primary);">No designs found</h3>
                    <p style="color: var(--text-muted); margin-top: 0.5rem;">Try selecting a different filter or contact our designer studio directly.</p>
                </div>
            `;
            return;
        }
        catalogGrid.innerHTML = list.map(p => createProductCardHTML(p)).join('');
    }
}

/* ==========================================================================
   4. QUICK-VIEW PRODUCT DETAIL MODAL
   ========================================================================== */
function initQuickViewModal() {
    let modal = document.querySelector('#product-quick-view-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'product-quick-view-modal';
        modal.className = 'modal-backdrop';
        modal.innerHTML = `
            <div class="modal-container">
                <button class="modal-close" id="modal-close-btn" aria-label="Close modal">&times;</button>
                <div class="modal-body" id="modal-product-content">
                    <!-- Injected dynamically -->
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const closeBtn = modal.querySelector('#modal-close-btn');
    const content = modal.querySelector('#modal-product-content');

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    closeBtn?.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    // Delegate Click from Quick View Buttons
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.quick-view-btn');
        if (btn) {
            const id = parseInt(btn.getAttribute('data-id'), 10);
            const product = products.find(p => p.id === id);
            if (product) {
                openProductModal(product);
            }
        }
    });

    function openProductModal(product) {
        const galleryImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
        const wishlist = getWishlist();
        const isWishlisted = wishlist.includes(product.id);
        const whatsappUrl = siteConfig.getProductEnquiryUrl(product);

        const thumbsHtml = galleryImages.map((img, i) => `
            <div class="modal-thumb ${i === 0 ? 'active' : ''}" data-src="${img}">
                <img src="${img}" alt="${product.name}" onerror="this.src='images/hero/hero-banner.jpg'">
            </div>
        `).join('');

        const details = product.details || {};
        const specRows = Object.entries(details).map(([key, val]) => `
            <div class="spec-row">
                <span class="spec-label">${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
                <span class="spec-val">${val}</span>
            </div>
        `).join('');

        content.innerHTML = `
            <div class="modal-gallery">
                <div class="modal-gallery-main">
                    <img id="modal-main-image" src="${galleryImages[0]}" alt="${product.name}" onerror="this.src='images/hero/hero-banner.jpg'">
                </div>
                <div class="modal-thumbnails">${thumbsHtml}</div>
            </div>
            <div class="modal-details">
                <span class="section-tag">${product.category} • ${product.subCategory || ''}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                
                <div class="spec-list">
                    <div class="spec-row">
                        <span class="spec-label">Design Code:</span>
                        <span class="spec-val">${product.code || 'STD-' + product.id}</span>
                    </div>
                    <div class="spec-row">
                        <span class="spec-label">Occasion:</span>
                        <span class="spec-val">${product.occasion || 'Bridal & Celebrations'}</span>
                    </div>
                    ${specRows}
                    <div class="spec-row">
                        <span class="spec-label">Price:</span>
                        <span class="spec-val" style="color: var(--primary); font-weight: 700;">${product.price}</span>
                    </div>
                </div>

                <div class="customization-box">
                    <h5>✨ Bespoke Customization Available</h5>
                    <p>Motifs, embroidery density, neckline depth, sleeve length and silk color can be fully customized to match your saree.</p>
                </div>

                <div class="modal-action-buttons">
                    <a href="${whatsappUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp">
                        <span>💬</span> WhatsApp Enquiry
                    </a>
                    <a href="custom-order.html" class="btn btn-outline-gold">Customize This</a>
                    <button class="btn btn-primary wishlist-modal-toggle" data-id="${product.id}">
                        ${isWishlisted ? '♥ In Wishlist' : '♡ Add to Wishlist'}
                    </button>
                </div>
            </div>
        `;

        // Handle thumbnail switches
        content.querySelectorAll('.modal-thumb').forEach(thumb => {
            thumb.addEventListener('click', () => {
                content.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
                const src = thumb.getAttribute('data-src');
                const mainImg = content.querySelector('#modal-main-image');
                if (mainImg) mainImg.src = src;
            });
        });

        // Wishlist in modal
        const modalWishBtn = content.querySelector('.wishlist-modal-toggle');
        modalWishBtn?.addEventListener('click', () => {
            toggleWishlistProduct(product.id);
            const nowWish = getWishlist().includes(product.id);
            modalWishBtn.innerHTML = nowWish ? '♥ In Wishlist' : '♡ Add to Wishlist';
        });

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

/* ==========================================================================
   5. LIGHTBOX GALLERY & INTERACTIVE FILTERING
   ========================================================================== */
function initLightboxGallery() {
    const allGalleryItems = Array.from(document.querySelectorAll('.masonry-item'));
    if (allGalleryItems.length === 0) return;

    // Filter Buttons Support (e.g. on gallery.html)
    const filterButtons = document.querySelectorAll('button[data-gallery-filter]');
    let activeFilter = 'all';

    function getVisibleItems() {
        return allGalleryItems.filter(item => {
            if (activeFilter === 'all') return true;
            const cat = item.getAttribute('data-category') || '';
            return cat.toLowerCase() === activeFilter.toLowerCase();
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.getAttribute('data-gallery-filter') || 'all';

            allGalleryItems.forEach(item => {
                const cat = item.getAttribute('data-category') || '';
                const match = activeFilter === 'all' || cat.toLowerCase() === activeFilter.toLowerCase();
                if (match) {
                    item.classList.remove('hidden-item');
                } else {
                    item.classList.add('hidden-item');
                }
            });
        });
    });

    let lightbox = document.querySelector('#gallery-lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'gallery-lightbox';
        lightbox.className = 'lightbox-modal';
        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close Lightbox">&times;</button>
            <button class="lightbox-nav-btn lightbox-prev" aria-label="Previous image">&#10094;</button>
            <button class="lightbox-nav-btn lightbox-next" aria-label="Next image">&#10095;</button>
            <div class="lightbox-content">
                <img src="" alt="" class="lightbox-img" id="lightbox-image">
                <div class="lightbox-caption" id="lightbox-caption"></div>
                <div class="lightbox-counter" id="lightbox-counter"></div>
            </div>
        `;
        document.body.appendChild(lightbox);
    }

    const imgEl = lightbox.querySelector('#lightbox-image');
    const captionEl = lightbox.querySelector('#lightbox-caption');
    const counterEl = lightbox.querySelector('#lightbox-counter');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentIndex = 0;
    let currentPool = [];

    function updatePool() {
        currentPool = getVisibleItems().map(item => ({
            src: item.getAttribute('data-src') || item.querySelector('img')?.src,
            title: item.getAttribute('data-title') || item.querySelector('h4')?.textContent || 'Sruthi Handcrafted Design',
            desc: item.getAttribute('data-desc') || item.querySelector('span')?.textContent || '',
            category: item.getAttribute('data-category') || ''
        }));
    }

    function showImage(index) {
        if (currentPool.length === 0) return;
        if (index < 0) index = currentPool.length - 1;
        if (index >= currentPool.length) index = 0;
        currentIndex = index;

        const data = currentPool[currentIndex];
        if (imgEl) imgEl.src = data.src;
        
        const waMsg = encodeURIComponent(`Hello Sruthi Threads & Designs, I am looking at your craft gallery and would like to enquire about: "${data.title}" (${data.desc || ''}).`);
        const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${waMsg}`;

        if (captionEl) {
            captionEl.innerHTML = `
                <div style="font-size: 1.15rem; font-weight: 600; color: #fff; font-family: var(--font-heading); margin-bottom: 0.25rem;">
                    ${data.title}
                </div>
                ${data.desc ? `<div style="color: var(--gold-light); font-size: 0.88rem; margin-bottom: 0.6rem;">${data.desc}</div>` : ''}
                <div>
                    <a href="${waUrl}" target="_blank" rel="noopener" class="lightbox-whatsapp-btn">
                        <span>💬</span> Enquire This Design on WhatsApp
                    </a>
                </div>
            `;
        }
        if (counterEl) counterEl.textContent = `${currentIndex + 1} of ${currentPool.length}`;
    }

    function openLightbox(itemEl) {
        updatePool();
        const src = itemEl.getAttribute('data-src') || itemEl.querySelector('img')?.src;
        const idx = currentPool.findIndex(p => p.src === src);
        showImage(idx >= 0 ? idx : 0);
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    }

    allGalleryItems.forEach(item => {
        item.addEventListener('click', () => openLightbox(item));
    });

    closeBtn?.addEventListener('click', closeLightbox);
    prevBtn?.addEventListener('click', () => showImage(currentIndex - 1));
    nextBtn?.addEventListener('click', () => showImage(currentIndex + 1));

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
        if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });

    // Touch Swipe Support
    let touchStartX = 0;
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) showImage(currentIndex + 1);
        if (touchEndX - touchStartX > 50) showImage(currentIndex - 1);
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) showImage(currentIndex + 1);
        if (touchEndX - touchStartX > 50) showImage(currentIndex - 1);
    }, { passive: true });
}

/* ==========================================================================
   6. LIVE GLOBAL SEARCH ENGINE
   ========================================================================== */
function initSearchEngine() {
    let searchModal = document.querySelector('#global-search-modal');
    if (!searchModal) {
        searchModal = document.createElement('div');
        searchModal.id = 'global-search-modal';
        searchModal.className = 'search-modal';
        searchModal.innerHTML = `
            <div class="search-container">
                <div class="search-input-wrapper">
                    <input type="text" class="search-input" id="search-query-input" placeholder="Search Sarees, Bangles, Maggam, Bridal, Zari, Peacock..." autocomplete="off">
                    <button class="search-clear-btn" id="search-modal-close" aria-label="Close search">&times;</button>
                </div>
                
                <div class="search-chips-wrapper">
                    <span class="search-chips-label">Popular Searches:</span>
                    <div class="search-chips-list">
                        <button type="button" class="search-chip" data-search="Sarees">✨ Saree Collection</button>
                        <button type="button" class="search-chip" data-search="Bangles">💎 Silk Thread Bangles</button>
                        <button type="button" class="search-chip" data-search="Bridal Silk Sarees">👑 Bridal Sarees</button>
                        <button type="button" class="search-chip" data-search="Kundan">🌸 Kundan Bangles</button>
                        <button type="button" class="search-chip" data-search="Banarasi">🏛️ Banarasi Silk</button>
                        <button type="button" class="search-chip" data-search="Maggam">🦚 Maggam Blouses</button>
                        <button type="button" class="search-chip" data-search="Personalized">💫 Name Bangles</button>
                        <button type="button" class="search-chip" data-search="Organza">🌸 Organza Saree</button>
                    </div>
                </div>

                <div class="search-results-box" id="search-results-container">
                    <!-- Populated dynamically -->
                </div>
            </div>
        `;
        document.body.appendChild(searchModal);
    }

    const input = searchModal.querySelector('#search-query-input');
    const resultsBox = searchModal.querySelector('#search-results-container');
    const closeBtn = searchModal.querySelector('#search-modal-close');

    function renderDefaultDiscovery() {
        resultsBox.innerHTML = `
            <div class="search-discovery-grid">
                <div class="search-discovery-card" onclick="document.querySelector('#search-query-input').value='Sarees'; document.querySelector('#search-query-input').dispatchEvent(new Event('input'));">
                    <div class="search-discovery-icon">🥻</div>
                    <div>
                        <h4>Sarees Collection</h4>
                        <p>Kanchipuram, Banarasi, Organza & Georgette</p>
                    </div>
                </div>
                <div class="search-discovery-card" onclick="document.querySelector('#search-query-input').value='Bangles'; document.querySelector('#search-query-input').dispatchEvent(new Event('input'));">
                    <div class="search-discovery-icon">💎</div>
                    <div>
                        <h4>Bangles Collection</h4>
                        <p>Silk Thread, Kundan, Chooda & Name Bangles</p>
                    </div>
                </div>
                <div class="search-discovery-card" onclick="document.querySelector('#search-query-input').value='Bridal'; document.querySelector('#search-query-input').dispatchEvent(new Event('input'));">
                    <div class="search-discovery-icon">👑</div>
                    <div>
                        <h4>The Bridal Edit</h4>
                        <p>Royal Trousseau, Zardozi & Signature Ensembles</p>
                    </div>
                </div>
                <div class="search-discovery-card" onclick="document.querySelector('#search-query-input').value='Blouses'; document.querySelector('#search-query-input').dispatchEvent(new Event('input'));">
                    <div class="search-discovery-icon">🧵</div>
                    <div>
                        <h4>Designer Blouses</h4>
                        <p>Maggam, Aari, Peacock & Floral Artistry</p>
                    </div>
                </div>
            </div>
            <div style="text-align: center; color: var(--text-muted); font-size: 0.85rem; margin-top: 1.2rem;">
                Type any keyword (e.g. <em>Kanchipuram, Chooda, Red, Velvet, Temple, Pearls</em>) to search all designs.
            </div>
        `;
    }

    function openSearch(initialQuery = '') {
        searchModal.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (input) {
            if (initialQuery) {
                input.value = initialQuery;
                performSearch(initialQuery);
            } else {
                input.value = '';
                renderDefaultDiscovery();
            }
            setTimeout(() => input.focus(), 100);
        }
    }

    function closeSearch() {
        searchModal.classList.remove('open');
        document.body.style.overflow = '';
        if (input) input.value = '';
    }

    document.querySelectorAll('.open-search-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openSearch();
        });
    });

    closeBtn?.addEventListener('click', closeSearch);
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) closeSearch();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('open')) closeSearch();
    });

    // Handle Quick Search Chips
    searchModal.querySelectorAll('.search-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const searchTerm = chip.getAttribute('data-search') || '';
            if (input) {
                input.value = searchTerm;
                performSearch(searchTerm);
            }
        });
    });

    function performSearch(rawQuery) {
        const query = rawQuery.trim().toLowerCase();
        if (!query) {
            renderDefaultDiscovery();
            return;
        }

        const matches = products.filter(p => {
            const detailsStr = p.details ? Object.values(p.details).join(' ') : '';
            const combined = `${p.name} ${p.category} ${p.subCategory || ''} ${(p.work || []).join(' ')} ${(p.tags || []).join(' ')} ${p.occasion || ''} ${p.badge || ''} ${p.code || ''} ${detailsStr} ${p.description || ''} ${p.externalLink || ''} ${p.externalImage || ''}`.toLowerCase();
            return combined.includes(query);
        });

        if (matches.length === 0) {
            resultsBox.innerHTML = `
                <div style="text-align: center; padding: 2.5rem 1rem;">
                    <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
                    <h4 style="font-family: var(--font-heading); color: var(--primary); font-size: 1.3rem;">No designs found for "${rawQuery}"</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem; max-width: 480px; margin-left: auto; margin-right: auto;">Looking for a bespoke Saree, Blouse, or Silk Bangle set? Our master artisans can handcraft any custom design for you.</p>
                    <div style="margin-top: 1.5rem; display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap;">
                        <a href="custom-order.html" class="btn btn-gold btn-sm" onclick="document.querySelector('#global-search-modal').classList.remove('open'); document.body.style.overflow='';">Request Custom Design</a>
                        <a href="https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hello Sruthi Threads, I am searching for a custom design: ' + rawQuery)}" target="_blank" class="btn btn-whatsapp btn-sm">WhatsApp Us</a>
                    </div>
                </div>
            `;
            return;
        }

        resultsBox.innerHTML = `
            <div class="search-results-header">
                <span>Found <strong>${matches.length}</strong> design${matches.length > 1 ? 's' : ''} for "<strong>${rawQuery}</strong>":</span>
            </div>
            <div class="search-results-list">
                ${matches.map(p => `
                    <div class="search-result-item quick-view-btn" data-id="${p.id}" onclick="document.querySelector('#global-search-modal').classList.remove('open'); document.body.style.overflow='';">
                        <img src="${p.externalImage || p.image}" alt="${p.name}" class="search-result-thumb" onerror="this.src='${p.image}'">
                        <div style="flex-grow: 1; min-width: 0;">
                            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.2rem;">
                                <span class="search-cat-badge ${p.category.toLowerCase()}">${p.category}</span>
                                ${p.badge ? `<span class="search-pill-badge">${p.badge}</span>` : ''}
                            </div>
                            <h4 style="font-size: 0.98rem; color: var(--primary); font-family: var(--font-heading); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 0.2rem;">${p.name}</h4>
                            <div style="font-size: 0.75rem; color: var(--text-muted);">${p.subCategory || p.category} • ${(p.work || []).slice(0, 3).join(', ')}</div>
                        </div>
                        <div style="text-align: right; flex-shrink: 0;">
                            <div style="font-size: 0.85rem; font-weight: 600; color: var(--primary);">${p.price}</div>
                            <a href="${p.externalLink || `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(p.name)}`}" target="_blank" rel="noopener" onclick="event.stopPropagation();" style="font-size: 0.75rem; color: var(--gold); font-weight: 500;">External link &rarr;</a>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    let debounceTimer;
    input?.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            performSearch(input.value);
        }, 150);
    });
}

/* ==========================================================================
   7. CUSTOM DESIGN STUDIO & FORM ENGINE
   ========================================================================== */
function initCustomDesignStudio() {
    const fileInput = document.querySelector('#custom-file-input');
    const dropzone = document.querySelector('#custom-dropzone');
    const previewWrapper = document.querySelector('#upload-preview-wrapper');
    const previewThumb = document.querySelector('#preview-thumb');
    const previewName = document.querySelector('#preview-name');
    const removeBtn = document.querySelector('#preview-remove-btn');
    const form = document.querySelector('#custom-order-form');

    if (!form) return;

    dropzone?.addEventListener('click', () => fileInput?.click());

    fileInput?.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (previewThumb) previewThumb.src = e.target.result;
                if (previewName) previewName.textContent = file.name;
                previewWrapper?.classList.add('active');
                if (dropzone) dropzone.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    });

    removeBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        if (fileInput) fileInput.value = '';
        previewWrapper?.classList.remove('active');
        if (dropzone) dropzone.style.display = 'block';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: form.querySelector('#cust-name')?.value || '',
            phone: form.querySelector('#cust-phone')?.value || '',
            email: form.querySelector('#cust-email')?.value || '',
            service: form.querySelector('#cust-service')?.value || '',
            occasion: form.querySelector('#cust-occasion')?.value || '',
            work: form.querySelector('#cust-work')?.value || '',
            color: form.querySelector('#cust-color')?.value || '',
            details: form.querySelector('#cust-details')?.value || ''
        };

        const whatsappUrl = siteConfig.getCustomOrderUrl(formData);

        showToast('Preparing your custom design request... 🎨');

        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            form.reset();
            if (fileInput) fileInput.value = '';
            previewWrapper?.classList.remove('active');
            if (dropzone) dropzone.style.display = 'block';
        }, 600);
    });
}

/* ==========================================================================
   7b. GENERAL CONTACT FORM ENGINE
   ========================================================================== */
function initContactForm() {
    const contactForm = document.querySelector('#contact-general-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = {
            name: contactForm.querySelector('#cnt-name')?.value || '',
            phone: contactForm.querySelector('#cnt-phone')?.value || '',
            email: contactForm.querySelector('#cnt-email')?.value || '',
            subject: contactForm.querySelector('#cnt-subject')?.value || '',
            message: contactForm.querySelector('#cnt-msg')?.value || ''
        };

        showToast('Thank you! Connecting you to our atelier on WhatsApp ✨');

        const whatsappUrl = typeof siteConfig !== 'undefined' && siteConfig.getContactEnquiryUrl
            ? siteConfig.getContactEnquiryUrl(formData)
            : `https://wa.me/919876543210?text=${encodeURIComponent('Hello Sruthi Threads, I would like to make an enquiry.')}`;

        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            contactForm.reset();
        }, 600);
    });
}

/* ==========================================================================
   8. TESTIMONIAL SLIDER
   ========================================================================== */
function initTestimonialSlider() {
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('#testi-prev');
    const nextBtn = document.querySelector('#testi-next');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let autoPlayInterval;

    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    prevBtn?.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        startAutoPlay();
    });

    nextBtn?.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        startAutoPlay();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            goToSlide(i);
            startAutoPlay();
        });
    });

    track.addEventListener('mouseenter', stopAutoPlay);
    track.addEventListener('mouseleave', startAutoPlay);

    // Touch Swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) goToSlide(currentIndex + 1);
        if (touchEndX - touchStartX > 50) goToSlide(currentIndex - 1);
        startAutoPlay();
    }, { passive: true });

    startAutoPlay();
}

/* ==========================================================================
   9. SCROLL TO TOP
   ========================================================================== */
function initScrollToTop() {
    const scrollBtn = document.querySelector('.floating-scroll-top');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ==========================================================================
   10. INJECT SITE CONFIG
   ========================================================================== */
function injectConfigValues() {
    if (typeof siteConfig === 'undefined') return;

    // Direct WhatsApp Buttons
    document.querySelectorAll('.cfg-whatsapp-link').forEach(a => {
        a.href = siteConfig.getWhatsAppUrl();
        a.target = '_blank';
        a.rel = 'noopener';
    });

    // Call Buttons
    document.querySelectorAll('.cfg-phone-link').forEach(a => {
        a.href = `tel:${siteConfig.phoneClean}`;
    });

    // Phone text
    document.querySelectorAll('.cfg-phone-text').forEach(el => {
        el.textContent = siteConfig.phone;
    });

    // Email text & links
    document.querySelectorAll('.cfg-email-link').forEach(a => {
        a.href = `mailto:${siteConfig.email}`;
    });
    document.querySelectorAll('.cfg-email-text').forEach(el => {
        el.textContent = siteConfig.email;
    });

    // Address text
    document.querySelectorAll('.cfg-address-text').forEach(el => {
        el.textContent = siteConfig.address;
    });

    // Social Links
    document.querySelectorAll('.cfg-instagram-link').forEach(a => {
        a.href = siteConfig.instagram;
        a.target = '_blank';
        a.rel = 'noopener';
    });
    document.querySelectorAll('.cfg-facebook-link').forEach(a => {
        a.href = siteConfig.facebook;
        a.target = '_blank';
        a.rel = 'noopener';
    });
    document.querySelectorAll('.cfg-instagram-handle').forEach(el => {
        el.textContent = siteConfig.instagramHandle;
    });
}
