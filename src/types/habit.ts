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
  updateHabit: (id: string, updates: Partial<Habit>) => void;
  deleteHabit: (id: string) => void;
  clearHabits: () => void;
}


export interface IconProps {
  color?: string // Tailwind 색상 클래스 (예: "red-500", "blue-400")
  width?: string 
  height?: string
}