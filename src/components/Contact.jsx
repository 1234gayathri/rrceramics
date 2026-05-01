import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ from_name: '', email: '', phone_number: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalConfig, setModalConfig] = useState({ show: false, title: '', message: '' });
  const [errors, setErrors] = useState({});

  const verifyEmailExists = async (email) => {
    try {
      const apiKey = import.meta.env.VITE_MAILBOXLAYER_API_KEY;
      // Mailboxlayer API endpoint (changed to https)
      const response = await fetch(`https://apilayer.net/api/check?access_key=${apiKey}&email=${email}&smtp=1&format=1`);
      const data = await response.json();
      
      if (data.success === false && data.error) {
        return { isValid: false, apiError: data.error.info };
      }

      // Mailboxlayer flags invalid emails via format_valid and smtp_check
      if (data.format_valid === false || data.smtp_check === false) {
        return { isValid: false };
      }
      
      return { isValid: true };
    } catch (error) {
      console.error("Email verification API failed:", error);
      return { isValid: false, apiError: "Network error reaching verification server." };
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'phone_number') {
      if (value.length === 1 && /^[0-9]$/.test(value)) {
        value = '+91' + value;
      } else {
        const hasPlus = value.startsWith('+');
        let digits = value.replace(/\D/g, '');
        digits = digits.slice(0, 12); // Limits to +91 and 10 digit number
        value = hasPlus ? '+' + digits : (digits ? '+' + digits : '');
      }
    }
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.from_name.trim() || !form.email.trim() || !form.phone_number.trim() || !form.message.trim()) {
      setModalConfig({ show: true, title: 'Missing Information', message: 'Please fill out all required fields.' });
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.email)) {
      setModalConfig({ show: true, title: 'Email Not Found', message: 'Email not found. Please enter the correct email ID.' });
      return;
    }

    // Validate phone number format (exactly 10 digits after country code)
    const phoneRegex = /^\+[1-9]\d{11}$/;
    if (!phoneRegex.test(form.phone_number)) {
      setModalConfig({ show: true, title: 'Invalid Phone Number', message: 'Enter a valid 10-digit phone number with country code like +919876543210' });
      return;
    }
    
    // Prevent obvious junk phone numbers (e.g. 2222222222)
    const digitsOnly = form.phone_number.replace(/\D/g, '');
    if (/^(\d)\1{6,}$/.test(digitsOnly)) {
      setModalConfig({ show: true, title: 'Invalid Phone Number', message: 'Please enter a real phone number, not a repeating sequence.' });
      return;
    }

    setLoading(true);

    try {
      const verification = await verifyEmailExists(form.email);
      
      // Only block if we get a definitive "Invalid" response from the API
      // If there's a configuration or network error, we proceed anyway to avoid losing the message
      if (verification.isValid === false && !verification.apiError) {
        setLoading(false);
        setModalConfig({ show: true, title: 'Email Not Found', message: 'Email not found. Please enter the correct email ID.' });
        return;
      }
    } catch (err) {
      console.warn("Verification skipped due to error:", err);
      // Proceeding without verification
    }

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const CUSTOMER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID; // To you
    const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID; // To customer
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Trigger both templates
    Promise.all([
      emailjs.sendForm(SERVICE_ID, CUSTOMER_TEMPLATE_ID, formRef.current, PUBLIC_KEY),
      emailjs.sendForm(SERVICE_ID, AUTO_REPLY_TEMPLATE_ID, formRef.current, PUBLIC_KEY)
    ])
      .then(() => {
        setSent(true);
        setForm({ from_name: '', email: '', phone_number: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      })
      .catch((error) => {
        setModalConfig({ show: true, title: 'Error', message: "Error: " + error.text });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="contact section" id="contact">
      <div className="section-header">
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-heading">Contact <span className="gold">Us</span></h2>
        <p className="section-sub">Let us help you find the perfect surface for your space</p>
      </div>

      <div className="contact__inner">
        <div className="contact__form-col">
          <form className="contact__form" ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="from_name">Full Name</label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                placeholder="Your Name"
                value={form.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                id="phone_number"
                name="phone_number"
                type="tel"
                placeholder="+91 00000 00000"
                value={form.phone_number}
                onChange={handleChange}
                maxLength="16"
                pattern="^\+[1-9]\d{1,14}$"
                title="Enter a valid international phone number like +919876543210"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-gold contact__submit" disabled={loading}>
              {loading ? 'Sending...' : (sent ? 'Message Sent!' : 'Send Message')}
            </button>
            {sent && <p className="contact__success">Thank you! Your message has been sent successfully.</p>}
          </form>
        </div>

        <div className="contact__info-col">
          <div className="contact__info-card">
            <h3 className="contact__info-title">Visit Our Shop</h3>
            <p className="contact__info-sub">Experience our premium collection in person</p>

            <div className="contact__info-list">
              {[
                { icon: MapPin, text: 'RR Ceramics Shop, Seethammadhara, Visakhapatnam, Andhra Pradesh , 530013' },
                { icon: Phone, text: '+91 8885766111 , +91 89772 27383' },
                { icon: Mail, text: 'info.rrceramics@gmail.com' },
                { icon: Clock, text: 'Mon – Sat: 9:00 AM – 7:00 PM' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="contact__info-item">
                  <span className="contact__info-icon"><Icon size={18} color="var(--accent-gold)" /></span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="contact__social">
              {['facebook', 'instagram', 'whatsapp'].map(s => (
                <a key={s} href="#contact" className="social-btn" aria-label={s}>
                  {s === 'facebook' && (
                    <svg width="18" height="18" fill="var(--accent-gold)" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                  )}
                  {s === 'instagram' && (
                    <svg width="18" height="18" fill="none" stroke="var(--accent-gold)" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  )}
                  {s === 'whatsapp' && (
                    <svg width="18" height="18" fill="var(--accent-gold)" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.407A9.945 9.945 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {modalConfig.show && createPortal(
        <div className="modal-overlay" onClick={() => setModalConfig({ ...modalConfig, show: false })}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>{modalConfig.title}</h3>
            <p>{modalConfig.message}</p>
            <button type="button" className="btn btn-gold contact__submit" onClick={() => setModalConfig({ ...modalConfig, show: false })}>Close</button>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
