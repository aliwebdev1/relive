import React from "react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="rounded-t-[50px] bg-accent text-neutral">
      <div className="grid md:grid-cols-4 gap-10 footer sm:footer-horizontal p-10 md:p-20">
        <nav>
          <Link to="/" className="">
            <img src={logo} alt="" />
          </Link>
          <p>
            Cutting-edge anti-aging solutions designed for a healthier, more
            vibrant you.{" "}
          </p>
          <div className="flex mt-4">
            <FontAwesomeIcon className="mx-2 text-2xl" icon={faFacebook} />
            <FontAwesomeIcon className="mx-2 text-2xl" icon={faLinkedinIn} />
            <FontAwesomeIcon className="mx-2 text-2xl" icon={faTwitch} />
            <FontAwesomeIcon className="mx-2 text-2xl" icon={faYoutube} />
          </div>
        </nav>
        <nav>
          <h6 className="text-xl font-semibold text-white">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-xl font-semibold text-white">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="text-xl font-semibold text-white">Newsletter</h6>
          <fieldset className="w-80">
            <label>
              Subscribe to our newsletter for the <br /> latest updates and
              offers.
            </label>
            <br />
            <div className="join mt-3">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />

              <button className="btn btn-primary join-item rounded-lg z-20 -ms-10">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>

      <div className="divider divider-primary"></div>
      <div className="text-center pb-6">
        <p> © 2025 Relive Anti-Aging Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
