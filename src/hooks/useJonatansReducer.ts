import { useState } from "react";

type PayloadAction = {
    type: string;
    payload: unknown;
}

export const useJonatansReducer = <T>(reducer: (state: T, action: PayloadAction) => T, initialState: T) => {
    
    const [state, setState] = useState(initialState);

    const dispatch = (action: PayloadAction) => {
        const nextState = reducer(state, action);
        setState(nextState);
    }

    return [state, dispatch] as const;
}