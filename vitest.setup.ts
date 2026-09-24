import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import { afterEach, vi } from "vitest"

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
