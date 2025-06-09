import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import useHabitStore from "../store/habitStore"
import type { ColorOptions } from "../types/habit"
import CircleIcon from "./CircleIcon"
import XIcon from "./XIcon"
import PlusIcon from "./PlusIcon"

const colorOptions: ColorOptions[] = [
  { id: "1", color: "red", value: "red-500" },
  { id: "2", color: "orange", value: "orange-500" },
  { id: "3", color: "yellow", value: "yellow-500" },
]

export default function HabitForm() {
  const DEFAULT_COLOR = "red-500"
  const navigate = useNavigate()
  const [selectedColor, setSelectedColor] = useState(DEFAULT_COLOR)
  const [content, setContent] = useState("")
  const addHabit = useHabitStore((state) => state.addHabit)

  const handleSave = () => {
    if (!content.trim()) {
      return
    }
    toast.success("저장되었습니다!")

    // localStorage 저장
    addHabit({
      content: content.trim(),
      color: selectedColor,
    })
    handleCancel()
    navigate("/")
  }

  const handleCancel = () => {
    setContent("")
    setSelectedColor(DEFAULT_COLOR)
  }

  return (
    <div className="flex flex-col items-center pt-10 space-y-4 w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto px-2">
      <div className="flex justify-center gap-2">
        {colorOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setSelectedColor(option.value)}
            className={`flex items-center gap-2 px-2 py-2 border rounded ${
              selectedColor === option.value ? "ring-2 ring-offset-2 ring-" + option.value : ""
            }`}>
            <CircleIcon color={option.value} width={"20"} height={"20"} />
          </button>
        ))}
      </div>
      <div className="w-full">
        <div className="flex items-center border border-gray-600 focus-within:border-red-500 focus-within:border-2 rounded px-3 py-2 transition-colors duration-200 ">
          <span>
            <CircleIcon color={selectedColor} />
          </span>
          <input
            type="text"
            placeholder="Enter a habit. Up to 30 characters"
            maxLength={30}
            value={content}
            onChange={(e) => {
              setContent(e.target.value)
            }}
            className="w-full bg-transparent outline-none placeholder-gray-400 px-3 py-2"
          />
          <div className="flex gap-2">
            <button onClick={handleSave}>
              <PlusIcon />
            </button>
            <button onClick={handleCancel}>
              <XIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
