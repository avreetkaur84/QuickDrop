import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DroneIcon from '@mui/icons-material/AirplanemodeActive';
import EmergencyIcon from '@mui/icons-material/HealthAndSafety';
import { Box, Grid, Card, CardContent, Typography, Button} from '@mui/material';


const services = [
    {
        icon: <DroneIcon style={{ fontSize: 40 }} />,
        title: 'Drone Delivery',
        description: 'Ultra-fast delivery using drones for lightweight items.',
        buttonText: 'Learn More',
    },
    {
        icon: <LocalShippingIcon style={{ fontSize: 40 }} />,
        title: 'Standard Delivery',
        description: 'Regular, affordable delivery using traditional vehicles.',
        buttonText: 'Learn More',
    },
    {
        icon: <LocalShippingIcon style={{ fontSize: 40 }} />,
        title: 'Express Delivery',
        description: 'Get your items delivered within hours for urgent needs.',
        buttonText: 'Learn More',
    },
    {
        icon: <EmergencyIcon style={{ fontSize: 40 }} />,
        title: 'Emergency Delivery',
        description: 'Critical, emergency deliveries for time-sensitive orders.',
        buttonText: 'Learn More',
    },
];

function MultiModal() {
    return (
        <div className='pb-5 pt-16'>
            <Box my={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    Multi-Modal Delivery Options
                </Typography>
                <Typography variant="subtitle1" align="center" paragraph>
                    Choose from various delivery methods based on your urgency and preferences.
                </Typography>

                <Grid container spacing={4} className='pt-10'>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card 
                                className='shadow-xl'
                                style={{backgroundImage: "radial-gradient( circle 1224px at 10.6% 8.8%,  rgba(255,255,255,1) 0%, rgba(153,202,251,1) 100.2% )"}}>
                                <CardContent>
                                    <Box textAlign="center" mb={2}>
                                        {service.icon}
                                    </Box>
                                    <Typography variant="h6" align="center">
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body2" align="center" paragraph>
                                        {service.description}
                                    </Typography>
                                    <Box textAlign="center">
                                        <Button variant="contained" color="primary">
                                            {service.buttonText}
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

export default MultiModal