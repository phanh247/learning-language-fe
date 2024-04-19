import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CourseLearnSyllabusSubAccordion from './CourseLearnSyllabusSubAccordion';

const CourseLearnDashboardContent = () => {
    return (
        <div className='course-learn-dashboard-content text-left py-[3%] w-3/5'>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography><p className='font-bold text-lg'>Week 1: Who are you?</p></Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <p className='description mb-5 text-sm'>When we first meet someone, we need to learn about each other. In this module, we are going to learn some ways to introduce yourself, including name, nationality, identity, and discussing your family. We are also going to study Chinese Mandarin phonetics.</p>
                    <CourseLearnSyllabusSubAccordion />
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default CourseLearnDashboardContent;