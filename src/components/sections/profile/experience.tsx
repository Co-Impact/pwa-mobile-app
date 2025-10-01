import {Avatar, Box, Card, CardContent, Divider, IconButton, Typography} from "@mui/material";
import React, {FC} from "react";
import {JSX} from "react/jsx-runtime";

interface Props {
    experience: {
        id: string;
        title: string;
        company: string;
        duration: string;
        description: string;
        icon: string;
    }[];
}
export const ExperienceSection: FC<Props> = ({experience}) => {
    const ACCENT_COLOR = '#0A476D';
    const Briefcase = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M10 10h4"/></svg>);
    const Edit = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>);
   return (
        <Card sx={{borderRadius: 3, mb: 3, boxShadow: 1, bgcolor: 'white'}}>
            <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{display: 'flex', alignItems: 'center'}}>
                    <Briefcase style={{marginRight: 8, color: ACCENT_COLOR}}/>
                    Experience
                    <IconButton size="small" sx={{ml: 'auto', color: ACCENT_COLOR}}>
                        <Edit style={{height: 16, width: 16}}/>
                    </IconButton>
                </Typography>
                <Divider sx={{mb: 2}}/>

                {experience.map((job, index) => (
                    <Box key={job.id} sx={{mb: 2, display: 'flex', alignItems: 'flex-start'}}>
                        {/* Company Icon Placeholder */}
                        <Avatar src={job.icon}
                                sx={{width: 40, height: 40, mr: 2, flexShrink: 0, bgcolor: ACCENT_COLOR}}>
                            <Briefcase style={{height: 20, width: 20}}/>
                        </Avatar>

                        <Box sx={{flexGrow: 1}}>
                            <Typography variant="subtitle1" fontWeight="bold">
                                {job.title}
                            </Typography>
                            <Typography variant="body2" color="text.primary">
                                {job.company}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {job.duration}
                            </Typography>
                            <Typography variant="body2" sx={{mt: 1, color: 'text.secondary'}}>
                                {job.description}
                            </Typography>
                        </Box>
                        {index < experience.length - 1 && <Divider sx={{mt: 2}}/>}
                    </Box>
                ))}
            </CardContent>
        </Card>
    );
}