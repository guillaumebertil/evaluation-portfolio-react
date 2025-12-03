import '../styles/cards.css';

function ServiceCard(props) {
    return (
        <div className="card h-100">
            <div className="card-body mt-4 mb-4">
                <div className="text-primary fs-1 my-4"><i className={props.icon}></i></div>
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.content}</p>
            </div>
        </div>
    );
}

export default ServiceCard;