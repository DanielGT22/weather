import React from 'react';
import Africa from '../assets/Africa.png';
import Europe from '../assets/Europe.png';
import NA from '../assets/NA.png';
import CA from '../assets/CA.png';
import SA from '../assets/SA.png';
import Greenland from '../assets/Greenland.png';
import Asia from '../assets/Asia.png';
import Oceania from '../assets/Oceania.png';
import "../WeatherMap.css"
import { useNavigate } from 'react-router-dom';

const MapComponent = () => {
    const navigate = useNavigate();

    const redirectToCont = (path) => {
        navigate(path);
    };

    return (
        // Per Adesso funziona solo Europe,l'idea principale era una volta scelta la location, la mappa diventa più grande e gli div con il nome della città, paese e gradi attuali viene posizionato sulla mappa .
        // Solo che non riesco a trovare una img con qualita superiore a 920p. 
        <>
        <h1 className='mt-5'>Sto avendo un po' di problemi con i PNG</h1>
        <h3 >Funziona solo l'area verde x adesso</h3>
        <div className="map-container w-100 h-100" style={{ position: 'relative'}}>
            <img className='Africa' src={Africa} alt="Africa" style={{ position: 'absolute' }}  onClick={() => redirectToCont('/africa')}/>
            <img className='Europe' src={Europe} alt="Europe" style={{ position: 'absolute' }}  onClick={() => redirectToCont('/europe')}/>
            <img className='NA' src={NA} alt="North America" style={{ position: 'absolute' }}  onClick={() => redirectToCont('/north-america')}/>
            <img className='CA' src={CA} alt="Central America" style={{ position: 'absolute' }}  onClick={() => redirectToCont('/central-america')}/>
            <img className='SA' src={SA} alt="South America" style={{ position: 'absolute' }}  onClick={() => redirectToCont('/south-america')}/>
            <img className='Asia' src={Asia} alt="Asia" style={{ position: 'absolute' }} onClick={() => redirectToCont('/asia')} />
            <img className='Oceania' src={Oceania} alt="Oceania" style={{ position: 'absolute' }}  onClick={() => redirectToCont('/oceania')}/>
            <img className='Greenland' src={Greenland} alt="Greenland" style={{ position: 'absolute' }}  onClick={() => redirectToCont('/greenland')}/>
        </div>
        </>
    );
};

export default MapComponent;
