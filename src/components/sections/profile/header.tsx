import {Avatar, Box, Card, CardContent, IconButton, Typography} from "@mui/material";
import React, {FC} from "react";
import {JSX} from "react/jsx-runtime";

interface Props {
    user: {
        name: string;
        title: string;
        currentCompany: string;
        location: string;
        profilePicUrl: string;
    };
}

export const ProfileHeader: FC<Props> = ({user}) => {
    const ACCENT_COLOR = '#008080'; // Muted Teal/Cyan
    const MapPin = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>);
    const Edit = (props:JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>);
    const Coffee = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1"/><path d="M8 8H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-1"/><path d="M12 22a4 4 0 0 0 4-4v-1H8v1a4 4 0 0 0 4 4z"/></svg>);
    return (
        <Card sx={{borderRadius: 3, mb: 3, boxShadow: 3, overflow: 'visible', bgcolor: 'white', paddingTop:"8px"}}>
            <CardContent sx={{pt: 0, px: 2, pb: '16px !important'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                    <Avatar
                        alt={user.name}
                        src={user.profilePicUrl}
                        sx={{
                            width: {xs: 88, sm: 100},
                            height: {xs: 88, sm: 100},
                            border: '4px solid white',
                            boxShadow: 3,
                        }}
                    />
                    <IconButton sx={{mt: 1, color: ACCENT_COLOR}}>
                        <Edit/>
                    </IconButton>
                </Box>

                {/* Primary Info */}
                <Box sx={{mt: 2}}>
                    <Typography variant="h5" component="div" fontWeight="bold">
                        {user.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" sx={{mt: 0.5}}>
                        {user.title} at {user.currentCompany}
                    </Typography>
                    <Box sx={{display: 'flex', alignItems: 'center', mt: 1, color: 'text.secondary'}}>
                        <MapPin style={{marginRight: 4, height: 16, width: 16}}/>
                        <Typography variant="body2">{user.location}</Typography>
                    </Box>

                    {/* Changed from 'followers' to 'coffee meetings' and updated color */}
                    <Box sx={{display: 'flex', alignItems: 'center', mt: 1, color: ACCENT_COLOR}}>
                        <Coffee style={{marginRight: 4, height: 16, width: 16}}/>
                        <Typography variant="body2" fontWeight="medium">
                            150+ coffee meetings
                        </Typography>
                    </Box>

                </Box>
            </CardContent>
        </Card>
    );
}