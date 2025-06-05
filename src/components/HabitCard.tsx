import { useState } from "react"
import useHabitStore from "../store/habitStore"
import type { Habit } from "../types/habit"
import { formatDate } from "../utils"
import CircleIcon from "./CircleIcon"
import SlashIcon from "./SlashIcon"
import XIcon from "./XIcon"

export default function HabitCard({ id, content, color, createdAt, completed }: Habit) {
  const STATE_STARTED = "started"
  const STATE_COMPLETED = "completed"
  const updateHabit = useHabitStore((state) => state.updateHabit)

  const [slashIcon, setSlashIcon] = useState(completed === "started")
  const [xIcon, setXIcon] = useState(completed === "completed")

  const handleToggleState = (newState: string) => {
    if (completed !== newState) {
      // 새로운 상태로 변경
      setSlashIcon(newState === STATE_STARTED)
      setXIcon(newState === STATE_COMPLETED)
      updateCompleted(newState)
    } else {
      // 이미 선택된 상태를 다시 클릭한 경우 해제
      setSlashIcon(false)
      setXIcon(false)
      updateCompleted("")
    }
  }

  const handleSlashIcon = () => {
    handleToggleState(STATE_STARTED)
  }

  const handleXIcon = () => {
    handleToggleState(STATE_COMPLETED)
  }

  const updateCompleted = (newCompleted: string) => {
    if (newCompleted === completed) {
      return
    }
    updateHabit(id, { completed: newCompleted })
  }

  return (
    <div className="grid grid-cols-7 items-center border border-gray-600 rounded px-3 py-2 w-full max-w-md ">
      <div className="p-2">
        <CircleIcon color={color} />
      </div>
      <div className="col-span-5">
        <p>{content}</p>
        <p className="text-gray-500 text-sm">{formatDate(createdAt)}</p>
      </div>
      <div>
        <button id="lucide-square-slash" onClick={handleSlashIcon}>
          <SlashIcon color={slashIcon ? color : "white"} />
        </button>
        <button id="lucide-square-x" onClick={handleXIcon}>
          <XIcon color={xIcon ? color : "white"} />
        </button>
      </div>
    </div>
  )
}
