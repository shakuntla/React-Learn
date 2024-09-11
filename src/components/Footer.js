// Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h4 className="text-lg font-semibold">Follow Us</h4>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            className="text-white hover:text-blue-600"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            className="text-white hover:text-pink-500"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>

          {/* Twitter */}
          <a
            href="https://www.twitter.com"
            className="text-white hover:text-blue-400"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/0987654321"
            className="text-white hover:text-green-500"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/your-telegram-username"
            className="text-white hover:text-blue-500"
            aria-label="Telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>

          {/* Email */}
          <a
            href="mailto:shakuntlaprajapat99@gmai..com"
            className="text-white hover:text-red-500"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Food Zone. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
