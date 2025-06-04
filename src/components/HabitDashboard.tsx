import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Habit } from '../types/habit'
import Habits from './habits'


const testHabit: Habit[]|null = null
//   [
//   {
//     id: "1",
//     content: "drink water at least 8 cups",
//     color: "red",
//     createdAt: new Date(),
//   },
// ]
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