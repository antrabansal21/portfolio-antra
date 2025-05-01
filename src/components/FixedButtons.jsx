import React, { Component } from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './FixedButtons.css';

class FixedButtons extends Component {
  render() {
    return (
      <div className="fixed-buttons">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917078177758"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed-btn whatsapp-btn"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* Call Button */}
        <a
          href="tel:+917078177758"
          className="fixed-btn call-btn"
        >
          <FaPhoneAlt size={28} />
        </a>
      </div>
    );
  }
}

export default FixedButtons;
