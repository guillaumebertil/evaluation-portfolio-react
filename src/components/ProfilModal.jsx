import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ProfilModal.css'


function ProfilModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user, setUser] = useState(null);

    const getUsers = async () => {
        const res = await fetch('https://api.github.com/users/github-john-doe')
        const json = await res.json()
        setUser(json);
    };

    useEffect(() => {
        getUsers();
    }, [])

  return (
    <div>
        <Button variant="danger" onClick={handleShow}>
            En savoir plus
        </Button>

        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>Mon profil GitHub</Modal.Title>
            </Modal.Header>
            
            <Modal.Body className='modal-body'>
                {user ? (
                    <div className='d-flex align-items-center'>
                        {/* Avatar */}
                        <img src={user.avatar_url} alt="Avatar de John Doe" className='avatar'/>

                        {/* Informations */}
                        <ul className='list-unstyled'>
                            {/* User */}
                            <li className='pb-1 ps-2 mb-1 border-bottom border-secondary'>
                                <i className='bi bi-person'></i> <a href={user.html_url} target='_blank' rel='noopener noreferrer nofollow'>{user.name}</a>
                            </li>
                            {/* Localisation */}
                            <li className='pb-1 ps-2 mb-1 border-bottom border-secondary'>
                                <i className='bi bi-geo-alt'>{user.location}</i>
                            </li>
                            {/* Bio */}
                            <li className='pb-1 ps-2 mb-1 border-bottom border-secondary'>
                                <i className='bi bi-card-text'></i> {user.bio}
                            </li>
                            {/* Repositories */}
                            <li className='pb-1 ps-2 mb-1 border-bottom border-secondary'>
                                <i className='bi bi-box'></i> Repositories : {user.public_repos}
                            </li>
                            {/* Follwers */}
                            <li className='pb-1 ps-2 mb-1 border-bottom border-secondary'>
                                <i className='bi bi-people'></i> Followers : {user.followers}
                            </li>
                            {/* Following */}
                            <li className='ps-2'>
                                <i className='bi bi-people'></i> Following : {user.following}
                            </li>
                        </ul>
                    </div>
                ) : (
                    <p>Chargement...</p>
                )}

            </Modal.Body>
        
            <Modal.Footer className='modal-footer'>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
}

export default ProfilModal;