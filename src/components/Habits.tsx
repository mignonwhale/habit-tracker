import { useState } from "react"
import useHabitStore from "../store/habitStore"
import type { Habit } from "../types/habit"
import HabitCard from "./HabitCard"
import ToastConfirm from "./ToastConfirm"

export default function Habits() {
  const [isOpen, setIsOpen] = useState(false)
  const habits = useHabitStore((state) => state.habits)
  const clearHabits = useHabitStore((state) => state.clearHabits)


  const handleAllDelete = () => {
    setIsOpen(true)
  }

  const handleConfirm = () => {
    clearHabits()
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col items-center">
      {habits.length > 0 ? (
        <div className="w-full px-4 md:max-w-2xl flex justify-end">
          <button className="p-4" onClick={handleAllDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trash2-icon lucide-trash-2">
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              <line x1="10" x2="10" y1="11" y2="17" />
              <line x1="14" x2="14" y1="11" y2="17" />
            </svg>
          </button>
        </div>
      ) : null}
      <div className="space-y-4 px-4 w-full md:max-w-2xl">
        {habits.map((habit: Habit) => (
          <div key={habit.id}>
            <HabitCard id={habit.id} content={habit.content} color={habit.color} createdAt={habit.createdAt} completed={habit.completed} />
          </div>
        ))}
      </div>
      <ToastConfirm isOpen={isOpen} onConfirm={handleConfirm} onCancel={handleCancel} message={"전체 삭제하시겠습니까?"} />
    </div>
  )
}
