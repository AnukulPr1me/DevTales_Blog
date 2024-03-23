import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "flowbite-react";
import {
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsDribbble,
} from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-t-emerald-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link to="/" className="font-bold dark:text-white text-lg">
              <span>Anukul Chandra</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/AnukulPr1me/DevTales_Blog">
                  DevTales Blog
                </Footer.Link>
                <Footer.Link href="https://github.com/AnukulPr1me/Portfolio_2024">
                  Portfolio 2024
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.linkedin.com/in/anukul-chandra/">
                  Linked In
                </Footer.Link>
                <Footer.Link href="https://github.com/AnukulPr1me">
                  Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.linkedin.com/in/anukul-chandra/">
                  Privacy
                </Footer.Link>
                <Footer.Link href="https://github.com/AnukulPr1me">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href="#"
            by="Anukul Chandra"
            year={new Date().getFullYear()}
          />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsLinkedin} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsYoutube} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
