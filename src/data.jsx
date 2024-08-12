import { FaCode, FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";

import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { FiExternalLink, FiFileText, FiUser } from "react-icons/fi";

import Work1 from './assets/project-1.jpeg'
import Work2 from './assets/project-2.jpg'
import Work3 from './assets/project-3.jpeg'
import Work4 from './assets/project-4.jpeg'
import Work5 from './assets/project-5.jpg'
import Work6 from './assets/project-6.jpg'


import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';



export const links = [
    {
        id: 1,
        name: "Home",
        icon: <FaHome className="nav__icon"/>,
        path: '/', 
    },
    {
        id: 2,
        name: "About",
        icon: <FaUser className="nav__icon"/>,
        path: '/about', 
    },
    {
        id: 3,
        name: "Portfolio",
        icon: <FaFolderOpen className="nav__icon"/>,
        path: '/portfolio', 
    },
    {
        id: 4,
        name: "Contact",
        icon: <FaEnvelopeOpen className="nav__icon"/>,
        path: '/contact', 
    },
];

export const personalInfo = [
    {
        id: 1,
        title: 'First Name : ',
        description: 'Warif',
    },
    {
        id: 2,
        title: 'Last Name : ',
        description: 'Ali',
    },
    {
        id: 3,
        title: 'Age : ',
        description: '24 Years',
    },
    {
        id: 4,
        title: 'Nationality : ',
        description: 'Indian',
    },
    {
        id: 5,
        title: 'Freelance : ',
        description: 'Available',
    },
    {
        id: 6,
        title: 'Address : ',
        description: 'New Delhi',
    },
    {
        id: 7,
        title: 'Phone : ',
        description: '+91 9310903056',
    },
    {
        id: 8,
        title: 'Email : ',
        description: 'mr.warif0786@gmail.com',
    },
    {
        id: 9,
        title: 'LinkedIn : ',
        description: 'www.warif0786',
    },
    {
        id: 10,
        title: 'Languages : ',
        description: 'English, Hindi',
    },
];


export const personalStatus = [
    {
        id: 1,
        no: '3+',
        title: 'Years of <br /> Experience',
    },
    {
        id: 2,
        no: '10+',
        title: 'Completed of <br /> Projects',
    },   {
        id: 3,
        no: '1+',
        title: 'Happy of <br /> Customers',
    },   {
        id: 4,
        no: '1+',
        title: 'Awards of <br /> Won',
    },
];


export const MySkills = [
    {
        id: 1,
        title: "Html",
        percentage: "70",
    },
    {
        id: 2,
        title: "CSS",
        percentage: "70",
    },
    {
        id: 3,
        title: "JavaScript",
        percentage: "60",
    },
    {
        id: 4,
        title: "Bootstrap",
        percentage: "80",
    },
    {
        id: 5,
        title: "React.Js",
        percentage: "65",
    },
    {
        id: 6,
        title: "Next.Js",
        percentage: "50",
    },
    {
        id: 7,
        title: "MongoDB",
        percentage: "65",
    },
    {
        id: 8,
        title: "Firebase",
        percentage: "65",
    },
    {
        id: 9,
        title: "Wordpress",
        percentage: "70",
    },
    {
        id: 10,
        title: "Php",
        percentage: "45",
    },
];


export const resume = [
    {
        id: 1,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2018 - 2020",
        title: "Data Entry <span> K-news </span>",
        description: 'Manages multiple data sources to decide on the best selection while identifying inconsistencies.',
    },
    {
        id: 2,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2020 - 2022",
        title: "Telecaller <span> DI M S Pvt Ltd </span>",
        description: 'The primary objective of the telecaller job role is to generate leads or sales, depending on the target of the company.',
    },
    {
        id: 3,
        category: "experience",
        icon: <FaBriefcase />,
        year: "2022 - 2023",
        title: "Relationshio Manager <span> FinViews </span>",
        description: 'They give clients personalized advice, build rapport and provide quick responses to their inquiries.',
    },
    {
        id: 4,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2027",
        title: "Bachelor of Computer Application <span> Indira Gandhi National Open University </span>",
        description: 'Lorem ipsum dolor sit amet',
    },
    {
        id: 5,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2018",
        title: "Intermediate <span> Govt. Boys. Sr. Sec School </span>",
        description: 'Lorem ipsum dolor sit amet',
    },
    {
        id: 6,
        category: "education",
        icon: <FaGraduationCap />,
        year: "2016",
        title: "Matriculation <span> Govt. Boys. Sr. Sec School </span>",
        description: 'Lorem ipsum dolor sit amet',
    },
];

export const MyPortfolio = [
    {
        id: 1,
        img: Work1,
        title: 'Photo Editing',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Photo',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },

    {
        id: 2,
        img: Work2,
        title: 'Photo Editing',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Photo',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },

    {
        id: 3,
        img: Work3,
        title: 'Photo Editing',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Photo',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },

    {
        id: 4 ,
        img: Work4,
        title: 'Photo Editing',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Photo',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },

    {
        id: 5,
        img: Work5,
        title: 'Photo Editing',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Photo',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },

    {
        id: 6,
        img: Work6,
        title: 'Photo Editing',
        details: [
            {
                icon: <FiFileText />,
                title: 'Project : ',
                desc: 'Photo',
            },
            {
                icon: <FiUser />,
                title: 'Client : ',
                desc: 'Dribble',
            },
            {
                icon: <FaCode />,
                title: 'Language : ',
                desc: 'Adobe Photoshop',
            },
            {
                icon: <FiExternalLink />,
                title: 'Preview : ',
                desc: 'www.dribble.com',
            },
        ],
    },
];


export const MyThemes = [
    {
        id: 1,
        img: Theme1,
        color: 'hsl(252, 35%, 51%)',
    },
    {
        id: 2,
        img: Theme2,
        color: 'hsl(4, 93%, 54%)',
    },
    {
        id: 3,
        img: Theme3,
        color: 'hsl(271, 76%, 53%)',
    },
    {
        id: 4,
        img: Theme4,
        color: 'hsl(225, 73%, 57%)',
    },
    {
        id: 5,
        img: Theme5,
        color: 'hsl(43, 74%, 49%)',
    },
    {
        id: 6,
        img: Theme6,
        color: 'hsl(339, 81%, 66%)',
    },
    {
        id: 7,
        img: Theme7,
        color: 'hsl(80, 61%, 50%)',
    },
    {
        id: 8,
        img: Theme8,
        color: 'hsl(19, 96%, 52%)',
    },
    {
        id: 9,
        img: Theme9,
        color: 'hsl(88, 65%, 43%)',
    },
    {
        id: 10,
        img: Theme10,
        color: 'hsl(42, 100%, 50%)',
    },
];