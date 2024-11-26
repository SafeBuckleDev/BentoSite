import './GifHoverer.css';

const GifHoverer = ({img, title}) => {
    return(
        <div className='Hoverer'>
            <h2 className="SpecialTekst">{title}</h2>
            <img src={img} />
        </div>
    );
}

export default GifHoverer;