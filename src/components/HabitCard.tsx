import { useState } from "react"
import useHabitStore from "../store/habitStore"
import type { Habit } from "../types/habit"
import { formatDate } from "../utils"
import CircleIcon from "./CircleIcon"
import SlashIcon from "./SlashIcon"
import XIcon from "./XIcon"
import CheckIcon from "./CheckIcon"
import ToastConfirm from "./ToastConfirm"

export default function HabitCard({ id, content, color, createdAt, completed }: Habit) {
  const STATE_STARTED = "started"
  const STATE_COMPLETED = "completed"
  const deleteHabit = useHabitStore((state) => state.deleteHabit)
  const updateHabit = useHabitStore((state) => state.updateHabit)

  const [slashIcon, setSlashIcon] = useState(completed === "started")
  const [xIcon, setXIcon] = useState(completed === "completed")
  const [isOpen, setIsOpen] = useState(false)

  const updateCompleted = (newCompleted: string) => {
    if (newCompleted === completed) {
      return
    }
    updateHabit(id, { completed: newCompleted })
  }

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

  const handleCheckIcon = () => {
    handleToggleState(STATE_COMPLETED)
  }

  const handleXIcon = () => {
    if (!id) {
      return
    }
    setIsOpen(true)
  }
  const handleDelete = () => {
    deleteHabit(id)
    setIsOpen(false)
  }
  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="grid grid-cols-10 items-center border border-gray-600 rounded px-3 py-2">
        <div className="col-span-1 pr-2">
          <CircleIcon color={color} />
        </div>
        <div className="col-span-6">
          <p>{content}</p>
          <p className="text-gray-500 text-sm">{formatDate(createdAt)}</p>
        </div>
        <div className="col-span-3 flex flex-col items-end md:flex-row md:justify-end gap-1">
          <button id="lucide-square-slash" onClick={handleSlashIcon}>
            <SlashIcon color={slashIcon ? color : "white"} />
          </button>
          <button id="lucide-square-check" onClick={handleCheckIcon}>
            <CheckIcon color={xIcon ? color : "white"} />
          </button>
          <button id="lucide-square-x" onClick={handleXIcon}>
            <XIcon color={xIcon ? color : "white"} />
          </button>
        </div>
      </div>
      <ToastConfirm isOpen={isOpen} onConfirm={handleDelete} onCancel={handleCancel} message={"삭제하시겠습니까?"} />
    </>
  )
}
