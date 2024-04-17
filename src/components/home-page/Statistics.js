import React from 'react';

const Statistics = () => {
    return (
        <div className='statistics px-[7%] py-[3%]'>
            <div className="statistics__container bg-[#667abe] rounded-xl flex justify-between items-center px-10 py-5">
                <div className="statistics__item p-5">
                    <div className="statistics__number text-4xl font-bold text-[#fbdf00] text-left">
                        100+
                    </div>
                    <div className="statistics__text text-left font-bold uppercase mt-2">
                        course available
                    </div>
                </div>
                <div className="statistics__item p-5">
                    <div className="statistics__number text-4xl font-bold text-[#fbdf00] text-left">
                        10+
                    </div>
                    <div className="statistics__text text-left font-bold uppercase mt-2">
                        language available
                    </div>
                </div>
                <div className="statistics__item p-5">
                    <div className="statistics__number text-4xl font-bold text-[#fbdf00] text-left">
                        100,000+
                    </div>
                    <div className="statistics__text text-left font-bold uppercase mt-2">
                        students worldwide
                    </div>
                </div>
                <div className="statistics__item p-5">
                    <div className="statistics__number text-4xl font-bold text-[#fbdf00] text-left">
                        100+
                    </div>
                    <div className="statistics__text text-left font-bold uppercase mt-2">
                        verified teachers
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;