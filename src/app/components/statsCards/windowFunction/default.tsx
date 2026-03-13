"use client"
import { useEffect } from "react";

export default function WindowFunction() {
    useEffect(() => {
        function getWindowWidth() {
            const { innerWidth: width } = window;
            return {
                width
            };
        }
    }, []);

    return (
        WindowFunction
    );
}
