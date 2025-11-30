function ProfilCard() {
    return (
        <div className='card' style={{ width: '66%', maxWidth: '1200px', margin: '5vh auto' }}>
            <div className='card-body'>
                <div className='container'>
                    <div className='row'>
                        {/* À propose */}
                        <div className='col-lg-6 col-12 border-bottom border-primary border-3 bg-danger'>
                            <h3>A propos</h3>
                        </div>

                        {/* Mes compétences */}
                        <div className='col-lg-6 col-12 border-bottom border-primary border-3 bg-warning'>
                            <h3>Mes compétences</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilCard;