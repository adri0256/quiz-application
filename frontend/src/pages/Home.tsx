import React from 'react';
import './Home.css';
import { Navigate, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';

export default function HomePage() {
    const navigate = useNavigate();

    const cardInfo = [
        {title: 'Programozás', text: 'Some quick example text'},
        {title: 'Programozás Gyakorlat', text: 'Some quick example text'},
        {title: 'Projektmunka II.', text: 'Some quick example text'},
        {title: 'Webprogramozás', text: 'Some quick example text'}
    ]
    
    const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        localStorage.removeItem('loggedIn');
        localStorage.removeItem('user');
        localStorage.removeItem('noRooms');

        navigate('/');
    }

    const openCard = (event) => {
        event.preventDefault();

        console.log(event.target.dataset.key);
    }

    const renderCard = (card, index) => {
        return(
        <MDBCard key={index} className="card-custom">
            <MDBCardBody>
                <MDBCardTitle data-key={index} onClick={openCard}>{card.title}</MDBCardTitle>
                <div className="card-body-custom">
                    <MDBCardText>
                        {card.text}
                    </MDBCardText>
                </div>
            </MDBCardBody>
        </MDBCard>
        );
    }

    return (
        !localStorage.getItem('loggedIn') ? <Navigate to='/' /> :
            <div className="homePage">
                <button className="btn btn-primary" onClick={handleLogout}>Logout</button>

                {cardInfo.map(renderCard)}
            </div>
        );
}
