export interface Habit {
  id: string;
  content: string;
  color: string;
  createdAt: Date;
}

export interface HabitRecord {
  id: string;
  habitId: string;
  date: string;
  completed: string; // completed, started
}

export interface ColorOptions { 
  color: string;
  value: string;
}