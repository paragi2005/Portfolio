import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationItem = ({ degree, institution, period, location, delay }: { degree: string, institution: string, period: string, location: string, delay: number }) => (
    <motion.div
        className="relative pl-8 pb-12 last:pb-0 group"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        {/* Vertical Line Segment */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 group-last:bg-transparent">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-blue-500 bg-background-darker z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
        </div>

        <div className="glass-card p-6 rounded-2xl group-hover:bg-white/5 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{degree}</h3>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">
                    <Calendar size={14} />
                    {period}
                </span>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-300 font-medium">
                    <GraduationCap size={18} className="text-purple-500" />
                    {institution}
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={16} />
                    {location}
                </div>
            </div>
        </div>
    </motion.div>
);

const Education: React.FC = () => {
    return (
        <section id="education" className="py-24 bg-background-darker/30">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Academic <span className="text-purple-500">Journey</span></h2>
                        <p className="text-gray-400 text-lg font-light">Building foundations in Computer Science and Data Analytics.</p>
                    </motion.div>
                </div>

                <div className="relative">
                    <EducationItem
                        degree="B.Tech in Computer Science and Engineering (Data Science)"
                        institution="R.C. Patel Institute of Technology, Shirpur"
                        period="2023 – 2027"
                        location="Shirpur, Maharashtra"
                        delay={0.2}
                    />
                    {/* Add more if needed, but the user only mentioned one */}
                </div>
            </div>
        </section>
    );
};

export default Education;
