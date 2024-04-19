import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CourseLearnSyllabusAccordion = () => {

    return (
        <div className='syllabus-accordion'>
            <Accordion className=''>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography>Course Plan</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className='p-2 w-full'>
                    Week 1
                </Typography>
                <Typography className='p-2 w-full'>
                    Week 2
                </Typography>
                <Typography className='p-2 w-full'>
                    Week 3
                </Typography>
                <Typography className='p-2 w-full'>
                    Week 4
                </Typography>
                <Typography className='p-2 w-full'>
                    Week 5
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default CourseLearnSyllabusAccordion;