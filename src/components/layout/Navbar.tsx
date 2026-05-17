import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import logo from '../../assets/logo.png';

interface NavItem {
  name: string;
  href?: string;
  children?: NavItem[];
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { name: 'Beranda', href: '/' },
    {
      name: 'Profil',
      children: [
        { name: 'Sambutan Ketua Program Studi', href: '/profil/sambutan' },
        { name: 'Sejarah', href: '/profil/sejarah' },
        { name: 'Visi & Misi', href: '/profil/visi-misi' },
        { name: 'Staf Pengajar', href: '/faculty' },
        { name: 'Alumni', href: '/profil/alumni' },
      ]
    },
    {
      name: 'Akademik',
      children: [
        {
          name: 'Program Sarjana',
          children: [
            { name: 'S1 Pendidikan Biologi', href: '/programs/s1-pendidikan' },
            { name: 'S1 Biologi', href: '/programs/s1-biologi' },
            { name: 'S1 Pendidikan IPA', href: '/programs/s1-pendidikan-ipa' },
          ]
        },
        {
          name: 'Program Magister',
          children: [
            { name: 'S2 Pendidikan Biologi', href: '/programs/s2-pendidikan' },
          ]
        },
        { name: 'Pengaturan Akademik', href: '/akademik/pengaturan' },
      ]
    },
    {
      name: 'Penelitian & Pengabdian',
      children: [
        { name: 'Penelitian', href: '/penelitian' },
        { name: 'Pengabdian', href: '/pengabdian' },
        { name: 'Publikasi', href: '/publikasi' },
        { name: 'Konferensi', href: '/konferensi' },
      ]
    },
    {
      name: 'Laboratorium',
      children: [
        { name: 'Lab a', href: '/lab/a' },
        { name: 'Lab b', href: '/lab/b' },
        { name: 'Sarana dan Fasilitas', href: '/lab/sarana' },
      ]
    },
    {
      name: 'Kemahasiswaan',
      children: [
        { name: 'Kegiatan Kemahasiswaan', href: '/kemahasiswaan/kegiatan' },
        { name: 'Bio Kominfo', href: '/kemahasiswaan/biokominfo' },
      ]
    },
    {
      name: 'Informasi Publik',
      children: [
        { name: 'Berita', href: '/informasi/berita' },
        { name: 'Unduh', href: '/informasi/unduh' },
      ]
    },
  ];

  const isHomePage = location.pathname === '/';

  const toggleMobileSubmenu = (name: string) => {
    setOpenMobileSubmenus(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const DesktopDropdown = ({ item, isSubmenu = false, isScrolled, isHomePage }: { item: NavItem, isSubmenu?: boolean, isScrolled: boolean, isHomePage: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 100);
    };

    return (
      <div 
        className="relative group/nav"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          className={cn(
            "flex items-center gap-1 text-sm font-medium tracking-wide transition-colors py-2",
            isScrolled || isHomePage ? "text-white/80 hover:text-white" : "text-primary/70 hover:text-primary",
            isSubmenu && "w-full justify-between px-4 py-3 hover:bg-light text-primary/80!"
          )}
        >
          {item.name}
          {item.children && (isSubmenu ? <ChevronRight className="w-4 h-4 opacity-50" /> : <ChevronDown className="w-4 h-4 opacity-50" />)}
        </button>

        <AnimatePresence>
          {isOpen && item.children && (
            <motion.div
              initial={{ opacity: 0, y: isSubmenu ? 0 : 10, x: isSubmenu ? 10 : 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: isSubmenu ? 0 : 5, x: isSubmenu ? 5 : 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "absolute bg-white rounded-xl shadow-2xl py-2 min-w-[220px] border border-primary/5 z-[60]",
                isSubmenu ? "left-full top-0 ml-1" : "top-full left-0 mt-2"
              )}
            >
              {item.children.map((child) => (
                <div key={child.name}>
                  {child.children ? (
                    <DesktopDropdown item={child} isSubmenu isScrolled={isScrolled} isHomePage={isHomePage} />
                  ) : (
                    <Link
                      to={child.href!}
                      className="block px-4 py-3 text-sm text-primary/80 hover:text-primary hover:bg-light transition-colors"
                    >
                      {child.name}
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? 'py-4 backdrop-blur-md bg-primary/95 shadow-xl border-b border-white/5' 
          : 'py-8 bg-transparent'
      )}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="w-14 h-14 flex items-center justify-center"
            >
              <img 
                src={logo} 
                alt="UNIMED Logo" 
                className="w-full h-full object-contain drop-shadow-sm"
                onError={(e) => {
                  e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Unimed.png";
                }}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className={cn(
                "text-2xl font-display font-bold tracking-tight transition-colors",
                isScrolled || isHomePage ? "text-white" : "text-primary"
              )}>
                Bio <span className="text-accent">·</span> UNIMED
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-mono -mt-1",
                isScrolled || isHomePage ? "text-white/50" : "text-primary/40"
              )}>Jurusan Biologi</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <DesktopDropdown item={link} isScrolled={isScrolled} isHomePage={isHomePage} />
                ) : (
                  <Link 
                    to={link.href!}
                    className={cn(
                      "relative text-sm font-medium tracking-wide transition-colors group py-2",
                      location.pathname === link.href 
                        ? "text-accent" 
                        : (isScrolled || isHomePage ? "text-white/80 hover:text-white" : "text-primary/70 hover:text-primary")
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                      location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                )}
              </div>
            ))}
            <Link 
              to="/contact"
              className={cn(
                "px-5 py-2 font-bold rounded-full text-xs shadow-lg transition-all hover:scale-105 active:scale-95 ml-4",
                isScrolled || isHomePage 
                  ? "bg-accent text-primary shadow-accent/20" 
                  : "bg-primary text-white shadow-primary/20"
              )}
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={cn(
              "lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors",
              isScrolled || isHomePage ? "text-white" : "text-primary"
            )}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 35, stiffness: 300 }}
            className="fixed inset-0 z-[101] bg-primary flex flex-col p-8 overflow-y-auto w-screen h-screen"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img 
                    src={logo} 
                    alt="Logo" 
                    className="w-full h-full object-contain" 
                    onError={(e) => { e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Unimed.png"; }}
                  />
                </div>
                <span className="text-xl font-display font-bold text-white tracking-tight">Bio · UNIMED</span>
              </div>
              <button 
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors " 
                onClick={() => setMobileMenuOpen(false)} 
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  {link.children ? (
                    <>
                      <button 
                        onClick={() => toggleMobileSubmenu(link.name)}
                        className="flex items-center justify-between text-2xl font-display font-bold text-white py-2"
                      >
                        {link.name}
                        <ChevronDown className={cn("w-6 h-6 transition-transform", openMobileSubmenus.includes(link.name) && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {openMobileSubmenus.includes(link.name) && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-3 pl-4 pt-2 overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <div key={child.name}>
                                {child.children ? (
                                  <>
                                    <button 
                                      onClick={() => toggleMobileSubmenu(child.name)}
                                      className="flex items-center justify-between text-lg font-medium text-white/70 py-1 w-full"
                                    >
                                      {child.name}
                                      <ChevronDown className={cn("w-4 h-4 transition-transform", openMobileSubmenus.includes(child.name) && "rotate-180")} />
                                    </button>
                                    <AnimatePresence>
                                      {openMobileSubmenus.includes(child.name) && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="flex flex-col gap-2 pl-4 pt-1 overflow-hidden"
                                        >
                                          {child.children.map((grandChild) => (
                                            <Link
                                              key={grandChild.name}
                                              to={grandChild.href!}
                                              className="text-white/50 py-1"
                                              onClick={() => setMobileMenuOpen(false)}
                                            >
                                              {grandChild.name}
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </>
                                ) : (
                                  <Link 
                                    to={child.href!}
                                    className="text-lg font-medium text-white/70 py-1 inline-block"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {child.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link 
                      to={link.href!}
                      className={cn(
                        "text-2xl font-display font-bold py-2",
                        location.pathname === link.href ? "text-accent" : "text-white"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <Link 
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 py-4 bg-accent text-primary font-bold rounded-xl text-center text-lg block shadow-2xl shadow-accent/20"
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
