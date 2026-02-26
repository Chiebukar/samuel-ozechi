import { Home, FolderOpen, Terminal, BookOpen, Mail, Sun, Moon, FlaskConical, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: FlaskConical, label: "Research", href: "#research" },
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
      transition={{ delay: 0.8, duration: 0.5, type: "spring" as const, stiffness: 200, damping: 20 }}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="dock-blur rounded-2xl px-1.5 py-1.5 flex items-center gap-0.5 shadow-2xl shadow-background/50">
        {navItems.map(({ icon: Icon, label, href }) => (
          <motion.a
            key={label}
            href={href}
            whileHover={{ scale: 1.2, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex items-center justify-center w-10 h-10 rounded-xl transition-colors hover:bg-primary/10"
          >
            <Icon className="w-[18px] h-[18px] text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="absolute -top-9 px-2.5 py-1 text-[11px] rounded-lg bg-card text-foreground border border-border shadow-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap scale-90 group-hover:scale-100">
              {label}
            </span>
          </motion.a>
        ))}
        <div className="w-px h-5 bg-border mx-0.5" />
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.2, y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors hover:bg-primary/10"
        >
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {theme === "dark" ? (
              <Sun className="w-[18px] h-[18px] text-muted-foreground" />
            ) : (
              <Moon className="w-[18px] h-[18px] text-muted-foreground" />
            )}
          </motion.div>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default NavDock;
