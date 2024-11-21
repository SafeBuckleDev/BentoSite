import React from "react";
import Typewriter from 'typewriter-effect';
import LogoPannel from "./LogoPanel";
import Footer from "./Footer";

const items = [
    {
        id: 1,
        content: "1",
        columnSpan: 1,
        rowSpan: 3,
        hasSpecialBorder: false,
    },
    {
        id: 2,
        content: "2",
        columnSpan: 1,
        rowSpan: 1,
        hasSpecialBorder: false,
    },
    {
        id: 3,
        content: "3",
        columnSpan: 1,
        rowSpan: 1,
        hasSpecialBorder: false,
    },
    {
        id: 4,
        content: "4",
        columnSpan: 1,
        rowSpan: 2,
        hasSpecialBorder: false,
    },
    {
        id: 5,
        content: (
            <LogoPannel
                LogoTekst={"Sander Meijer"}
                logoDescription={[
                    " ",
                    <Typewriter
                        key="typewriter" // Ensure this is keyed for proper re-rendering
                        options={{
                            strings: [
                                'Game Developer 🎮',
                                'Programmer 💻',
                                'Designer ✨',
                                'Team Player 💪',
                                'Artist 🎨',
                                'Coffee Enjoyer ☕',
                            ],
                            delay: 50,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                ]}
            />
        ),
        columnSpan: 2,
        rowSpan: 3,
        hasSpecialBorder: true,
    },
    {
        id: 6,
        content: "6",
        columnSpan: 1,
        rowSpan: 2,
        hasSpecialBorder: false,
    },
    {
        id: 7,
        content: "7",
        columnSpan: 1,
        rowSpan: 2,
        hasSpecialBorder: false,
    },
    {
        id: 8,
        content: <Footer />,
        columnSpan: 1,
        rowSpan: 1,
        hasSpecialBorder: false,
    },
    {
        id: 9,
        content: "9",
        columnSpan: 2,
        rowSpan: 1,
        hasSpecialBorder: false,
    },
];

export default items;