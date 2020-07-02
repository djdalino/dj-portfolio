import SLroofing from "../Images/slroofing.jpg";
import Portfolio from "../Images/portfolio.png";
import PhoneProducts from "../Images/phone-products.jpg";
export const data = [
  {
    _id: 1,
    image: SLroofing,
    title: "SLroofing",
    content: ["MongoDB", "Express", "React", "Node"],
    github: "https://github.com/djdalino/slroofing",
    live: "http://slroofing.us/",
  },
  {
    _id: 2,
    image: Portfolio,
    title: "Portfolio Site",
    content: ["React", "Node", "Heroku"],
    github: "https://github.com/djdalino/dj-portfolio",
    live: "https://djdalino.herokuapp.com/",
  },
  {
    _id: 3,
    image: PhoneProducts,
    title: "Phone Products",
    content: ["Netlify", "React"],
    github: "https://github.com/djdalino/react-phone-outlet",
    live: "https://dj-react-phone-outlet.netlify.app/",
  },
];
