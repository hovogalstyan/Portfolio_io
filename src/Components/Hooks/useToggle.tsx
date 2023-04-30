import React, {useState} from 'react';
interface props{
    value:boolean,
    toggleValue:() => void,
    setValue:(value:boolean) => void
}
export const useToggle = (initialValue: boolean): [boolean, () => void , (value:boolean) => void] => {
    const [value, setValue] = useState<boolean>(initialValue)
    const toggleValue = () => setValue(!value)
    return  [value,toggleValue,setValue]
}
