import React from 'react';
import profile from '../Assets/IMG_3706.JPG'

const About1 = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto sm:text-center lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                About: Md. Aqib Aman
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">I</span>
                            </span>{' '}
                            aspire to be a young tech entrepreneur with excellent coding skills.
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Tech knowledge combined with real-world issue solving results in a brand-new tech startup. I'm on one of those roads.
                        </p>
                    </div>
                    <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                            src={profile}
                            alt=""
                        />
                    </div>
                    <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
                        I have always wanted to be a tech entrepreneur. I've successfully failed three startups, from which I've learned a variety of lessons. Those insights assisted me in completing my studies in two domain fields. The first is to comprehend the business supply chain, and the second is to have a solid grasp of code. I am developing the next huge tech startup with these two skill sets.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About1;