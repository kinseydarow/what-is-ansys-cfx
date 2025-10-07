================================================================================
                    FLUENTBIT WEBSITE - README
================================================================================

PROJECT OVERVIEW
--------------------------------------------------------------------------------
This is a professional, modern, responsive multi-page website built with HTML, 
CSS, and JavaScript. The website features a clean design inspired by 
fluentbit.net with custom branding and improved user experience.


FILE STRUCTURE
--------------------------------------------------------------------------------
FluentBit4/
│
├── index.html          - Home page with hero section and keyword integration
├── about.html          - About page with mission, vision, and values
├── contact.html        - Contact page with Google Form button
├── download.html       - Download page with installation options
├── style.css           - All styling and responsive design
├── script.js           - Interactive features and mobile navigation
└── README.txt          - This file


GETTING STARTED
--------------------------------------------------------------------------------

1. LOCAL SETUP
   
   To run the website locally:
   
   a) Simply open any HTML file in your web browser:
      - Double-click on index.html to start
      - Or right-click > Open with > Your preferred browser
   
   b) For better development experience, use a local server:
      - Using VS Code: Install "Live Server" extension and click "Go Live"
      - Using Python: python -m http.server 8000
      - Using Node.js: npx serve
   
   Then navigate to: http://localhost:8000 (or the appropriate port)

2. DEPLOYMENT
   
   To deploy the website online:
   
   a) Upload all files to your web hosting service via FTP/SFTP
   b) Or use services like:
      - GitHub Pages (free)
      - Netlify (free)
      - Vercel (free)
      - Traditional web hosting
   
   Note: Make sure all files are in the root directory of your hosting


CUSTOMIZATION GUIDE
--------------------------------------------------------------------------------

1. CHANGING COLORS
   
   Open style.css and modify the CSS variables at the top:
   
   :root {
       --primary-color: #3D6FF4;      /* Main brand color */
       --secondary-color: #FFFFFF;    /* White/background */
       --accent-color: #C4D6EE;       /* Accent/highlight */
       --text-color: #000000;         /* Primary text */
   }
   
   Tip: Use a color picker tool to find hex codes for your brand colors.

2. UPDATING LINKS
   
   a) Google Form Link (contact.html):
      - Find: href="https://docs.google.com/forms/d/e/1FAIpQLSdrZTiYg..."
      - Replace with your own Google Form URL
   
   b) GitHub Repository (all pages):
      - Find: href="https://github.com/kinseydarow/FluentBit"
      - Replace with your GitHub repository URL
   
   c) Download Link (download.html):
      - Find: href="https://fluentbit.net/download/"
      - Replace with your download page URL
   
   d) Official Site Button (index.html):
      - Find: href="https://fluentbit.net/"
      - Replace with your official website URL

3. CHANGING KEYWORDS & SEO
   
   In index.html, find the keyword links in the "Content Section":
   
   Current keywords:
   - fluentbit → https://fluentbit.net/
   - ansys cfx vs fluent → https://fluentbit.net/what-is-the-difference...
   - fluentbit elasticsearch → https://fluentbit.net/fluent-bit-and-opensearch/
   
   To change:
   - Update the anchor text (link text)
   - Update the href URL
   - Ensure keywords fit naturally in the content
   
   Note: Only use each keyword link once for best SEO practices.

4. CHANGING TEXT CONTENT
   
   Simply open any HTML file and find the text you want to change:
   
   - Page titles: Look for <h1>, <h2>, <h3> tags
   - Paragraphs: Look for <p> tags
   - Buttons: Look for class="btn" elements
   - Navigation: Look for class="nav-menu" section
   
   Tip: Use Ctrl+F (or Cmd+F on Mac) to find specific text quickly.

5. CHANGING FONTS
   
   In style.css, find the @import statement at the top and the body selector:
   
   Current font: Poppins (from Google Fonts)
   
   To change:
   a) Visit https://fonts.google.com/
   b) Select your desired font
   c) Copy the @import or <link> code
   d) Replace in style.css or HTML files
   e) Update font-family in body selector

6. ADDING NEW PAGES
   
   To add a new page:
   
   a) Copy an existing HTML file (e.g., about.html)
   b) Rename it to your new page name (e.g., services.html)
   c) Update the content inside
   d) Add a link to the navigation menu in all HTML files:
      
      <li><a href="services.html" class="nav-link">Services</a></li>
   
   e) Add the link to the footer navigation as well

7. UPDATING META DESCRIPTIONS
   
   In each HTML file, find and update:
   
   <meta name="description" content="Your description here">
   
   Keep descriptions between 150-160 characters for best SEO.


