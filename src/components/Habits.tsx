import useHabitStore from "../store/habitStore"
import type { Habit } from "../types/habit"
import HabitCard from "./HabitCard"

export default function Habits() {
  const habits = useHabitStore((state) => state.habits)
  return (
    <>
      {habits.map((habit: Habit) => (
        <div className="px-3 py-2" key={habit.id}>
          <HabitCard id={habit.id} content={habit.content} color={habit.color} createdAt={habit.createdAt} completed={habit.completed} />
        </div>
      ))}
    </>
  )
}
