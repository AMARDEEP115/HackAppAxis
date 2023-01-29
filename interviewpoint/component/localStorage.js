import { useLocalStorage } from "uselocalstoragenextjs";

export const getToken=(key)=>{
    const {
        value, //Value of element in localStorage
        setLocalStorage, //function for modify localStorage
        load, //if the value has been loaded or not
        } = useLocalStorage({
        name: key, //name of element in localStorage
        defaultValue: [], //defaulValue if element in localStorage if null
        parse: (v) => {
          //function for modify value after get of localStorage
          return JSON.parse(v == "" ? "[]" : v);
        },
        updateValue(oldValue, newValue) {
          //function for modify value before set of localStorage
          return [...oldValue, newValue];
        },
      });
};

export const getName=(key)=>{
    const {
        value, //Value of element in localStorage
        setLocalStorage, //function for modify localStorage
        load, //if the value has been loaded or not
        } = useLocalStorage({
        name: key, //name of element in localStorage
        defaultValue: [], //defaulValue if element in localStorage if null
        parse: (v) => {
          //function for modify value after get of localStorage
          return JSON.parse(v == "" ? "[]" : v);
        },
        updateValue(oldValue, newValue) {
          //function for modify value before set of localStorage
          return [...oldValue, newValue];
        },
      });
};