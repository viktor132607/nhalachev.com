import "@testing-library/jest-dom/vitest"
import React from "react"
import { cleanup } from "@testing-library/react"
import { afterEach, vi } from "vitest"


vi.mock("next/image", () => ({
    default: (props: {
        src: string | { src: string }
        alt: string
        priority?: boolean
        preload?: boolean
        unoptimized?: boolean
        fill?: boolean
        [key: string]: unknown
    }) => {
        const { src, priority, preload, unoptimized, fill, ...imgProps } = props
        void priority
        void preload
        void unoptimized
        void fill

        return React.createElement("img", {
            ...imgProps,
            src: typeof src === "string" ? src : src.src,
        })
    },
}))

afterEach(() => {
    if (typeof window !== "undefined") {
        cleanup()
        window.localStorage.clear()
        document.documentElement.classList.remove("dark")
    }

    vi.restoreAllMocks()
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
    vi.useRealTimers()
})
