import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddHabitForm from './components/AddHabitForm'
import HabitDashboard from './components/HabitDashboard'
import Layout from './components/layout'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // path: '' 와 동일
        element: <HabitDashboard />,
      },
      {
        path: "add-habit",
        element: <AddHabitForm />,
      },
      
    ],
  },
])


export default function App() {
  return <RouterProvider router={router} />
}
