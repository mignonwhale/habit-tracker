import { Link } from 'react-router-dom'
import Habits from './Habits'

export default function HabitDashboard() { 
  return (
    <div>
      <div className="flex justify-center items-center w-50 h-50">
        <Link to="/add-habit">
          <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </Link>
      </div>
      <Habits />
    </div>
  )
}