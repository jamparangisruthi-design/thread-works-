/**
 * SRUTHI THREADS & DESIGNS - CENTRAL SITE CONFIGURATION
 * Single source of truth for all boutique details, contact info, WhatsApp automation & social links.
 */

const siteConfig = {
    brandName: "Sruthi Threads & Designs",
    shortName: "Sruthi Threads",
    tagline: "Where Every Thread Tells a Story.",
    secondaryTagline: "Handcrafted Elegance for Every Celebration.",
    
    // Contact Information
    phone: "+91 98765 43210",
    phoneClean: "919876543210",
    whatsapp: "919876543210",
    whatsappDisplay: "+91 98765 43210",
    email: "enquire@sruthithreads.com",
    
    // Studio Address & Timings
    address: "Road No. 36, Near Metro Pillar 1445, Jubilee Hills, Hyderabad, Telangana 500033",
    city: "Hyderabad, India",
    openingHours: "Mon – Sat: 10:00 AM – 8:30 PM | Sunday: 11:30 AM – 6:00 PM",
    
    // Social Channels
    instagram: "https://www.instagram.com/sruthithreads",
    instagramHandle: "@sruthithreads",
    facebook: "https://www.facebook.com/sruthithreads",
    pinterest: "https://www.pinterest.com/sruthithreads",
    
    // Map Links
    googleMaps: "https://goo.gl/maps/hyderabadboutique",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.66442654321!2d78.4018244!3d17.4338875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cd3d9e2621%3A0x6b7b25e2e8e45f91!2sJubilee%20Hills%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    
    // Key Boutique Highlights
    highlights: [
        { title: "100% Handcrafted", subtitle: "Artisanal master craftsmanship", icon: "✨" },
        { title: "Custom Designs", subtitle: "Tailored to your saree & vision", icon: "✂️" },
        { title: "Bridal Specialists", subtitle: "Opulent wedding trousseau", icon: "👑" },
        { title: "Made With Love", subtitle: "Unmatched stitch precision", icon: "💖" }
    ],

    // WhatsApp Message Generator Helpers
    getWhatsAppUrl: function (customMessage) {
        const text = encodeURIComponent(customMessage || `Hello ${this.brandName}, I would like to enquire about your boutique collections and custom blouse designs.`);
        return `https://wa.me/${this.whatsapp}?text=${text}`;
    },

    getProductEnquiryUrl: function (product) {
        const message = `Hello ${this.brandName},\n\nI am interested in *${product.name}* (Code: ${product.code || 'STD-' + product.id}).\n\n• Category: ${product.category}\n• Work Type: ${Array.isArray(product.work) ? product.work.join(', ') : product.work}\n• Occasion: ${product.occasion || 'Bridal/Festive'}\n\nCould you please share details on pricing, customization options, and lead time? Thank you!`;
        return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(message)}`;
    },

    getCustomOrderUrl: function (formData) {
        const message = `Hello ${this.brandName},\n\nI would like to place a *Custom Design Request*:\n\n• Name: ${formData.name || 'Customer'}\n• Phone: ${formData.phone || 'N/A'}\n• Service: ${formData.service || 'Custom Design'}\n• Occasion: ${formData.occasion || 'Wedding'}\n• Preferred Work: ${formData.work || 'Maggam / Thread Work'}\n• Preferred Color: ${formData.color || 'As discussed'}\n• Design Details: ${formData.details || 'Reference shared'}\n\nLooking forward to consulting with your design team!`;
        return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(message)}`;
    },

    getContactEnquiryUrl: function (formData) {
        const message = `Hello ${this.brandName},\n\n*New Studio Enquiry*:\n\n• Name: ${formData.name || 'Customer'}\n• Phone: ${formData.phone || 'N/A'}\n• Email: ${formData.email || 'N/A'}\n• Subject: ${formData.subject || 'General Enquiry'}\n• Message: ${formData.message || 'I would like to enquire about your designs.'}\n\nPlease let me know when we can connect!`;
        return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(message)}`;
    }
};

// Export to window if browser environment
if (typeof window !== 'undefined') {
    window.siteConfig = siteConfig;
}
