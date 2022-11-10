import './App.css';
import { RouterProvider } from 'react-router';
// import router from './Component/Router/Router';
import Main from './Layout/Main';
import Home from './Component/Pages/Home/Home';
import Blog from './Component/Blog/Blog';
import Login from './Component/Pages/Login/Login';
import Register from './Component/Pages/Register/Register';
import AllService from './Component/Pages/AllService/AllService';
import DetailsCard from './Component/Pages/DetailsCard/DetailsCard';
import AddService from './Component/Pages/AddService/AddService';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import MyReview from './Component/Pages/MyReview/MyReview';


const { createBrowserRouter } = require("react-router-dom");


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/allservice',
          element: <AllService></AllService>,
          loader: () => fetch('https://assignment-11-server-inky.vercel.app/allservices')
        },
        //try this
        {
          path: '/allservice/:id',
          element: <DetailsCard></DetailsCard>,
          loader: ({ params }) => fetch(`https://assignment-11-server-inky.vercel.app/allservices/${params.id}`)
        },
        {
          path: '/addService',
          element: <PrivateRouter><AddService></AddService></PrivateRouter>
        },
        {
          path: '/myreview',
          element: <PrivateRouter><MyReview></MyReview></PrivateRouter>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
