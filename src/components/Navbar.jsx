import logoHomeHaven from "@/assest/icons/logoHomeHaven.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-black text-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
         <Link href='/'> <Image
            src={logoHomeHaven}
            alt="Picture of the author"
            width={140}
            height={80}
          ></Image></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>New homes</a>
            </li>
            <li>
            <a>Find agents</a>
            </li>
            <li>
              <a>Home loans</a>
            </li>
            <li>
              <a>Guinds</a>
            </li>
            <li>
              <a>New Project</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href='/signup' className="btn">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


//  TODO : Mobile Navbar not stadlish, and more design , when I create this remebor to create all things 