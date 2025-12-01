import '../styles/cards.css';

function PortfolioCard(props) {
    return (
        <div className="card h-100">
            {/* Image */}
            <img src={props.image} className="card-img-top" alt={props.title}></img>

            {/* Card body */}
            <div className="card-body">
                {/* Card title */}
                <h5 className="card-title">{props.title}</h5>

                {/* Card content */}
                <p className="card-text">{props.content}</p>
                <a href="#" className="btn btn-primary">Voir le site</a>
            </div>

            {/* Card footer */}
            <div className="card-footer text-muted">
                <p>{props.rea}</p>
            </div>
        </div>
    );
}

export default PortfolioCard;