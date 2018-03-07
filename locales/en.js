const myAge = () => {
  const birthday = new Date(1991, 1, 26);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

module.exports = {
  links: {
    home: 'Home',
    services: 'Services',
    work: 'Work',
    about: 'About',
    contact: 'Contact'
  },
  home: {
    title: 'Home',
    introduction: `Interaction designer and front-end developer, dreams in HTML, CSS and Javascript, lives in Ghent, Belgium. Helps other people build digital products.`
  },
  services: {
    title: 'Services',
    introduction: `As a freelancer with both graphical and technical skills, I can work on a project from the early stages (wireframes, mockups, prototypes) to the actual implementation (writing production ready code). By working with companies of different sizes I learned to map out the most cost and time efficient design process for every project.`,
    web: {
      title: 'Web App Design',
      description: `Good design contributes a lot to the global quality of a web app. Whether it's designing a new product or refreshing the design of an existing application, I'm happy to help making your project beautiful and easy to use.`
    },
    mobile: {
      title: 'Mobile Design',
      description: `The small and often rapid interactions on mobile devices bring some very specific design challenges. I can provide you with a custom design and will deliver ready to use assets tailored for your tech stack (whether your app is iOS, Android, React Native or based on web technology).`
    },
    prototyping: {
      title: 'Prototyping',
      description: `The details of design are often hard to express through static images. That's why your project can benefit from interactive prototypes. They can be helpful for both user testing and design implementation.`
    },
    frontend: {
      title: 'Front-end Development',
      description: `Browser technology is evolving rapidly. It offers a lot of possibilities but also demands for a specialised approach. I translate my designs to production ready HTML, CSS and Javascript. The result is a responsive, modern and scalable design system that is compatible with all modern browsers.`
    },
    animation: {
      title: 'Animation',
      description: `Well-timed and functional animations can not only cheer up your applications, they also improve its ease of use and perceived speed. Together with you I explore how your brand new or existing product can benefit from animation.`
    },
    consultancy: {
      title: 'Consultancy',
      description: `I'm happy to provide my expertise to your team. An audit of your design architecture or a workshop on modern web technology are just a few of the options. Feel free to contact me for more information.`
    }
  },
  work: {
    title: 'Work',
    introduction: `Some of the companies I worked with are...`
  },
  about: {
    title: 'About',
    introduction: `This is me, Simon Wuyts, ${myAge()} years old, living in and in love with Ghent.`,
    description: `<p>After getting my master's degree in Communication Sciences I decided to become a full-time digital designer. Late 2013, I began working as an Interaction Designer at Yesplan, a Ghent-based software startup. In 2016 I worked as a freelance digital designer for Mediahuis, one of Belgium's biggest media companies. Later that year I joined Mono Company, a group of digital designers with a shared love of great design and technology. Since 2018 I'm again focused on various smaller freelance projects.</p><p>Apart from design and code, I love playing the piano, going for a run or watching a movie in one of Ghent's beautiful cinema's. I also love coffee, so we should definitely grab one together.</p>`
  },
  contact: {
    title: 'Contact',
    introduction: `Think we can make great things together?`,
    cta: `Let's get in touch!`
  }
};
