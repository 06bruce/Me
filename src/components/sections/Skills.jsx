// In src/components/sections/Skills.jsx
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaLaravel, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiSolidity, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'Frontend', icon: <FaReact className="w-6 h-6" />, level: 85, color: { from: '#3B82F6', to: '#06B6D4' } },
  { name: 'Backend', icon: <FaNodeJs className="w-6 h-6" />, level: 80, color: { from: '#10B981', to: '#34D399' } },
  { name: 'Laravel', icon: <FaLaravel className="w-6 h-6" />, level: 75, color: { from: '#EF4444', to: '#EC4899' } },
  { name: 'MongoDB', icon: <FaDatabase className="w-6 h-6" />, level: 70, color: { from: '#047857', to: '#84CC16' } },
  { name: 'Tailwind', icon: <SiTailwindcss className="w-6 h-6" />, level: 90, color: { from: '#06B6D4', to: '#3B82F6' } },
  { name: 'Solidity', icon: <SiSolidity className="w-6 h-6" />, level: 65, color: { from: '#4B5563', to: '#9CA3AF' } },
  { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" />, level: 75, color: { from: '#2563EB', to: '#60A5FA' } },
  { name: 'REST APIs', icon: <span className="text-xl font-bold">API</span>, level: 80, color: { from: '#8B5CF6', to: '#EC4899' } },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with on a daily basis.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  {/* Progress circle */}
                  <defs>
                    <linearGradient
                      id={`gradient-${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor={skill.color.from} />
                      <stop offset="100%" stopColor={skill.color.to} />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    strokeLinecap="round"
                    stroke={`url(#gradient-${index})`}
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * skill.level) / 100}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                
                {/* Skill icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="text-2xl p-3 rounded-full text-white"
                    style={{ 
                      background: `linear-gradient(135deg, ${skill.color.from}, ${skill.color.to})`
                    }}
                  >
                    {skill.icon}
                  </div>
                </div>
                
                {/* Skill percentage */}
                <div className="absolute -bottom-2 left-0 right-0 text-center">
                  <span className="text-sm font-bold text-gray-800">{skill.level}%</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Additional skills list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
  {[
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'JavaScript (ES6+)',
    'React',
    'Vite',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'RESTful APIs',
    'JWT Authentication',
    'bcrypt',
    'PHP',
    'Laravel',
    'MySQL',
    'Git',
    'GitHub',
    'Responsive Design',
    'Linux (Ubuntu)',
    'Nginx',
    'Docker Basics',
    'Web3 Development',
    'Solidity',
    'Smart Contracts',
    'MetaMask Integration',
    'Bootstrap',
    'Material-UI',
    'Redux',
    'Context API',
  ].map((tech, index) => (
    <motion.span 
      key={index}
      whileHover={{ y: -3 }}
      className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all"
    >
      {tech}
    </motion.span>
  ))}
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;