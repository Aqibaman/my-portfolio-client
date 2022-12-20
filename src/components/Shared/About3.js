import React from 'react';
import camp1 from '../Assets/71887206_1136279933237906_8808331110611156992_n.jpg';
import camp2 from '../Assets/72638433_1136279963237903_2556251130262716416_n.jpg';
import camp3 from '../Assets/72677730_1136280046571228_2429732191270338560_n.jpg';

const About3 = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-400">
                            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points=" 8,5 8,1 16,1 16,5"
                                    strokeLinejoin="round"
                                />
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points="9,15 1,15 1,5 23,5 23,15 15,15"
                                    strokeLinejoin="round"
                                />
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points="22,18 22,23 2,23 2,18"
                                    strokeLinejoin="round"
                                />
                                <rect
                                    x="9"
                                    y="13"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    width="6"
                                    height="4"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Tech Entrepreneurship
                                <br className="hidden md:block" />
                                {' '}is my passion for learning {' '}
                                <span className="inline-block text-purple-400">
                                    Coding Languages.
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                The BYLC Entrepreneurship Bootcamp transformed my views about launching a startup business. Many of my startup attempts have failed, but the lessons I've learned about team building, getting a code team to work well together, and dealing with real-world problems to develop practical solutions have served me well. I've since furthered my education in this area and am confident that it will form the basis of my next great business concept.
                            </p>
                        </div>
                        <div>
                            <a
                                href="https://drive.google.com/file/d/1NE6j4VwAdWO8WW39WGpJGR6FPYWZL5vD/view?usp=sharing"
                                target="_blank" rel="noreferrer"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
                            >
                                Email me to learn about my entrepreneurial mistakes
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center -mx-4 lg:pl-8">
                        <div className="flex flex-col items-end px-3">
                            <img
                                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                src={camp1}
                                alt=""
                            />
                            <img
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src={camp2}
                                alt=""
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src={camp3}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About3;