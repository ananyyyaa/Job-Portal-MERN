import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJobs from "../Pages/CreateJobs";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from '../Pages/SalaryPage'; // Adjust the path as necessary
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {path:"/",element: <Home/>,},
        {path : "/post-job" ,
          element : <CreateJobs/>
        } ,
        {path : "/my-job" ,
          element : <MyJobs/>
        } ,
        {path : "/salary" ,
          element : <SalaryPage/>
        } ,
        {path : "edit-job/:id" ,
          element : <UpdateJob/>,
          loader:({params})=>fetch(`http://localhost:3000/all-jobs/${params.id}`)
        } ,
        {path : "/login" ,
          element : <Login/>,
        } ,
        {path:"/job/:id",
          element :<JobDetails/>
        }
        
        

      ],
    },
  ]);
  export default router;