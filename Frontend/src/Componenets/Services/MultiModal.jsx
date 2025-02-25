import React from 'react'
import InsightsIcon from '@mui/icons-material/Insights';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HubIcon from '@mui/icons-material/Hub';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SecurityIcon from '@mui/icons-material/Security';
import { Box, Grid, Card, CardContent, Typography, Button} from '@mui/material';


const services = [
    {
        icon: <InsightsIcon style={{ fontSize: 40 }} />, 
        title: 'AI-Powered Scheduling',
        description: 'Optimize delivery slots with AI-driven scheduling for maximum efficiency.',
        buttonText: 'Learn More',
    },
    {
        icon: <AttachMoneyIcon style={{ fontSize: 40 }} />, 
        title: 'Dynamic Pricing Engine',
        description: 'Adjust delivery costs in real-time based on demand, traffic, and availability.',
        buttonText: 'Learn More',
    },
    {
        icon: <HubIcon style={{ fontSize: 40 }} />, 
        title: 'Hub-Based Optimization',
        description: 'Group deliveries efficiently using centralized hubs to reduce costs and delays.',
        buttonText: 'Learn More',
    },
    {
        icon: <ChatBubbleOutlineIcon style={{ fontSize: 40 }} />, 
        title: 'Real-Time Customer Communication',
        description: 'Session-based messaging between customers and delivery agents.',
        buttonText: 'Learn More',
    },
    // {
    //     icon: <SecurityIcon style={{ fontSize: 40 }} />, 
    //     title: 'Secure CRM & Analytics',
    //     description: 'Track and manage customer interactions with AI-powered CRM and analytics.',
    //     buttonText: 'Learn More',
    // },
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