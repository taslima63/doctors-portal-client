import React from 'react';
import footer1 from './../../assets/images/footer1..jpg';
const Footer = () => {
    return (
        <div style={{
            background: `url(${footer1})`,
            backgroundSize: 'cover'
        }} >
            <footer className=''>
                <div className='footer py-10 lg:py-16 md:pl-28 bg-base-100 '>
                    <div>
                        <span className="footer-title text-footerTitle">Services</span>
                        <a className="link link-hover text-footerText">Branding</a>
                        <a className="link link-hover text-footerText">Design</a>
                        <a className="link link-hover text-footerText">Marketing</a>
                        <a className="link link-hover  text-footerText">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title text-footerTitle">Company</span>
                        <a className="link link-hover text-footerText">About us</a>
                        <a className="link link-hover text-footerText">Contact</a>
                        <a className="link link-hover text-footerText">Jobs</a>
                        <a className="link link-hover text-footerText">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title text-footerTitle">Legal</span>
                        <a className="link link-hover text-footerText">Terms of use</a>
                        <a className="link link-hover text-footerText">Privacy policy</a>
                        <a className="link link-hover text-footerText text-footerText">Cookie policy</a>
                    </div>
                </div>
                <div className='footer footer-center p-4 bg-base-100 text-base-content'>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;