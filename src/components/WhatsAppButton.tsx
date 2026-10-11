import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../config';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${companyInfo.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with WEBYY on WhatsApp"
      className="glass-card lift fixed z-40 right-4 md:right-6 w-14 h-14 rounded-full flex items-center justify-center text-white hover:border-accent"
      style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
    >
      <MessageCircle size={24} />
    </a>
  );
}
