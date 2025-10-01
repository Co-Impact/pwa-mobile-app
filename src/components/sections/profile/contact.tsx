import {Box, Card, CardContent, Typography} from "@mui/material";
import React, {FC} from "react";
import {JSX} from "react/jsx-runtime";

interface Props {
    contact: {
        email: string;
        phone: string;
        linkedin: string;
    };
}

export const ContactSection: FC<Props> = ({contact}) => {
    const ACCENT_COLOR = '#0A476D';
    const Mail = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7"/></svg>);
    const Phone = (props:JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.7-6.7A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7a2 2 0 0 1 1.72 2z"/></svg>);
    const LinkedinIcon = (props:JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>);
    return (
        <Card sx={{borderRadius: 3, mb: 3, boxShadow: 1, bgcolor: 'white'}}>
            <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Contact Info
                </Typography>
                <Box sx={{'& > div': {display: 'flex', alignItems: 'center', mb: 1.5}}}>
                    <div>
                        {/* Updated icon color */}
                        <Mail style={{color: ACCENT_COLOR, marginRight: 8}}/>
                        <Typography variant="body2">{contact.email}</Typography>
                    </div>
                    <div>
                        {/* Updated icon color */}
                        <Phone style={{color: ACCENT_COLOR, marginRight: 8}}/>
                        <Typography variant="body2">{contact.phone}</Typography>
                    </div>
                    <div>
                        {/* Updated icon color and link color */}
                        <LinkedinIcon style={{color: ACCENT_COLOR, marginRight: 8}}/>
                        <Typography variant="body2" component="a" href={`https://${contact.linkedin}`} target="_blank"
                                    rel="noopener noreferrer" sx={{color: ACCENT_COLOR, textDecoration: 'none'}}>
                            {contact.linkedin}
                        </Typography>
                    </div>
                </Box>
            </CardContent>
        </Card>
    );
}