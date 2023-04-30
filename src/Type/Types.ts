import {AppDispatch, RootState} from "../Store/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface navItemsListType {
    path: string,
    text: string
}

export interface isActiveType {
    isActive: boolean
}

export interface FlagSliceStateTypes {
    data: any,
    flagLanguage: any
}

export interface flagListType {
    language: string
    flag: string
}

export interface ProjectsStateTypes {
    data: any,
    description: null | {
        id: number,
        name: string,
        url: string,
        git: string,
        contactList: [
            { urls: string },
        ]
    }
}

export interface VideoItemsType {
    id: number,
    name: string,
    url: string,
    git: string,
    contactList: [
        { urls: string },
    ]
}

export interface ProjectsItemTypes {
    id: number,
    name: string,
    url: string,
    git: string,
    contactList: [
        { urls: string },
    ]
}

export interface iconsTypes {
    urls: string
}
