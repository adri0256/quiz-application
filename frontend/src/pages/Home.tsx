import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';

function HomePage() {
    const navigate = useNavigate();

    const cardInfo = [
        {title: 'Card 1', text: 'Some quick example text'},
        {title: 'Card 2', text: 'Some quick example text'},
        {title: 'Card 3', text: 'Some quick example text'},
        {title: 'Card 4', text: 'Some quick example text'},
        {title: 'Card 5', text: 'Some quick example text'}
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
                    <div className="card-body-button-group">
                        <button className="btn btn-primary">A</button>
                        <button className="btn btn-primary">B</button>
                    </div>
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

export default HomePage;
