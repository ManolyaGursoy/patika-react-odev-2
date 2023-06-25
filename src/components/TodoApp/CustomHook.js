import { useEffect } from 'react';

export function useUpdateLocalStorage(data) {
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(data));
  }, [data]);
}