export const useStorage = () => {
   const storage = (target, value) => {
      value && (localStorage.setItem(target, JSON.stringify(value)))
      return JSON.parse(localStorage.getItem(target))
   }
   return {storage}
}