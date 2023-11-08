import { defineConfig, presetWind, presetIcons } from "unocss";

export default defineConfig({
    content: {
        filesystem: ["**/*.{html,js,ts,jsx,tsx}"],
    },
    theme: {
        fontFamily: {
            HKGrotesk: "HKGrotesk",
        },
    },
    presets: [presetWind(), presetIcons({extraProperties: {'flex-shrink': '0'}})],
});