FEATURES INCLUDED
--------------------------------------------------------------------------------

1. Responsive Design
   - Mobile-first approach
   - Adapts to all screen sizes (phone, tablet, desktop)
   - Mobile navigation menu with hamburger icon

2. Modern UI/UX
   - Smooth animations and transitions
   - Hover effects on buttons and cards
   - Floating cards animation on hero section
   - Scroll animations using Intersection Observer

3. Interactive Elements
   - Mobile navigation toggle
   - Smooth scrolling for anchor links
   - Back-to-top button (auto-appears on scroll)
   - Code block click-to-copy functionality
   - Parallax effect on hero section

4. SEO Optimized
   - Semantic HTML structure
   - Meta descriptions on all pages
   - Natural keyword integration
   - Proper heading hierarchy

5. Performance
   - Lightweight code
   - Fast loading times
   - Optimized CSS and JavaScript
   - Minimal external dependencies


BROWSER COMPATIBILITY
--------------------------------------------------------------------------------

The website is compatible with:

✓ Chrome (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Edge (latest)
✓ Opera (latest)
✓ Mobile browsers (iOS Safari, Chrome Mobile)

Minimum supported versions:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+


TROUBLESHOOTING
--------------------------------------------------------------------------------

1. Navigation menu not working on mobile:
   - Make sure script.js is properly linked in HTML
   - Check browser console for JavaScript errors
   - Clear browser cache and reload

2. Styles not applying:
   - Verify style.css is in the same directory as HTML files
   - Check for typos in the <link> tag
   - Clear browser cache

3. Links not working:
   - Check that all file names match exactly (case-sensitive)
   - Verify all files are in the same directory
   - Ensure there are no spaces in file names

4. Images not showing (if you add them):
   - Verify image paths are correct
   - Check image file formats (use .jpg, .png, .webp)
   - Ensure images are in the correct directory

5. Google Form not opening:
   - Verify the form URL is correct
   - Check that target="_blank" is in the anchor tag
   - Ensure form sharing settings allow public access


PERFORMANCE TIPS
--------------------------------------------------------------------------------

1. Compress images before adding them:
   - Use tools like TinyPNG or ImageOptim
   - Recommended formats: WebP, JPEG, PNG
   - Keep file sizes under 200KB when possible

2. Minify CSS and JavaScript for production:
   - Use tools like CSSMinifier or UglifyJS
   - Or use build tools like webpack

3. Enable compression on your web server:
   - Enable GZIP compression
   - Use CDN for static assets if needed

4. Regular maintenance:
   - Keep external dependencies updated
   - Test on different devices regularly
   - Monitor page load speed with tools like PageSpeed Insights


ADDITIONAL CUSTOMIZATION
--------------------------------------------------------------------------------

1. Change Logo Icon:
   - Find: <span class="logo-icon">⚡</span>
   - Replace ⚡ with any emoji or upload an image logo

2. Modify Footer:
   - Edit footer.html section in each file
   - Update copyright year if needed
   - Add social media links as needed

3. Add Analytics:
   - Insert Google Analytics or other tracking code
   - Place before closing </head> tag

4. Add Custom CSS:
   - Add your custom styles at the end of style.css
   - Use /* Custom Styles */ comment to mark your additions

5. Modify Animations:
   - Find animation keyframes in style.css
   - Adjust timing, delays, and effects as desired


CONTACT & SUPPORT
--------------------------------------------------------------------------------

For questions or issues with this website template:

1. Check this README file first
2. Review the code comments in HTML, CSS, and JS files
3. Test in different browsers to isolate issues
4. Use browser developer tools (F12) to debug


CREDITS
--------------------------------------------------------------------------------

Design & Development: Custom Website
Inspiration: fluentbit.net
Fonts: Google Fonts (Poppins)
Icons: SVG icons (inline)
Color Palette: #3D6FF4, #FFFFFF, #C4D6EE, #000000


VERSION HISTORY
--------------------------------------------------------------------------------

Version 1.0 (2024)
- Initial release
- All pages implemented
- Responsive design completed
- Interactive features added


LICENSE
--------------------------------------------------------------------------------

This website template is provided as-is for your project. You are free to:
- Modify the code as needed
- Use it for personal or commercial projects
- Distribute modified versions

Please keep the design professional and credit sources when appropriate.


================================================================================
                        THANK YOU FOR USING THIS TEMPLATE!
         For best results, test thoroughly on multiple devices and browsers
================================================================================
