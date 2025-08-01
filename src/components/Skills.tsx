




const Skills = () => {
   const skillsData = [
    {
      title: 'Programming Languages',
      description: 'Writing clean and effective code using popular programming languages.',
      icon: 'assets/icons/programming-language.gif',
      skills: [
        { name: 'JavaScript', icon: 'assets/icons/javaScript.svg', color: 'text-yellow-400' },
        { name: 'Python', icon: 'assets/icons/python.svg', color: 'text-blue-400' },
        { name: 'Java', icon: 'assets/icons/java.svg', color: 'text-red-600' },
        { name: 'C', icon: 'assets/icons/hugeicons--c-programming.svg', color: 'text-gray-500' },
        { name: 'Power BI', icon: 'assets/icons/logos--microsoft-power-bi.svg', color: 'text-yellow-600' },
      ],
    },
    {
      title: 'Library or Framework',
      description: 'Simplifying development by using tools like React, Django, and Tailwind.',
      icon: 'assets/icons/framework.gif',
      skills: [
        { name: 'React', icon: 'assets/icons/react.svg', color: 'text-cyan-400' },
        { name: 'Django', icon: 'assets/icons/skill-icons--django.svg', color: 'text-green-700' },
        { name: 'Tailwind CSS', icon: 'assets/icons/tailwind-css.svg', color: 'text-teal-400' },
        { name: 'Bootstrap', icon: 'assets/icons/bootstrap.svg', color: 'text-purple-500' },
      ],
    },
    {
      title: 'Database',
      description: 'Ensuring fast and accurate data retrieval with modern databases and ORM.',
      icon: 'assets/icons/database.gif',
      skills: [
        { name: 'MySQL', icon: 'assets/icons/mySQL.svg', color: 'text-blue-500' },
        { name: 'PostgreSQL', icon: 'assets/icons/postgresSQL.svg', color: 'text-blue-700' },
        { name: 'MongoDB', icon: 'assets/icons/mongoDB.svg', color: 'text-green-700' },
      ],
    },
    {
      title: 'Cloud Tech',
      description: 'Cloud technology enables easy access to data from anywhere.',
      icon: 'assets/icons/cloud.gif',
      skills: [
        { name: 'AWS', icon: 'assets/icons/aws.svg', color: 'text-orange-400' },
        { name: 'Render', icon: 'assets/icons/render.svg', color: 'text-indigo-400' },
      ],
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Mastering Data Structures for Better Code Performance.',
      icon: 'assets/icons/datastructure.gif',
      skills: [
        { name: 'Linked List', icon: 'assets/icons/linked-list.png', color: 'text-yellow-400' },
        { name: 'Stack', icon: 'assets/icons/stack.png', color: 'text-pink-400' },
        { name: 'Queue', icon: 'assets/icons/queue.png', color: 'text-purple-400' },
        { name: 'Tree', icon: 'assets/icons/tree.png', color: 'text-green-500' },
        { name: 'Graph', icon: 'assets/icons/graphs.png', color: 'text-blue-500' },
      ],
    },
    {
      title: 'Web Technologies',
      description: 'Build modern and responsive UIs.',
      icon: 'assets/icons/web-tech.gif',
      skills: [
        { name: 'HTML5', icon: 'assets/icons/html5.svg', color: 'text-orange-500' },
        { name: 'CSS3', icon: 'assets/icons/css3.svg', color: 'text-blue-500' },
      ],
    },
    {
      title: 'Testing',
      description: 'Ensure code reliability with proper testing tools.',
      icon: 'assets/icons/testing.gif',
      skills: [
        { name: 'Jest', icon: 'assets/icons/jest.svg', color: 'text-pink-500' },
      ],
    },
    {
      title: 'Tools',
      description: 'Development Tools That Boost Productivity.',
      icon: 'assets/icons/tools.gif',
      skills: [
        { name: 'Eclipse IDE', icon: 'assets/icons/eclipse-ide.svg', color: 'text-indigo-600' },
        { name: 'IntelliJ IDEA', icon: 'assets/icons/devicon--intellij.svg', color: 'text-pink-600' },
        { name: 'VS Code', icon: 'assets/icons/visual-studio-code.svg', color: 'text-blue-600' },
        { name: 'Figma', icon: 'assets/icons/devicon--figma.svg', color: 'text-purple-400' },
        { name: 'Linux', icon: 'assets/icons/skill-icons--linux-light.svg', color: 'text-yellow-500' },
        { name: 'Adobe Photoshop', icon: 'assets/icons/logos--adobe-photoshop.svg', color: 'text-pink-400' },
        { name: 'MS Office', icon: 'assets/icons/mdi--microsoft-office.svg', color: 'text-blue-700' },
      ],
    },
    {
      title: 'Others',
      description: 'Behind-the-scenes technologies.',
      icon: 'assets/icons/others.gif',
      skills: [
        { name: 'NPM', icon: 'assets/icons/npm.svg', color: 'text-red-500' },
        { name: 'Vite', icon: 'assets/icons/vite.svg', color: 'text-purple-500' },
        { name: 'JSON', icon: 'assets/icons/material-icon-theme--json.svg', color: 'text-yellow-500' },
        { name: 'XML', icon: 'assets/icons/xml.svg', color: 'text-blue-300' },
      ],
    },
  ];

 return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              My Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I've developed expertise in various technologies and methodologies to build modern, scalable web applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {/* Category Header */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-4">
                    <img
                      src={category.icon}
                      alt={category.title}
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="relative group">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white cursor-pointer">
                      {category.title}
                    </h3>
                    <span
                      className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10"
                    >
                      {category.title}
                    </span>
                  </div>
                </div>

                {/* Category Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {category.description}
                </p>

                {/* Skills List */}
                <div className="flex flex-wrap gap-4 hover:scale-105 transition-transform duration-300">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="relative flex items-center space-x-2 bg-gray-100 dark:bg-gray-700/50 p-3 rounded-lg transition-transform duration-300 hover:scale-110 hover:rotate-6 group"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-6 h-6 ${skill.color}`}
                      />
                      <span
                        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10"
                      >
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Skills;