import './TagScroller.css'

const Scroller = ({tags, speed}) =>{
    const tagList = tags.map((tag) => ({
        id: crypto.randomUUID(),
        tag
      }));

    return(
        <div className="inner">
            <div className="wrapper">
                <section style={{ "--speed": `${speed}ms` }}>
                {tagList.map(({ id, tag }) => (
                    <div className="skillTag" key={id}>
                        <p>{tag}</p>
                    </div>
                ))}
                </section>
                <section style={{ "--speed": `${speed}ms` }}>
                {tagList.map(({ id, tag }) => (
                    <div className="skillTag" key={id}>
                        <p>{tag}</p>
                    </div>
                ))}
                </section>
                <section style={{ "--speed": `${speed}ms` }}>
                {tagList.map(({ id, tag }) => (
                    <div className="skillTag" key={id}>
                        <p>{tag}</p>
                    </div>
                ))}
                </section>
            </div>
        </div>
    );
};

export { Scroller };