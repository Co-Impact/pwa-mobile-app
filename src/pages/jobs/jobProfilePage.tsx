import {
    Avatar,
    Box,
    Button,
    Chip,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import {CardContent, Grid} from "@mui/joy";
import {SVGProps} from "react";
import {JSX} from "react/jsx-runtime";

const JobProfilePage = () => {
    const ACCENT_COLOR = '#0A476D';
    const BANNER_COLOR = '#78BF98';
    const MapPin = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>);
    const Briefcase = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M10 10h4"/></svg>);
    const Users = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
    const Check = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>);
    const Clock = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
    const DollarSign = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>);
    const job = {
        id: 'job-456',
        title: 'Senior UX Manager',
        company: 'Global Tech',
        location: 'San Francisco, CA (Hybrid)',
        type: 'Full-time',
        salary: '$140k - $170k / year',
        postedDate: '2 days ago',
        submissions: 157,
        appUsersWorkingThere: ['Jane Doe', 'Mark Chen', '4 others'],
        companyLogo: 'https://placehold.co/60x60/546E7A/ffffff?text=GT',
        description: "Lead and manage a team of product designers focusing on scalable design solutions for our flagship cloud platform. You will be responsible for defining the user experience strategy, fostering a strong design culture, and collaborating closely with product management and engineering leaders. Requires 7+ years of experience in UX/Product Design, with 3+ years in a management role. Proven ability to mentor designers and drive complex projects from concept to launch.",
        responsibilities: [
            'Develop and drive the long-term UX strategy in alignment with business goals.',
            'Manage, mentor, and grow a team of product designers.',
            'Oversee the creation and maintenance of the company’s design system.',
            'Collaborate cross-functionally to translate complex requirements into intuitive user flows.',
            'Present design concepts and rationale to executive stakeholders.',
        ],
    };
    return (
        <Container sx={{maxWidth: 800, mx: 'auto', mt: 3, p: {xs: 0, sm: 2}}}>
                {/* Using { xs: 1.5, sm: 2 } to tighten horizontal padding on mobile */}
                <CardContent sx={{pb: 0, px: {xs: 1.5, sm: 2}}}>
                    {/* Job Header */}
                    <Box sx={{display: 'flex', alignItems: 'center', mb: 2, pt: 1}}>
                        <Avatar src={job.companyLogo}
                                sx={{width: 60, height: 60, mr: 2, bgcolor: BANNER_COLOR, flexShrink: 0}}>
                            <Briefcase style={{color: 'white'}}/>
                        </Avatar>
                        <Box sx={{minWidth: 0}}>
                            {/* Title text should wrap without overflowing */}
                            <Typography variant="h6" fontWeight="bold"
                                        sx={{color: ACCENT_COLOR, overflowWrap: 'break-word'}}>
                                {job.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {job.company}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Job Metadata - Adjusted padding for more compactness on mobile */}
                    <Grid container spacing={1} sx={{mb: 2}}>
                        <Grid xs={12} sm={4}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: 'text.secondary',
                                p: {xs: 0.75, sm: 1},
                                bgcolor: '#f9f9f9',
                                borderRadius: 2
                            }}>
                                <MapPin style={{marginRight: 6, height: 18, width: 18}}/>
                                <Typography variant="body2">{job.location}</Typography>
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: 'text.secondary',
                                p: {xs: 0.75, sm: 1},
                                bgcolor: '#f9f9f9',
                                borderRadius: 2
                            }}>
                                <Clock style={{marginRight: 6, height: 18, width: 18}}/>
                                <Typography variant="body2">{job.type} ({job.postedDate})</Typography>
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={4}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                color: 'text.secondary',
                                p: {xs: 0.75, sm: 1},
                                bgcolor: '#f9f9f9',
                                borderRadius: 2
                            }}>
                                <DollarSign style={{marginRight: 6, height: 18, width: 18}}/>
                                <Typography variant="body2">{job.salary}</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Divider sx={{my: 2}}/>

                    {/* Social Proof Section - Reduced padding and internal margin on mobile, hid secondary text */}
                    <Box sx={{
                        mb: 3,
                        p: {xs: 1.5, sm: 2},
                        bgcolor: '#e0f2f1',
                        borderRadius: 2,
                        border: `1px solid ${ACCENT_COLOR}`
                    }}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{mb: 1, color: ACCENT_COLOR}}>
                            Application Insights
                        </Typography>

                        {/* Submitted Count - Reduced bottom margin on mobile */}
                        <Box sx={{display: 'flex', alignItems: 'center', mb: {xs: 1, sm: 1.5}}}>
                            <Chip
                                label={`${job.submissions} Submissions`}
                                icon={<Check style={{height: 18, width: 18}}/>}
                                sx={{bgcolor: ACCENT_COLOR, color: 'white', fontWeight: 'bold'}}
                            />
                            <Typography variant="body2" color="text.secondary"
                                        sx={{ml: 2, display: {xs: 'none', sm: 'block'}}}>
                                This role is highly competitive!
                            </Typography>
                        </Box>

                        {/* Users Working There */}
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Users style={{color: ACCENT_COLOR, marginRight: 8, height: 20, width: 20}}/>
                            <Typography variant="body2" fontWeight="medium">
                                {job.appUsersWorkingThere.slice(0, 2).join(', ')} and {job.appUsersWorkingThere.length - 2} {job.appUsersWorkingThere.length - 2 === 1 ? 'other' : 'others'} work
                                here.
                            </Typography>
                        </Box>
                    </Box>


                    {/* Job Description */}
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Job Description
                    </Typography>
                    <Typography variant="body2" color="text.primary" sx={{mb: 3}}>
                        {job.description}
                    </Typography>

                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Key Responsibilities
                    </Typography>
                    <List sx={{p: 0, mb: 3}}>
                        {job.responsibilities.map((res, index) => (
                            <ListItem key={index} sx={{py: 0.5, px: 0, alignItems: 'flex-start'}}>
                                <ListItemIcon sx={{minWidth: 30, mt: '4px'}}>
                                    <Box sx={{width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT_COLOR}}/>
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography variant="body2" color="text.primary">
                                        {res}
                                    </Typography>
                                }/>
                            </ListItem>
                        ))}
                    </List>

                </CardContent>

                {/* Sticky/Fixed Apply Button (Mobile Focus) */}
                <Box sx={{
                    p: 2,
                    borderTop: '1px solid #eee',
                    position: {xs: 'sticky', md: 'static'}, // Sticky on mobile
                    bottom: 0,
                    bgcolor: 'white',
                    zIndex: 10,
                    mt: 0
                }}>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            bgcolor: ACCENT_COLOR,
                            py: 1.5,
                            fontWeight: 'bold',
                            borderRadius: 2,
                            '&:hover': {bgcolor: '#006666'}
                        }}
                        onClick={() => console.log('Applying for the job!')}
                    >
                        Easy Apply
                    </Button>
                </Box>
        </Container>
    )
};
export default JobProfilePage;
