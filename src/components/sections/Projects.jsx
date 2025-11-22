import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Full Ecommerce Online Shop',
    description: 'A full-stack Web Application - Ecommerce - built with Laravel and Tailwind CSS.',
    tags: ['Laravel', 'Tailwind CSS', 'MySQL'],
    github: 'https://github.com/06bruce/Ecommerce',
    demo: 'https://smartdotcomelectronics.com'
  },
  {
    title: 'Maternal Health Hub',
    description: 'A React application for maternal health tracking and resources.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/06bruce/Maternal_Client',
    demo: 'https://maternalhub.vercel.app'
  },
  {
    title: 'Web3 Military Registration',
    description: 'Blockchain-based military registration system using Solidity and Web3.js.',
    tags: ['Solidity', 'Web3.js', 'React'],
    github: 'Private Project',
    demo: 'https://comingsoon.com'
  },
  {
    title: "7  Areas Of Influes",
    description: "A lightweight management system built to help the 7 Mountains Club organize members, track activities, and coordinate events more efficiently.",
    tags: ['React', 'Node', 'Docker', 'Express','MongoDB'],
    github: 'https://github.com/06bruce/7-Mountains',
    demo: 'https://7mountains.vercel.app'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was built to solve real-world problems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="flex items-center text-gray-700 hover:text-primary">
                      <FiGithub className="mr-1" /> Code
                    </a>
                    <a href={project.demo} className="flex items-center text-gray-700 hover:text-primary">
                      <FiExternalLink className="mr-1" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;