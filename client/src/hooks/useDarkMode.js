import { useLocalStorage } from "./useLocalStorage";
import React, {useEffect} from 'react';

export const useDarkMode = () => {
  const [values, setValues] = useLocalStorage("key");

  useEffect(() => {

    if(values){
        document.body.classList.add("dark-mode")
    } else 
    document.body.classList.remove("dark-mode")
  
}, [values])

return [values, setValues];

}
