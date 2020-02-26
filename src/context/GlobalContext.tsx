import React, { createContext, useReducer } from 'react'

export type CTXType = [State, React.Dispatch<Action>];

export const GlobalContext = createContext({} as CTXType);

export type Action = { type: keyof State, value: number }

export const GlobalReducer = (state: State, action: Action): State => {
    return {
        ...state,
        [action.type]: action.value
    }
}

export interface State {
    /**
     * @type [0.1, 19.9] ft
     */
    chord: number;
    /**
     * @type [5, 123.8] ft
     */
    span: number;
    /**
     * @type [-20, 20] °
     */
    angle: number;
    /**
     * @type [-20, 20] %
     */
    camber: number;
    /**
     * @type [1, 20] %
     */
    thickness: number;
    /**
     * @type [0, 250] mph
     */
    speed: number;
}

export const GlobalContextProvider: React.FC = ({ children }) => {
    const reducer = useReducer(GlobalReducer, {
        chord: 5,
        span: 20,
        angle: 0,
        camber: 0,
        thickness: 10.5,
        speed: 33,
    });

    return (
        <GlobalContext.Provider value={reducer}>
            {children}
        </GlobalContext.Provider>
    )
}
