import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, delay, colorClass, iconClass, hoverClass }: { title: string, icon: any, skills: string[], delay: number, colorClass: string, iconClass: string, hoverClass: string }) => (
    <motion.div
        className={`glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-${colorClass}/50`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
    >
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon size={80} />
        </div>

        <div className="flex items-center gap-4 mb-8">
            <div className={`p-4 ${iconClass} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <Icon size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white/90">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
                <span key={idx} className={`text-sm font-medium text-gray-400 hover:text-${colorClass} transition-colors bg-white/5 ${hoverClass} border border-white/5 px-3 py-1.5 rounded-lg cursor-default`}>
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills: React.FC = () => {
    const skillData = [
        {
            title: "Web Development",
            icon: Layout,
            skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Flask"],
            delay: 0.1,
            colorClass: "blue-400",
            iconClass: "bg-blue-500/20 text-blue-400 shadow-blue-500/5",
            hoverClass: "hover:bg-blue-500/10 hover:border-blue-500/20"
        },
        {
            title: "Programming",
            icon: Code,
            skills: ["Python", "Java", "C Language", "Data Structures"],
            delay: 0.2,
            colorClass: "rose-400",
            iconClass: "bg-rose-500/20 text-rose-400 shadow-rose-500/5",
            hoverClass: "hover:bg-rose-500/10 hover:border-rose-500/20"
        },
        {
            title: "Data Science",
            icon: Database,
            skills: ["Data Analysis", "Machine Learning", "SQL", "Pandas & NumPy"],
            delay: 0.3,
            colorClass: "emerald-400",
            iconClass: "bg-emerald-500/20 text-emerald-400 shadow-emerald-500/5",
            hoverClass: "hover:bg-emerald-500/10 hover:border-emerald-500/20"
        }
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-background-darker/50">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Technical <span className="text-blue-500">Skills</span></h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                            Combining analytical precision with creative development to build comprehensive digital solutions.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillData.map((data, idx) => (
                        <SkillCard key={idx} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

