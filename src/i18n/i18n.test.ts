import { beforeEach, describe, expect, it, vi } from "vitest"

const i18nMock = vi.hoisted(() => ({
    use: vi.fn(),
    init: vi.fn(),
    changeLanguage: vi.fn(),
    on: vi.fn(),
}))

vi.mock("i18next", () => ({ default: i18nMock }))
vi.mock("react-i18next", () => ({ initReactI18next: { type: "3rdParty" } }))

describe("i18n browser initialization", () => {
    beforeEach(() => {
        vi.resetModules()
        vi.clearAllMocks()
        localStorage.clear()
        i18nMock.use.mockReturnValue(i18nMock)
        i18nMock.init.mockReturnValue(i18nMock)
    })

    it("loads the saved language and persists language changes", async () => {
        localStorage.setItem("lang", "en")

        await import("./i18n")

        expect(i18nMock.use).toHaveBeenCalledTimes(1)
        expect(i18nMock.init).toHaveBeenCalledWith(
            expect.objectContaining({
                lng: "bg",
                fallbackLng: "bg",
                resources: {},
                interpolation: { escapeValue: false },
            })
        )
        expect(i18nMock.changeLanguage).toHaveBeenCalledWith("en")
        expect(i18nMock.on).toHaveBeenCalledWith("languageChanged", expect.any(Function))

        const callback = i18nMock.on.mock.calls.find(
            ([event]) => event === "languageChanged"
        )?.[1] as (lng: string) => void

        callback("bg")
        expect(localStorage.getItem("lang")).toBe("bg")
    })

    it("does not change language when nothing is saved", async () => {
        await import("./i18n")

        expect(i18nMock.changeLanguage).not.toHaveBeenCalled()
        expect(i18nMock.on).toHaveBeenCalledWith("languageChanged", expect.any(Function))
    })
})
