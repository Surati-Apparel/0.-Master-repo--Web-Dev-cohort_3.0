import { useEffect, useRef } from "react";

export function usePrev(newValue) {
    const ref = useRef();

    useEffect(()=> {
        ref.current = newValue;
    }, [newValue])

    return ref.current;
}