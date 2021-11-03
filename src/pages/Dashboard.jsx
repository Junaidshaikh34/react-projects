import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// class Dashboard extends React.Component {
//   render() {
//     return (
//       <div className="dashboard container-fluid ">
//         <div className="row">
//           <div className="col-lg-2">
//             <div className="status-card card mb-3">
//               <a href="#/">
//                 <div className="card-body">
//                   <div className="fw-500 font-14 mb-2">Unresolved</div>
//                   <div className="font-weight-bold m-0 font-24">10</div>
//                 </div>
//               </a>
//             </div>
//           </div>
//           <div className="col-lg-2">
//             <div className="status-card card mb-3">
//               <a href="#/">
//                 <div className="card-body">
//                   <div className="fw-500 font-14 mb-2">Open</div>
//                   <div className="font-weight-bold m-0 font-24">10</div>
//                 </div>
//               </a>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div className="status-card card mb-3">
//               <a href="#/">
//                 <div className="card-body">
//                   <div className="fw-500 font-14 mb-2">On hold</div>
//                   <div className="font-weight-bold m-0 font-24">10</div>
//                 </div>
//               </a>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div className="status-card card mb-3">
//               <a href="#/">
//                 <div className="card-body">
//                   <div className="fw-500 font-14 mb-2">Unassigned</div>
//                   <div className="font-weight-bold m-0 font-24">10</div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="card todo">
//               <div className="card-body">
//                 <div className="fw-500 font-14 mb-2">
//                   My Open Assigned Tickets
//                   <span>(#)</span>
//                 </div>
//                 <table></table>
//                 <div className="todo__body text-center">
//                   <img src="./img/todo.svg" alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div className="card todo">
//               <div className="card-body">
//                 <div className="fw-500 font-14 mb-2">
//                   To-do
//                   <span>(#)</span>
//                 </div>
//                 <div className="todo-add mb-3">
//                   <button className="todo-icon">
//                     <FontAwesomeIcon icon="plus-circle" className="mr-2" />
//                   </button>
//                   <input
//                     className="todo-input"
//                     autoComplete="off"
//                     name="todo"
//                     placeholder="Add a to-do"
//                     maxLength="120"
//                     id="add-todo"
//                   ></input>
//                 </div>
//                 <div className="todo-body text-center">
//                   <img src="./img/todo.svg" alt="" />
//                 </div>
//                 <div className="todo-item d-flex align-items-center justify-content-between">
//                   <div className="flex-fill">
//                     <div className="d-flex align-items-center">
//                       <div className="custom-control custom-checkbox">
//                         <input
//                           type="checkbox"
//                           className="custom-control-input"
//                           id="checkbox-todo"
//                         />
//                         <label
//                           className="custom-control-label"
//                           htmlFor="checkbox-todo"
//                         ></label>
//                       </div>

//                       <div className="py-2 pl-1">
//                         <span className="fw-500">fefefe</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="todo-edit-btns">
//                     <div className="d-flex align-items-center">
//                       <button className="btn btn-light btn-sm mr-2">
//                         <i
//                           className="fa fa-pencil-square-o
//                                     "
//                           aria-hidden="true"
//                         ></i>
//                       </button>
//                       <button className="btn btn-light btn-sm ">
//                         <i className="fa fa-trash" aria-hidden="true"></i>
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="todo-item d-flex align-items-center justify-content-between">
//                   <div className="d-flex align-items-center">
//                     <div className="custom-control custom-checkbox">
//                       <input
//                         type="checkbox"
//                         className="custom-control-input "
//                         id="checkbox-todo2"
//                         defaultChecked
//                       />
//                       <label
//                         className="custom-control-label"
//                         htmlFor="checkbox-todo2"
//                       ></label>
//                     </div>
//                     <div className="py-2 pl-1">
//                       <span className="fw-500 text-muted">
//                         <s>eec</s>
//                       </span>
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center">
//                     <button className="btn btn-light btn-sm ">
//                       <i className="fa fa-trash" aria-hidden="true"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
function Dashboard(props) {
 
  return (
    <>
    <div className="subheader bg-white shadow-sm p-3 text-primary font-weight-bold">
            Dashboard
    </div>
    <div className="dashboard container-fluid mt-3">
      <div className="row">
        <div className="col-sm-6 col-md-3">
        <div className="status-card card mb-3">
          <a href="#/">
            <div className="card-body">
              <div className="fw-500 font-14 mb-2">Unresolved</div>
              <div className="font-weight-bold m-0 font-24">10</div>
            </div>
          </a>
        </div>
      </div>
        <div className="col-sm-6 col-md-3">
        <div className="status-card card mb-3">
          <a href="#/">
            <div className="card-body">
              <div className="fw-500 font-14 mb-2">Open</div>
              <div className="font-weight-bold m-0 font-24">10</div>
            </div>
          </a>
        </div>
      </div>
        <div className="col-sm-6 col-md-3">
        <div className="status-card card mb-3">
          <a href="#/">
            <div className="card-body">
              <div className="fw-500 font-14 mb-2">On hold</div>
              <div className="font-weight-bold m-0 font-24">10</div>
            </div>
          </a>
        </div>
      </div>
        <div className="col-sm-6 col-md-3">
        <div className="status-card card">
          <a href="#/">
            <div className="card-body">
              <div className="fw-500 font-14 mb-2">Unassigned</div>
              <div className="font-weight-bold m-0 font-24">10</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="row mb-3">
      <div className="col-md-8">
        <div className="card todo">
          <div className="card-body">
            <div className="fw-500 font-14 mb-2">
              My Open Assigned Tickets
            <span>(#)</span>
          </div>
          <table></table>
          <div className="todo__body text-center">
            <img src="./img/todo.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
      <div className="col-md-4">
        <div className="card todo">
          <div className="card-body">
            <div className="fw-500 font-14 mb-2">
              To-do
              <span>(#)</span>
            </div>
            <div className="todo-add mb-3">
              <button className="todo-icon">
                <FontAwesomeIcon icon="plus-circle" className="mr-2" />
              </button>
              <input
                className="todo-input"
                autoComplete="off"
                name="todo"
                placeholder="Add a to-do"
                maxLength="120"
                id="add-todo"
              ></input>
            </div>
            <div className="todo-body text-center">
              <img src="./img/todo.svg" alt="" />
            </div>
            <div className="todo-item d-flex align-items-center justify-content-between">
              <div className="flex-fill">
                <div className="d-flex align-items-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox-todo"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checkbox-todo"
                    ></label>
                  </div>

                  <div className="py-2 pl-1">
                    <span className="fw-500">fefefe</span>
                  </div>
                </div>
              </div>
              <div className="todo-edit-btns">
                <div className="d-flex align-items-center">
                  <button className="btn btn-light btn-sm mr-2">
                    <i
                      className="fa fa-pencil-square-o
                                "
                      aria-hidden="true"
                    ></i>
                  </button>
                  <button className="btn btn-light btn-sm ">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="todo-item d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input "
                    id="checkbox-todo2"
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="checkbox-todo2"
                  ></label>
                </div>
                <div className="py-2 pl-1">
                  <span className="fw-500 text-muted">
                    <s>eec</s>
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button className="btn btn-light btn-sm ">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
  );
}
export default Dashboard;
