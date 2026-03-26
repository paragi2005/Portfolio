import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe } from 'lucide-react';

const ProjectCard = ({ title, description, tags, github, image, delay }: { title: string, description: string, tags: string[], github: string, image: string, delay: number }) => (
    <motion.div
        className="group relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay }}
    >
        <div className="aspect-video relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-rose-600/10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <a href={github} target="_blank" rel="noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 hover:scale-110 transition-all">
                    <Code size={24} />
                </a>
                <a href={github} target="_blank" rel="noreferrer" className="p-3 bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-110 transition-all">
                    <Globe size={24} />
                </a>
            </div>
        </div>

        <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md border border-blue-400/20">
                        {tag}
                    </span>
                ))}
            </div>

            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                {description}
            </p>

            <div className="pt-6 border-t border-white/5 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-500">
                <span className="flex items-center gap-1.5"><Code size={14} className="text-blue-500" /> Development</span>
                <a href={github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Source Code</a>
            </div>
        </div>
    </motion.div>
);

const Projects: React.FC = () => {
    const projectData = [
        {
            title: "Tourist Guide",
            description: "Built a responsive platform for destination exploration, package booking, and travel info using HTML, CSS, JS, Flask, and MongoDB.",
            tags: ["HTML", "CSS", "JavaScript", "Flask", "MongoDB"],
            github: "https://github.com/paragi2005/Tourist-Guide",
            image: "/Tourist.jpg",
            delay: 0.1
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-background-dark/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Selected <span className="text-blue-500">Creations</span></h2>
                        <div className="w-24 h-1 bg-blue-600 mb-8 rounded-full"></div>
                        <p className="text-gray-400 text-lg font-light leading-relaxed">
                            Practical applications of my technical skills, ranging from complex full-stack systems to sleek, high-conversion frontend experiences.
                        </p>
                    </motion.div>

                    <motion.a
                        href="https://github.com/paragi2005"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-blue-400 hover:text-white transition-colors"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        See more on GitHub
                        <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500 transition-all group-hover:rotate-12 group-hover:text-white">
                            <Code size={18} />
                        </div>
                    </motion.a>
                </div>

                <div className="max-w-2xl mx-auto">
                    {projectData.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

