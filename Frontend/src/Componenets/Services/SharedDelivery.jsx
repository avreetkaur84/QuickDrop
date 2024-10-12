import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';

const sharedDeliveryOptions = [
    {
        icon: <GroupIcon style={{ fontSize: 40 }} />,
        title: 'Group Delivery',
        description: 'Share deliveries with nearby customers and save on costs.',
        buttonText: 'Learn More',
    },
    {
        icon: <ChatIcon style={{ fontSize: 40 }} />,
        title: 'Community Chat',
        description: 'Coordinate with others using our in-app chat for shared deliveries.',
        buttonText: 'Join Group Chat',
    },
];

function SharedDelivery() {
    return (
        <div className='py-10'>
            <Box my={5}>
                <Typography variant="h4" align="center" gutterBottom>
                    Shared Delivery Options
                </Typography>
                <Typography variant="subtitle1" align="center" paragraph>
                    Save money and enhance efficiency by sharing deliveries with others nearby.
                </Typography>

                <Grid container spacing={4} className='pt-10'>
                    {sharedDeliveryOptions.map((option, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Card>
                                <CardContent>
                                    <Box textAlign="center" mb={2}>
                                        {option.icon}
                                    </Box>
                                    <Typography variant="h6" align="center">
                                        {option.title}
                                    </Typography>
                                    <Typography variant="body2" align="center" paragraph>
                                        {option.description}
                                    </Typography>
                                    <Box textAlign="center">
                                        <Button variant="contained" color="secondary">
                                            {option.buttonText}
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

export default SharedDelivery
