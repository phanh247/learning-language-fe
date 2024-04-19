import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const LessonListAccordion = () => {
    return (
        <div className='lesson-list-accordion'>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <div className='accordion-summary__container flex justify-between items-center w-full'>
                        <div className='accordion-summary__title font-bold'>Module 1: Who Are You?</div>
                        <div className='accordion-summary__duration mr-10'><span>61 lectures</span> | <span>17hr8min</span></div>
                    </div>
                </AccordionSummary>
                
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-video"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Welcome to "Chinese for beginners"</span>
                        </div>
                        <div className="accordion-details__duration">
                            1 minute
                        </div>
                    </div>
                </AccordionDetails>
                
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-video"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>What is Your Name?</span>
                        </div>
                        <div className="accordion-details__duration">
                            3 minutes
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                    <div className='accordion-summary__container flex justify-between items-center w-full'>
                        <div className='accordion-summary__title font-bold'>Module 2: When Do You Go To School?</div>
                        <div className='accordion-summary__duration mr-10'><span>61 lectures</span> | <span>2hrs</span></div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-video"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Can You Count?</span>
                        </div>
                        <div className="accordion-details__duration">
                            4 minutes
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-book-open"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Extended Exercise: What Time is it Now?</span>
                        </div>
                        <div className="accordion-details__duration">
                            10 minutes
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-question"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Numbers</span>
                        </div>
                        <div className="accordion-details__duration">
                            4 minutes
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                    <div className='accordion-summary__container flex justify-between items-center w-full'>
                        <div className='accordion-summary__title font-bold'>Module 3: What Do You Like To Eat?</div>
                        <div className='accordion-summary__duration mr-10'><span>4 lectures</span> | <span>2hrs</span></div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-video"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Can You Count?</span>
                        </div>
                        <div className="accordion-details__duration">
                            4 minutes
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-book-open"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Extended Exercise: What Time is it Now?</span>
                        </div>
                        <div className="accordion-details__duration">
                            10 minutes
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-question"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Numbers</span>
                        </div>
                        <div className="accordion-details__duration">
                            4 minutes
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                    <div className='accordion-summary__container flex justify-between items-center w-full'>
                        <div className='accordion-summary__title font-bold'>Module 4: I Like Shopping!</div>
                        <div className='accordion-summary__duration mr-10'><span>4 lectures</span> | <span>4hrs</span></div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-video"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Can You Count?</span>
                        </div>
                        <div className="accordion-details__duration">
                            4 minutes
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-book-open"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Extended Exercise: What Time is it Now?</span>
                        </div>
                        <div className="accordion-details__duration">
                            10 minutes
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-question"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Numbers</span>
                        </div>
                        <div className="accordion-details__duration">
                            4 minutes
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                    <div className='accordion-summary__container flex justify-between items-center w-full'>
                        <div className='accordion-summary__title font-bold'>Module 5: Do You Live In A Big City?</div>
                        <div className='accordion-summary__duration mr-10'><span>61 lectures</span> | <span>2hrs</span></div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-video"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Can You Count?</span>
                        </div>
                        <div className="accordion-details__duration">
                            4 minutes
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-book-open"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Extended Exercise: What Time is it Now?</span>
                        </div>
                        <div className="accordion-details__duration">
                            10 minutes
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-question"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Numbers</span>
                        </div>
                        <div className="accordion-details__duration">
                            4 minutes
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                    <div className='accordion-summary__container flex justify-between items-center w-full'>
                        <div className='accordion-summary__title font-bold'>Module 6: How About The Weather?</div>
                        <div className='accordion-summary__duration mr-10'><span>61 lectures</span> | <span>2hrs</span></div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-video"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Can You Count?</span>
                        </div>
                        <div className="accordion-details__duration">
                            4 minutes
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-book-open"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Extended Exercise: What Time is it Now?</span>
                        </div>
                        <div className="accordion-details__duration">
                            10 minutes
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-question"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Numbers</span>
                        </div>
                        <div className="accordion-details__duration">
                            4 minutes
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                    <div className='accordion-summary__container flex justify-between items-center w-full'>
                        <div className='accordion-summary__title font-bold'>Module 7: What Is Your Hobby??</div>
                        <div className='accordion-summary__duration mr-10'><span>61 lectures</span> | <span>3hrs</span></div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-video"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Can You Count?</span>
                        </div>
                        <div className="accordion-details__duration">
                            4 minutes
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-book-open"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Extended Exercise: What Time is it Now?</span>
                        </div>
                        <div className="accordion-details__duration">
                            10 minutes
                        </div>
                    </div>
                </AccordionDetails>
                <AccordionDetails>
                    <div className="accordion-details__container flex justify-between items-center">
                        <div className="accordion-details__title">
                            <span className='inline-block mr-5 w-6 h-6'><i class="fa-solid fa-question"></i></span>
                            <span className='cursor-pointer hover:underline hover:text-[#3150aa]'>Numbers</span>
                        </div>
                        <div className="accordion-details__duration">
                            4 minutes
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
    </div>
    );
};

export default LessonListAccordion;