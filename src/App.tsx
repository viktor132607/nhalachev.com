import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "../app/Home"
import About from "../app/About"
import Contact from "../app/Contact"
import Privacy from "../app/Privacy"
import Cookies from "../app/Cookies"
import Terms from "../app/Terms"

export default function App() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
                <Home />
                <About />
                <Contact />
                <Privacy />
                <Cookies />
                <Terms />
            </main>

            <Footer />
        </div>
    )
}