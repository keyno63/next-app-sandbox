import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ja" >
                <Head />
                <body>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: themeInitializerScript,
                        }}
                    ></script>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

const themeInitializerScript = `(function() {
    ${setInitialColorMode.toString()}
    setInitialColorMode()
})()`

function setInitialColorMode() {
    function getInitialColorMode() {
        const storePreferenceMode = window.localStorage.getItem("theme");
        const hasStoredPreference = typeof storePreferenceMode === "string";

        if (hasStoredPreference) {
            return storePreferenceMode;
        }

        const preference = window.matchMedia("(prefers-color-scheme): dark")
        const hasMediaQueryPreference = typeof preference.matches === "boolean";

        if (hasMediaQueryPreference) {
            return preference.matches ? "dark" : "light";
        }
        return "light";
    }

    const currentColorMode = getInitialColorMode();
    if (currentColorMode === "dark") {
        document.documentElement.setAttribute("data-theme", "dark")
    }

}

export default MyDocument;
