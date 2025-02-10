import { Inter, Lusitana } from "next/font/google";
import localFont from "next/font/local"

export const inter = Inter({
    subsets: ["latin"]
})

export const lusitana = Lusitana({
    weight: ["400", "700"],
    subsets: ["latin"]
})

export const josefinSans1 = localFont({  
    src: "./fonts/Josefin_Sans/JosefinSans-Italic-VariableFont_wght.ttf",
    display: "swap"
});  


export const josefinSans = localFont({  
    src: [  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-Thin.ttf",  
            weight: "100", // Thin  
            style: "normal"  
        },  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-ExtraLight.ttf",  
            weight: "200", // Extra Light  
            style: "normal"  
        },  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-Light.ttf",  
            weight: "300", // Light  
            style: "normal"  
        },  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-Regular.ttf",  
            weight: "400", // Regular  
            style: "normal"  
        },  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-Medium.ttf",  
            weight: "500", // Medium  
            style: "normal"  
        },  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-SemiBold.ttf",  
            weight: "600", // Semi Bold  
            style: "normal"  
        },  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-Bold.ttf",  
            weight: "700", // Bold  
            style: "normal"  
        },  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-ThinItalic.ttf",  
            weight: "100", // Thin Italic  
            style: "italic"  
        },  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-ExtraLightItalic.ttf",  
            weight: "200", // Extra Light Italic  
            style: "italic"  
        },  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-LightItalic.ttf",  
            weight: "300", // Light Italic  
            style: "italic"  
        },  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-Italic.ttf",  
            weight: "400", // Italic  
            style: "italic"  
        },  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-MediumItalic.ttf",  
            weight: "500", // Medium Italic  
            style: "italic"  
        },  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-SemiBoldItalic.ttf",  
            weight: "600", // Semi Bold Italic  
            style: "italic"  
        },  
        {  
            path: "./fonts/Josefin_Sans/static/JosefinSans-BoldItalic.ttf",  
            weight: "700", // Bold Italic  
            style: "italic"  
        },  
    ],  
});  