import { useState } from "react"
import type { ColorOptions } from "../types/habit"
import CircleIcon from "./CircleIcon"

const colorOptions: ColorOptions[] = [
  { color: "red", value: "red-500" },
  { color: "orange", value: "orange-400" },
  { color: "yellow", value: "yellow-400" },
]

export default function AddHabitForm() {
  const DEFAULT_COLOR = "red-500"
  const [selectedColor, setSelectedColor] = useState(DEFAULT_COLOR)
  const [content, setContent] = useState("")

  const handleClickSaveHabit = () => {
    // TODO storage 저장
    if (!confirm("save habit?")) {
      return
    }
    console.log(content)
  }
  const handleClickReset = () => {
    setContent("")
    setSelectedColor(DEFAULT_COLOR)
  }

  return (
    <div className="flex flex-col items-center pt-10 space-y-4 w-1/2 ">
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
      <div className="flex items-center border border-gray-600 focus-within:border-red-500 focus-within:border-2 rounded px-3 py-2 w-full max-w-md transition-colors duration-200 ">
        <span>
          <CircleIcon color={selectedColor} />
        </span>
        <input
          type="text"
          placeholder="Enter a habit"
          maxLength={30}
          value={content}
          onChange={(e) => {
            setContent(e.target.value)
          }}
          className="w-full bg-transparent outline-none placeholder-gray-400 px-3 py-2"
        />
        <div className="flex gap-2">
          <button onClick={handleClickSaveHabit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-plus-icon lucide-circle-plus">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          </button>
          <button onClick={handleClickReset}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-x-icon lucide-circle-x">
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
