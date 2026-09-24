import { beforeEach, describe, expect, it, vi } from "vitest"

const i18nMock = vi.hoisted(() => ({
    use: vi.fn(),
    init: vi.fn(),
}))

vi.mock("i18next", () => ({ default: i18nMock }))
vi.mock("react-i18next", () => ({ initReactI18next: { type: "3rdParty" } }))

describe("i18n initialization", () => {
    beforeEach(() => {
        vi.resetModules()
        vi.clearAllMocks()
        i18nMock.use.mockReturnValue(i18nMock)
        i18nMock.init.mockReturnValue(i18nMock)
    })

    it("initializes i18n without browser persistence side effects", async () => {
        const module = await import("./i18n")

        expect(module.default).toBe(i18nMock)
        expect(i18nMock.use).toHaveBeenCalledWith({ type: "3rdParty" })
        expect(i18nMock.init).toHaveBeenCalledWith({
            lng: "bg",
            fallbackLng: "bg",
            resources: {},
            interpolation: {
                escapeValue: false,
            },
        })
    })
})
