import { Home, FolderOpen, Terminal, BookOpen, Mail, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Terminal, label: "Terminal", href: "#terminal" },
  { icon: BookOpen, label: "Articles", href: "#articles" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const NavDock = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="dock-blur rounded-2xl px-2 py-2 flex items-center gap-1">
        {navItems.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="group relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200 hover:bg-primary/10"
          >
            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="absolute -top-8 px-2 py-1 text-xs rounded-md bg-card text-foreground border border-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {label}
            </span>
          </a>
        ))}
        <div className="w-px h-6 bg-border mx-1" />
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200 hover:bg-primary/10"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          ) : (
            <Moon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          )}
        </button>
      </div>
    </motion.nav>
  );
};

export default NavDock;
