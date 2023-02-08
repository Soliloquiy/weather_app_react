import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./Weekly.css";

const WeeklyCard = styled(Card) `
    margin: auto;
    margin-top: 30px;
    width: 500px;
    height: 50px;
    border-radius: 50px;
    background-color: rgba(5, 4, 2, 0.2);
`;

const WeeklyCardContent = styled(CardContent) `
    padding-left: 20px;
    display: flex;
    justify-content: space-between;

`;

const Weekly = ({ weekly }) => {
    return (
        weekly.map((item) => {
            return (
                <WeeklyCard key={item.key} sx={{ paddingLeft: 0 }} >
                    <WeeklyCardContent>
                        <Typography sx={{fontSize: 20 }} variant="h5" gutterBottom >
                            {item.day}
                        </Typography>
                        <Typography sx={{ }} variant="h5" gutterBottom >
                            <img className="weekly_icon" src={`https://openweathermap.org/img/w/${item.icon}.png`} alt=""/>
                        </Typography>
                        <Typography component={'div'} sx={{ }} variant="h5" gutterBottom >
                            <Typography component={'div'} sx={{ display: 'flex' }}>
                                <Typography >
                                    {item.high}°C
                                </Typography>
                                <Typography >
                                    <img className='bar' src={'../images/bar.png'} alt=""/>
                                </Typography>
                                <Typography >
                                    {item.low}°C
                                </Typography>
                            </Typography>
                        </Typography>
                    </WeeklyCardContent>
                </WeeklyCard>
            )
        })
    )
}

export default Weekly;