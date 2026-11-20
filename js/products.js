/**
 * SRUTHI THREADS & DESIGNS - PRODUCT CATALOG DATASET
 * Rich database of designer blouses, thread embroidery, maggam work, bangles, and bridal masterpieces.
 */

const products = [
    // --- DESIGNER BLOUSES & BRIDAL MASTERPIECES ---
    {
        id: 1,
        code: "STD-BL01",
        name: "Royal Peacock Maggam Bridal Blouse",
        category: "Blouses",
        subCategory: "Peacock",
        work: ["Maggam", "Zari", "Stone", "Beads"],
        occasion: "Wedding",
        price: "Price on Request",
        badge: "Bestseller",
        image: "images/blouses/blouse-01.jpg",
        gallery: [
            "images/blouses/blouse-01.jpg",
            "images/blouses/blouse-01-g1.jpg",
            "images/blouses/blouse-01-g2.jpg"
        ],
        description: "Opulent royal burgundy silk blouse with intricately hand-embroidered peacock motifs in antique gold zari, premium Japanese micro-beads, freshwater pearls, and faceted kundan stones.",
        details: {
            fabric: "Pure Raw Silk & Tissue Silk Border",
            workType: "Heavy Maggam & 3D Zardozi Hand Embroidery",
            neckline: "Deep Sweetheart Neck with Scalloped Zari Edge",
            sleeveType: "Elbow Length with Royal Peacock Medallions",
            customizable: "Color, Motif Density, Neck Depth & Saree Matching"
        },
        tags: ["Bridal", "Peacock", "Heavy Work", "Maggam", "Wedding", "Burgundy"],
        featured: true,
        customizable: true
    },
    {
        id: 2,
        code: "STD-BL02",
        name: "Swarna Temple Border Antique Zari Blouse",
        category: "Blouses",
        subCategory: "Temple",
        work: ["Zari", "Aari", "Stone", "Pearls"],
        occasion: "Wedding",
        price: "Price on Request",
        badge: "Heritage Edition",
        image: "images/blouses/blouse-02.jpg",
        gallery: [
            "images/blouses/blouse-02.jpg",
            "images/blouses/blouse-02-g1.jpg",
            "images/blouses/blouse-02-g2.jpg"
        ],
        description: "Traditional temple architecture inspired border with Goddess Lakshmi figurines, nakshi beads, antique kemp stones, and gold zari cord detailing on rich emerald green silk.",
        details: {
            fabric: "Handloom Kanchipuram Silk",
            workType: "Aari Temple Embroidery & Kemp Stones",
            neckline: "Traditional High U-Neck with Nakshi Border",
            sleeveType: "Elbow Length with Sacred Temple Arch",
            customizable: "Available in Gold, Maroon, Emerald & Mustard"
        },
        tags: ["Temple", "Traditional", "Heavy Work", "Zari", "Emerald", "Bridal"],
        featured: true,
        customizable: true
    },
    {
        id: 3,
        code: "STD-BL03",
        name: "Blush Rose 3D Floral Cutwork Blouse",
        category: "Blouses",
        subCategory: "Floral",
        work: ["Thread", "Aari", "Cutwork", "Pearls"],
        occasion: "Reception",
        price: "Price on Request",
        badge: "Contemporary",
        image: "images/blouses/blouse-03.jpg",
        gallery: [
            "images/blouses/blouse-03.jpg",
            "images/blouses/blouse-03-g1.jpg"
        ],
        description: "Delicate pastel blush silk organza blouse featuring hand-crafted 3D silk thread florets, laser-precision cutwork jaal, and shimmering micro-pearl drops.",
        details: {
            fabric: "Tissue Organza with Mulberry Silk Lining",
            workType: "Handcrafted 3D Floral Resham Embroidery",
            neckline: "Illusion Sheer Boat Neck with Floral Borders",
            sleeveType: "Cap Sleeves with Scalloped Edge",
            customizable: "Pastel shades, Sleeve length & Back cut"
        },
        tags: ["Floral", "Modern", "Minimal Work", "Cutwork", "Blush", "Reception"],
        featured: true,
        customizable: true
    },
    {
        id: 4,
        code: "STD-BL04",
        name: "Lotus Petal Maggam & Kundan Blouse",
        category: "Blouses",
        subCategory: "Floral",
        work: ["Maggam", "Stone", "Beads", "Thread"],
        occasion: "Engagement",
        price: "Price on Request",
        badge: "Trending",
        image: "images/blouses/blouse-04.jpg",
        gallery: [
            "images/blouses/blouse-04.jpg",
            "images/blouses/blouse-04-g1.jpg"
        ],
        description: "Enchanting lotus motifs hand-embroidered with shaded silk resham threads, outlined with uncut kundan stones and dangling moti tassels.",
        details: {
            fabric: "Pure Matka Silk",
            workType: "Fine Maggam with Kundan & Thread Shading",
            neckline: "Princess Cut with Lotus Back Keyhole",
            sleeveType: "Elbow Length with Lotus Lattice",
            customizable: "Color shading, Neckline variation"
        },
        tags: ["Floral", "Traditional", "Maggam", "Stone", "Engagement"],
        featured: false,
        customizable: true
    },
    {
        id: 5,
        code: "STD-BL05",
        name: "Maharani Zardozi Velvet Bridal Blouse",
        category: "Blouses",
        subCategory: "Bridal",
        work: ["Zardozi", "Zari", "Stone", "Pearls"],
        occasion: "Wedding",
        price: "Price on Request",
        badge: "Bridal Luxe",
        image: "images/blouses/blouse-05.jpg",
        gallery: [
            "images/blouses/blouse-05.jpg",
            "images/blouses/blouse-05-g1.jpg"
        ],
        description: "Heavy heritage royal velvet blouse adorned with pure French metallic wire zardozi, semi-precious ruby stones, and authentic gold dabka wire embroidery.",
        details: {
            fabric: "Micro Velvet & Silk Satin",
            workType: "Intensive Heritage Zardozi & Dabka",
            neckline: "Regal Queen Anne Collar with Plunge Cut",
            sleeveType: "Full Length Heavy Embellished Sleeves",
            customizable: "Velvet or Silk base, Color tone customization"
        },
        tags: ["Bridal", "Heavy Work", "Zardozi", "Wedding", "Velvet", "Maroon"],
        featured: true,
        customizable: true
    },
    {
        id: 6,
        code: "STD-BL06",
        name: "Ivory & Gold Minimalist Geometric Zari Blouse",
        category: "Blouses",
        subCategory: "Modern",
        work: ["Zari", "Aari", "Thread"],
        occasion: "Festival",
        price: "Price on Request",
        badge: "Contemporary",
        image: "images/blouses/blouse-06.jpg",
        gallery: [
            "images/blouses/blouse-06.jpg",
            "images/blouses/blouse-06-g1.jpg"
        ],
        description: "Sleek, modern linear geometric zari patterns carefully stitched on warm ivory raw silk for an understated, ultra-luxurious festive aesthetic.",
        details: {
            fabric: "Pure Tussar Raw Silk",
            workType: "Geometric Linear Aari Zari Stitch",
            neckline: "Square Neck with Clean Gold Piped Trim",
            sleeveType: "Sleeveless / 3/4th Sleeve Option",
            customizable: "Sleeve style, Metal color (Rose gold / Antique)"
        },
        tags: ["Modern", "Minimal Work", "Zari", "Festival", "Ivory"],
        featured: false,
        customizable: true
    },

    // --- THREAD WORK MASTERPIECES ---
    {
        id: 7,
        code: "STD-TW01",
        name: "Shaded Resham Floral Thread Symphony Blouse",
        category: "Thread Work",
        subCategory: "Floral Thread Work",
        work: ["Thread", "Beads"],
        occasion: "Engagement",
        price: "Price on Request",
        badge: "Master Artisan",
        image: "images/thread-work/thread-01.jpg",
        gallery: [
            "images/thread-work/thread-01.jpg",
            "images/thread-work/thread-01-g1.jpg"
        ],
        description: "Gradient ombre silk threads hand-shaded into multi-hued garden blooms across the entire sleeve canvas, highlighted with microscopic seed beads.",
        details: {
            fabric: "Pure Chanderi Silk",
            workType: "100% Hand Needle Resham Thread Work",
            neckline: "V-Neck with Vine Frame",
            sleeveType: "Elbow Length Masterpiece",
            customizable: "Color gradient to match your specific saree hue"
        },
        tags: ["Floral Thread Work", "Thread", "Artisanal", "Engagement"],
        featured: true,
        customizable: true
    },
    {
        id: 8,
        code: "STD-TW02",
        name: "Mayura Peacock Whispers Thread Work",
        category: "Thread Work",
        subCategory: "Peacock Thread Work",
        work: ["Thread", "Zari"],
        occasion: "Wedding",
        price: "Price on Request",
        badge: "Exclusive",
        image: "images/thread-work/thread-02.jpg",
        gallery: [
            "images/thread-work/thread-02.jpg",
            "images/thread-work/thread-02-g1.jpg"
        ],
        description: "Captivating peacock feather gradients in teal, royal blue, emerald, and bronze metallic thread, requiring over 45 hours of meticulous artisan needlework.",
        details: {
            fabric: "Raw Silk",
            workType: "Satin Stitch & Long-and-Short Thread Embroidery",
            neckline: "Round Neck with Feathered Edge",
            sleeveType: "Full Sleeve Feature Motif",
            customizable: "Motif size, Single sleeve or Both sleeves"
        },
        tags: ["Peacock Thread Work", "Thread", "Bridal", "Wedding"],
        featured: true,
        customizable: true
    },
    {
        id: 9,
        code: "STD-TW03",
        name: "Bridal Couple Monogram & Initial Thread Crest",
        category: "Thread Work",
        subCategory: "Name / Initial Work",
        work: ["Thread", "Zari", "Pearls"],
        occasion: "Wedding",
        price: "Price on Request",
        badge: "Custom Personalized",
        image: "images/thread-work/thread-03.jpg",
        gallery: [
            "images/thread-work/thread-03.jpg",
            "images/thread-work/thread-03-g1.jpg"
        ],
        description: "Personalized bride and groom initials, wedding hashtag, or vows elegantly hand-embroidered with metallic gold thread and pearl wreaths on the blouse back or sleeve cuff.",
        details: {
            fabric: "Custom Saree Matching Silk",
            workType: "Micro Precision Monogram Hand Embroidery",
            neckline: "Back Cutout or Deep Back Frame",
            sleeveType: "Cuff Monogram Band",
            customizable: "Font Style, Initial Names, Wedding Date, Hashtag"
        },
        tags: ["Name / Initial Work", "Customized Patterns", "Bridal Thread Work", "Personalized"],
        featured: true,
        customizable: true
    },
    {
        id: 10,
        code: "STD-TW04",
        name: "Nalina Leaf & Creeping Vine Thread Symphony",
        category: "Thread Work",
        subCategory: "Leaf & Vine",
        work: ["Thread", "Aari"],
        occasion: "Festival",
        price: "Price on Request",
        badge: "Artisan Select",
        image: "images/thread-work/thread-04.jpg",
        gallery: [
            "images/thread-work/thread-04.jpg",
            "images/thread-work/thread-04-g1.jpg"
        ],
        description: "Cascading ivy and jasmine vine thread motifs flowing along the neckline and back, creating an ethereal organic botanical look.",
        details: {
            fabric: "Chanderi Silk / Georgette",
            workType: "Delicate Stem & French Knot Stitching",
            neckline: "Sweetheart with Cascading Vines",
            sleeveType: "Cap Sleeves",
            customizable: "Vine density, Leaf colors"
        },
        tags: ["Leaf & Vine", "Thread", "Minimal Work", "Festival"],
        featured: false,
        customizable: true
    },

    // --- EMBROIDERY ARTISTRY (Aari, Maggam, Zari, Zardozi, Pearls, Stones) ---
    {
        id: 11,
        code: "STD-EM01",
        name: "Grand Aari & Zardozi Gold Nakshi Masterpiece",
        category: "Embroidery",
        subCategory: "Aari Work",
        work: ["Aari", "Zardozi", "Zari", "Stone"],
        occasion: "Wedding",
        price: "Price on Request",
        badge: "Bridal Signature",
        image: "images/embroidery/emb-01.jpg",
        gallery: [
            "images/embroidery/emb-01.jpg",
            "images/embroidery/emb-01-g1.jpg"
        ],
        description: "High-density needle Aari work interwoven with raised zardozi gold bullion threads, forming a heritage tapestry fit for a queen.",
        details: {
            fabric: "Pure Silk Brocade",
            workType: "Aari Hook Embroidery & Hand Zardozi",
            neckline: "Intricate High Collar with Keyhole",
            sleeveType: "Full Heavy Zardozi Sleeves",
            customizable: "Fully bespoke design tailored to bridal lehenga"
        },
        tags: ["Aari Work", "Zardozi", "Maggam Work", "Heavy Work", "Wedding"],
        featured: true,
        customizable: true
    },
    {
        id: 12,
        code: "STD-EM02",
        name: "Mukta Pearls & Swarovski Crystal Cluster Blouse",
        category: "Embroidery",
        subCategory: "Pearl Work",
        work: ["Pearls", "Stone", "Beads", "Aari"],
        occasion: "Reception",
        price: "Price on Request",
        badge: "Glamour",
        image: "images/embroidery/emb-02.jpg",
        gallery: [
            "images/embroidery/emb-02.jpg",
            "images/embroidery/emb-02-g1.jpg"
        ],
        description: "Lustrous Hyderabad freshwater pearls combined with authentic shimmering Swarovski elements, hand-sewn into dazzling constellations.",
        details: {
            fabric: "Soft Silk Georgette over Duchess Satin",
            workType: "Hand Strung Pearls & Bezel Set Crystals",
            neckline: "Wide Scalloped Scoop Neck",
            sleeveType: "Sleeveless / Sheer Sleeves",
            customizable: "Pearl sizes, Color base, Stone density"
        },
        tags: ["Pearl Work", "Stone Work", "Bead Work", "Reception", "Glamour"],
        featured: true,
        customizable: true
    },
    {
        id: 13,
        code: "STD-EM03",
        name: "Kundan & Kemp Stone Encrusted Heritage Blouse",
        category: "Embroidery",
        subCategory: "Stone Work",
        work: ["Stone", "Maggam", "Zari"],
        occasion: "Wedding",
        price: "Price on Request",
        badge: "Heritage",
        image: "images/embroidery/emb-03.jpg",
        gallery: [
            "images/embroidery/emb-03.jpg",
            "images/embroidery/emb-03-g1.jpg"
        ],
        description: "South Indian traditional kemp and kundan stone settings with 24k gold leaf zari thread framing, creating an unmatched temple jewel luster.",
        details: {
            fabric: "Rich Crimson Pure Raw Silk",
            workType: "Traditional Maggam Stone & Kasu Work",
            neckline: "Deep U-Neck with Kasu Coin Trim",
            sleeveType: "Elbow Length with Stone Medallions",
            customizable: "Stone shades (Ruby, Emerald, White Kundan)"
        },
        tags: ["Stone Work", "Maggam Work", "Zari Work", "Bridal", "Wedding"],
        featured: false,
        customizable: true
    },

    // --- HANDCRAFTED BANGLES COLLECTION ---
    {
        id: 14,
        code: "STD-BG01",
        name: "Maharani Bridal Silk Thread Chooda Set",
        category: "Bangles",
        subCategory: "Bridal Bangles",
        work: ["Silk Thread", "Kundan", "Pearls", "Zari"],
        occasion: "Wedding",
        price: "Price on Request",
        badge: "Bridal Favorite",
        image: "images/bangles/bangle-01.jpg",
        gallery: [
            "images/bangles/bangle-01.jpg",
            "images/bangles/bangle-01-g1.jpg"
        ],
        description: "Extravagant 36-piece bridal bangle set wrapped in premium silk threads with central heavy kundan kadas, pearl latkan tassels, and golden micro-stonework.",
        details: {
            material: "Pure Mulberry Silk Thread over Acrylic Base",
            embellishment: "Uncut Kundan, Kemp Stones & Gold Zari Braid",
            sizes: "2.4, 2.6, 2.8, 2.10 & Custom Sizing",
            customizable: "Exact Saree Matching Colorway & Latkan Tassels"
        },
        tags: ["Bridal Bangles", "Silk Thread Bangles", "Kundan", "Wedding", "Bridal"],
        featured: true,
        customizable: true
    },
    {
        id: 15,
        code: "STD-BG02",
        name: "Antique Zari & Stone Encrusted Thread Kadas (Pair)",
        category: "Bangles",
        subCategory: "Designer Bangles",
        work: ["Thread", "Stone", "Zari"],
        occasion: "Festival",
        price: "Price on Request",
        badge: "Statement Pair",
        image: "images/bangles/bangle-02.jpg",
        gallery: [
            "images/bangles/bangle-02.jpg",
            "images/bangles/bangle-02-g1.jpg"
        ],
        description: "Pair of broad statement kadas meticulously wrapped in bottle green silk thread, inlaid with antique gold filigree and ruby-colored stones.",
        details: {
            material: "Silk Thread, Brass Filigree & Stones",
            embellishment: "Zari Rope Trim & Faceted Crystal Centre",
            sizes: "2.4, 2.6, 2.8",
            customizable: "Available in 20+ color combinations"
        },
        tags: ["Designer Bangles", "Stone Bangles", "Thread Bangles", "Festival"],
        featured: true,
        customizable: true
    },
    {
        id: 16,
        code: "STD-BG03",
        name: "Pastel Pearl & Crystal Symphony Bangles Set",
        category: "Bangles",
        subCategory: "Silk Thread Bangles",
        work: ["Silk Thread", "Pearls", "Stone"],
        occasion: "Engagement",
        price: "Price on Request",
        badge: "Pastel Chic",
        image: "images/bangles/bangle-03.jpg",
        gallery: [
            "images/bangles/bangle-03.jpg",
            "images/bangles/bangle-03-g1.jpg"
        ],
        description: "A dreamy 18-piece stack in blush pink, lavender, and mint silk threads accented with delicate pearl bead chains and Austrian crystals.",
        details: {
            material: "Silk Thread & Seed Pearls",
            embellishment: "Continuous Crystal Chains & Moti Trim",
            sizes: "2.2, 2.4, 2.6, 2.8, 2.10",
            customizable: "Pastel shades customized to your lehenga"
        },
        tags: ["Silk Thread Bangles", "Customized Bangles", "Pearls", "Engagement"],
        featured: false,
        customizable: true
    },
    {
        id: 17,
        code: "STD-BG04",
        name: "Customized Bride Name Monogram Bangles Set",
        category: "Bangles",
        subCategory: "Customized Bangles",
        work: ["Silk Thread", "Zari", "Custom"],
        occasion: "Wedding",
        price: "Price on Request",
        badge: "Personalized",
        image: "images/bangles/bangle-04.jpg",
        gallery: [
            "images/bangles/bangle-04.jpg",
            "images/bangles/bangle-04-g1.jpg"
        ],
        description: "Bespoke bridal kadas featuring hand-crafted acrylic name cutouts wrapped in golden zari thread, embedded directly within the silk bangles.",
        details: {
            material: "Custom Engraved Lettering & Silk Thread",
            embellishment: "Groom & Bride Names, Hasth Melap Motifs",
            sizes: "Customized to your exact wrist measurement",
            customizable: "Names, wedding date, color palette"
        },
        tags: ["Customized Bangles", "Bridal Bangles", "Thread Bangles", "Wedding"],
        featured: true,
        customizable: true
    },

    // --- BRIDAL EDIT COUTURE ---
    {
        id: 18,
        code: "STD-BR01",
        name: "The Royal Trousseau Maggam & Zari Masterpiece",
        category: "Bridal",
        subCategory: "Bridal Couture",
        work: ["Maggam", "Zardozi", "Zari", "Stone", "Pearls"],
        occasion: "Muhurtham / Wedding",
        price: "Price on Request",
        badge: "Signature Couture",
        image: "images/bridal/bridal-01.jpg",
        gallery: [
            "images/bridal/bridal-01.jpg",
            "images/bridal/bridal-01-g1.jpg",
            "images/bridal/bridal-01-g2.jpg"
        ],
        description: "The pinnacle of bridal haute couture. Complete bridal blouse with panoramic peacock procession, temple kalasam, pure real gold zari cord, and cascading pearl latkans.",
        details: {
            fabric: "Pure Mulberry Raw Silk with Heritage Weave",
            workType: "Master Level Maggam, Real Zari & Precious Stone Inlay",
            leadTime: "3 to 4 Weeks Handcrafting Time",
            included: "Full Blouse Handcrafted + Matching Latkan Dori + Latkan Set",
            customizable: "Fully tailored to your wedding saree motifs and drape"
        },
        tags: ["Bridal", "Heavy Work", "Maggam", "Zardozi", "Wedding", "Signature"],
        featured: true,
        customizable: true
    },
    {
        id: 19,
        code: "STD-BR02",
        name: "The Nizam Heritage Crimson Bridal Ensemble",
        category: "Bridal",
        subCategory: "Bridal Couture",
        work: ["Zardozi", "Pearls", "Kundan"],
        occasion: "Reception / Wedding",
        price: "Price on Request",
        badge: "Nizam Heritage",
        image: "images/bridal/bridal-02.jpg",
        gallery: [
            "images/bridal/bridal-02.jpg",
            "images/bridal/bridal-02-g1.jpg"
        ],
        description: "Inspired by Hyderabad's royal court heritage, featuring dense jaali latticework in antique bullion wire, basra pearl borders, and ruby droplets.",
        details: {
            fabric: "Pure Crimson Silk Velvet",
            workType: "Nizami Jaali Zardozi & Basra Pearl Weave",
            neckline: "Sweetheart with Antique Scallops",
            sleeveType: "Elbow Length with Lattice Architecture",
            customizable: "Jewel density & neckline customization"
        },
        tags: ["Bridal", "Zardozi", "Pearl Work", "Wedding", "Crimson"],
        featured: true,
        customizable: true
    },

    // --- EXPANDED BANGLES COLLECTION ---
    {
        id: 20,
        code: "STD-BG05",
        name: "Royal Ruby & Emerald Matte Silk Kada Stack",
        category: "Bangles",
        subCategory: "Designer Bangles",
        work: ["Silk Thread", "Kemp Stone", "Zari", "Filigree"],
        occasion: "Wedding / Reception",
        price: "Price on Request",
        badge: "Royal Heirloom",
        image: "images/bangles/bangle-05.jpg",
        gallery: [
            "images/bangles/bangle-05.jpg",
            "images/bangles/bangle-05-g1.jpg"
        ],
        description: "Regal 12-piece stack wrapped in deep bottle green and crimson silk threads, highlighted with antique kemp stones and 24k micro-gold filigree cord wrap.",
        details: {
            material: "Mulberry Silk Thread & Brass Filigree Base",
            embellishment: "Ruby Red & Emerald Green Kemp Stones, Gold Cord",
            sizes: "2.4, 2.6, 2.8, 2.10 & Custom Sizing",
            customizable: "Color combinations matching your saree border"
        },
        tags: ["Designer Bangles", "Stone Bangles", "Kemp Stones", "Wedding", "Silk Thread Bangles", "Bangles", "Ruby", "Emerald"],
        featured: true,
        customizable: true
    },
    {
        id: 21,
        code: "STD-BG06",
        name: "Temple Nakshi Coin & Pearl Hanging Latkan Bangles",
        category: "Bangles",
        subCategory: "Bridal Bangles",
        work: ["Silk Thread", "Pearls", "Nakshi", "Latkan"],
        occasion: "Muhurtham / Festive",
        price: "Price on Request",
        badge: "Temple Heritage",
        image: "images/bangles/bangle-06.jpg",
        gallery: [
            "images/bangles/bangle-06.jpg",
            "images/bangles/bangle-06-g1.jpg"
        ],
        description: "Sacred temple goddess Lakshmi nakshi coin motifs embedded in turmeric yellow and vermillion silk bangles, finished with dainty freshwater pearl latkans.",
        details: {
            material: "Natural Silk Thread, Antique Nakshi Coins & Pearls",
            embellishment: "Kasu Temple Coins & Pearl Drops",
            sizes: "2.2, 2.4, 2.6, 2.8",
            customizable: "Tassel length & silk base shade"
        },
        tags: ["Bridal Bangles", "Temple Bangles", "Pearls", "Silk Thread Bangles", "Latkan", "Bangles", "Nakshi"],
        featured: true,
        customizable: true
    },
    {
        id: 22,
        code: "STD-BG07",
        name: "Golden Gota Patti & Zari Inlaid Bridal Chooda Stack",
        category: "Bangles",
        subCategory: "Bridal Bangles",
        work: ["Gota Patti", "Zari", "Silk Thread", "Kundan"],
        occasion: "Wedding / Sangeet",
        price: "Price on Request",
        badge: "Bridal Signature",
        image: "images/bangles/bangle-07.jpg",
        gallery: [
            "images/bangles/bangle-07.jpg",
            "images/bangles/bangle-07-g1.jpg"
        ],
        description: "Opulent 32-piece traditional bridal chooda set wrapped in rich maroon silk, woven with metallic gota patti ribbons and central heavy kundan kadas.",
        details: {
            material: "Silk Thread, Gota Patti Laces & Acrylic Base",
            embellishment: "Uncut Kundan, Gold Zari Wire & Pearl Drops",
            sizes: "2.4, 2.6, 2.8, 2.10",
            customizable: "Saree-matched dual tones & latkan add-on"
        },
        tags: ["Bridal Bangles", "Chooda", "Silk Thread Bangles", "Kundan", "Wedding", "Bridal", "Bangles", "Gota Patti"],
        featured: true,
        customizable: true
    },
    {
        id: 23,
        code: "STD-BG08",
        name: "Kundan Floral Jaali Handcrafted Silk Bangles Stack",
        category: "Bangles",
        subCategory: "Silk Thread Bangles",
        work: ["Kundan", "Silk Thread", "Pearls"],
        occasion: "Engagement / Festive",
        price: "Price on Request",
        badge: "Trending",
        image: "images/bangles/bangle-08.jpg",
        gallery: [
            "images/bangles/bangle-08.jpg",
            "images/bangles/bangle-08-g1.jpg"
        ],
        description: "Pastel mint, powder blue, and blush pink 24-piece bangle stack with floral jaali wirework and micro kundan stones.",
        details: {
            material: "Pastel Silk Threads & Stone Settings",
            embellishment: "Floral Kundan Jaali & Micro Moti Trims",
            sizes: "2.2, 2.4, 2.6, 2.8",
            customizable: "Customized pastel combinations"
        },
        tags: ["Silk Thread Bangles", "Kundan", "Pastel Bangles", "Engagement", "Bangles", "Floral"],
        featured: false,
        customizable: true
    },
    {
        id: 24,
        code: "STD-BG09",
        name: "Royal Velvet & Zari Bullion Bridal Kada Pair",
        category: "Bangles",
        subCategory: "Designer Bangles",
        work: ["Velvet", "Zardozi", "Zari", "Stones"],
        occasion: "Reception / Wedding",
        price: "Price on Request",
        badge: "Haute Edition",
        image: "images/bangles/bangle-09.jpg",
        gallery: [
            "images/bangles/bangle-09.jpg",
            "images/bangles/bangle-09-g1.jpg"
        ],
        description: "Pair of extra broad statement kadas enveloped in midnight blue micro velvet, hand-embroidered with French bullion zardozi wires and sparkling ruby stones.",
        details: {
            material: "Micro Velvet, Zardozi Bullion Wire & Brass Core",
            embellishment: "Zari Jaal & Crystal Drops",
            sizes: "2.4, 2.6, 2.8",
            customizable: "Velvet color (Maroon, Royal Blue, Emerald, Black)"
        },
        tags: ["Designer Bangles", "Velvet Bangles", "Zardozi", "Bridal", "Wedding", "Bangles", "Kada"],
        featured: true,
        customizable: true
    },
    {
        id: 25,
        code: "STD-BG10",
        name: "Hasth Melap Personalized Wedding Monogram Bangles",
        category: "Bangles",
        subCategory: "Customized Bangles",
        work: ["Custom Name", "Zari", "Silk Thread", "Kundan"],
        occasion: "Wedding",
        price: "Price on Request",
        badge: "Bespoke Keepsake",
        image: "images/bangles/bangle-10.jpg",
        gallery: [
            "images/bangles/bangle-10.jpg",
            "images/bangles/bangle-10-g1.jpg"
        ],
        description: "Handcrafted personalized wedding set incorporating custom bride & groom name cuts, auspicious doli-shehnai symbols, and matching silk thread bangles.",
        details: {
            material: "Custom Laser Cut Names, Pure Silk Resham & Gold Zari",
            embellishment: "Groom & Bride Names, Wedding Date & Pearl Latkans",
            sizes: "Customized to bride's exact wrist measurement",
            customizable: "Name typography, silk hues & charm latkans"
        },
        tags: ["Customized Bangles", "Name Bangles", "Bridal Bangles", "Personalized", "Wedding", "Bangles"],
        featured: true,
        customizable: true
    },

    // --- CURATED SAREES COLLECTION ---
    {
        id: 26,
        code: "STD-SR01",
        name: "Royal Swarna Temple Kanchipuram Pure Silk Bridal Saree",
        category: "Sarees",
        subCategory: "Bridal Silk Sarees",
        work: ["Pure Zari", "Handloom Weave", "Temple Korvai"],
        occasion: "Muhurtham / Wedding",
        price: "Price on Request",
        badge: "Bridal Masterpiece",
        image: "images/sarees/saree-01.jpg",
        gallery: [
            "images/sarees/saree-01.jpg",
            "images/sarees/saree-01-g1.jpg"
        ],
        description: "Authentic handloom pure Kanchipuram silk saree in auspicious vermillion crimson red, featuring a traditional Korvai temple border, Mayil (peacock) and floral gold zari jaal across the body, and an opulent heavy brocade pallu.",
        details: {
            fabric: "100% Pure Mulberry Handloom Silk with Silk Mark Assurance",
            workType: "Heavy Antique Gold Zari Korvai Weave",
            border: "Contrast Broad Temple Architecture Gold Zari Border",
            pallu: "Rich Royal Peacock & Kalasam Motifs Zari Pallu",
            included: "Unstitched Matching Blouse Piece + Custom Blouse Crafting Service",
            customizable: "Matching bespoke maggam blouse and silk thread bangles combo"
        },
        tags: ["Saree", "Sarees", "Bridal Silk Sarees", "Kanchipuram Saree", "Silk Saree", "Wedding", "Pure Zari", "Bridal", "Temple", "Red Saree"],
        featured: true,
        customizable: true
    },
    {
        id: 27,
        code: "STD-SR02",
        name: "Maharani Royal Banarasi Kadwa Brocade Silk Saree",
        category: "Sarees",
        subCategory: "Banarasi Silk",
        work: ["Kadwa Weave", "Antique Zari", "Meenakari"],
        occasion: "Wedding / Reception",
        price: "Price on Request",
        badge: "Heritage Edition",
        image: "images/sarees/saree-02.jpg",
        gallery: [
            "images/sarees/saree-02.jpg",
            "images/sarees/saree-02-g1.jpg"
        ],
        description: "Timeless royal blue and antique gold pure Banarasi silk saree handwoven with the intricate Kadwa technique. Features blooming floral bel motifs intertwined with delicate meenakari silk accents.",
        details: {
            fabric: "Pure Katan Silk with Metallic Brocade",
            workType: "Authentic Handloom Kadwa Zari Weave with Meenakari",
            border: "Elaborate Shikargah Flora & Fauna Border",
            pallu: "Extravagant Antique Gold Brocade Zari Pallu",
            included: "Includes running silk blouse fabric with brocade border",
            customizable: "Blouse embroidery design and sleeve styling"
        },
        tags: ["Saree", "Sarees", "Banarasi Silk", "Silk Saree", "Kadwa Weave", "Wedding", "Reception", "Heritage", "Royal Blue", "Banarasi"],
        featured: true,
        customizable: true
    },
    {
        id: 28,
        code: "STD-SR03",
        name: "Blush Rose Pastel Organza Hand-Embroidered Saree",
        category: "Sarees",
        subCategory: "Organza Embroidered",
        work: ["Resham Thread", "3D Florals", "Cutwork", "Pearls"],
        occasion: "Engagement / Reception / Cocktail",
        price: "Price on Request",
        badge: "Contemporary Luxe",
        image: "images/sarees/saree-03.jpg",
        gallery: [
            "images/sarees/saree-03.jpg",
            "images/sarees/saree-03-g1.jpg"
        ],
        description: "Ethereal pastel blush pink sheer organza saree decorated with delicate handcrafted 3D resham thread blossoms, laser-precision scalloped cutwork borders, and dangling freshwater pearl accents.",
        details: {
            fabric: "Pure Tissue Silk Organza",
            workType: "Handcrafted 3D Floral Needle Embroidery & Cutwork Border",
            border: "Scalloped Pearl-Draped Resham Floral Trim",
            pallu: "Cascading Rose Vine Hand Embroidery",
            included: "Complementary Satin Silk Inner Petticoat & Designer Blouse Piece",
            customizable: "Pastel color palettes (Blush, Mint, Lavender, Peach, Powder Blue)"
        },
        tags: ["Saree", "Sarees", "Organza Embroidered", "Pastel Saree", "Floral Saree", "Cutwork", "Thread Work", "Engagement", "Reception", "Blush Pink"],
        featured: true,
        customizable: true
    },
    {
        id: 29,
        code: "STD-SR04",
        name: "Emerald Green Pure Georgette Maggam Border Designer Saree",
        category: "Sarees",
        subCategory: "Designer Georgette",
        work: ["Maggam Work", "Aari", "Kundan", "Pearls"],
        occasion: "Sangeet / Festive / Wedding",
        price: "Price on Request",
        badge: "Artisan Select",
        image: "images/sarees/saree-04.jpg",
        gallery: [
            "images/sarees/saree-04.jpg",
            "images/sarees/saree-04-g1.jpg"
        ],
        description: "Fluid emerald green pure viscous georgette saree accented with an artisan-embroidered Maggam border featuring uncut kundan stones, aari gold cord outlines, and pearl fringe pallu detailing.",
        details: {
            fabric: "Pure 60g Viscose Georgette (Ultra-soft drape)",
            workType: "Hand Needle Maggam & Kasu Stone Embroidery",
            border: "3-Inch Dense Maggam & Kemp Stone Border",
            pallu: "Scalloped Maggam Lattice with Hanging Pearl Latkans",
            included: "Designer heavy embroidered matching blouse fabric",
            customizable: "Border width, stone shades, and base fabric hue"
        },
        tags: ["Saree", "Sarees", "Designer Georgette", "Maggam Work", "Emerald Green", "Festive", "Wedding", "Kundan", "Georgette"],
        featured: true,
        customizable: true
    },
    {
        id: 30,
        code: "STD-SR05",
        name: "The Nizam Crimson Velvet Border Heritage Silk Saree",
        category: "Sarees",
        subCategory: "Bridal Silk Sarees",
        work: ["Zardozi", "Velvet Appliqué", "Dabka", "Kemp"],
        occasion: "Bridal / Muhurtham / Reception",
        price: "Price on Request",
        badge: "Royal Couture",
        image: "images/sarees/saree-05.jpg",
        gallery: [
            "images/sarees/saree-05.jpg",
            "images/sarees/saree-05-g1.jpg"
        ],
        description: "Sumptuous deep crimson red raw silk saree framed with hand-embroidered royal velvet borders, genuine metallic zardozi dabka coils, and rich kemp stone embellishments inspired by Hyderabadi Nizam royal court costumes.",
        details: {
            fabric: "Pure Mulberry Raw Silk with Micro Velvet Borders",
            workType: "Heritage Zardozi, French Bullion & Kemp Stone Work",
            border: "4.5-inch Royal Crimson Velvet Embroidered Border",
            pallu: "Heavy Zardozi Medallion Tapestry Pallu",
            included: "Rich Velvet & Raw Silk Designer Blouse Material",
            customizable: "Fully bespoke border motifs and sleeve customization"
        },
        tags: ["Saree", "Sarees", "Bridal Silk Sarees", "Zardozi", "Velvet Saree", "Bridal", "Wedding", "Crimson", "Heritage"],
        featured: true,
        customizable: true
    },
    {
        id: 31,
        code: "STD-SR06",
        name: "Pastel Mint & Lavender Dual-Tone Silk Saree",
        category: "Sarees",
        subCategory: "Contemporary Silk",
        work: ["Zari Weave", "Dual-Tone", "Floral Buttas"],
        occasion: "Festive / Haldi / Mehendi / Reception",
        price: "Price on Request",
        badge: "Trending Pastel",
        image: "images/sarees/saree-06.jpg",
        gallery: [
            "images/sarees/saree-06.jpg",
            "images/sarees/saree-06-g1.jpg"
        ],
        description: "Subtle and sophisticated dual-tone shot silk saree in pastel mint green with lavender undertones, embellished with miniature silver-gold zari floral buttas and a sleek modern border.",
        details: {
            fabric: "Pure Handloom Shot Silk",
            workType: "Fine Zari Floral Buttas & Contemporary Border",
            border: "Minimalist Dual-Tone Floral Border",
            pallu: "Geometric Linear Silver-Gold Zari Weave",
            included: "Matching Lavender Silk Blouse Piece",
            customizable: "Sleeve embroidery and tassel add-on"
        },
        tags: ["Saree", "Sarees", "Contemporary Silk", "Pastel Saree", "Mint Green", "Lavender", "Festive", "Mehendi"],
        featured: false,
        customizable: true
    },
    {
        id: 32,
        code: "STD-SR07",
        name: "Handcrafted Tussar Silk Resham Threadwork Saree",
        category: "Sarees",
        subCategory: "Threadwork Sarees",
        work: ["Resham Thread", "Artisanal Needlework", "Vine Embroidery"],
        occasion: "Festive / Casual Luxe / Puja",
        price: "Price on Request",
        badge: "Artisanal Pure",
        image: "images/sarees/saree-07.jpg",
        gallery: [
            "images/sarees/saree-07.jpg",
            "images/sarees/saree-07-g1.jpg"
        ],
        description: "Natural golden-beige pure Tussar silk saree adorned with multicolour silk thread needlework depicting blooming jasmine vines, peacocks, and traditional floral motifs across the drape and pallu.",
        details: {
            fabric: "100% Certified Pure Tussar Handloom Silk",
            workType: "Hand Needle Resham Satin Stitch & French Knots",
            border: "Continuous Floral Vine Resham Embroidery",
            pallu: "Panoramic Peacock & Botanical Thread Symphony",
            included: "Handloom Tussar Blouse Piece with Threadwork Sleeves",
            customizable: "Thread color palette matching your jewelry"
        },
        tags: ["Saree", "Sarees", "Threadwork Sarees", "Tussar Silk", "Resham Thread", "Artisanal", "Festive", "Floral", "Thread Work"],
        featured: false,
        customizable: true
    },
    {
        id: 33,
        code: "STD-SR08",
        name: "Champagne Gold Muhurtham Tissue Silk Saree",
        category: "Sarees",
        subCategory: "Bridal Silk Sarees",
        work: ["Tissue Silk", "Real Zari", "Temple Weave"],
        occasion: "Muhurtham / Wedding / Grand Reception",
        price: "Price on Request",
        badge: "Luxe Heirloom",
        image: "images/sarees/saree-08.jpg",
        gallery: [
            "images/sarees/saree-08.jpg",
            "images/sarees/saree-08-g1.jpg"
        ],
        description: "Dazzling champagne gold pure tissue silk saree woven with real metallic warp and weft, featuring delicate meenakari motifs on the border and a show-stopping grand bridal pallu.",
        details: {
            fabric: "Pure Metallic Tissue Silk",
            workType: "Master Weave Real Gold Zari Tissue Brocade",
            border: "Intricate Temple Kalasam & Mayil Border",
            pallu: "Heavy Royal Trousseau Pallu",
            included: "Champagne Gold Brocade Blouse Piece",
            customizable: "Bridal blouse design and monogramming"
        },
        tags: ["Saree", "Sarees", "Bridal Silk Sarees", "Tissue Silk", "Gold Saree", "Wedding", "Bridal", "Muhurtham", "Heirloom", "Tissue"],
        featured: true,
        customizable: true
    }
];

// Export to window
if (typeof window !== 'undefined') {
    window.products = products;
}
