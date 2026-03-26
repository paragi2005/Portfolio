import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, User, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { cn } from '../utils/cn';

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
            isScrolled ? "py-4" : "py-8"
        )}>
            <div className="container mx-auto px-6">
                <div className={cn(
                    "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
                    isScrolled
                        ? "bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-500/5"
                        : "bg-transparent border border-transparent"
                )}>
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        className="text-2xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">P</div>
                        <span className="hidden sm:block">Paragi.</span>
                    </motion.a>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTAs */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a href="https://github.com/paragi2005" target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors">
                            <Code size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/paragi-patil-aab83b2bb" target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors">
                            <User size={20} />
                        </a>
                        <ThemeToggle />
                        <a href="#contact" className="ml-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[101] bg-background-darker/95 backdrop-blur-2xl lg:hidden flex flex-col items-center justify-center gap-8 p-6"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <button
                            className="absolute top-10 right-10 p-4 text-gray-400 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={40} />
                        </button>

                        <div className="flex flex-col items-center gap-10">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="text-4xl font-black text-white hover:text-blue-500 transition-colors uppercase tracking-tighter"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="flex gap-6 mt-12">
                            <a href="https://github.com/paragi2005" className="p-4 bg-white/5 rounded-full text-white"><Code size={24} /></a>
                            <a href="https://www.linkedin.com/in/paragi-patil-aab83b2bb" className="p-4 bg-white/5 rounded-full text-white"><User size={24} /></a>
                            <a href="mailto:paragivpatil123@gmail.com" className="p-4 bg-white/5 rounded-full text-white"><Mail size={24} /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
