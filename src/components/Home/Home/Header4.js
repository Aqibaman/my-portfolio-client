import React from 'react';
import Lottie from 'lottie-react';

import Coder from '../../Assets/75146-development.json'

const Header4 = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                                    Md. Aqib Aman
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-dark sm:text-4xl sm:leading-none">
                                The Junior Front-end Developer
                                <br className="hidden md:block" />
                                in the Web{' '}
                                <span className="inline-block text-deep-purple-accent-400">
                                    Development Road
                                </span>
                            </h2>
                            <p className="text-base text-dark md:text-lg">
                                Thank you for looking at my profile. Please review my resume, and if you are interested, please contact me at the email address listed in my résumé. Thank you once more!
                            </p>
                        </div>
                        <a
                            href="https://drive.google.com/file/d/1NE6j4VwAdWO8WW39WGpJGR6FPYWZL5vD/view?usp=sharing"
                            target="_blank" rel="noreferrer"
                            className="w-56 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                            aria-label="See My Resume"
                            title="See My Resume"
                        >
                            See My Resume
                        </a>
                    </div>
                    <div className="relative">
                        <Lottie animationData={Coder} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header4;