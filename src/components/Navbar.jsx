import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-xs" : "bg-korps3 text-korps1 shadow"}`}>
      <nav className="container mx-auto flex justify-between items-center py-4">
			<div className="font-bold text-xl text-korps1">Oslo East Wind Band</div>
			<ul className="flex space-x-6">
				<li><a href="#hero" className="hover:text-korps2 text-korps1">Hjem</a></li>
				<li><a href="#about" className="hover:text-korps2 text-korps1">Om oss</a></li>
				<li><a href="#contact" className="hover:text-korps2 text-korps1">Kontakt</a></li>
			</ul>
		</nav>
    </header>
  );
}