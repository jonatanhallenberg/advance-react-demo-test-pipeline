import { ChildComponentWithError } from "./ChildComponentWithError"
import { ErrorBoundary } from "react-error-boundary";

export const ErrorBoundaryDemo = () => {

    return <>
        <h1>Parent component</h1>
        <ErrorBoundary fallback={<div>Something went wrong!</div>}>
            <ChildComponentWithError />
        </ErrorBoundary>
    </>
}