import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <footer className='footer u-margin-top-big'>
      <div className='container'>
        <div className='footer__main'>
          <section className='footer__company'>
            <label htmlFor='accordion-1' className='footer__company--label'>
              <input id='accordion-1' className='accordion' type='checkbox' />
              <h4 className='heading-quaternary'>
                Company
                <span className='caret'>
                  <i className='fas fa-angle-down'></i>
                </span>
              </h4>
              <ul className='footer__links'>
                <li>
                  <Link className='footer-item' to='#aboutUs'>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#team'>
                    Team
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#careers'>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#investors'>
                    Investors
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#contactUs'>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#offices'>
                    Offices
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#agent'>
                    Agent Experience
                  </Link>
                </li>
              </ul>
            </label>
          </section>
          <section className='footer__explore'>
            <label htmlFor='accordion-2' className='footer__company--label'>
              <input id='accordion-2' className='accordion' type='checkbox' />
              <h4 className='heading-quaternary'>
                Explore
                <span className='caret'>
                  <i className='fas fa-angle-down'></i>
                </span>
              </h4>
              <ul className='footer__links'>
                <li>
                  <Link className='footer-item' to='#concierge'>
                    Concierge
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#loan'>
                    Bridge Loan Services
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#comingSoon'>
                    Easy Homes Coming Soon
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#cares'>
                    Easy Homes Cares
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#neighborhood'>
                    Neighborhood Guides
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#newdevelopment'>
                    New Development
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#commercial'>
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#entertainment'>
                    Sports & Entertainment
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#marketresearch'>
                    Market Research
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#collections'>
                    Collections
                  </Link>
                </li>
                <li>
                  <Link className='footer-item' to='#smartsign'>
                    Easy Homes Smart Sign
                  </Link>
                </li>
              </ul>
            </label>
          </section>

          <section className='footer__mobile'>
            <h4 className='heading-quaternary u-margin-bottom-tiny'>
              Mobile Apps
            </h4>
            <Link to='#ios'>
              <img
                className='footer__mobileIcon'
                src='https://images.ctfassets.net/x01lqw608u1m/3X7x96c8UYp8qoSgXRtVhE/5cde7194bab3e7ccb3d30be21112a522/appstore.png'
                alt='EasyHomes Homes iOS'
              />
            </Link>

            <Link to='#android'>
              <img
                className='footer__mobileIcon'
                src='https://images.ctfassets.net/x01lqw608u1m/5IuqcWiWxI4ZhGAsBRGE7v/d78c00f0311bd3465720f7c574e1fb62/playstore.png'
                alt='EasyHomes Homes Android'
              />
            </Link>
          </section>

          <div className='footer__social'>
            <Link
              className='footer__social-Link'
              to='http://instagram.com/EasyHomes/'
              rel='nofollow noopener'
              target='_blank'
              title='Instagram'
            >
              <i className='fab fa-instagram'></i>
            </Link>

            <Link
              className='footer__social-Link'
              to='//facebook.com/EasyHomes/'
              rel='nofollow noopener'
              target='_blank'
              title='Facebook'
            >
              <i className='fab fa-facebook'></i>
            </Link>

            <Link
              className='footer__social-Link'
              to='//twitter.com/EasyHomes/'
              rel='nofollow noopener'
              target='_blank'
              title='Twitter'
            >
              <i className='fab fa-twitter'></i>
            </Link>

            <Link
              className='footer__social-Link'
              to='//medium.com/EasyHomes/'
              rel='nofollow noopener'
              target='_blank'
              title='Medium'
            >
              <i className='fab fa-medium'></i>
            </Link>
          </div>

          <section className='footer__legal'>
            <div className='footer__legal-terms u-margin-bottom-tiny'>
              <Link
                className='footer__legal-links'
                to='/legal/terms-of-service'
                data-tn='footer-link-terms-of-service'
              >
                Terms of Service
              </Link>
              ,
              <Link
                className='footer__legal-links'
                to='/legal/privacy-policy'
                data-tn='footer-link-privacy-policy'
              >
                Privacy Policy
              </Link>
              , and
              <Link
                className='footer__legal-links'
                to='/ucfe-assets/consumer-footer/5/YCPR-Jan-2019.pdf'
                data-tn='footer-link-california-applicant-notice'
              >
                Notice for California Applicants
              </Link>
            </div>
            <div className='footer__legal-disclaimer'>
              Corporate Responsibility, Privacy &amp; Legal Notices: Easy Homes
              is a licensed real estate broker, licensed to do business as Easy
              Homes RE in Delaware, New Jersey, Pennsylvania and Tennessee, and
              Easy Homes Real Estate in Washington, DC. No guarantee, warranty
              or representation of any kind is made regarding the completeness
              or accuracy of descriptions or measurements (including square
              footage measurements and property condition), such should be
              independently verified, and Easy Homes expressly disclaims any
              liability in connection therewith. No financial or legal advice
              provided. Equal Housing Opportunity.
              <span className='consumerFooter-TREC'>
                Texas Real Estate Commission:
              </span>
              <Link
                className='textIntent-caption2'
                data-tn='footer-link-consumer-protection-notice'
                to='//www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-2.pdf'
                rel='nofollow noopener'
                target='_blank'
                data-label='Consumer Protection Notice'
              >
                Consumer Protection Notice
              </Link>
              ,
              <Link
                className='footer__legal-links'
                data-tn='footer-link-info-brokerage-service'
                to='/ucfe-assets/consumer-footer/5/IABS-May-2019.pdf'
                rel='nofollow noopener'
                target='_blank'
                data-label='Info About Brokerage Services'
              >
                Info About Brokerage Services
              </Link>
              . &copy; Easy Homes 2020.
              <span className='consumerFooter-phone'>212-913-9058.</span>
              <br />
              <div className='u-margin-top-small'>
                <Link className='footer-browserLink' to='/sitemap/'>
                  Sitemap
                </Link>
                <span>|</span>
                <Link className='footer-browserLink' to='/recently-sold/'>
                  Recently Sold Homes
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default footer;
