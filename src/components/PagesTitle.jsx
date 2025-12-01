function PagesTitle(props) {
    return (
        <div className="container">
            <div className="col-md-6 mx-auto border-bottom border-4 border-primary">
                <h1 className="text-center">{props.title}</h1>
                <p className="text-center"><small>{props.description}</small></p>
            </div>
        </div>
    );
}

export default PagesTitle;