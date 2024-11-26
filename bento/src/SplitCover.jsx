import './SplitCover.css'

const SplitCover = ({topPercentage, bottomPercentage, contentTop, contentBottom}) => {
    return(
        <div style={{height: '100%', width: '100%'}}>
            <div className="SplitTop" style={{height: topPercentage}}>
                {contentTop}
            </div>
            <div className="SplitBottom" style={{height: bottomPercentage}}>
                {contentBottom}
            </div>
        </div>
    );
}

export default SplitCover;