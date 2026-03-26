import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative aspect-square rounded-2xl overflow-hidden glass border border-white/10 p-2">
                                <motion.img
                                    src="/profile.jpg"
                                    alt="Paragi Patil"
                                    className="w-full h-full object-cover rounded-xl transition-all duration-700 transform hover:scale-105"
                                    initial={{ scale: 1.2 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-darker/60 to-transparent"></div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
                            <span>About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Driven by <span className="text-amber-500 italic text-shadow-sm shadow-amber-500/20">Curiosity</span>,<br />
                            Defined by <span className="text-emerald-500">Data</span>.
                        </h2>

                        <p className="text-gray-400 mb-6 text-lg leading-relaxed font-light">
                            I'm Paragi Patil, a B.Tech student in Computer Science and Engineering with a focus on <span className="text-white font-medium">Data Science</span>.
                            My passion lies at the intersection of complex data analysis and intuitive web experiences.
                        </p>



                        <div className="grid grid-cols-3 gap-8 py-6 border-y border-white/5">
                            <div>
                                <h4 className="text-white font-bold text-xl mb-1">B.Tech CSE</h4>
                                <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">Data Science Major</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-xl mb-1">2023 – 2027</h4>
                                <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">Pursuing</p>
                            </div>

                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

