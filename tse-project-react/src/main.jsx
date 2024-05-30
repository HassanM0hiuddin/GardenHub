import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import UserLayout from './UserLayout.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import ResourcePage from './pages/ResourcesPage.jsx'
import ForumPage from './pages/ForumPage.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path:"/login",
        element:<LoginPage/>
      },{
        path:"/signup",
        element:<SignupPage/>
      }
    ],
  },{
    path:"/user",
    element:<UserLayout/>,
    children:[{
      path:"/user",
      element:<DashboardPage/>
    },{
      path:"resources",
      element:<ResourcePage/>
    },{
      path:"forum",
      element:<ForumPage/>
    }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
