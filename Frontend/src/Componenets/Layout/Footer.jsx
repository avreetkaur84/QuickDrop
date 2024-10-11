import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5 ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Information */}
        <div>
          <h4 className="font-bold mb-3">QuickDrop</h4>
          <ul>
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
            <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/press" className="hover:underline">Press</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul>
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/how-it-works" className="hover:underline">How It Works</a></li>
            <li><a href="/request-organ" className="hover:underline">Request an Organ</a></li>
            <li><a href="/partner-with-us" className="hover:underline">Partner with Us</a></li>
            <li><a href="/faq" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold mb-3">Resources</h4>
          <ul>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/support" className="hover:underline">Support</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media and Newsletter */}
        <div>
          <h4 className="font-bold mb-3">Connect</h4>
          <div className="flex space-x-4">
            {/* Replace # with your social media URLs */}
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>

          <h4 className="font-bold mt-5 mb-3">Newsletter</h4>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded w-full mb-3"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright and Legal */}
      <div className="text-center mt-8">
        <p>© 2024 QuickDrop. All rights reserved.</p>
        <p className="text-sm mt-2">Legal Disclaimer: Information provided on this site is for informational purposes only.</p>
      </div>
    </footer>
  );
}

export default Footer;