import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-oeg-100/70 backdrop-blur-xs" : "bg-oeg-100 text-oeb-950 shadow"}`}>
      <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-2 sm:py-4 px-2 sm:px-0">
        <div className="font-bold text-lg sm:text-xl text-oeb-950 mb-2 sm:mb-0">Oslo East Wind Band</div>
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 w-full sm:w-auto text-base sm:text-lg">
          <li><a href="#hero" className="hover:text-oer-800 text-oeb-950">Hjem</a></li>
          <li><a href="#about" className="hover:text-oer-800 text-oeb-950">Om oss</a></li>
          <li><a href="#contact" className="hover:text-oer-800 text-oeb-950">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
}