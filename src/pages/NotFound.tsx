import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const quotes = [
  "“Code never lies, comments sometimes do.” – Ron Jeffries",
  "“First, solve the problem. Then, write the code.” – John Johnson",
  "“It's not a bug – it's an undocumented feature.”",
  "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    console.error("404 Error: Path not found ->", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          navigate("/");
          clearInterval(timer);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-rich-black text-light-gray px-4">
      <div className="text-center space-y-4">
        <h1 className="text-7xl font-bold text-cyan-blue">404</h1>
        <p className="text-2xl">Oops! Page not found.</p>
        <p className="italic text-slate-400 transition-all duration-300">
          {quotes[quoteIndex]}
        </p>
        <a
          href="/"
          className="inline-block bg-cyan-blue text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Go to Home
        </a>
        <p className="text-sm text-slate-500">
          Redirecting automatically in <span className="font-semibold">{countdown}</span> seconds...
        </p>
      </div>
    </div>
  );
};

export default NotFound;
