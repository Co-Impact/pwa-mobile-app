import {Box, Card, CardContent, Chip, Typography} from "@mui/material";
import {FC} from "react";

interface Props {
    skills: string[];
}
export const SkillsSection:FC<Props> = ({ skills }) => {
    const ACCENT_COLOR = '#0A476D';
    return (
        <Card sx={{borderRadius: 3, mb: 3, boxShadow: 1, bgcolor: 'white'}}>
            <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Skills & Endorsements
                </Typography>
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1}}>
                    {skills.map((skill, index) => (
                        <Chip
                            key={index}
                            label={skill}
                            variant="outlined"
                            size="small"
                            // Customizing Chip colors to use the new accent
                            sx={{
                                borderRadius: '8px',
                                borderColor: ACCENT_COLOR,
                                color: ACCENT_COLOR,
                            }}
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    )
};