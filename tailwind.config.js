/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
        colors: {
            veryDarkGrayishBlue: "hsl(217, 19%, 35%)",
            desaturatedDarkBlue: "hsl(214, 17%, 51%)",
            grayishBlue: "hsl(212, 23%, 69%)",
            lightGrayishBlue: "hsl(210, 46%, 95%)",
            white: "#ffffff",
        },
        fontFamily: {
            main: "font-family: 'Manrope', sans-serif",
        },
		extend: {},
	},
	plugins: [],
};
