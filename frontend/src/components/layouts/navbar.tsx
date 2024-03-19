import ThemeSwitcher from "@/components/theme/theme-switcher";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (location.pathname.startsWith("/auth/")) {
    return null;
  }

  return (
    <nav className={`sticky top-0 left-0 z-10  ${scrolling ? "bg-background" : "bg-transparent"
      }`}>
      <div id="nav-container" className="flex justify-between items-center m-auto max-w-7xl md:px-8 md:py-4 px-5 py-2.5">
        <div>
          <h1 className="text-primary font-unbounded font-semibold text-xl md:text-2xl tracking-wide">
            <Link to="/">Inkverse</Link>
          </h1>
        </div>
        <div className="flex justify-center gap-4 font-prompt">
          <div id="auth-buttons" className="hidden md:block">
            <Button onClick={() => navigate("/auth/login")} color="primary" variant="light" className="mr-2">Log In</Button>
            <Button onClick={() => navigate("/auth/signup")} color="primary" className="text-white">Sign Up</Button>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
