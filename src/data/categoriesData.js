const categories = {
  "url-to-qr-code": {
    slug: "url-to-qr-code",
    qrType: "url",
    name: "URL to QR Code",
    metaTitle: "Free URL to QR Code Generator - Convert Links Online | QrCodey",
    metaDescription: "Convert any website link or URL into a custom scannable QR code. Free, permanent static codes with custom logos, templates, and frames. High-resolution downloads.",
    seoTitle: "Convert URL & Website Links to QR Codes",
    seoSubheading: "Make your online portals instantly scannable. Turn links, landing pages, blogs, or social networks into beautiful custom QR cards.",
    seoCopyTitle: "How to Convert URL Links to QR Codes",
    seoCopyText: "Using a website link QR code is the fastest way to drive real-world audiences to digital content. Whether you are launching a promotional landing page, publicizing a new product, or distributing digital portfolios, converting your URL to a QR code cuts out manually typing addresses. QrCodey produces high-contrast static vectors that link directly to target directories, ensuring 100% scan reliability without delay.",
    seoCopyBulletTitle: "Optimizing Link QR Codes",
    seoCopyBullets: [
      "Use short URLs to keep the QR code matrix clean and easy to scan.",
      "Add a center logo (like your website brand mark) to build consumer trust.",
      "Select high-contrast color settings to ensure readability across all mobile cameras.",
      "Add a frame with a clear call-to-action (CTA) text banner (e.g. 'SCAN TO VISIT')."
    ],
    faqList: [
      {
        q: "Will my URL QR code stop working after a certain number of scans?",
        a: "No. QrCodey creates static QR codes which encode the raw link directly. There are no scan limits, no redirects, and no expiration dates. The code will scan forever."
      },
      {
        q: "Should I include 'https://' in my URL input?",
        a: "Our generator automatically checks for 'http://' or 'https://' and prepends it if missing, ensuring that the scanner opens the target website smoothly."
      }
    ]
  },
  "text-to-qr-code": {
    slug: "text-to-qr-code",
    qrType: "text",
    name: "Text to QR Code",
    metaTitle: "Raw Text to QR Code Maker - Free Static Text Codes | QrCodey",
    metaDescription: "Encode text blocks, instructions, descriptions, or coupon codes into custom static QR codes. Create, design, and download instantly for free.",
    seoTitle: "Convert Raw Text & Instructions to QR Codes",
    seoSubheading: "Store custom text paragraphs, voucher keys, event coordinates, or hidden notes inside beautiful scannable vector shapes.",
    seoCopyTitle: "Practical Uses for Text QR Codes",
    seoCopyText: "Unlike URL codes, text QR codes do not require internet access to read. Once scanned, the user's phone decodes the target block offline, immediately showing the encoded paragraphs. This makes it ideal for coupon keys, industrial serial numbers, warehouse tracking cards, or interactive educational clues in treasure hunts.",
    seoCopyBulletTitle: "Text Encoding Specs",
    seoCopyBullets: [
      "Supports alphanumeric strings, emojis, special characters, and numbers.",
      "Keep text messages under 300 characters to prevent the QR pixels from becoming too dense.",
      "Ensure proper lighting contrast when printing raw text labels.",
      "Add clean frames to signify the text is a static information card."
    ],
    faqList: [
      {
        q: "Can users edit the text after the QR code is printed?",
        a: "No, this is a static QR code. The text is permanently embedded within the pattern. To change the text, you must generate and print a new QR code."
      },
      {
        q: "Do I need mobile data to scan a text QR code?",
        a: "No. Since the message is stored locally inside the QR code pixels, any scanning app will decode and display it immediately, even without internet access."
      }
    ]
  },
  "wifi-qr-code-generator": {
    slug: "wifi-qr-code-generator",
    qrType: "wifi",
    name: "WiFi QR Code Generator",
    metaTitle: "Free WiFi QR Code Generator - Scan to Connect | QrCodey",
    metaDescription: "Generate a scannable WiFi QR code for your home, cafe, or office. Let guests scan to connect to your wireless network instantly without typing passwords.",
    seoTitle: "Create a Scan-to-Connect WiFi QR Code",
    seoSubheading: "Keep your network passwords private. Let guests scan a custom framed card to join your router network instantly.",
    seoCopyTitle: "Simplifying Wireless Connectivity",
    seoCopyText: "Dictating complex wireless credentials or printing passwords on sheets of paper is a security hazard and a hassle. A WiFi QR code compiles the SSID network name, password key, and encryption protocols (WPA, WEP, or none) into a single unified configuration tag. When scanned by iOS or Android cameras, the device handles the handshakes automatically.",
    seoCopyBulletTitle: "WiFi Security Practices",
    seoCopyBullets: [
      "Supports WPA/WPA2, WEP, and Unsecured networks.",
      "Ensure the SSID matching is exact (case-sensitive) to prevent connection errors.",
      "Print and place the code on countertops, menus, or entry portals.",
      "Use our Polaroid or slate frames with text like 'SCAN FOR FREE WIFI'."
    ],
    faqList: [
      {
        q: "Does this WiFi QR code send my router password to any servers?",
        a: "No. The WiFi credentials are compiled locally in your browser. The raw string 'WIFI:S:NetworkName;T:WPA;P:Password;;' is encoded directly on your device, ensuring complete local security."
      },
      {
        q: "What devices can scan this to join the network?",
        a: "All modern Android and iOS devices support native scan-to-connect functionality directly through their built-in camera apps."
      }
    ]
  },
  "email-qr-code-generator": {
    slug: "email-qr-code-generator",
    qrType: "email",
    name: "Email QR Code Generator",
    metaTitle: "Email to QR Code Generator - Prefilled Message Builder | QrCodey",
    metaDescription: "Generate an Email QR code with prefilled receiver addresses, subject lines, and message body templates. Perfect for support, feedback, and RSVPs.",
    seoTitle: "Generate Email Link QR Codes",
    seoSubheading: "Automate subscriber communications. Let users scan a QR code to draft a prefilled email instantly on their phones.",
    seoCopyTitle: "Streamlining Direct Email Inquiries",
    seoCopyText: "Manually typing email addresses, subject headers, and query descriptions on mobile keyboards often leads to typos. Email QR codes leverage the standard 'mailto:' URI protocol. Scanning the tag instantly launches the user's default email client (Gmail, Outlook, Mail) with the sender address, subject line, and body template already written and waiting.",
    seoCopyBulletTitle: "Ideal Use Cases",
    seoCopyBullets: [
      "Event RSVPs and feedback collection forms.",
      "Automating product support queries and order updates.",
      "Recruiting lines ('SCAN TO APPLY').",
      "Lead generation campaigns and newsletter sign-up sheets."
    ],
    faqList: [
      {
        q: "Can I prefill multiple recipient addresses?",
        a: "Yes, you can input multiple addresses separated by commas, though standard configurations target a single feedback inbox."
      },
      {
        q: "Will scanning this send the email automatically?",
        a: "No. The scanner only opens and drafts the email client. The user must review the message and click the send button themselves."
      }
    ]
  },
  "phone-qr-code": {
    slug: "phone-qr-code",
    qrType: "phone",
    name: "Phone Call QR Code",
    metaTitle: "Phone Call QR Code Generator - Scan to Dial | QrCodey",
    metaDescription: "Create a scannable phone call QR code. Let clients scan your flyer or business card to dial your phone number instantly on their mobile devices.",
    seoTitle: "Generate Scan-to-Call QR Codes",
    seoSubheading: "Connect customers to your support line instantly. Let them scan to load your phone number in their dialer.",
    seoCopyTitle: "Connect Instantly with Dial QR Codes",
    seoCopyText: "In fast-paced environments, forcing customers to write down and key in telephone numbers is a friction point. Placing a Phone QR code on billboards, brochures, or food menus allows leads to trigger direct phone calls. The scan interprets the 'tel:' protocol, displaying the call screen ready to execute.",
    seoCopyBulletTitle: "Best Print Configurations",
    seoCopyBullets: [
      "Include country dial codes (+91 for India, +1 for US) for international scan compatibility.",
      "Place on physical banners, store window decals, or flyers.",
      "Add a frame label saying 'SCAN TO CALL' or 'DIAL NOW'.",
      "Verify the code on multiple mobile carriers before deployment."
    ],
    faqList: [
      {
        q: "Will scanning this charge the user's phone credit?",
        a: "No. Scanning only drafts the phone number into the dialer. Normal carrier fees only apply when the user actively triggers the call."
      },
      {
        q: "Can I use toll-free numbers?",
        a: "Yes, you can encode standard mobile numbers, landlines, and toll-free business numbers."
      }
    ]
  },
  "vcard-qr-code": {
    slug: "vcard-qr-code",
    qrType: "vcard",
    name: "vCard QR Code Generator",
    metaTitle: "vCard QR Code Generator - Digital Business Card Maker | QrCodey",
    metaDescription: "Create a scannable vCard QR code containing your name, phone, email, website, and company details. Generate digital business cards for free.",
    seoTitle: "Create Digital vCard Business Cards",
    seoSubheading: "Upgrade your physical cards. Let contacts scan your digital vCard to import your full contact information to their phonebooks.",
    seoCopyTitle: "The Evolution of Business Cards",
    seoCopyText: "Paper business cards are easily lost, and manually typing names, titles, cell numbers, and links into a mobile phone is tedious. A vCard QR code embeds structured contact data directly into the matrix. Upon scanning, the operating system opens a 'Create New Contact' card with all fields pre-filled, letting users save your profile in one click.",
    seoCopyBulletTitle: "Structuring Your vCard QR",
    seoCopyBullets: [
      "Fill in critical details: Name, mobile number, corporate email, and logo.",
      "Link to a digital hub, portfolio, or LinkedIn profile.",
      "Choose a clean color scheme that matches your company theme.",
      "Keep text clean to avoid overloading the scan density."
    ],
    faqList: [
      {
        q: "Does this store my contact data on QrCodey servers?",
        a: "No. Your contact card compiled inside QrCodey is built 100% locally on your browser. We never capture or upload your personal card data."
      },
      {
        q: "Is it compatible with both Apple and Android contacts?",
        a: "Yes. The output uses the industry-standard vCard format, which is native to both iOS Contacts and Android Contacts applications."
      }
    ]
  },
  "location-qr-code": {
    slug: "location-qr-code",
    qrType: "location",
    name: "Location QR Code",
    metaTitle: "Location & GPS QR Code Generator - Link Map Coordinates | QrCodey",
    metaDescription: "Generate a custom GPS QR code. Encode latitude and longitude coordinates to direct scanners to your store location on Google Maps or Apple Maps.",
    seoTitle: "Create Scan-to-Navigate Location QR Codes",
    seoSubheading: "Guide clients to your physical location. Let them scan to launch Google Maps and get driving directions.",
    seoCopyTitle: "Pinpoint Your Store Location",
    seoCopyText: "Whether you are hosting a wedding, publicizing a retail store opening, or setting up a booth at an exhibition, location QR codes ensure visitors find you. By encoding the exact GPS decimal coordinates (latitude and longitude), the scanner immediately launches native map applications to load directions, skipping manually typed street names.",
    seoCopyBulletTitle: "Location Pin Details",
    seoCopyBullets: [
      "Input precise coordinates using decimal formats (e.g. 28.6139, 77.2090).",
      "Place on printed invitations, event posters, or pamphlets.",
      "Pair with a 'SCAN FOR DIRECTIONS' custom frame style.",
      "Verify the GPS pins open in Apple Maps and Google Maps correctly."
    ],
    faqList: [
      {
        q: "How do I get my latitude and longitude coordinates?",
        a: "You can find your GPS coordinates easily by dropping a pin on Google Maps and copying the numbers that appear in the address bar."
      },
      {
        q: "Will this support navigation while offline?",
        a: "The map application requires a GPS signal and internet connectivity to fetch live road routes and traffic details."
      }
    ]
  },
  "whatsapp-qr-code": {
    slug: "whatsapp-qr-code",
    qrType: "whatsapp",
    name: "WhatsApp QR Code",
    metaTitle: "WhatsApp QR Code Generator - Free Click-to-Chat Maker | QrCodey",
    metaDescription: "Generate a custom WhatsApp QR code with pre-filled chat messages. Let customers text your WhatsApp Business line instantly without saving your number.",
    seoTitle: "Generate WhatsApp Click-to-Chat QR Codes",
    seoSubheading: "Bridge the gap to instant customer service. Let clients scan to open a direct chat window with your business account.",
    seoCopyTitle: "Speed Up Customer Conversations",
    seoCopyText: "Forcing customers to save your phone number before messaging you on WhatsApp is a major friction barrier. WhatsApp QR codes resolve this by encoding WhatsApp's direct 'wa.me' messaging API format. Users can scan to trigger a direct messaging link initialized with your welcome message, saving time and driving leads.",
    seoCopyBulletTitle: "WhatsApp Lead Capture Tips",
    seoCopyBullets: [
      "Ensure the phone number includes the international country code without '+' or zero prefix.",
      "Add a warm welcome message (e.g. 'Hello, I'd like to book an appointment!').",
      "Place the code on restaurant table tents, product packaging, or flyers.",
      "Add the classic WhatsApp logo to the center of your QR badge to build trust."
    ],
    faqList: [
      {
        q: "Do I need a WhatsApp Business account to use this?",
        a: "No. You can generate custom messaging QR codes for both personal WhatsApp profiles and professional WhatsApp Business accounts."
      },
      {
        q: "Does this require users to save my number first?",
        a: "No. The link instantly bypasses the address book, opening a secure chat line directly."
      }
    ]
  },
  "instagram-qr-code": {
    slug: "instagram-qr-code",
    qrType: "instagram",
    name: "Instagram QR Code",
    metaTitle: "Instagram QR Code Generator - Grow Your Follower Base | QrCodey",
    metaDescription: "Convert your Instagram profile, post, or reel into a customized QR code. Add the Instagram logo and download high-resolution templates for free.",
    seoTitle: "Create Custom Instagram Profile QR Codes",
    seoSubheading: "Grow your social presence in the physical world. Let users scan a premium custom frame to follow your feed.",
    seoCopyTitle: "Grow Your Instagram Following Offline",
    seoCopyText: "Sharing Instagram handles verbally often results in misspelling profiles. Instagram QR codes provide a high-fidelity visual asset that you can print on packaging, banners, business cards, and menus. By attaching an Instagram badge inside a clean frame layout, you create a direct gateway for customers to follow your brand.",
    seoCopyBulletTitle: "Instagram Marketing Tips",
    seoCopyBullets: [
      "Enter your raw username to compile the profile path automatically.",
      "Select the Instagram preset logo to display in the center of the QR canvas.",
      "Use high-contrast vibrant colors (like our Sunset Orange frame template).",
      "Add a frame CTA like 'SCAN TO FOLLOW' to boost scans."
    ],
    faqList: [
      {
        q: "Can I link directly to a specific Reel or Post?",
        a: "Yes. Simply paste the full URL link of your Instagram post or reel, and the generator will compile the scannable code."
      },
      {
        q: "Will this open in the native Instagram app?",
        a: "Yes, modern smartphones automatically detect social URL profiles and launch the native Instagram app directly to your page."
      }
    ]
  },
  "facebook-qr-code": {
    slug: "facebook-qr-code",
    qrType: "facebook",
    name: "Facebook QR Code",
    metaTitle: "Facebook QR Code Generator - Drive Likes and Traffic | QrCodey",
    metaDescription: "Generate custom QR codes for your Facebook page, profile, group, or post. Free downloads with preset logos, colors, and premium frames.",
    seoTitle: "Create Custom Facebook QR Codes",
    seoSubheading: "Direct customers straight to your business page. Boost likes, reviews, and community engagement with custom code templates.",
    seoCopyTitle: "Connect with Customers on Facebook",
    seoCopyText: "Placing a Facebook QR code on receipts, window decals, or menus lets offline customers follow your brand. You can direct traffic to your customer support messenger, group community, page reviews, or a pinned post, creating an instant connection to your target audience.",
    seoCopyBulletTitle: "Facebook Optimization Specs",
    seoCopyBullets: [
      "Use your custom Facebook page username or full URL path.",
      "Include a Facebook preset center logo to draw scans.",
      "Select custom brand colors that align with your corporate theme.",
      "Leverage the Polaroid border template for a creative, modern display."
    ],
    faqList: [
      {
        q: "Can I link this to my Facebook Business Page?",
        a: "Yes, you can link to any public personal page, business page, public group, or post."
      },
      {
        q: "Are there any scan limits on free Facebook codes?",
        a: "No. QrCodey static vectors have no scan limits and can be used on commercial prints forever."
      }
    ]
  },
  "twitter-qr-code": {
    slug: "twitter-qr-code",
    qrType: "twitter",
    name: "Twitter QR Code",
    metaTitle: "Twitter / X Profile QR Code Generator - Free Customizer | QrCodey",
    metaDescription: "Generate custom QR codes for Twitter/X profiles and tweet templates. Add the X/Twitter logo and download scannable layout flyers for free.",
    seoTitle: "Create Twitter & X Profile QR Codes",
    seoSubheading: "Drive followers to your feed. Make your X profile or a specific tweet easily accessible with a scan.",
    seoCopyTitle: "Promote Your X Profile on the Go",
    seoCopyText: "Use a Twitter/X QR code at presentation slides, name badges, store checkout counters, or inside books. Users can scan the code to instantly view your feed or pre-draft a tweet to share your services with their communities.",
    seoCopyBulletTitle: "X Profile Scan Tips",
    seoCopyBullets: [
      "Enter your raw X handle or full tweet URL.",
      "Add a custom logo badge to clearly define the destination.",
      "Utilize the Cyberpunk Neon frame for a modern tech-themed display.",
      "Verify readability against dark backgrounds before printing."
    ],
    faqList: [
      {
        q: "Will this load the profile inside the X mobile app?",
        a: "Yes. If the user has the X app installed, the scanner will launch the application directly to your profile page."
      },
      {
        q: "Can I generate a QR code for a pre-written tweet?",
        a: "Yes, by pasting the tweet's web URL, you can direct users directly to view, like, or retweet it."
      }
    ]
  },
  "youtube-qr-code": {
    slug: "youtube-qr-code",
    qrType: "youtube",
    name: "YouTube QR Code",
    metaTitle: "YouTube QR Code Generator - Channel & Video Links | QrCodey",
    metaDescription: "Create custom YouTube QR codes for channels, playlists, or specific videos. Free vector files with preset brand logos and template frames.",
    seoTitle: "Generate scannable YouTube QR Codes",
    seoSubheading: "Boost video views and channel subscribers. Link offline fans directly to your video content.",
    seoCopyTitle: "Increase YouTube Views & Subscribers",
    seoCopyText: "Placing a YouTube QR code on posters, product packaging, or flyers makes it easy for audiences to scan and watch your product tutorials, video reviews, or creative channels, helping you build a stronger subscriber base.",
    seoCopyBulletTitle: "YouTube Video Scan Specs",
    seoCopyBullets: [
      "Link directly to a video URL, channel path, or public playlist.",
      "Display a YouTube center logo to let scanners know a video awaits.",
      "Use our Mint Fresh or Charcoal templates to frame your media links.",
      "Check compatibility across multiple device camera lenses."
    ],
    faqList: [
      {
        q: "Can I link to a live stream?",
        a: "Yes. Simply paste the direct URL of your active YouTube live stream, and the QR code will direct viewers to it."
      },
      {
        q: "Will the video play automatically when scanned?",
        a: "The scan launches the YouTube app or browser page, loading the video details so the user can hit play."
      }
    ]
  },
  "pdf-qr-code": {
    slug: "pdf-qr-code",
    qrType: "url",
    name: "PDF to QR Code",
    metaTitle: "PDF to QR Code Generator - Link Digital Documents | QrCodey",
    metaDescription: "Convert PDF documents, restaurant menus, user manuals, and booklets into custom scannable QR codes. Free and secure online document converter.",
    seoTitle: "Convert PDF Documents to QR Codes",
    seoSubheading: "Share digital menus, e-books, user guides, or tickets. Let users scan to download PDF files directly to their phones.",
    seoCopyTitle: "Simplify Document Sharing",
    seoCopyText: "PDF QR codes are widely used for digital restaurant menus, appliance manuals, workshop timetables, and academic flyers. By uploading your PDF to a cloud hosting service (like Google Drive, Dropbox, or your website) and pasting the link in QrCodey, you can generate a clean, scannable QR code card.",
    seoCopyBulletTitle: "PDF QR Code Guidelines",
    seoCopyBullets: [
      "Host your PDF on a fast cloud storage service and ensure link permissions are set to public/view.",
      "Add a custom frame layout with CTA text (e.g. 'SCAN FOR MENU').",
      "Upload a PDF or document icon to represent the file contents.",
      "Regularly test that your hosted PDF link remains active."
    ],
    faqList: [
      {
        q: "Where should I host my PDF files?",
        a: "You can host PDFs on Google Drive, Microsoft OneDrive, Dropbox, or your own website server, copying the shareable URL into our tool."
      },
      {
        q: "Can I update the PDF content without changing the QR code?",
        a: "Yes! If you host the PDF on your own server or cloud link under the same URL, you can replace the file content without needing to print a new QR code."
      }
    ]
  },
  "image-qr-code": {
    slug: "image-qr-code",
    qrType: "url",
    name: "Image to QR Code",
    metaTitle: "Image to QR Code Generator - Share Photos & PNGs | QrCodey",
    metaDescription: "Convert images, photos, infographics, or banners into scannable QR codes. Fast, secure, and free online image-to-QR converter.",
    seoTitle: "Convert Images & Photos to QR Codes",
    seoSubheading: "Share digital posters, product catalogs, restaurant menus, or art. Let users scan to view images instantly.",
    seoCopyTitle: "Share Visual Assets Instantly",
    seoCopyText: "Image QR codes are perfect for menus, retail signs, infographics, and promotional flyers. Host your image (PNG, JPG, SVG) online, paste the share link into QrCodey, and generate a customized card that opens the photo on any phone browser instantly.",
    seoCopyBulletTitle: "Image Link Optimization",
    seoCopyBullets: [
      "Ensure your hosted image is optimized and compressed for fast mobile loading.",
      "Check that your cloud hosting permissions allow anyone with the link to view the image.",
      "Embed a photo preset icon to indicate that scanning will display an image.",
      "Use high-contrast frame colors to capture scanner attention."
    ],
    faqList: [
      {
        q: "How do I turn a local photo into a link?",
        a: "You can upload your photo to free image hosting sites (like Imgur) or cloud services (like Google Drive or Dropbox) and paste the link in our generator."
      },
      {
        q: "Does this support high-resolution PNGs?",
        a: "Yes. The QR code links to your hosted image URL, meaning your users will see whatever resolution you uploaded."
      }
    ]
  },
  "qr-code-with-logo": {
    slug: "qr-code-with-logo",
    qrType: "url",
    name: "QR Code with Logo",
    metaTitle: "QR Code Generator with Logo - Free Custom Branded Codes | QrCodey",
    metaDescription: "Generate custom QR codes with your company logo centered in the middle. Choose presets or upload custom PNG/JPG brand icons for free.",
    seoTitle: "Create Branded QR Codes with Logos",
    seoSubheading: "Boost brand visibility and credibility. Embed custom company logos in the center of scannable QR tags.",
    seoCopyTitle: "The Power of Branded QR Codes",
    seoCopyText: "Generic QR codes can look suspicious to users. Adding your corporate logo to the center of the QR canvas reassures scanners that the code is authentic and safe, which can increase scan rates by up to 30% compared to unbranded codes.",
    seoCopyBulletTitle: "Logo Design Best Practices",
    seoCopyBullets: [
      "Use high-contrast backgrounds behind the logo to ensure scannability.",
      "Keep the logo size proportional to the QR canvas (max 20% of the area).",
      "Upload clean SVG or PNG files with transparent backgrounds for best results.",
      "Choose a round or square border badge to enclose the logo neatly."
    ],
    faqList: [
      {
        q: "Does adding a logo interfere with scanning?",
        a: "No. QrCodey automatically uses advanced QR error correction levels (which can handle up to 30% data loss) to ensure the logo doesn't affect readability."
      },
      {
        q: "What image formats are supported for custom logos?",
        a: "We support PNG, JPG, and SVG logo uploads. PNG and SVG are highly recommended for transparency support."
      }
    ]
  },
  "qr-code-api": {
    slug: "qr-code-api",
    qrType: "api",
    name: "QR Code Generator API",
    metaTitle: "Free Dynamic QR Code Generator API - Developer Hub | QrCodey",
    metaDescription: "Integrate high-speed, custom QR code generation into your systems. Free REST API for developers to generate vector QR codes programmatically.",
    seoTitle: "High-Performance QR Code API for Developers",
    seoSubheading: "Integrate vector QR code generation directly into your backend systems, websites, or mobile apps.",
    seoCopyTitle: "Developer-Friendly QR Generation",
    seoCopyText: "QrCodey offers a fast, reliable REST API for developers. Generate custom branded QR codes dynamically using HTTP endpoints, with support for parameters like logo overlays, frames, background themes, and resolution adjustments.",
    seoCopyBulletTitle: "API Specifications",
    seoCopyBullets: [
      "Standard GET parameters for seamless, lightweight integration.",
      "Returns vector SVG data urls or high-resolution PNG buffers.",
      "Supports error correction levels (L, M, Q, H) and padding tweaks.",
      "100% free with unlimited API request quotas."
    ],
    faqList: [
      {
        q: "Do I need an API key to get started?",
        a: "No. Our developer API is public, open-source, and free to use without authentication tokens."
      },
      {
        q: "What is the output format of the API requests?",
        a: "The API can return raw SVG tags, PNG image buffers, or JSON metadata detailing the QR code parameters."
      }
    ]
  }
};

export function getCategoryData(slug) {
  return categories[slug] || categories["url-to-qr-code"];
}

export function getAllCategories() {
  return Object.values(categories);
}
