(this["webpackJsonpeasy-homes"]=this["webpackJsonpeasy-homes"]||[]).push([[0],{51:function(e,a,t){e.exports=t(82)},81:function(e,a,t){},82:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(18),s=t.n(r),c=t(4),o=t(21),m=t(9),i=t(10),d=t(12),u=t(11),h=t(13),E=function(e){return l.a.createElement("button",{className:"btn ".concat(e.className?e.className:"default"),onClick:e.onClick},e.children)},f=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={is_opened:!1},t.toogleDrawer=function(){t.setState({is_opened:!t.state.is_opened})},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){"open"===this.props.position&&this.toogleDrawer()}},{key:"render",value:function(){var e={};return e.className=this.state.is_opened?"is-active":"",e.onClick=this.state.is_opened?this.toogleDrawer:null,l.a.createElement("div",{className:"drawer"},l.a.createElement("div",{className:"backdrop ".concat(e.className),onClick:e.onClick},l.a.createElement("div",{className:"mobile__menu--icon"},l.a.createElement("i",{onClick:this.toogleDrawer,className:" fas fa-bars"}),l.a.createElement("a",{href:".",className:"logo__link"},"Easy Homes"))),l.a.createElement("div",{className:"nav--box ".concat(e.className)},l.a.createElement("div",{className:"btn__closed",onClick:this.toogleDrawer},l.a.createElement("div",{href:"#",className:"btn__closed--animated closed-position"},l.a.createElement("span",null),l.a.createElement("span",null))),this.props.children))}}]),a}(n.Component),p=function(e){return l.a.createElement("div",{className:"logo"},l.a.createElement(c.b,{className:"logo__link",to:"/"},l.a.createElement("i",{className:e.iconClass})," Easy Homes"))},g=function(e){return l.a.createElement("div",{className:"header__nav"},l.a.createElement("div",{className:"backdrop"},l.a.createElement("nav",{className:"nav"},l.a.createElement(f,{position:"closed"},l.a.createElement(p,{iconClass:"fas fa-home"}),e.children,l.a.createElement("div",{className:"nav__menu"},l.a.createElement("ul",{className:"nav__menu--main"},l.a.createElement("li",{className:"nav__item"},l.a.createElement(c.b,{className:"nav__link",to:"#exclusives"},"Exclusives")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(c.b,{className:"nav__link",to:"/search"},"Buy")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(c.b,{className:"nav__link",to:"#rent"},"Rent")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(c.b,{className:"nav__link",to:"#sell"},"Sell")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(c.b,{className:"nav__link",to:"#agents"},"Agents"))),l.a.createElement("div",{className:"nav__menu--user"},l.a.createElement("div",{className:"nav__menu--user--item "},l.a.createElement(E,{className:"nav__menu--user--item--btn active"},"Sign Up")),l.a.createElement("div",{className:"nav__menu--user--item"},l.a.createElement(E,{className:"nav__menu--user--item--btn"},"Log In"))))))),e.children)},b=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={term:""},t.onFormSubmit=function(e){e.preventDefault(),t.onSearchSubmit()},t.onInputChange=function(e){t.setState({term:e.target.value}),t.onSearchSubmit(e.target.value)},t.onSearchSubmit=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.term;t.props.onSearch(e)},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"search--input-box"},l.a.createElement("form",{onSubmit:this.onFormSubmit},l.a.createElement("input",{className:"search--input",type:"text",placeholder:"City, Neighborhood, Address, School, ZIP, Agent, MLS #",onChange:this.onInputChange,value:this.state.term}),l.a.createElement("button",{className:"search--input-btn primary"},l.a.createElement("i",{className:"fas fa-search"}))))}}]),a}(n.Component),v=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={isForSale:!0},t.toogleListingType=function(e){var a={};a.isForSale="forSale"===e,t.setState(a)},t.onSearchSubmit=function(e){console.log(e)},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header__nav-box"},l.a.createElement(g,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"header__content"},l.a.createElement("h1",{className:"heading-primary"},"Find your place."),l.a.createElement("div",{className:"homepage__search "},l.a.createElement("div",{className:"homepage__search__type--select"},l.a.createElement(E,{className:"homepage__search__type--btn  ".concat(this.state.isForSale?"is_active ":null),onClick:function(){return e.toogleListingType("forSale")}},"Buy"),l.a.createElement(E,{className:"homepage__search__type--btn  ".concat(this.state.isForSale?null:"is_active"),onClick:function(){return e.toogleListingType("forRent")}},"Rent")),l.a.createElement(b,null))))))}}]),a}(n.Component),N=function(){return l.a.createElement("footer",{className:"footer u-margin-top-big"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"footer__main"},l.a.createElement("section",{className:"footer__company"},l.a.createElement("label",{htmlFor:"accordion-1",className:"footer__company--label"},l.a.createElement("input",{id:"accordion-1",className:"accordion",type:"checkbox"}),l.a.createElement("h4",{className:"heading-quaternary"},"Company",l.a.createElement("span",{className:"caret"},l.a.createElement("i",{className:"fas fa-angle-down"}))),l.a.createElement("ul",{className:"footer__links"},l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#aboutUs"},"About Us")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#team"},"Team")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#careers"},"Careers")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#investors"},"Investors")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#contactUs"},"Contact Us")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#offices"},"Offices")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#agent"},"Agent Experience"))))),l.a.createElement("section",{className:"footer__explore"},l.a.createElement("label",{htmlFor:"accordion-2",className:"footer__company--label"},l.a.createElement("input",{id:"accordion-2",className:"accordion",type:"checkbox"}),l.a.createElement("h4",{className:"heading-quaternary"},"Explore",l.a.createElement("span",{className:"caret"},l.a.createElement("i",{className:"fas fa-angle-down"}))),l.a.createElement("ul",{className:"footer__links"},l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#concierge"},"Concierge")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#loan"},"Bridge Loan Services")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#comingSoon"},"Easy Homes Coming Soon")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#cares"},"Easy Homes Cares")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#neighborhood"},"Neighborhood Guides")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#newdevelopment"},"New Development")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#commercial"},"Commercial")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#entertainment"},"Sports & Entertainment")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#marketresearch"},"Market Research")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#collections"},"Collections")),l.a.createElement("li",null,l.a.createElement(c.b,{className:"footer-item",to:"#smartsign"},"Easy Homes Smart Sign"))))),l.a.createElement("section",{className:"footer__mobile"},l.a.createElement("h4",{className:"heading-quaternary u-margin-bottom-tiny"},"Mobile Apps"),l.a.createElement(c.b,{to:"#ios"},l.a.createElement("img",{className:"footer__mobileIcon",src:"https://images.ctfassets.net/x01lqw608u1m/3X7x96c8UYp8qoSgXRtVhE/5cde7194bab3e7ccb3d30be21112a522/appstore.png",alt:"EasyHomes Homes iOS"})),l.a.createElement(c.b,{to:"#android"},l.a.createElement("img",{className:"footer__mobileIcon",src:"https://images.ctfassets.net/x01lqw608u1m/5IuqcWiWxI4ZhGAsBRGE7v/d78c00f0311bd3465720f7c574e1fb62/playstore.png",alt:"EasyHomes Homes Android"}))),l.a.createElement("div",{className:"footer__social"},l.a.createElement(c.b,{className:"footer__social-Link",href:"http://instagram.com/EasyHomes/",rel:"nofollow noopener",target:"_blank",title:"Instagram"},l.a.createElement("i",{className:"fab fa-instagram"})),l.a.createElement(c.b,{className:"footer__social-Link",href:"//facebook.com/EasyHomes/",rel:"nofollow noopener",target:"_blank",title:"Facebook"},l.a.createElement("i",{className:"fab fa-facebook"})),l.a.createElement(c.b,{className:"footer__social-Link",href:"//twitter.com/EasyHomes/",rel:"nofollow noopener",target:"_blank",title:"Twitter"},l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement(c.b,{className:"footer__social-Link",href:"//medium.com/EasyHomes/",rel:"nofollow noopener",target:"_blank",title:"Medium"},l.a.createElement("i",{className:"fab fa-medium"}))),l.a.createElement("section",{className:"footer__legal"},l.a.createElement("div",{className:"footer__legal-terms u-margin-bottom-tiny"},l.a.createElement(c.b,{className:"footer__legal-links",href:"/legal/terms-of-service","data-tn":"footer-link-terms-of-service"},"Terms of Service"),",",l.a.createElement(c.b,{className:"footer__legal-links",href:"/legal/privacy-policy","data-tn":"footer-link-privacy-policy"},"Privacy Policy"),", and",l.a.createElement(c.b,{className:"footer__legal-links",href:"/ucfe-assets/consumer-footer/5/YCPR-Jan-2019.pdf","data-tn":"footer-link-california-applicant-notice"},"Notice for California Applicants")),l.a.createElement("div",{className:"footer__legal-disclaimer"},"Corporate Responsibility, Privacy & Legal Notices: Easy Homes is a licensed real estate broker, licensed to do business as Easy Homes RE in Delaware, New Jersey, Pennsylvania and Tennessee, and Easy Homes Real Estate in Washington, DC. No guarantee, warranty or representation of any kind is made regarding the completeness or accuracy of descriptions or measurements (including square footage measurements and property condition), such should be independently verified, and Easy Homes expressly disclaims any liability in connection therewith. No financial or legal advice provided. Equal Housing Opportunity.",l.a.createElement("span",{className:"consumerFooter-TREC"},"Texas Real Estate Commission:"),l.a.createElement(c.b,{className:"textIntent-caption2","data-tn":"footer-link-consumer-protection-notice",href:"//www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-2.pdf",rel:"nofollow noopener",target:"_blank","data-label":"Consumer Protection Notice"},"Consumer Protection Notice"),",",l.a.createElement(c.b,{className:"footer__legal-links","data-tn":"footer-link-info-brokerage-service",href:"/ucfe-assets/consumer-footer/5/IABS-May-2019.pdf",rel:"nofollow noopener",target:"_blank","data-label":"Info About Brokerage Services"},"Info About Brokerage Services"),". \xa9 Easy Homes 2020.",l.a.createElement("span",{className:"consumerFooter-phone"},"212-913-9058."),l.a.createElement("br",null),l.a.createElement("div",{className:"u-margin-top-small"},l.a.createElement(c.b,{className:"footer-browserLink",href:"/sitemap/"},"Sitemap"),l.a.createElement("span",null,"|"),l.a.createElement(c.b,{className:"footer-browserLink",href:"/recently-sold/"},"Recently Sold Homes")))))))},_=t(92),y=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"market u-margin-top-big"},l.a.createElement("h3",{className:"heading-quaternary"},"Real Estate in Popular Cities"),l.a.createElement("p",{className:"paragraph subTitle u-margin-bottom-tiny"},"Browse listings, view photos, and connect with an agent to schedulea viewing in some of our most popular cities."),l.a.createElement("div",{className:"row market__cities"},l.a.createElement(_.a,{container:!0,spacing:1},l.a.createElement(_.a,{container:!0,spacing:1,item:!0},l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Manhattan Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"San Jose Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"West Hollywood Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Brooklyn Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Santa Monica Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Pasadena Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Los Angeles Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Malibu Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Menlo Park Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"San Francisco Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Santa Rosa Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Laguna Beach Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Washington DC Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Beverly Hills Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Sonoma Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Oakland Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Newport Beach Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Napa Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Queens Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Danville Real Estate")))))))},x=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"market u-margin-top-medium"},l.a.createElement("h3",{className:"heading-quaternary"},"Real Estate Markets"),l.a.createElement("p",{className:"paragraph subTitle u-margin-bottom-tiny"},"Find your next dream home in one of our markets across 16 states."),l.a.createElement("div",{className:"row market__cities"},l.a.createElement(_.a,{container:!0,spacing:1},l.a.createElement(_.a,{container:!0,spacing:1,item:!0,xs:12,sm:8,md:8,lg:8,xl:8},l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"California Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Georgia Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"New York Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Colorado Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Illinois Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Pennsylvania Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Connecticut Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Maryland Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Tennessee Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"DC Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Massachusetts Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Texas Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Florida Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"New Jersey Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Virginia Real Estate"))),l.a.createElement(_.a,{container:!0,direction:"column",item:!0,xs:12,sm:3,md:4,lg:4,xl:4,spacing:1},l.a.createElement(_.a,{item:!0},l.a.createElement("a",{href:"#manhattan"},"Washington Real Estate")),l.a.createElement(_.a,{item:!0},l.a.createElement("a",{href:"#manhattan"},"View All Markets")))))))},k=function(e){var a={backgroundImage:"url(".concat(e.data.img,")")};return l.a.createElement("a",{href:"/".concat(e.data.id),className:"card"},l.a.createElement("div",{key:e.data.id,className:"card-body"},l.a.createElement("div",{className:"card-img",style:a,alt:""},l.a.createElement("div",{className:"container"},e.data.openhouse?l.a.createElement("div",{className:"banner open-house"},e.data.openhouse):"",e.data.comingsoon?l.a.createElement("div",{className:"banner banner-message"},e.data.comingsoon):"",l.a.createElement("div",{className:"card-caption"},l.a.createElement("div",{className:"flex-col"},l.a.createElement("div",{className:"flex "},l.a.createElement("div",{className:"card-listing-left-wrapper"},l.a.createElement("div",null,Number(e.data.price).toLocaleString()),l.a.createElement("div",null,e.data.address),l.a.createElement("div",null,e.data.neighborhood)),l.a.createElement("div",{className:"card-listing-right-wrapper"},l.a.createElement("div",null,e.data.beds," ",l.a.createElement("div",null,"Beds")),l.a.createElement("div",null,e.data.baths," ",l.a.createElement("div",null,"Baths")),l.a.createElement("div",null,Number(e.data.sq).toLocaleString()," ",l.a.createElement("div",null,"Sq. Ft."))))))))))},w=function(e){return l.a.createElement(k,{data:e.data})},S=function(e){var a=e.data?e.data.map((function(e,a){return l.a.createElement(_.a,{key:e.id,item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement(w,{data:e}))})):null;return l.a.createElement("div",{className:"listings__card--wrapper"},l.a.createElement(_.a,{container:!0,spacing:3},a))},C=[{id:5e3,agent:{name:"Fredrik Eklund",img:"https://brookspr.com/wp-content/uploads/2017/09/fredrik_bio_pic.png"},img:"https://d2787ndpv5cwhz.cloudfront.net/adffcbb5b9d2a5017707c82bd16c1f78da04a690/640x480.jpg",comingsoon:"Coming Soon",price:236e4,address:"195 Hancock Street",neighborhood:"Bedford-Stuyvesant",city:"Brooklyn",zipcode:11216,beds:6,baths:3.5,sq:4456},{id:5001,agent:{name:"Steve Gold",img:"https://mediarouting.vestahub.com/Media/94094261/box/600x800"},img:"https://d2787ndpv5cwhz.cloudfront.net/cc8c46bf27e2467506af0001069ffdffe56d58a8/1500x1000.jpg",comingsoon:"Coming Soon",price:2199e3,address:"14 Lefferts Place",neighborhood:"Clinton Hill",city:"Brooklyn",zipcode:11238,beds:5,baths:3.5,sq:2726},{id:5002,agent:{name:"Steve Gold",img:"https://mediarouting.vestahub.com/Media/94094261/box/600x800"},img:"https://d2787ndpv5cwhz.cloudfront.net/319a781d92ce2524b72600b986732e7da95612ff/640x480.jpg",price:25e5,comingsoon:"Coming Soon",address:"102 Madison Street",neighborhood:"Bedford-Stuyvesant",city:"Brooklyn",zipcode:11216,beds:5,baths:4.5,sq:3005},{id:5003,agent:{name:"Fredrik Eklund",img:"https://brookspr.com/wp-content/uploads/2017/09/fredrik_bio_pic.png"},img:"https://d2787ndpv5cwhz.cloudfront.net/0fe47fe3eadfb6e40897bf1c70290e84d39c8bd3/1500x1000.jpg",comingsoon:"Compass Coming Soon",price:2995e3,address:"1002 Bergen Street",neighborhood:"Crown Height",city:"Brooklyn",zipcode:11216,beds:4,baths:5,sq:3327},{id:5004,agent:{name:"Fredrik Eklund",img:"https://brookspr.com/wp-content/uploads/2017/09/fredrik_bio_pic.png"},img:"https://d2787ndpv5cwhz.cloudfront.net/2aea5f18e0803ecff8eeb1151f4d019c70344651.jpg",comingsoon:"Compass Coming Soon",openhouse:"OPEN: 1/2 11:00AM - 12:30PM",price:169e4,address:"475 Washington Avenue, Unit PH1",neighborhood:"Clinton Hill",city:"Brooklyn",zipcode:11238,beds:3,baths:2,sq:1502},{id:5005,agent:{name:"Steve Gold",img:"https://mediarouting.vestahub.com/Media/94094261/box/600x800"},img:"https://d2787ndpv5cwhz.cloudfront.net/73d4d7018c50a81e542e5bcf9c9589655a6cba49/1500x1000.jpg",comingsoon:"Listed by Easy Homes",price:1295e3,address:"150 Myrtle Avenue, Unit 1201",neighborhood:"Downtown Brooklyn",city:"Brooklyn",zipcode:11201,beds:2,baths:2,sq:1113}],O=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"heading-tertiary u-margin-top-big"},"Recommended For You"),l.a.createElement("p",{className:"paragraph u-margin-bottom-small"},"Listings we think you\u2019ll love."),l.a.createElement(S,{data:C}))}}]),a}(n.Component),j=function(e){function a(){return Object(m.a)(this,a),Object(d.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(O,null),l.a.createElement(y,null),l.a.createElement(x,null),l.a.createElement(N,null))}}]),a}(n.Component),R=t(27),B=t.n(R),F=t(26),D=t(32),P=t(48),M=t.n(P),H=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).zoom=t.props.zoom||14,t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"map",style:{height:"95vh"}},l.a.createElement(M.a,{defaultCenter:this.props.center,defaultZoom:this.zoom}))}}]),a}(n.Component);H.defaultProps={center:{lat:40.84,lng:-73.85}};var A=H,I=t(30),L=t(24),T=t(28),q={minPrice:{value:0,label:"No Min Price"},maxPrice:{value:9999999999,label:"No Max Price"},minBeds:{value:-1,label:"No Min"},maxBeds:{value:7,label:"No Max"},minBaths:{value:0,label:"No Min"}},z=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={fields:q,selectedFiltersCounter:0,isAdvancedFiltersOpened:!1},t.toogleDrawer=function(){t.setState({isAdvancedFiltersOpened:!t.state.isAdvancedFiltersOpened})},t.getSelectedFilters=function(){var e=new Set;for(var a in t.state.fields)if(q[a].value!==t.state.fields[a].value){var n=a.replace(/min|max/,"");e.add(n)}return Object(L.a)(e)},t.getPriceOptions=function(){for(var e=[],a="",t=100;t<=25e3;)t<500&&(a="$".concat(t,"k"),e.push({value:1e3*t,label:a}),t+=25),t<1e3?(a="$".concat(t,"k"),e.push({value:1e3*t,label:a}),t+=50):t<5e3?(a="$".concat(t/1e3,"M"),e.push({value:1e3*t,label:a}),t+=250):t<1e4?(a="$".concat(t/1e3,"M"),e.push({value:1e3*t,label:a}),t+=1e3):t<=25e3&&(a="$".concat(t/1e3,"M"),e.push({value:1e3*t,label:a}),t+=2500);return e},t.getBedsOptions=function(){for(var e=[],a="",t=0;t<=6;t++)0===t?(a="Studio",e.push({value:t,label:a})):e.push({value:t,label:t});return e},t.getBathsOptions=function(){for(var e=[],a="",t=0;t<=6;t+=.5)a="".concat(t,"+"),e.push({value:t,label:a});return e},t.onChangeHandler=function(e,a){var n,l;return B.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Object(I.a)({},e,a),t.props.onFiltersSelected(Object(I.a)({},e,a.value)),r.next=4,B.a.awrap(t.setState({fields:Object(F.a)({},t.state.fields,{},n)}));case 4:l=t.getSelectedFilters().length,t.setState({selectedFiltersCounter:l});case 6:case"end":return r.stop()}}))},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){"open"===this.props.position&&this.toogleDrawer()}},{key:"render",value:function(){var e=this,a={};return a.className=this.state.isAdvancedFiltersOpened?"is-active":"",a.onClick=this.state.isAdvancedFiltersOpened?this.toogleDrawer:null,l.a.createElement("div",{className:"filters ".concat(a.className)},l.a.createElement("div",{className:"filters__item"},l.a.createElement(T.a,{className:"select",name:"min-price",components:{IndicatorSeparator:null},options:[{value:0,label:"No Min Price"}].concat(Object(L.a)(this.getPriceOptions())),onChange:function(a){return e.onChangeHandler("minPrice",a)},value:this.state.fields.minPrice}),l.a.createElement("span",{style:{padding:"0 8px"}},"-"),l.a.createElement(T.a,{className:"select",name:"max-price",components:{IndicatorSeparator:null},options:[{value:9999999999,label:"No Max Price"}].concat(Object(L.a)(this.getPriceOptions())),onChange:function(a){return e.onChangeHandler("maxPrice",a)},value:this.state.fields.maxPrice}),l.a.createElement(E,{onClick:this.toogleDrawer},l.a.createElement("b",null,"".concat(this.state.isAdvancedFiltersOpened?"Closed":""," Filters ").concat(this.state.selectedFiltersCounter>0?this.state.selectedFiltersCounter:"")))),l.a.createElement("div",{className:"results"},l.a.createElement("span",{className:"results__found"},l.a.createElement("b",null,this.props.filteredData.length," "),"Homes"),l.a.createElement("span",{className:"results__sorted_by"},"Sort By Recommended")),l.a.createElement("div",{className:"advanceFilters"},l.a.createElement("div",{className:"advanceFilters__section"},l.a.createElement("div",{className:"advanceFilters__item"},l.a.createElement("h4",{className:"heading"},"Beds"),l.a.createElement(T.a,{className:"select",name:"min-beds",components:{IndicatorSeparator:null},options:[{value:-1,label:"No Min"}].concat(Object(L.a)(this.getBedsOptions())),defaultValue:this.state.fields.minBeds,onChange:function(a){return e.onChangeHandler("minBeds",a)},value:this.state.fields.minBeds}),l.a.createElement("span",{style:{padding:"0 8px"}},"-"),l.a.createElement(T.a,{className:"select",name:"max-beds",components:{IndicatorSeparator:null},options:[{value:7,label:"No Max"}].concat(Object(L.a)(this.getBedsOptions())),defaultValue:this.state.fields.maxBeds,onChange:function(a){return e.onChangeHandler("maxBeds",a)},value:this.state.fields.maxBeds})),l.a.createElement("div",{className:"advanceFilters__item"},l.a.createElement("h4",{className:"heading"},"Baths"),l.a.createElement(T.a,{className:"select",name:"Baths",components:{IndicatorSeparator:null},options:[{value:0,label:"No Min"}].concat(Object(L.a)(this.getBathsOptions())),defaultValue:this.state.fields.minBaths,onChange:function(a){return e.onChangeHandler("minBaths",a)},value:this.state.fields.minBaths})))))}}]),a}(n.Component),G=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).filterData=function(e){var a,n,l,r;return B.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,B.a.awrap(t.props.setFilters(e));case 2:a=Object(F.a)({},t.props.filtersParams,{},e),n=a.searchTerm,l=n.trim().toLowerCase(),r=(r=t.props.listingData.filter((function(e){var a=e.id.toString().match(l),t=e.address.toLowerCase().match(l),n=e.neighborhood.toLowerCase().match(l),r=e.city.toLowerCase().match(l),s=e.agent.name.toLowerCase().match(l),c=e.zipcode.toString().match(l);return null!==a||null!==t||null!==n||null!==r||null!==s||null!==c}))).filter((function(e){return e.price>=a.minPrice&&e.price<=a.maxPrice&&e.beds>=a.minBeds&&e.beds<=a.maxBeds&&e.baths>=a.minBaths})),t.props.setfilteredData(r);case 8:case"end":return s.stop()}}))},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"searchpage"},l.a.createElement("div",{className:"searchpage__nav"},l.a.createElement(g,null,l.a.createElement(b,{onSearch:function(a){return e.filterData({searchTerm:a})}}))),l.a.createElement("div",{className:"searchpage__content"},l.a.createElement(A,{zoom:14}),l.a.createElement("div",{className:"listings"},l.a.createElement("h4",{className:"heading-quaternary"},"Explore This Neighborhood"),l.a.createElement(z,{filteredData:this.props.filteredData,onFiltersSelected:this.filterData}),l.a.createElement(S,{data:this.props.filteredData}))))}}]),a}(n.Component),W=Object(D.b)((function(e){return{listingData:e.search.listingData,filteredData:e.search.filteredData,filtersParams:e.search.filtersParams}}),(function(e){return{setFilters:function(a){return e(function(e){return{type:"SET_LISTINGS_FILTER",filters:e}}(a))},setfilteredData:function(a){return e(function(e){return{type:"FILTER_LISTING_DATA",filteredData:e}}(a))}}}))(G);t(81);var U=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:j}),l.a.createElement(o.a,{path:"/search",exact:!0,component:W}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=t(23),V=t(49),$=function(e,a){return Object(F.a)({},e,{},a)},Y={listingData:C,filteredData:C,filtersParams:{searchTerm:"",minPrice:0,maxPrice:9999999999,minBeds:-1,maxBeds:7,minBaths:0}},Z=function(e,a){var t=$(e.filtersParams,a.filters);return $(e,{filtersParams:t})},X=function(e,a){return $(e,{filteredData:a.filteredData})},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_LISTINGS_FILTER":return Z(e,a);case"FILTER_LISTING_DATA":return X(e,a);default:return e}},K=J.d,ee=Object(J.c)({search:Q}),ae=Object(J.e)(ee,K(Object(J.a)(V.a))),te=l.a.createElement(D.a,{store:ae},l.a.createElement(c.a,{basename:"/easy-homes"},l.a.createElement(U,null)));s.a.render(te,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.5c8714db.chunk.js.map