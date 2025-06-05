export interface Habit {
  id: string;
  content: string;
  color: string;
  createdAt: Date;
  completed?: string|null; // completed, started
}


export interface ColorOptions { 
  id: string;
  color: string;
  value: string;
}

export interface HabitStore {
  habits: Habit[];
  addHabit: (habit: Omit<Habit, 'id' | 'createdAt'>) => void;
  removeHabit: (id: string) => void;
  updateHabit: (id: string, updates: Partial<Habit>) => void;
}


export interface IconProps {
  color?: string // Tailwind 색상 클래스 (예: "red-500", "blue-400")
  width?: string 
  height?: string
}