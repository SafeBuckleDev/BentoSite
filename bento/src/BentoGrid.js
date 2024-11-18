import React from "react";
import PropTypes from "prop-types";
import './BentoGrid.css';
import LogoPannel from "./LogoPanel";
import Typewriter from 'typewriter-effect';

const BentoItem =({ content, columnSpan, rowSpan}) =>{
    const baseHeight = 100; // Base height for rowSpan
    const additionalHeight = (rowSpan - 1) * 115;
    const height = baseHeight + additionalHeight;

    const style = {
        gridColumn: `span ${columnSpan}`,
        gridRow: `span ${rowSpan}`,
        height: `${height}px`
    };

    return (
        <div className="bento-item" style={style}>
            {content}
        </div>
    );
};

BentoItem.prototypes = {
    content: PropTypes.node.isRequired,
    columnSpan: PropTypes.number.isRequired,
    rowSpan: PropTypes.number.isRequired
};

const BentoGrid = () => {
    const items = [
        {
            id: 1,
            content: "1",
            columnSpan: 1,
            rowSpan: 3
        },
        {
            id: 2,
            content: "2",
            columnSpan: 1,
            rowSpan: 1
        },
        {
            id: 3,
            content: "3",
            columnSpan: 1,
            rowSpan: 1
        },
        {
            id: 4,
            content: "4",
            columnSpan: 1,
            rowSpan: 2
        },
        {
            id: 5,
            content: 
            <LogoPannel
                LogoTekst={"Sander Meijer"}
                logoDescription={[
                    " ",
                    <Typewriter
                        key="typewriter" // Add a key to ensure the component is re-rendered correctly
                        options={{
                            strings: [
                                'Game Developer 🎮',
                                'Programmer 💻',
                                'Designer ✨',
                                'Team Player 💪',
                                'Artist 🎨',
                                'Coffee Enjoyer ☕'
                            ],
                            delay: 50,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                ]}
            />,
            columnSpan: 2,
            rowSpan: 3
        },
        {
            id: 6,
            content: "6",
            columnSpan: 1,
            rowSpan: 2
        },
        {
            id: 7,
            content: "7",
            columnSpan: 1,
            rowSpan: 2
        },
        {
            id: 8,
            content: "8",
            columnSpan: 1,
            rowSpan: 1
        },
        {
            id: 9,
            content: "9",
            columnSpan: 2,
            rowSpan: 1
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
                >
                </BentoItem>
            ))}
        </div>
    );
}

export default BentoGrid;