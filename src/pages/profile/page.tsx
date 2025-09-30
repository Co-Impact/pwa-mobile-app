import React from 'react';
import {Box} from '@mui/material';
import {AboutSection} from "../../components/sections/profile/about.tsx";
import {SkillsSection} from "../../components/sections/profile/skills.tsx";
import {ExperienceSection} from "../../components/sections/profile/experience.tsx";
import {ContactSection} from "../../components/sections/profile/contact.tsx";
import {ProfileHeader} from "../../components/sections/profile/header.tsx";

const userData = {
    id: 'user-123',
    name: 'Alex Johnson',
    title: 'Senior Product Designer',
    currentCompany: 'Tech Innovators Co.',
    location: 'San Francisco Bay Area',
    headline: 'Passionate designer focused on creating intuitive and visually stunning user experiences.',
    profilePicUrl: 'https://placehold.co/120x120/546E7A/ffffff?text=AJ', // Updated background placeholder color
    contact: {
        email: 'alex.j@example.com',
        phone: '+1 555-1234',
        linkedin: 'alexjohnson_profile',
    },
    skills: ['UX Design', 'UI Prototyping', 'Figma', 'User Research', 'Design Systems', 'Mobile App Design'],
    experience: [
        {
            id: "1",
            title: 'Senior Product Designer',
            company: 'Tech Innovators Co.',
            duration: 'Jan 2022 - Present (2 yrs 8 mos)',
            description: 'Led end-to-end design for the flagship mobile application, resulting in a 25% increase in user engagement. Mentored junior designers on best practices and design systems.',
            icon: 'https://placehold.co/40x40/008080/ffffff?text=TI', // Updated placeholder icon color
        },
        {
            id: "2",
            title: 'UX/UI Designer',
            company: 'Creative Studio',
            duration: 'Jul 2018 - Dec 2021 (3 yrs 6 mos)',
            description: 'Designed responsive web platforms and conducted usability testing for various clients across the finance and health sectors.',
            icon: 'https://placehold.co/40x40/008080/ffffff?text=CS', // Updated placeholder icon color
        },
        {
            id: "3",
            title: 'Design Intern',
            company: 'Startup Lab',
            duration: 'May 2017 - Aug 2017 (4 mos)',
            description: 'Assisted the design team with creating wireframes and basic prototypes for a new e-commerce product.',
            icon: 'https://placehold.co/40x40/008080/ffffff?text=SL', // Updated placeholder icon color
        },
    ],
};

const App = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#f4f2ee', // LinkedIn background color approximation
                p: { xs: 2, md: 4 }, // Padding adapts to screen size
                fontFamily: 'Inter, sans-serif'
            }}
            className="tailwind-inter"
        >
            <Box
                sx={{
                    maxWidth: 900,
                    mx: 'auto',
                }}
            >
                <ProfileHeader user={userData} />
                <Box
                    sx={{
                        display: 'grid',
                    }}
                >
                    <Box>
                        <AboutSection title={userData.title} headline={userData.headline}/>
                        <ExperienceSection experience={userData.experience} />
                    </Box>
                    <Box>
                        <SkillsSection skills={userData.skills} />
                        <ContactSection contact={userData.contact} />
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default App;
