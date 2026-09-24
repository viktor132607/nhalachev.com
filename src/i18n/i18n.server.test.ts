// @vitest-environment node
import { describe, expect, it, vi } from "vitest"

const i18nMock = vi.hoisted(() => ({
    use: vi.fn(),
    init: vi.fn(),
}))

vi.mock("i18next", () => ({ default: i18nMock }))
vi.mock("react-i18next", () => ({ initReactI18next: { type: "3rdParty" } }))

describe("i18n SSR initialization", () => {
    it("initializes without accessing browser-only state", async () => {
        i18nMock.use.mockReturnValue(i18nMock)
        i18nMock.init.mockReturnValue(i18nMock)

        const i18nModule = await import("./i18n")

        expect(i18nModule.default).toBe(i18nMock)
        expect(i18nMock.init).toHaveBeenCalledTimes(1)
    })
})
