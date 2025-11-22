import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            I'm a passionate Full-Stack Developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create efficient,
            scalable, and user-friendly solutions. My journey in software development has equipped
            me with problem-solving skills and a keen eye for detail.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Frontend', desc: 'React, Next.js, Tailwind CSS' },
              { title: 'Backend', desc: 'Node.js, Express, MongoDB' },
              { title: 'DevOps', desc: 'Docker, AWS, CI/CD' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;