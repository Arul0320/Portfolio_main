import { Github, Linkedin,  Code, Database, Palette } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">ARULMURUGAN S</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light">
                Python Developer
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm a passionate developer who loves creating beautiful and functional web applications.
                I specialize in modern web technologies and enjoy solving complex problems with clean, efficient code.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="#projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                {[
                  { icon: Github, href: 'https://github.com/Arul0320', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/arulmurugan-s-371227335/', label: 'LinkedIn' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-xl transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Visual Element */}
            <div className="relative">
              {/* Profile Image */}
              <div className="relative z-10">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                  <img
                    src="assets/images/DSC_8213_11zon200.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-blue-200 dark:bg-blue-900/50 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-indigo-200 dark:bg-indigo-900/50 rounded-full opacity-60 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-5 w-12 h-12 bg-purple-200 dark:bg-purple-900/50 rounded-full opacity-60 animate-pulse delay-500"></div>
              
              {/* Floating Skills Cards */}
              <div className="absolute -top-5 -left-5 bg-white dark:bg-gray-700 p-3 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <Code size={20} className="text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-white">React</span>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-700 p-3 rounded-lg shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <Database size={20} className="text-green-600 dark:text-green-400" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-white">Python</span>
                </div>
              </div>
              
              <div className="absolute top-1/3 -left-8 bg-white dark:bg-gray-700 p-3 rounded-lg shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <Palette size={20} className="text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-semibold text-gray-800 dark:text-white">Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;