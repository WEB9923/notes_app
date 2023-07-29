
export const getFullDate = () => {
   const date = new Date();
   const month = date.getMonth().toString();
   const year = date.getFullYear().toString();
   const hour = date.getHours().toString();
   const minute = date.getMinutes().toString();
   return `${year}/${month}/${hour}:${minute}`;
}

