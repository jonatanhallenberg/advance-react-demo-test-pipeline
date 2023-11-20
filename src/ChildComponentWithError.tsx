import { useState } from "react";

export const ChildComponentWithError = () => {

    const [ throwError, setThrowError ] = useState(false);

    if (throwError) {
        throw new Error("Fel")
    }

    const onButtonClick = () => {
        setThrowError(true);
    }

    return <button onClick={() => onButtonClick()}>Kasta error!</button>
}