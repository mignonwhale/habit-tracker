type CircleIconProps = {
  color?: string // Tailwind 색상 클래스 (예: "red-500", "blue-400")
  width?: string 
  height?: string
}

export default function CircleIcon({ color = "red-500", width = "30", height = "30" }: CircleIconProps) {
  const fillClass = `fill-${color}`
  const strokeClass = `stroke-${color}`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${fillClass} ${strokeClass}`}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
