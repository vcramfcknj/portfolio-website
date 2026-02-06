'use client';

import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { SiGithub, SiLinkedin, SiFacebook, SiInstagram } from 'react-icons/si';
import ContactForm from '../ContactForm';

export default function Contact() {
  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'vincerubang28@gmail.com',
      link: 'mailto:vincerubang28@gmail.com'
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '09603468348',
      link: 'tel:09603468348'
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Ilocos Sur, Philippines',
      link: null
    }
  ];

  const socialLinks = [
    { icon: SiGithub, name: 'GitHub', url: 'https://github.com/vcramfcknj', username: '@vcramfcknj' },
    { icon: SiLinkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/rubang-vince-marc-justine-3484963a3/', username: 'Vince Marc Justine Rubang' },
    { icon: SiFacebook, name: 'Facebook', url: '#', username: 'Vince Marc Rubang' },
    { icon: SiInstagram, name: 'Instagram', url: 'https://www.instagram.com/v1nchnzo/', username: '@v1nchnzo' }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I am always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="border-2 border-black p-3">
                      <IconComponent className="text-2xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-600 mb-1">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-lg font-bold hover:opacity-70 transition-opacity">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-bold">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 border-2 border-black p-4 hover:bg-black hover:text-white transition-all duration-300 group">
                    <IconComponent className="text-3xl" />
                    <div>
                      <p className="font-bold text-lg">{social.name}</p>
                      <p className="text-sm text-gray-600 group-hover:text-gray-300">{social.username}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
<div className="mb-16">
          <div className="border-4 border-black dark:border-white p-8">
            <h3 className="text-3xl font-bold mb-6 text-center">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
        <div className="border-4 border-black p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to work together?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about technology, I would love to hear from you.
          </p>
          <a href="mailto:vincerubang28@gmail.com" className="inline-block bg-black text-white px-10 py-4 border-2 border-black hover:bg-white hover:text-black transition-all duration-300 text-lg font-bold">
            Send Me an Email
          </a>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Currently pursuing <span className="font-bold">BS Information Technology</span> at <br />
            <span className="font-bold">Ilocos Sur Polytechnic State College</span>
          </p>
        </div>
      </div>
    </section>
  );
}