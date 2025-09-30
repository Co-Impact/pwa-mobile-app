import {FC} from "react";
import {Card, CardContent, Typography} from "@mui/material";

interface Props {
    title: string;
    headline: string;
}
export const AboutSection:FC<Props> = ({ title, headline }) =>
    {return(
<Card sx={{borderRadius: 3, mb: 3, boxShadow: 1, bgcolor: 'white'}}>
    <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
            {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {headline}
        </Typography>
    </CardContent>
</Card>
)
}
