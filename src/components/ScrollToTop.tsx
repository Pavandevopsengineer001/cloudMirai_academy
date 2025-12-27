import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-24 right-6 z-50
        w-12 h-12
        rounded-full
        bg-blue-600 text-white
        shadow-xl
        flex items-center justify-center
        hover:bg-blue-700 hover:scale-110
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-400
      "
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}
