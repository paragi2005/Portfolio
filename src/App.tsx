import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Preloader from './components/ui/Preloader';
import CustomCursor from './components/ui/CustomCursor';

const App: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-background-darker text-white selection:bg-blue-500/30 selection:text-white overflow-x-hidden md:cursor-none">
            <Preloader />
            <CustomCursor />

            {/* Overlay Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.05)_0%,transparent_50%)]"></div>
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.05)_0%,transparent_50%)]"></div>
            </div>

            <Navbar />

            <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>

            <footer className="relative z-10 py-12 bg-background-darker border-t border-white/5 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                        <div className="text-3xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent italic">
                            Paragi.
                        </div>

                        <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-500">
                            <a href="#about" className="hover:text-white transition-colors">About</a>
                            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                            <a href="/ParagiResume.pdf" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Resume</a>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
                        <p className="text-sm text-gray-600 font-medium">
                            &copy; {new Date().getFullYear()} Paragi Patil. Crafted with React & Tailwind.
                        </p>

                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all group active:scale-90"
                            >
                                <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
