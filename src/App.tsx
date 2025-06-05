import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HabitForm from "./components/HabitForm"
import HabitDashboard from "./components/HabitDashboard"
import Layout from "./components/Layout"
import { Toaster } from "react-hot-toast"


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
        element: <HabitForm />,
      },
    ],
  },
])

export default function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  )
}
