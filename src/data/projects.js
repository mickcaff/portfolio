import {SiRubyonrails} from 'react-icons/si'

export const projects = [
  {
    id: 0,
    date: "Feb, 2022",
    techMain: "html & css",
    techStack: [
      <i class='fa-brands fa-html5'></i>,
      <i class='fa-brands fa-css3-alt'></i>,
    ],
    type: "Bootcamp Term 1 Assignment",
    title: "portfolio",
    description: "Something about the project",
    image: "image/link",
    siteLink: "url/link",
    codeLink: "github/link",
  },
  {
    id: 1,
    date: "May, 2022",
    techMain: "ruby on rails",
    techStack: [
        <i class='fa-brands fa-html5'></i>,
        <i class='fa-brands fa-css3-alt'></i>,
        <SiRubyonrails />,
      ],
    type: "Bootcamp Term 2 Assignment",
    title: "marketplace",
    description: "Something about the project",
    image: "image/link",
    siteLink: "url/link",
    codeLink: "github/link",
  },
]
