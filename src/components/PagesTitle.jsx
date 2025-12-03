function PagesTitle(props) {
    return (
        <div className="container my-5">
            <div className="col-md-6 col-sm-2 mx-auto border-bottom border-4 border-primary">
                <h1 className="text-center">{props.title}</h1>
                <p className="text-center mb-4 pb-2">{props.description}</p>
            </div>
        </div>
    );
}

export default PagesTitle;