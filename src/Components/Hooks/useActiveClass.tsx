import React, {useMemo} from 'react';

export const useActiveClass = (active:boolean,styles:any) => {
    const toggles = useMemo(()=>{
         return  active ? styles :''
    },[styles,active])
    return [toggles]
};


