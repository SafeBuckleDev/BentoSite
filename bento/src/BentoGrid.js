import React from "react";
import PropTypes from "prop-types";
import './BentoGrid.css';
import LogoPannel from "./LogoPanel";
import Typewriter from 'typewriter-effect';
import Footer from "./Footer";

// BentoItem component
const BentoItem = ({ content, columnSpan, rowSpan, hasSpecialBorder }) => {
    const baseHeight = 100; // Base height for rowSpan
    const additionalHeight = (rowSpan - 1) * 115;
    const height = baseHeight + additionalHeight;

    const style = {
        gridColumn: `span ${columnSpan}`,
        gridRow: `span ${rowSpan}`,
        height: `${height}px`
    };

    // Conditionally add the 'specialBorder' class based on the 'hasSpecialBorder' prop
    const itemClass = hasSpecialBorder ? 'bento-item specialBorder' : 'bento-item';

    return (
        <div className={itemClass} style={style}>
            {content}
        </div>
    );
};

// Correctly define propTypes
BentoItem.propTypes = {
    content: PropTypes.node.isRequired,
    columnSpan: PropTypes.number.isRequired,
    rowSpan: PropTypes.number.isRequired,
    hasSpecialBorder: PropTypes.bool, // Ensure this is defined
};

const BentoGrid = () => {
    // Define items with 'hasSpecialBorder' where necessary
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

    return (
        <div className="bento-grid">
            {items.map((item) => (
                <BentoItem
                    key={item.id}
                    columnSpan={item.columnSpan}
                    rowSpan={item.rowSpan}
                    content={item.content}
                    hasSpecialBorder={item.hasSpecialBorder}
                />
            ))}
        </div>
    );
}

export default BentoGrid;
