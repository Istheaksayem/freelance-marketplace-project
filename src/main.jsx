import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout.jsx';
import Home from './components/Home/Home.jsx';
import AllJobs from './components/AllJobs/AllJobs.jsx';
import AddJobs from './components/AddJobs/AddJobs.jsx';
import MyTasks from './components/MyTasks/MyTasks.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import { ToastContainer } from 'react-toastify';
import JobDetails from './components/JobDetails/JobDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "allJobs",
        Component: AllJobs
      },
      {
        path: "addJob",
        Component: AddJobs
      },
      {
        path: "myTasks",
        Component: MyTasks
      },
      {
        path:"login",
        Component:Login
      },
      {
        path:"register",
        Component:Register
      },
      {
        path:"/allJobs/:id",
        element:<JobDetails></JobDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>,
)
