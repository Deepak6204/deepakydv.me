
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rich-black border-t border-slate-gray/20 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-slate-gray flex items-center justify-center gap-2">
            Built with <Heart className="text-red-500" size={16} /> by
            <span className="text-cyan-blue font-semibold">Deepak Yadav</span>
          </p>
          <p className="text-slate-gray text-sm mt-2">
            © 2025 Deepak Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
