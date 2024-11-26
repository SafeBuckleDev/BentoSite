import React from "react";
import PropTypes from "prop-types";
import './BentoGrid.css';
import items from "./items";

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
            <div className="bento-outer">
                {content}
            </div>
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
