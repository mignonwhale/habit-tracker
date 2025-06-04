import { Outlet } from 'react-router-dom';

export default function Layout() { 
  return (
    <div className="m-50 bg-black text-white">
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="font-extrabold text-9xl uppercase">Habit</h1>
        <Outlet/>
      </div>
    </div>
  )
}