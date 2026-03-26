import React from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Code, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background-darker/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Let's <span className="text-blue-500">Connect</span></h2>
                        <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold mb-8 text-white">Contact Information</h3>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Email Me</p>
                                    <a href="mailto:paragivpatil123@gmail.com" className="text-xl font-medium text-white hover:text-blue-400 transition-colors">paragivpatil123@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                                    <User size={24} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500">LinkedIn</p>
                                    <a href="https://www.linkedin.com/in/paragi-patil-aab83b2bb" target="_blank" rel="noreferrer" className="text-xl font-medium text-white hover:text-purple-400 transition-colors">Paragi Patil</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-4 bg-gray-500/10 rounded-2xl text-gray-400 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    <Code size={24} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold uppercase tracking-widest text-gray-500">GitHub</p>
                                    <a href="https://github.com/paragi2005" target="_blank" rel="noreferrer" className="text-xl font-medium text-white hover:text-gray-400 transition-colors">@paragi2005</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 p-8 glass rounded-3xl border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                            <p className="text-gray-400 text-lg italic relative z-10 font-light leading-relaxed">
                                "Innovating at the intersection of data and design. Let's build something remarkable together."
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 lg:p-12 glass rounded-[2.5rem] border border-white/10 relative shadow-2xl shadow-blue-500/5"
                    >
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-4">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-4">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-4">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 outline-none focus:border-blue-500 focus:bg-white/10 transition-all text-white resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-bold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-3 group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
