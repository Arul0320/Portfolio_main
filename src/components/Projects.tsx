import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Readers Dot',
      description:
        'Collaborated with educational experts to create customized reading tasks aligned with grade-level standards, leading to a 15% improvement in student reading levels and a 20% increase in user ratings.',
      image: 'assets/images/readersdot.avif',
      technologies: ['HTML', 'CSS', 'Django', 'Python', 'GitHub'],
      githubUrl: 'https://github.com/Arul0320/ReadersDot',
    },
    {
      id: 2,
      title: 'Loan Approval Prediction Model',
      description:
        'Developed a model using regression analysis to predict optimal interest rates with 90% accuracy. The system helped reduce default rates by 15% and improved profitability through smarter lending decisions.',
      image: 'assets/images/loan.jpeg',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Flask', 'SQLAlchemy', 'MySQL', 'Git'],
      githubUrl: 'https://github.com/arul0320/ReadersDot',
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      description:
        'A responsive portfolio website showcasing projects and skills with animations and dark mode.',
      image: 'assets/images/portfolio.webp',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'GitHub'],
      // githubUrl: 'https://github.com/Arul0320/portfolio-Bolt',
    },
    {
      id: 4,
      title: 'Music Player App',
      description:
        'A responsive music player app with a sleek design, featuring playlists, search functionality, and offline playback.',
      image: 'assets/images/music.webp',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
      githubUrl: 'https://github.com/Arul0320/Music-Plsyer',
    },
    {
      id: 5,
      title: 'Student Management System',
      description:
        ' A web application for managing student records, attendance, and grades with user authentication.',
      image: 'assets/images/student.jpeg',
      technologies: ['Python', 'Django', 'SQL', 'React', 'GitHub'],
      githubUrl: 'https://github.com/Arul0320/StudentsBook',
    },
    {
      id: 6,
      title: 'To Do List App',
      description:
        ' A simple and intuitive to-do list app with features like task categorization, due dates, and reminders.',
      image: 'assets/images/todo.avif',
      technologies: ['HTML', 'CSS', 'Django', 'Python', 'GitHub'],
      githubUrl: 'https://github.com/Arul0320/ToDo_List',
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border dark:border-gray-700 transform hover:scale-105 transition-transform"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      
                      <a
                        href={project.githubUrl}
                        className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="View source code"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transform hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
