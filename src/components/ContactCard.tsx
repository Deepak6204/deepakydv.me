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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      {/* Email */}
      <button
        onClick={() => handleCopy("work.deepak04@gmail.com", "email")}
        className="group flex items-center justify-center gap-3 bg-gradient-to-br from-cyan-blue/10 to-electric-blue/5 backdrop-blur-sm p-4 rounded-xl border border-cyan-blue/30 hover:border-cyan-blue/50 hover:bg-cyan-blue/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-blue/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-blue/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <Mail className="text-cyan-blue relative z-10" size={20} />
        <span className="text-light-gray font-medium text-sm relative z-10">
          {copied === "email" ? (
            <span className="flex items-center gap-2">
              <Check size={16} className="text-green-400" /> Copied!
            </span>
          ) : (
            "work.deepak04@gmail.com"
          )}
        </span>
      </button>

      {/* Phone */}
      <button
        onClick={() => handleCopy("+91-9451132953", "phone")}
        className="group flex items-center justify-center gap-3 bg-gradient-to-br from-electric-blue/10 to-cyan-blue/5 backdrop-blur-sm p-4 rounded-xl border border-electric-blue/30 hover:border-electric-blue/50 hover:bg-electric-blue/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-blue/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <Phone className="text-electric-blue relative z-10" size={20} />
        <span className="text-light-gray font-medium text-sm relative z-10">
          {copied === "phone" ? (
            <span className="flex items-center gap-2">
              <Check size={16} className="text-green-400" /> Copied!
            </span>
          ) : (
            "+91-94511 32953"
          )}
        </span>
      </button>

      {/* Location */}
      <button
        onClick={() => window.open("https://maps.app.goo.gl/D3RCg97kLXrDbAsh9", "_blank")}
        className="group flex items-center justify-center gap-3 bg-gradient-to-br from-slate-gray/10 to-cyan-blue/5 backdrop-blur-sm p-4 rounded-xl border border-slate-gray/30 hover:border-cyan-blue/50 hover:bg-slate-gray/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-gray/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-gray/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <MapPin className="text-slate-gray group-hover:text-cyan-blue transition-colors relative z-10" size={20} />
        <span className="text-light-gray font-medium text-sm relative z-10">
          NIT Srinagar, J&K
        </span>
      </button>
    </div>
  );
}

export default ContactCard;
