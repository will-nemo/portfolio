import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Will Lambert | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Will Lambert',
  subtitle: "I'm a Fullstack Software Engineer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'Fullstack Software Engineer currently working at Allstate. Utilizing ReactJS, CSS/Sass, and Java on a Web application.',
  paragraphTwo: 'Passionate about Open Source Software, contributing to projects whenever I can and volunteering for the open source non-profit oneleif.',
  paragraphThree: 'Looking to collaborate? Feel free to reach out.',
  resume: 'https://www.linkedin.com/in/will-lambert-swe/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'oneleif-project.png',
    title: 'oneleif Website',
    info: 'Helped implement the initial oneleif website using ReactJS, HTML and Sass working on a team of developers and designers. oneleif is a non-profit interested in open source software.',
    info2: '',
    url: 'https://oneleif.com/',
    repo: 'https://github.com/oneleif/olWebsite-React', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'shouldiwearamask-project.png',
    title: 'Should I Wear A Mask?',
    info: 'Website written with Python and Django, deployed using Heroku. This single page site is an interactive map of the United States.',
    info2: 'By selecting a state the infection rate of the previous day is calculated and informs whether or not you should be wearing a mask.',
    url: 'https://www.shouldiwearamask.site/',
    repo: 'https://github.com/will-nemo/shouldiwearamask', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rtlcheatsheet-project.png',
    title: 'React Testing Library Cheatsheet',
    info: 'VSCode Extension written in JavaScript.',
    info2: 'An in-editor version of the React Testing Library Cheatsheet published in the visual studio marketplace.',
    url: 'https://marketplace.visualstudio.com/items?itemName=willnemo.rtlcheatsheet',
    repo: 'https://github.com/will-nemo/rtlcheatsheet', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'will.lambert96@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/will-lambert-swe/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/will-nemo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
