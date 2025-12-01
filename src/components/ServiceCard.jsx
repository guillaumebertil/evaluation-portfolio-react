import '../styles/cards.css';

function ServiceCard(props) {
    return (
        <div className="card h-100">
            <div className="card-body">
                <div className="text-primary fs-1"><i className={props.icon}></i></div>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
            </div>
        </div>
    );
}

export default ServiceCard;