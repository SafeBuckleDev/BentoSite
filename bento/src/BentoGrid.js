import React from "react";
import PropTypes from "prop-types";
import './BentoGrid.css';

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
            content: 
                <div>
                    <p>Test</p>
                </div>,
            columnSpan: 2,
            rowSpan: 1
        },
        {
            id: 3,
            content: 
                <div>
                    <p>Test</p>
                </div>,
            columnSpan: 2,
            rowSpan: 3
        },
        {
            id: 1,
            content: 
                <div>
                    <p>Test</p>
                </div>,
            columnSpan: 1,
            rowSpan: 1
        },
        {
            id: 1,
            content: 
                <div>
                    <p>Test</p>
                </div>,
            columnSpan: 1,
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