import {NextPage} from "next";
import {useEffect, useState} from "react";

const DarkMode: NextPage = () => {

    const [darkTheme, setDarkTheme] = useState(false);
    const handleToggle = (e) => {
        setDarkTheme(e.target.checked);
    }

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.setAttribute("data-theme", "dark")
            window.localStorage.setItem("theme", "dark")

        } else {
            document.documentElement.removeAttribute("data-theme")
            window.localStorage.setItem("theme", "light")
        }
    }, [darkTheme])

    useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.style.getPropertyValue(
            "--initial-color-mode"
        );
        // Set initial darkmode to light
        setDarkTheme(initialColorValue === "dark");
    }, []);

    return (
        <div>
            <div className="container">
                <nav>
                    <div className="title">ダークモード</div>
                    <div>
                        <form action="#">
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={darkTheme}
                                    onChange={handleToggle}
                                />
                                <span className="slider"></span>
                            </label>
                        </form>
                    </div>
                </nav>
                <section>
                    <div className="content">
                        <h1>ダークモード切り替え</h1>
                        <p>
                            ダークモード切り替えのページです
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default DarkMode;
