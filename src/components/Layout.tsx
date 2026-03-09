import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const navItems = [
{ path: "/work", label: "Work" },
{ path: "/experiments", label: "Experiments" },
{ path: "/notebook", label: "Notebook" },
{ path: "/about", label: "About" }];


const Layout = ({ children }: {children: React.ReactNode;}) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
        <div className="container flex items-center justify-between h-20">
          {/* Logo with avatar */}
          <Link to="/" className="flex items-center gap-3 group">
            





            
            <span className="font-serif text-lg tracking-tight text-primary">
              Tessrah Designs
            </span>
            
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
            <Link
              key={item.path}
              to={item.path}
              className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary group">
              
                <span className={location.pathname.startsWith(item.path) ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}>
                  {item.label}
                </span>
                {location.pathname.startsWith(item.path) &&
              <motion.div
                layoutId="nav-indicator"
                className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }} />

              }
              </Link>
            )}
          </nav>

          {/* Mobile toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu">
            
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen &&
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border bg-background overflow-hidden">
            
              <div className="px-6 py-4 space-y-1">
                {[{ path: "/", label: "Home" }, ...navItems].map((item, i) =>
              <motion.div
                key={item.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}>
                
                    <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 text-base font-medium transition-colors ${
                  location.pathname === item.path ? "text-primary" : "text-muted-foreground"}`
                  }>
                  
                      {item.label}
                    </Link>
                  </motion.div>
              )}
              </div>
            </motion.nav>
          }
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
          
          {children}
        </motion.div>
      </main>

      <footer className="border-t border-border py-16">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <p className="text-xs text-muted-foreground text-center"><p className="text-xs text-muted-foreground text-center">Vibecoded in Lovable © Tessrah Designs {new Date().getFullYear()}</p></p>
          </div>
        </div>
      </footer>
    </div>);

};

export default Layout;