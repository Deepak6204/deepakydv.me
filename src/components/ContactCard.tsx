import { Mail, Phone, MapPin, Check } from "lucide-react";
import { useState } from "react";

function ContactCard() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 1500); // reset after 1.5s
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {/* Email */}
      <button
        onClick={() => handleCopy("work.deepak04@gmail.com", "email")}
        className="flex items-center justify-center gap-3 bg-rich-black/50 backdrop-blur-sm p-4 rounded-lg border border-slate-gray/20 hover:ring-1 hover:ring-cyan-blue transition"
      >
        <Mail className="text-cyan-blue" size={18} />
        <span className="text-light-gray">
          {copied === "email" ? "Copied!" : "work.deepak04@gmail.com"}
        </span>
      </button>

      {/* Phone */}
      <button
        onClick={() => handleCopy("+91-9451132953", "phone")}
        className="flex items-center justify-center gap-3 bg-rich-black/50 backdrop-blur-sm p-4 rounded-lg border border-slate-gray/20 hover:ring-1 hover:ring-cyan-blue transition"
      >
        <Phone className="text-cyan-blue" size={18} />
        <span className="text-light-gray">
          {copied === "phone" ? "Copied!" : "+91-94511 32953"}
        </span>
      </button>

      {/* Location */}
      <button
  onClick={() => window.open("https://maps.app.goo.gl/D3RCg97kLXrDbAsh9", "_blank")}
  className="flex items-center justify-center gap-3 bg-rich-black/50 backdrop-blur-sm p-4 rounded-lg border border-slate-gray/20 hover:ring-1 hover:ring-cyan-blue transition"
>
  <MapPin className="text-cyan-blue" size={18} />
  <span className="text-light-gray">
    NIT Srinagar
  </span>
</button>

    </div>
  );
}

export default ContactCard;
