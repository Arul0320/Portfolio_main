import { GraduationCap, Briefcase, Award, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science and Engineering',
      institution: 'K.S.R. College of Engineering',
      location: 'Tiruchengode',
      period: '2019 - 2023',
      gpa: '8.2/10',
      
    },
    {
      degree: 'HSC',
      institution: 'Bharathi Matric Higher Secondary School',
      location: 'Attur',
      period: '2018-2019',
      gpa : '72%',
    },
    {
      degree: 'SSLC',
      institution: 'Holy Mother Matriculation School',
      location: 'Attur',
      period: '2016-2017',
      gpa : '95%' ,
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Virtusa',
      location: 'Remote',
      period: '11/2023 - 04/2024',
      responsibilities: [
        'Gained hands-on experience in developing web applications using C# and .NET technologies',
        'Learned the complete web development cycle—from designing user interfaces to backend logic',
        'Worked on a real-time project named "URL Validator", which checks the validity of user entered URLs.'
      ]
    },
    
  ];

  const certifications = [
    {
      name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      date: '2023',
      credentialId: 'A818B17E6034F6A9',
      status: 'Active'
    },
    {
      name: 'Python 101 for Data Science',
      issuer: 'IBM',
      date: '2025',
      credentialId: '1f035edc3f1d4262809906345669ddd9',
      status: 'Active'
    },
    {
      name: 'Python Django',
      issuer: 'Udemy (Instructor: Rathan Kumar)',
      date: '2025',
      credentialId: '558df4a94a0d33c2',
      status: 'Active'
    },
    
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My educational background, professional experience, and certifications
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mr-4">
                <Briefcase className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white transform hover:scale-105 transition-transform duration-300">Experience</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 transform hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transform hover:scale-105 transition-transform duration-300">{exp.title}</h4>
                  <p className="text-green-600 dark:text-green-400 font-semibold mb-2">{exp.company}</p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <MapPin size={16} className="mr-2" />
                    <span className="mr-4">{exp.location}</span>
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <p key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="text-green-600 dark:text-green-400 mr-2 mt-1">•</span>
                        {resp}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mr-4">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white transform hover:scale-105 transition-transform duration-300">Education</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 transform hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transform hover:scale-105 transition-transform duration-300">{edu.degree}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{edu.institution}</p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <MapPin size={16} className="mr-2" />
                    <span className="mr-4">{edu.location}</span>
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.gpa && (
                    <p className="text-gray-700 dark:text-gray-300 mb-2">GPA/Percentage: <span className="font-semibold">{edu.gpa}</span></p>
                  )}
                  
                </div>
              ))}
            </div>
          </div>

          

          {/* Certifications Section */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mr-4">
                <Award className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white transform hover:scale-105 transition-transform duration-300">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 transform hover:scale-105 transition-transform">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-800 dark:text-white flex-1 transform hover:scale-105 transition-transform duration-300">{cert.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">{cert.issuer}</p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Credential ID: <span className="font-mono">{cert.credentialId}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;