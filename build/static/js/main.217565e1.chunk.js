(this["webpackJsonpeasy-homes"]=this["webpackJsonpeasy-homes"]||[]).push([[0],{50:function(e,a,t){e.exports=t(80)},79:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),s=t(18),m=t(21),o=t(8),i=t(9),d=t(11),E=t(10),u=t(12),h=function(e){return l.a.createElement("button",{className:"btn ".concat(e.className?e.className:"default"),onClick:e.onClick},e.children)},f=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).state={is_opened:!1},t.toogleDrawer=function(){t.setState({is_opened:!t.state.is_opened})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){"open"===this.props.position&&this.toogleDrawer()}},{key:"render",value:function(){var e={};return e.className=this.state.is_opened?"is-active":"",e.onClick=this.state.is_opened?this.toogleDrawer:null,l.a.createElement("div",{className:"drawer"},l.a.createElement("div",{className:"backdrop ".concat(e.className),onClick:e.onClick},l.a.createElement("div",{className:"mobile__menu--icon"},l.a.createElement("i",{onClick:this.toogleDrawer,className:" fas fa-bars"}),l.a.createElement("a",{href:".",className:"logo__link"},"Easy Homes"))),l.a.createElement("div",{className:"nav--box ".concat(e.className)},l.a.createElement("div",{className:"btn__closed",onClick:this.toogleDrawer},l.a.createElement("div",{href:"#",className:"btn__closed--animated closed-position"},l.a.createElement("span",null),l.a.createElement("span",null))),this.props.children))}}]),a}(n.Component),p=function(e){return l.a.createElement("div",{className:"logo"},l.a.createElement(s.b,{className:"logo__link",to:"/"},l.a.createElement("i",{className:e.iconClass})," Easy Homes"))},g=function(e){return l.a.createElement("div",{className:"header__nav"},l.a.createElement("div",{className:"backdrop"},l.a.createElement("nav",{className:"nav"},l.a.createElement(f,{position:"closed"},l.a.createElement(p,{iconClass:"fas fa-home"}),e.children,l.a.createElement("div",{className:"nav__menu"},l.a.createElement("ul",{className:"nav__menu--main"},l.a.createElement("li",{className:"nav__item"},l.a.createElement(s.b,{className:"nav__link",to:"#exclusives"},"Exclusives")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(s.b,{className:"nav__link",to:"/search"},"Buy")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(s.b,{className:"nav__link",to:"#rent"},"Rent")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(s.b,{className:"nav__link",to:"#sell"},"Sell")),l.a.createElement("li",{className:"nav__item"},l.a.createElement(s.b,{className:"nav__link",to:"#agents"},"Agents"))),l.a.createElement("div",{className:"nav__menu--user"},l.a.createElement("div",{className:"nav__menu--user--item "},l.a.createElement(h,{className:"nav__menu--user--item--btn active"},"Sign Up")),l.a.createElement("div",{className:"nav__menu--user--item"},l.a.createElement(h,{className:"nav__menu--user--item--btn default"},"Log In"))))))),e.children)},b=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).state={term:""},t.onFormSubmit=function(e){e.preventDefault(),t.onSearchSubmit()},t.onInputChange=function(e){t.setState({term:e.target.value}),t.onSearchSubmit(e.target.value)},t.onSearchSubmit=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.term;t.props.onSearch(e)},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"search--input-box"},l.a.createElement("form",{onSubmit:this.onFormSubmit},l.a.createElement("input",{className:"search--input",type:"text",placeholder:"City, Neighborhood, Address, School, ZIP, Agent, MLS #",onChange:this.onInputChange,value:this.state.term}),l.a.createElement("button",{className:"search--input-btn primary"},l.a.createElement("i",{className:"fas fa-search"}))))}}]),a}(n.Component),v=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).state={isForSale:!0},t.toogleListingType=function(e){var a={};a.isForSale="forSale"===e,t.setState(a)},t.onSearchSubmit=function(e){console.log(e)},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("header",{className:"header"},l.a.createElement("div",{className:"header__nav-box"},l.a.createElement(g,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"header__content"},l.a.createElement("h1",{className:"heading-primary"},"Find your place."),l.a.createElement("div",{className:"homepage__search "},l.a.createElement("div",{className:"homepage__search__type--select"},l.a.createElement(h,{className:"homepage__search__type--btn  ".concat(this.state.isForSale?"is_active ":null),onClick:function(){return e.toogleListingType("forSale")}},"Buy"),l.a.createElement(h,{className:"homepage__search__type--btn  ".concat(this.state.isForSale?null:"is_active"),onClick:function(){return e.toogleListingType("forRent")}},"Rent")),l.a.createElement(b,null))))))}}]),a}(n.Component),N=function(){return l.a.createElement("footer",{className:"footer u-margin-top-big"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"footer__main"},l.a.createElement("section",{className:"footer__company"},l.a.createElement("label",{htmlFor:"accordion-1",className:"footer__company--label"},l.a.createElement("input",{id:"accordion-1",className:"accordion",type:"checkbox"}),l.a.createElement("h4",{className:"heading-quaternary"},"Company",l.a.createElement("span",{className:"caret"},l.a.createElement("i",{className:"fas fa-angle-down"}))),l.a.createElement("ul",{className:"footer__links"},l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#aboutUs"},"About Us")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#team"},"Team")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#careers"},"Careers")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#investors"},"Investors")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#contactUs"},"Contact Us")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#offices"},"Offices")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#agent"},"Agent Experience"))))),l.a.createElement("section",{className:"footer__explore"},l.a.createElement("label",{htmlFor:"accordion-2",className:"footer__company--label"},l.a.createElement("input",{id:"accordion-2",className:"accordion",type:"checkbox"}),l.a.createElement("h4",{className:"heading-quaternary"},"Explore",l.a.createElement("span",{className:"caret"},l.a.createElement("i",{className:"fas fa-angle-down"}))),l.a.createElement("ul",{className:"footer__links"},l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#concierge"},"Concierge")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#loan"},"Bridge Loan Services")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#careers"},"Easy Homes Coming Soon")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#cares"},"Easy Homes Cares")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#neighborhood"},"Neighborhood Guides")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#newdevelopment"},"New Development")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#commercial"},"Commercial")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#entertainment"},"Sports & Entertainment")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#marketresearch"},"Market Research")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#collections"},"Collections")),l.a.createElement("li",null,l.a.createElement("a",{className:"footer-item",href:"#smartsign"},"Easy Homes Smart Sign"))))),l.a.createElement("section",{className:"footer__mobile"},l.a.createElement("h4",{className:"heading-quaternary u-margin-bottom-tiny"},"Mobile Apps"),l.a.createElement("a",{href:"#"},l.a.createElement("img",{className:"footer__mobileIcon",src:"https://images.ctfassets.net/x01lqw608u1m/3X7x96c8UYp8qoSgXRtVhE/5cde7194bab3e7ccb3d30be21112a522/appstore.png",alt:"EasyHomes Homes iOS"})),l.a.createElement("a",{href:"#"},l.a.createElement("img",{className:"footer__mobileIcon",src:"https://images.ctfassets.net/x01lqw608u1m/5IuqcWiWxI4ZhGAsBRGE7v/d78c00f0311bd3465720f7c574e1fb62/playstore.png",alt:"EasyHomes Homes Android"}))),l.a.createElement("div",{className:"footer__social"},l.a.createElement("a",{className:"footer__social-Link",href:"//instagram.com/EasyHomes/",rel:"nofollow noopener",target:"_blank",title:"Instagram"},l.a.createElement("i",{className:"fab fa-instagram"})),l.a.createElement("a",{className:"footer__social-Link",href:"//facebook.com/EasyHomes/",rel:"nofollow noopener",target:"_blank",title:"Facebook"},l.a.createElement("i",{className:"fab fa-facebook"})),l.a.createElement("a",{className:"footer__social-Link",href:"//twitter.com/EasyHomes/",rel:"nofollow noopener",target:"_blank",title:"Twitter"},l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement("a",{className:"footer__social-Link",href:"//medium.com/EasyHomes/",rel:"nofollow noopener",target:"_blank",title:"Medium"},l.a.createElement("i",{className:"fab fa-medium"}))),l.a.createElement("section",{className:"footer__legal"},l.a.createElement("div",{className:"footer__legal-terms u-margin-bottom-tiny"},l.a.createElement("a",{className:"footer__legal-links",href:"/legal/terms-of-service","data-tn":"footer-link-terms-of-service"},"Terms of Service"),",",l.a.createElement("a",{className:"footer__legal-links",href:"/legal/privacy-policy","data-tn":"footer-link-privacy-policy"},"Privacy Policy"),", and",l.a.createElement("a",{className:"footer__legal-links",href:"/ucfe-assets/consumer-footer/5/YCPR-Jan-2019.pdf","data-tn":"footer-link-california-applicant-notice"},"Notice for California Applicants")),l.a.createElement("div",{className:"footer__legal-disclaimer"},"Corporate Responsibility, Privacy & Legal Notices: Easy Homes is a licensed real estate broker, licensed to do business as Easy Homes RE in Delaware, New Jersey, Pennsylvania and Tennessee, and Easy Homes Real Estate in Washington, DC. No guarantee, warranty or representation of any kind is made regarding the completeness or accuracy of descriptions or measurements (including square footage measurements and property condition), such should be independently verified, and Easy Homes expressly disclaims any liability in connection therewith. No financial or legal advice provided. Equal Housing Opportunity.",l.a.createElement("span",{className:"consumerFooter-TREC"},"Texas Real Estate Commission:"),l.a.createElement("a",{className:"textIntent-caption2","data-tn":"footer-link-consumer-protection-notice",href:"//www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-2.pdf",rel:"nofollow noopener",target:"_blank","data-label":"Consumer Protection Notice"},"Consumer Protection Notice"),",",l.a.createElement("a",{className:"footer__legal-links","data-tn":"footer-link-info-brokerage-service",href:"/ucfe-assets/consumer-footer/5/IABS-May-2019.pdf",rel:"nofollow noopener",target:"_blank","data-label":"Info About Brokerage Services"},"Info About Brokerage Services"),". \xa9 Easy Homes 2020.",l.a.createElement("span",{className:"consumerFooter-phone"},"212-913-9058."),l.a.createElement("br",null),l.a.createElement("div",{className:"u-margin-top-small"},l.a.createElement("a",{className:"footer-browserLink",href:"/sitemap/"},"Sitemap"),l.a.createElement("span",null,"|"),l.a.createElement("a",{className:"footer-browserLink",href:"/recently-sold/"},"Recently Sold Homes")))))))},_=t(90),y=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"market u-margin-top-big"},l.a.createElement("h3",{className:"heading-quaternary"},"Real Estate in Popular Cities"),l.a.createElement("p",{className:"paragraph subTitle u-margin-bottom-tiny"},"Browse listings, view photos, and connect with an agent to schedulea viewing in some of our most popular cities."),l.a.createElement("div",{className:"row market__cities"},l.a.createElement(_.a,{container:!0,spacing:1},l.a.createElement(_.a,{container:!0,spacing:1,item:!0},l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Manhattan Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"San Jose Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"West Hollywood Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Brooklyn Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Santa Monica Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Pasadena Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Los Angeles Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Malibu Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Menlo Park Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"San Francisco Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Santa Rosa Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Laguna Beach Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Washington DC Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Beverly Hills Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Sonoma Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Oakland Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Newport Beach Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Napa Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Queens Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:3},l.a.createElement("a",{href:"#manhattan"},"Danville Real Estate")))))))},x=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"market u-margin-top-medium"},l.a.createElement("h3",{className:"heading-quaternary"},"Real Estate Markets"),l.a.createElement("p",{className:"paragraph subTitle u-margin-bottom-tiny"},"Find your next dream home in one of our markets across 16 states."),l.a.createElement("div",{className:"row market__cities"},l.a.createElement(_.a,{container:!0,spacing:1},l.a.createElement(_.a,{container:!0,spacing:1,item:!0,xs:12,sm:8,md:8,lg:8,xl:8},l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"California Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Georgia Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"New York Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Colorado Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Illinois Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Pennsylvania Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Connecticut Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Maryland Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Tennessee Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"DC Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Massachusetts Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Texas Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Florida Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"New Jersey Real Estate")),l.a.createElement(_.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement("a",{href:"#manhattan"},"Virginia Real Estate"))),l.a.createElement(_.a,{container:!0,direction:"column",item:!0,xs:12,sm:3,md:4,lg:4,xl:4,spacing:1},l.a.createElement(_.a,{item:!0},l.a.createElement("a",{href:"#manhattan"},"Washington Real Estate")),l.a.createElement(_.a,{item:!0},l.a.createElement("a",{href:"#manhattan"},"View All Markets")))))))},k=function(e){var a={backgroundImage:"url(".concat(e.data.img,")")};return l.a.createElement("a",{href:"/".concat(e.data.id),className:"card"},l.a.createElement("div",{key:e.data.id,className:"card-body"},l.a.createElement("div",{className:"card-img",style:a,alt:""},l.a.createElement("div",{className:"container"},e.data.openhouse?l.a.createElement("div",{className:"banner open-house"},e.data.openhouse):"",e.data.comingsoon?l.a.createElement("div",{className:"banner banner-message"},e.data.comingsoon):"",l.a.createElement("div",{className:"card-caption"},l.a.createElement("div",{className:"flex-col"},l.a.createElement("div",{className:"flex "},l.a.createElement("div",{className:"card-listing-left-wrapper"},l.a.createElement("div",null,Number(e.data.price).toLocaleString()),l.a.createElement("div",null,e.data.address),l.a.createElement("div",null,e.data.neighborhood)),l.a.createElement("div",{className:"card-listing-right-wrapper"},l.a.createElement("div",null,e.data.beds," ",l.a.createElement("div",null,"Beds")),l.a.createElement("div",null,e.data.baths," ",l.a.createElement("div",null,"Baths")),l.a.createElement("div",null,Number(e.data.sq).toLocaleString()," ",l.a.createElement("div",null,"Sq. Ft."))))))))))},w=function(e){return l.a.createElement(k,{data:e.data})},S=function(e){var a=e.data?e.data.map((function(e,a){return l.a.createElement(_.a,{key:e.id,item:!0,xs:12,sm:6,md:4,lg:4,xl:4},l.a.createElement(w,{data:e}))})):null;return l.a.createElement("div",null,l.a.createElement("p",null,e.data.length," Homes"),l.a.createElement(_.a,{container:!0,spacing:3},a))},C=[{id:5e3,agent:{name:"Fredrik Eklund",img:"https://brookspr.com/wp-content/uploads/2017/09/fredrik_bio_pic.png"},img:"https://d2787ndpv5cwhz.cloudfront.net/adffcbb5b9d2a5017707c82bd16c1f78da04a690/640x480.jpg",comingsoon:"Coming Soon",price:236e4,address:"195 Hancock Street",neighborhood:"Bedford-Stuyvesant",city:"Brooklyn",zipcode:11216,beds:6,baths:3.5,sq:4456},{id:5001,agent:{name:"Steve Gold",img:"https://mediarouting.vestahub.com/Media/94094261/box/600x800"},img:"https://d2787ndpv5cwhz.cloudfront.net/cc8c46bf27e2467506af0001069ffdffe56d58a8/1500x1000.jpg",comingsoon:"Coming Soon",price:2199e3,address:"14 Lefferts Place",neighborhood:"Clinton Hill",city:"Brooklyn",zipcode:11238,beds:5,baths:3.5,sq:2726},{id:5002,agent:{name:"Steve Gold",img:"https://mediarouting.vestahub.com/Media/94094261/box/600x800"},img:"https://d2787ndpv5cwhz.cloudfront.net/319a781d92ce2524b72600b986732e7da95612ff/640x480.jpg",price:25e5,comingsoon:"Coming Soon",address:"102 Madison Street",neighborhood:"Bedford-Stuyvesant",city:"Brooklyn",zipcode:11216,beds:5,baths:4.5,sq:3005},{id:5003,agent:{name:"Fredrik Eklund",img:"https://brookspr.com/wp-content/uploads/2017/09/fredrik_bio_pic.png"},img:"https://d2787ndpv5cwhz.cloudfront.net/0fe47fe3eadfb6e40897bf1c70290e84d39c8bd3/1500x1000.jpg",comingsoon:"Compass Coming Soon",price:2995e3,address:"1002 Bergen Street",neighborhood:"Crown Height",city:"Brooklyn",zipcode:11216,beds:4,baths:5,sq:3327},{id:5004,agent:{name:"Fredrik Eklund",img:"https://brookspr.com/wp-content/uploads/2017/09/fredrik_bio_pic.png"},img:"https://d2787ndpv5cwhz.cloudfront.net/2aea5f18e0803ecff8eeb1151f4d019c70344651.jpg",comingsoon:"Compass Coming Soon",openhouse:"OPEN: 1/2 11:00AM - 12:30PM",price:169e4,address:"475 Washington Avenue, Unit PH1",neighborhood:"Clinton Hill",city:"Brooklyn",zipcode:11238,beds:3,baths:2,sq:1502},{id:5005,agent:{name:"Steve Gold",img:"https://mediarouting.vestahub.com/Media/94094261/box/600x800"},img:"https://d2787ndpv5cwhz.cloudfront.net/73d4d7018c50a81e542e5bcf9c9589655a6cba49/1500x1000.jpg",comingsoon:"Listed by Easy Homes",price:1295e3,address:"150 Myrtle Avenue, Unit 1201",neighborhood:"Downtown Brooklyn",city:"Brooklyn",zipcode:11201,beds:2,baths:2,sq:1113}],O=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"heading-tertiary u-margin-top-big"},"Recommended For You"),l.a.createElement("p",{className:"paragraph u-margin-bottom-small"},"Listings we think you\u2019ll love."),l.a.createElement(S,{data:C}))}}]),a}(n.Component),R=function(e){function a(){return Object(o.a)(this,a),Object(d.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(O,null),l.a.createElement(y,null),l.a.createElement(x,null),l.a.createElement(N,null))}}]),a}(n.Component),j=t(28),P=t(29),D=t(47),L=t.n(D),H=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).zoom=t.props.zoom||14,t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"map",style:{height:"95vh"}},l.a.createElement(L.a,{defaultCenter:this.props.center,defaultZoom:this.zoom}))}}]),a}(n.Component);H.defaultProps={center:{lat:40.84,lng:-73.85}};var I=H,F=t(34),M=t(26),A=t(33),T=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).state={minPrice:{value:0,label:"No Min Price"},maxPrice:{value:9999999999,label:"No Max Price"}},t.getOptions=function(){for(var e=[],a="",t=100;t<=25e3;)t<500&&(a="$".concat(t,"k"),e.push({value:1e3*t,label:a}),t+=25),t<1e3?(a="$".concat(t,"k"),e.push({value:1e3*t,label:a}),t+=50):t<5e3?(a="$".concat(t/1e3,"M"),e.push({value:1e3*t,label:a}),t+=250):t<1e4?(a="$".concat(t/1e3,"M"),e.push({value:1e3*t,label:a}),t+=1e3):t<=25e3&&(a="$".concat(t/1e3,"M"),e.push({value:1e3*t,label:a}),t+=2500);return e},t.onChangeHandler=function(e,a){console.log(e,a);var n=Object(M.a)({},e,a.value);t.props.onFiltersSelected(n),t.setState(Object(M.a)({},e,a)),console.log("filter state",t.state)},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return console.log("maxPrice",this.state.maxPrice),console.log("minPrice",this.state.minPrice),l.a.createElement("div",{className:"filters"},l.a.createElement("div",{className:"priceFilters"},l.a.createElement(A.a,{className:"select",name:"min-price",id:"min-price",components:{IndicatorSeparator:null},options:[{value:0,label:"No Min Price"}].concat(Object(F.a)(this.getOptions())),onChange:function(a){return e.onChangeHandler("minPrice",a)},value:this.state.minPrice}),l.a.createElement("span",{style:{padding:"0 8px"}},"-"),l.a.createElement(A.a,{className:"select",name:"max-price",id:"max-price",components:{IndicatorSeparator:null},options:[{value:9999999999,label:"No Max Price"}].concat(Object(F.a)(this.getOptions())),onChange:function(a){return e.onChangeHandler("maxPrice",a)},value:this.state.maxPrice})),l.a.createElement(h,null,l.a.createElement("b",null,"Filters")))}}]),a}(n.Component),B=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).state={listingData:C,filteredData:C},t.filterData=function(e){t.props.setFilters(e);var a=Object(j.a)({},t.props.filtersParams,{},e),n=a.searchTerm.trim().toLowerCase(),l=t.state.listingData.filter((function(e){var a=e.id.toString().match(n),t=e.address.toLowerCase().match(n),l=e.neighborhood.toLowerCase().match(n),r=e.city.toLowerCase().match(n),c=e.agent.name.toLowerCase().match(n),s=e.zipcode.toString().match(n);return null!==a||null!==t||null!==l||null!==r||null!==c||null!==s}));l=l.filter((function(e){return e.price>=a.minPrice&&e.price<=a.maxPrice})),t.setState({filteredData:l})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"searchpage"},l.a.createElement("div",{className:"searchpage__nav"},l.a.createElement(g,null,l.a.createElement(b,{onSearch:function(a){return e.filterData({searchTerm:a})}}))),l.a.createElement("div",{className:"searchpage__content"},l.a.createElement(I,{zoom:14}),l.a.createElement("div",{className:"listings"},l.a.createElement(T,{onFiltersSelected:this.filterData}),l.a.createElement(S,{data:this.state.filteredData}))))}}]),a}(n.Component),q=Object(P.b)((function(e){return{filtersParams:e.search.filtersParams,filteredData:e.search.filteredData}}),(function(e){return{setFilters:function(a){return e(function(e){return{type:"SET_LISTINGS_FILTER",filters:e}}(a))},setfilteredData:function(a){return e(function(e){return{type:"FILTER_LISTING_DATA",filteredData:e}}(a))}}}))(B);t(79);var z=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",null,l.a.createElement(s.a,{basename:"/easy-homes"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,component:R}),l.a.createElement(m.a,{path:"/search",exact:!0,component:q})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=t(23),W=t(48),U=function(e,a){return Object(j.a)({},e,{},a)},J={listingData:C,filteredData:C,filtersParams:{searchTerm:"",minPrice:0,maxPrice:9999999999}},$=function(e,a){var t=U(e.filtersParams,a.filters);return console.log("redux state",t,"action",a),U(e,{filtersParams:t})},Y=function(e,a){return U(e,{filteredData:a.filteredData})},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_LISTINGS_FILTER":return $(e,a);case"FILTER_LISTING_DATA":return Y(e,a);default:return e}},Z=G.d,X=Object(G.c)({search:V}),Q=Object(G.e)(X,Z(Object(G.a)(W.a))),K=l.a.createElement(P.a,{store:Q},l.a.createElement(z,null));c.a.render(K,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[50,1,2]]]);
//# sourceMappingURL=main.217565e1.chunk.js.map