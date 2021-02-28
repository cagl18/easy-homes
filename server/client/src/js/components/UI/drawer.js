import React from 'react';

const drawer = (props) => {
  let is_active = {};
  is_active.className = props.active ? 'is-active' : '';
  is_active.onClick = props.active ? props.toogleDrawer : null;
  let nav_content =
    is_active['className'] === 'is-active' ? (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {props.children}
      </div>
    ) : (
      props.children
    );
  return (
    <div className="drawer">
      <div
        className={`backdrop ${is_active.className}`}
        onClick={is_active.onClick}
      >
        <div className="mobile__menu--icon">
          <i onClick={props.toogleDrawer} className=" fas fa-bars"></i>

          <a href="." className="logo__link">
            {props.brand}
          </a>
        </div>
      </div>
      <div className={`nav--box ${is_active['className']}`}>
        <div className="btn__closed" onClick={props.toogleDrawer}>
          <div href="#" className="btn__closed--animated closed-position">
            <span></span>
            <span></span>
          </div>
        </div>

        <div>{nav_content}</div>
        {/* <div onClick={props.closeDrawer}>{nav_content}</div> */}
      </div>
    </div>
  );
};

export default drawer;

// import React, { Component } from 'react';

// class Drawer extends Component {
//   state = {
//     is_opened: this.props.active || false, //false,
//   };

//   // componentDidMount() {
//   //   if (this.props.position === 'open') {
//   //     this.toogleDrawer();
//   //   }
//   // }
//   // componentDidUpdate() {
//   //   console.log(
//   //     'Drawer - componentDidUpdate / state open',
//   //     this.state.is_opened
//   //   );
//   // }

//   // toogleDrawer = () => {
//   //   this.setState({ is_opened: !this.state.is_opened });
//   // };

//   // toogleDrawer = () => {
//   //   this.setState((prevState) => ({ is_opened: !prevState.is_opened }));
//   // };

//   closeDrawer = () => {
//     this.setState({ is_opened: false });
//   };

//   render() {
//     let is_active = {};
//     is_active.className = this.props.active ? 'is-active' : '';
//     is_active.onClick = this.props.active ? this.props.toogleDrawer : null;
//     let nav_content =
//       is_active['className'] === 'is-active' ? (
//         <div
//           // onClick={this.props.toogleDrawer}
//           style={{ display: 'flex', flexDirection: 'column' }}
//         >
//           {this.props.children}
//         </div>
//       ) : (
//         this.props.children
//       );
//     return (
//       <div className="drawer">
//         <div
//           className={`backdrop ${is_active.className}`}
//           onClick={is_active.onClick}
//         >
//           <div className="mobile__menu--icon">
//             <i onClick={this.props.toogleDrawer} className=" fas fa-bars"></i>

//             <a href="." className="logo__link">
//               {this.props.brand}
//             </a>
//           </div>
//         </div>
//         <div className={`nav--box ${is_active['className']}`}>
//           <div className="btn__closed" onClick={this.props.toogleDrawer}>
//             <div href="#" className="btn__closed--animated closed-position">
//               <span></span>
//               <span></span>
//             </div>
//           </div>

//           <div>{nav_content}</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Drawer;
