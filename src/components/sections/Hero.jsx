// In src/components/sections/Hero.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../../assets/IMG-20250301-WA0064-EDIT (1).jpg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left side - Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            variants={itemVariants}
          >

            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-primary">Nshuti Bruce</span>
            </motion.h1>
            
            <motion.div 
              className="text-2xl md:text-3xl font-medium text-gray-700 mb-6 h-12"
              variants={itemVariants}
            >
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  1500,
                  'Web3 Enthusiast',
                  1500,
                  'Tech Problem Solver',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Crafting exceptional digital experiences with modern web technologies. 
              Passionate about building innovative solutions at the intersection 
              of web development and blockchain.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="group relative px-8 py-3 bg-primary text-white rounded-lg font-medium overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work 
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                }}
                whileTap={{ scale: 0.98 }}
                href="./MyCv.docx"
                download
                className="relative px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium flex items-center justify-center gap-2 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-all duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  <FaFileDownload className="transition-transform group-hover:translate-y-[-2px]" /> 
                  <span>Download CV</span>
                </span>
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex justify-center lg:justify-start space-x-6"
              variants={itemVariants}
            >
              <motion.a
                whileHover={{ y: -3, color: '#3b82f6' }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/06bruce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, color: '#3b82f6' }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/nshuti-bruce-b74150266"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right side - Profile Image */}
          <motion.div 
            className="mt-16 lg:mt-0 lg:w-1/2 flex justify-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { 
                  type: 'spring',
                  stiffness: 100,
                  damping: 10
                }
              }
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.img
                src={profilePic}
                alt="Nshuti Bruce"
                className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [20, 0, 0, 20]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-1 h-2 bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;