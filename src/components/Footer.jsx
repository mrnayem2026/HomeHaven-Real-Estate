import Image from "next/image";
import logoHomeHaven from "../assest/icons/logoHomeHaven.png";

const Footer = () => {
  return (
    <div>
     <div className="relative ">
         {/* Footer Start  */}
      <footer className="absolute bottom-[-425px] text-white footer p-10  ">
        <aside>
         <Image src={logoHomeHaven}></Image>
          <p>
          A contemporary theme we designed specifically for real <br />
           estate and property showcase websites, equipped with <br />
            every option, element and feature your site may need.
          </p>
        </aside>

       <nav className="pt-16">
          <header className="text-2xl font-medium">Contact us</header>
          <a className="link link-hover text-sm font-normal text-gray-300">Staten Island, NY 10314, USA</a>
          <a className="link link-hover text-sm font-normal text-gray-300">+111 222 369 45</a>
          <a className="link link-hover text-sm font-normal text-gray-300">+123 456 789 11</a>
          <a className="link link-hover text-sm font-normal text-gray-300">homehaven@example.com</a>
        </nav>
        <nav className="pt-16">
          <header className=" text-2xl font-medium">Categories</header>
          <a className="link link-hover text-sm font-normal text-gray-300">Recent property</a>
          <a className="link link-hover text-sm font-normal text-gray-300">To Sell</a>
          <a className="link link-hover text-sm font-normal text-gray-300">To Buy</a>
          <a className="link link-hover text-sm font-normal text-gray-300">To Rent</a>
        </nav>
        <nav  className="pt-16">
          <header className=" text-2xl font-medium">Links</header>
          <a className="link link-hover text-sm font-normal text-gray-300">Latest News</a>
          <a className="link link-hover text-sm font-normal text-gray-300">About Us</a>
          <a className="link link-hover text-sm font-normal text-gray-300">FAQ Page</a>
          <a className="link link-hover text-sm font-normal text-gray-300">Contact Us</a>
        </nav>
      </footer>
      {/* Footer End */}
      <svg className="absolute top-0  -z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,32L48,48C96,64,192,96,288,112C384,128,480,128,576,106.7C672,85,768,43,864,32C960,21,1056,43,1152,74.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
     </div>
    </div>
  );
};

export default Footer;
