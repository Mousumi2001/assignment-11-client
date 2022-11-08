import './App.css';
import { RouterProvider } from 'react-router';
// import router from './Component/Router/Router';
import Main from './Layout/Main';
import Home from './Component/Pages/Home/Home';
import Blog from './Component/Blog/Blog';
import Login from './Component/Pages/Login/Login';
import Register from './Component/Pages/Register/Register';


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
