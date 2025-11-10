
import { Link } from "react-router";
import MyContainer from "../component/MyContainer";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#FFF3F1] border-t">
      <MyContainer>
        <div className="px-4 py-10 grid gap-8 md:grid-cols-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#EA4A30]">ToyTopia</h2>
            <p className="text-sm opacity-80">
              A playful marketplace to discover toys from local sellers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-ghost rounded-full"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-ghost rounded-full"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-ghost rounded-full"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-ghost rounded-full"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link className="link link-hover" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link link-hover" to="/profile">
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="link link-hover" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="link link-hover" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link className="link link-hover" to="/terms">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="link link-hover" to="/privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="link link-hover" to="/cookies">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@toytopia.local</li>
              <li>Phone: +880-000-000000</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
           
          </div>
        </div>

       
      </MyContainer>
    </footer>
  );
};

export default Footer;
