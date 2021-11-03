import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import SidebarItems from "./SidebarItems"

// images
import LogoSmall from "../img/logo-small.png";
import LogoBig from "../img/logo-big.png";


// class Sidebar extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.showMenu && (
      
//           <Nav defaultActiveKey="/home" className="flex-column px-2 sidebar">
//             <div className="d-flex justify-content-center">
//               <a href="https://www.google.com/">
//                 <img
//                   src={LogoBig}
//                   className="img-fluid d-none d-md-block"
//                   alt=""
//                   width="100px"
//                   height="auto"
//                 />
//               </a>
//               <a href="https://www.google.com/">
//                 <img
//                   src={LogoSmall}
//                   className="img-fluid d-block d-md-none text-center pt-2"
//                   alt=""
//                   width="40px"
//                   height="auto"
//                 />
//               </a>
//             </div>
//             <Nav.Link
//               className="my-4 my-md-2 d-flex align-items-center flex-column flex-md-row"
//               active
//               href="/home"
//             >
//               <FontAwesomeIcon icon="home" className="mr-0 mr-md-2" />
//               <div className="d-none d-md-block">User</div>
//             </Nav.Link>

//             <Nav.Link
//               className="mb-4 mb-md-2 d-flex align-items-center flex-column flex-md-row"
//               eventKey="link-1"
//             >
//               <FontAwesomeIcon icon="ticket-alt" className="mr-0 mr-md-2" />
//               <div className="d-none d-md-block">Ticket</div>
//             </Nav.Link>
//             <Nav.Link
//               className="mb-4 mb-md-2 d-flex align-items-center flex-column flex-md-row"
//               eventKey="link-2"
//             >
//               <FontAwesomeIcon icon="file-alt" className="mr-0 mr-md-2" />
//               <div className="d-none d-md-block">Report</div>
//             </Nav.Link>
//             <Nav.Link
//               className="d-flex align-items-center flex-column flex-md-row"
//               eventKey="link-3"
//             >
//               <FontAwesomeIcon icon="meteor" className="mr-0 mr-md-2" />
//               <div className="d-none d-md-block">Activity</div>
//             </Nav.Link>
//           </Nav>

//         )}
//       </div>

     


function Sidebar(props, {defaultActive}) {
  const show = props.show;
  console.log(show);
    //Those location props finally come in handy!
    const location = props.history.location;
    //Load this string from localStorage
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    //Parse it to a number
    const lastActiveIndex = Number(lastActiveIndexString);
    //Store it in state
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || Number(defaultActive));

    //This sets the item to localStorage and changes the state index
    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    //Appends '/' to the start of a string if not present
    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    //This re-renders when the route changes
    useEffect(()=> {
        //Get an item with the same 'route' as the one provided by react router (the current route)
        const activeItem = SidebarItems.findIndex(item=> getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

  
    return (
      
        <div className="sidebar-wrapper">
          {show && (
           
            <Nav className="flex-column px-2 sidebar">
              <div className="d-flex justify-content-center mt-2 mb-4">
                <a href="https://www.google.com/">
                  <img
                    src={LogoBig}
                    className="img-fluid d-none d-md-block"
                    alt=""
                    width="100px"
                    height="auto"
                  />
                </a>
                <a href="https://www.google.com/">
                  <img
                    src={LogoSmall}
                    className="img-fluid d-block d-md-none text-center pt-2"
                    alt=""
                    width="40px"
                    height="auto"
                  />
                </a>
              </div>
              
              {
                SidebarItems.map((item, activeIndex)=> {
                  console.log("SidebarItems",item);
                  return (                                      
                          <Nav.Item key={item.name} 
                          >
                            <Nav.Link as={Link}  to={item.route} className="mb-3 al">
                                <FontAwesomeIcon icon={item.icon} />
                                <div className="d-none d-md-block">{item.name}</div>
                            </Nav.Link>
                          </Nav.Item>                      
                  );
                })
              }
            </Nav>
            
          )} 
        </div>
      
    );
}






      // <ul class="navbar-nav sidebar align-items-center ">
      //     <li class="">
      //         <a class="nav-link active text-white px-3 my-2" href="#">
      //         <i class="fa fa-user-circle" aria-hidden="true"></i>
      //         </a>
      //     </li>
      //     <li class="">
      //         <a class="nav-link text-white px-3 my-2" href="#">
      //         <i class="fa fa-user-circle" aria-hidden="true"></i>
      //         </a>
      //     </li>
      //     <li class="">
      //         <a class="nav-link text-white px-3 my-2" href="#">
      //         <i class="fa fa-user-circle" aria-hidden="true"></i>
      //         </a>
      //     </li>
      //     <li class="">
      //         <a class="nav-link text-white px-3 my-2" href="#">
      //         <i class="fa fa-user-circle" aria-hidden="true"></i>
      //         </a>
      //     </li>
      // </ul>
 

export default Sidebar;
