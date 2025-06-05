import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { Habit, HabitStore } from '../types/habit';

const useHabitStore = create<HabitStore>()(
  // persist: 자동저장
  persist(
    (set, get) => ({
      habits: [],
      
      addHabit: (habitData) => {
        const newHabit: Habit = {
          id: crypto.randomUUID(),
          createdAt: new Date(),
          ...habitData,
        };
        
        set((state) => ({
          habits: [...state.habits, newHabit],
        }));
      },
      
      removeHabit: (id) => {
        set((state) => ({
          habits: state.habits.filter((habit) => habit.id !== id),
        }));
      },
      
      updateHabit: (id, updates) => {
        set((state) => ({
          habits: state.habits.map((habit) =>
            habit.id === id ? { ...habit, ...updates } : habit
          ),
        }));
      },
      
    }),


    {
      name: 'habit-tracker-storage', // localStorage 키 이름
      storage: createJSONStorage(() => localStorage, {
        // 저장할 때: Date 객체를 ISO 문자열로 변환
        replacer: (key, value) => {
          if (key === 'createdAt' && value instanceof Date) {
            return value.toISOString();
          }
          return value;
        },
        // 불러올 때: createdAt 문자열을 Date 객체로 변환
        reviver: (key, value) => {
          if (key === 'createdAt' && typeof value === 'string') {
            return new Date(value);
          }
          return value;
        },
      }),
    }
  )
);

export default useHabitStore;