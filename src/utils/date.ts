/**
 * 날짜포맷
 * @param date 
 * @returns 2025.06.05 형태
 */
export const formatDate = (date: Date) => { 
  return date.toLocaleDateString('ko-KR');
}

