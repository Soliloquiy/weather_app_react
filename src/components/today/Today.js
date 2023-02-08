import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./Today.css"

const TodayCard = styled(Card) `
    margin: auto;
    margin-top: 50px;
    width: 300px;
    border-radius: 50px;
    background-color: rgba(5, 4, 2, 0.2);
`;

const TodayCardContent = styled(CardContent) `
    padding-left: 90px;

`;

const Today = ({ current: {city, country, avgTemp, description, low, high, morning, evening, night} }) => {

    return (
    <TodayCard sx={{ paddingLeft: 0 }} >
        <TodayCardContent>
        <Typography sx={{ paddingLeft: 0 }} variant="h5" gutterBottom >
            {city}, {country}
        </Typography>
        <Typography sx={{ paddingLeft: 0 }} variant="h5" component="div">
            {avgTemp}°C
        </Typography>
        <Typography sx={{ mb: 1.5, paddingLeft: 0, textTransform: 'capitalize' }} color="text.secondary">
            {description}
        </Typography>
        <Typography sx={{ fontSize: 15}} variant="h6">
            H : {high}°C - L : {low}°C
        </Typography>
        <Typography component={'div'} sx={{ width: 3, paddingLeft: 1}} variant="body2">
            <div className='icon_container'>
                <div>
                    <img className="icon" src="../images/morningicon.png" alt=""/> 
                    <span>{morning}°C</span>
                </div>
                <div>
                    <img className="icon" src="../images/eveningicon.png" alt=""/>
                    <span>{evening}°C</span>
                </div>
                <div>
                    <img className="icon" src="../images/nighticon.png" alt=""/>
                    <span>{night}°C</span>
                </div>
            </div>
        </Typography>
        </TodayCardContent>
    </TodayCard>
    )
}

export default Today;
  