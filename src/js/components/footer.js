import React from 'react';

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
                  <i class='fas fa-angle-down'></i>
                </span>
              </h4>
              <ul className='footer__links'>
                <li>
                  <a className='footer-item' href='#aboutUs'>
                    About Us
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#team'>
                    Team
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#careers'>
                    Careers
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#investors'>
                    Investors
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#contactUs'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#offices'>
                    Offices
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#agent'>
                    Agent Experience
                  </a>
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
                  <i class='fas fa-angle-down'></i>
                </span>
              </h4>
              <ul className='footer__links'>
                <li>
                  <a className='footer-item' href='#concierge'>
                    Concierge
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#loan'>
                    Bridge Loan Services
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#careers'>
                    Easy Homes Coming Soon
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#cares'>
                    Easy Homes Cares
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#neighborhood'>
                    Neighborhood Guides
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#newdevelopment'>
                    New Development
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#commercial'>
                    Commercial
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#entertainment'>
                    Sports & Entertainment
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#marketresearch'>
                    Market Research
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#collections'>
                    Collections
                  </a>
                </li>
                <li>
                  <a className='footer-item' href='#smartsign'>
                    Easy Homes Smart Sign
                  </a>
                </li>
              </ul>
            </label>
          </section>

          <section className='footer__mobile'>
            <h4 className='heading-quaternary u-margin-bottom-tiny'>
              Mobile Apps
            </h4>
            <a href='#'>
              <img
                className='footer__mobileIcon'
                src='https://images.ctfassets.net/x01lqw608u1m/3X7x96c8UYp8qoSgXRtVhE/5cde7194bab3e7ccb3d30be21112a522/appstore.png'
                alt='EasyHomes Homes iOS'
              />
            </a>
            <a href='#'>
              <img
                className='footer__mobileIcon'
                src='https://images.ctfassets.net/x01lqw608u1m/5IuqcWiWxI4ZhGAsBRGE7v/d78c00f0311bd3465720f7c574e1fb62/playstore.png'
                alt='EasyHomes Homes Android'
              />
            </a>
          </section>

          <div className='footer__social'>
            <a
              className='footer__social-Link'
              href='//instagram.com/EasyHomes/'
              rel='nofollow noopener'
              target='_blank'
              title='Instagram'
            >
              <i className='fab fa-instagram'></i>
            </a>
            <a
              className='footer__social-Link'
              href='//facebook.com/EasyHomes/'
              rel='nofollow noopener'
              target='_blank'
              title='Facebook'
            >
              <i className='fab fa-facebook'></i>
            </a>
            <a
              className='footer__social-Link'
              href='//twitter.com/EasyHomes/'
              rel='nofollow noopener'
              target='_blank'
              title='Twitter'
            >
              <i className='fab fa-twitter'></i>
            </a>
            <a
              className='footer__social-Link'
              href='//medium.com/EasyHomes/'
              rel='nofollow noopener'
              target='_blank'
              title='Medium'
            >
              <i className='fab fa-medium'></i>
            </a>
          </div>

          <section className='footer__legal'>
            <div className='footer__legal-terms u-margin-bottom-tiny'>
              <a
                className='footer__legal-links'
                href='/legal/terms-of-service'
                data-tn='footer-link-terms-of-service'
              >
                Terms of Service
              </a>
              ,
              <a
                className='footer__legal-links'
                href='/legal/privacy-policy'
                data-tn='footer-link-privacy-policy'
              >
                Privacy Policy
              </a>
              , and
              <a
                className='footer__legal-links'
                href='/ucfe-assets/consumer-footer/5/YCPR-Jan-2019.pdf'
                data-tn='footer-link-california-applicant-notice'
              >
                Notice for California Applicants
              </a>
            </div>
            <p class='footer__legal-disclaimer'>
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
              <span class='consumerFooter-TREC'>
                Texas Real Estate Commission:
              </span>
              <a
                class='textIntent-caption2'
                data-tn='footer-link-consumer-protection-notice'
                href='//www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-2.pdf'
                rel='nofollow noopener'
                target='_blank'
                data-label='Consumer Protection Notice'
              >
                Consumer Protection Notice
              </a>
              ,
              <a
                class='footer__legal-links'
                data-tn='footer-link-info-brokerage-service'
                href='/ucfe-assets/consumer-footer/5/IABS-May-2019.pdf'
                rel='nofollow noopener'
                target='_blank'
                data-label='Info About Brokerage Services'
              >
                Info About Brokerage Services
              </a>
              . &copy; Easy Homes 2020.
              <span class='consumerFooter-phone'>212-913-9058.</span>
              <br />
              <div className='u-margin-top-small'>
                <a className='footer-browserLink' href='/sitemap/'>
                  Sitemap
                </a>
                <span>|</span>
                <a className='footer-browserLink' href='/recently-sold/'>
                  Recently Sold Homes
                </a>
              </div>
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default footer;
