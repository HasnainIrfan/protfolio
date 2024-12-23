// Navigation Bar SECTION
import Resume from "./Hasnain_CV.pdf";

const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Hasnain",
  middleName: "",
  lastName: "Irfan",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/HasnainIrfan",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/hasnainirfan112",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hasnain_irfan_x/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hasnain-irfan-4488a723a/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/ShahirZain6/",
    // },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/hasnian.jpg"),
  imageSize: 375,
  message:
    "Hi, I'm Hasnain, a Senior Software Enginner. I love building dynamic and interactive web apps that meet the client's requirements and provide an exceptional user experience. I'm skilled in HTML , Css , Scss , JavaScript , Typescript , React.js, Next.js , tailwindCss , Material UI ,Ant Design, Three.js ,  Node.js, Express.js, MongoDB and SQL . I enjoy working with modern frameworks and libraries, and I'm always up to date with the latest industry trends. I'm dedicated to crafting clean, efficient, and maintainable code. I thrive in team environments, and I'm always open to feedback. I have a keen eye for design and user experience. I understand the importance of creating visually appealing interfaces that are intuitive and user-friendly. I'm an avid learner, and I'm always eager to take on new challenges. Thanks for visiting my website! Feel free to explore my projects and reach out for collaboration or any inquiries. Let's bring your ideas to life!",
  resume: Resume,
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "HasnainIrfan", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
  reposData: [
    {
      name: "HR Management System",
      description:
        "Experienced Next.js Developer specializing in JavaScript and ReactJS, dedicated to creating high-quality, responsive, and user-friendly web applications. As a collaborative team player with strong problem-solving skills, I strive to stay updated with the latest technologies to deliver exceptional results.",
      myRole:
        "As a Next.js Developer, I designed and developed the front-end interface of an advanced HR Management System, implementing core functionalities and ensuring seamless data integration for an efficient and user-friendly platform.",
      repoLink: "",
      languages: ["Next", "Antd/Scss", "Node", "Express", "SQL"],
      link: "https://fastdigitaltechnology.com/",
    },
    {
      name: "Company Protfolio Site",
      description:
        "Developed a dynamic portfolio website using React.js to showcase company services, team members, and past projects.Designed to engage users through interactive features and a professional layout.",
      languages: ["React"],
      link: "https://algotech.pages.dev/",
    },
    {
      name: "Assignment Help UAE - Dubai",
      description:
        "Passionate, reliable, and affordable assignment helper. Customized services to meet unique client needs. Accessible to all students.",
      languages: ["Next", "Scss", "Node", "Express", "SQL"],
      link: "https://assignment-six-jade.vercel.app/",
    },

    {
      name: "Mentoring System ",
      description:
        " Created a React.js based web platform connecting students with mentors for personalized book call sessions. allows students to book virtual sessions, discuss progress, receive guidance and support from experienced professionals.",
      languages: ["HTML", "Css", "JavaScript"],
      link: "https://mentor-asy.pages.dev/",
    },

    {
      name: "Web Development Agency Platform",
      description:
        "Built a full-stack web agency platform that empowers clients to manage projects easily and delivers top-notch web solutions with cutting-edge tools andtechnologies.",
      languages: ["Next", "Node", "Express", "MongoDB"],
      link: "https://alpha-web-shop-client.vercel.app/",
    },
    {
      name: "Crypto Whale Tracker",
      description:
        "The Crypto Whale Tracker is a web application that allows users to keep track of the latest movements and activities of cryptocurrency whales. Cryptocurrency whales are individuals or entities holding large amounts of cryptocurrencies, capable of influencing the market with their trading decisions. This project aims to provide real-time information about these influential players in the crypto market.",
      languages: ["HTML", "Css", "JavaScript"],
      link: "www.whalesontheblock.com",
    },
    {
      name: "Biznus Dotcms",
      description:
        "Biznus Dotcms is a content management system (CMS) project aimed at developing a robust and flexible platform for managing and publishing web content. The project focuses on building a CMS specifically tailored for businesses, providing them with a powerful tool to create, organize, and deliver engaging digital content.",
      languages: ["Next", "Scss", "Node", "Express"],
      link: "https://biznus-dotcms.vercel.app/",
    },
    {
      name: "HR Management System",
      description:
        "Experienced frontend React Developer with strong skills in JavaScript and ReactJS. Passionate about high-quality,responsive, and user-friendly web applications. A collaborative team player with excellent problem-solving skills and a drive to stay up-todate with the latest technologies.",
      myRole:
        "As a React.js developer, I was responsible for building the front-end interface and implementing key HR functionalities, including employee onboarding, benefits management, performance tracking, and time and attendance tracking. I worked closely with the back-end team to ensure that data was being properly received and processed.",
      repoLink: "",
      languages: ["React", "MaterialUI/Scss", "Node", "Express", "SQL"],
      link: "http://lucidhr.co/",
    },
    {
      name: "Property Finder dubai",
      description:
        "The Property Finder project is an innovative web application designed to assist users in finding suitable properties for rent or purchase. It provides a user-friendly platform that enables individuals to search for properties based on specific criteria such as location, price range, property type, and amenities. The project aims to simplify the process of property search by aggregating and presenting relevant information in an organized manner.",
      myRole:
        "As a Front-End Developer and Team Lead in the Property Finder project, your responsibilities and contributions would involve both technical expertise and leadership skills.",
      languages: ["Next", "Css/Antd", "PHP", "Laravel"],
      link: "https://qrar.vercel.app/",
    },
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/hasnian.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/hasnian.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML/CSS/Scss", value: 95 },
    { name: "JavaScript", value: 75 },
    { name: "TypeScript", value: 75 },
    { name: "React.JS", value: 90 },
    { name: "Next.Js", value: 92 },
    { name: "Node", value: 70 },
    { name: "Express", value: 77 },
    { name: "MongoDB", value: 90 },
    { name: "SQL", value: 80 },
    { name: "React-Native", value: 88 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering  opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hasnainirfan110@gmail.com",
  github: "https://github.com/hasnainIrfan",
  name: "Hasnain Irfan",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Senior Software Engineer",
      companylogo:
        "https://media.licdn.com/dms/image/C4D0BAQEf_efLzehjuQ/company-logo_200_200/0/1676546680220?e=1696464000&v=beta&t=TTDRPqsYQXHrIUSgzI9e8fWKGjEMNBNJ_8GH2Z95FyI",
      date: "Oct 2023 – Present",
    },
    {
      role: "Junior Team Lead",
      companylogo:
        "https://media.licdn.com/dms/image/C4D0BAQEf_efLzehjuQ/company-logo_200_200/0/1676546680220?e=1696464000&v=beta&t=TTDRPqsYQXHrIUSgzI9e8fWKGjEMNBNJ_8GH2Z95FyI",
      date: "Feb 2023 – Oct 2023",
    },
    {
      role: "Front-End Developer",
      companylogo:
        "https://media.licdn.com/dms/image/D4D0BAQE0ggkKaLEVBg/company-logo_200_200/0/1664903950132?e=1696464000&v=beta&t=OPEKPHyOyawagoeINvClPVilPbVwpPAJx83-jJ9Db3Q",
      date: "Oct 2022 - 2023",
    },
  ],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
