import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
{ path: "/", label: "Home" },
{ path: "/work", label: "Work" },
{ path: "/experiments", label: "Experiments" },
{ path: "/writing", label: "Writing" },
{ path: "/about", label: "About" }];


const Layout = ({ children }: {children: React.ReactNode;}) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="font-serif text-xl tracking-tight text-primary font-normal">
            ​Tessrah Designs  
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === item.path ?
              "text-primary" :
              "text-muted-foreground"}`
              }>
              
                {item.label}
              </Link>
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu">
            
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen &&
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          
            {navItems.map((item) =>
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setMobileOpen(false)}
            className={`block text-sm font-medium ${
            location.pathname === item.path ?
            "text-primary" :
            "text-muted-foreground"}`
            }>
            
                {item.label}
              </Link>
          )}
          </motion.nav>
        }
      </header>

      <main className="flex-1">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}>
          
          {children}
        </motion.div>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p className="font-serif text-base italic">Made with care by Tessrah Designs on Lovable ❤️</p>
          <p className="mt-2">© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>);

};

export default Layout;