import React, { useState, useCallback } from "react";
import "./App.css";

// components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
// import SubHeader from "./components/SubHeader";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showMenu: true,
//     };
//     this.toggleMenu = this.toggleMenu.bind(this);
//   }

//   toggleMenu = function () {
//     this.setState({ showMenu: !this.state.showMenu });
//   };

//   render() {
//     return (
//       <div className="App">
//         <div className="d-flex">
//           <Sidebar showMenu={this.state.showMenu} />
//           <div className="main flex-fill">
//             <Header toggleMenu={this.toggleMenu} />
//             <SubHeader />
//             <Routes />
//           </div>
//         </div>
//       </div>

//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showMenu: true,
//     };
//     this.toggleMenu = this.toggleMenu.bind(this);
//   }

//   const toggleMenu = function () {
//     this.setState({ showMenu: !this.state.showMenu });
//   };

function App(props) {
  // toggle sidebar
  const [show, setShow] = useState(true);

  const handleToggle = useCallback(() => setShow((prevShow) => !prevShow), []);
  console.log(show, "show works");

  return (
    <div className="App">
      <div className="d-flex">
        <Sidebar history={props.history} show={show} />
        <div className="main flex-fill">
          <Header onToggle={handleToggle} />
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default App;
