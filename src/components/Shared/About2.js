import React from 'react';
import { Link } from 'react-router-dom';
import gallery1 from '../Assets/38614831_435408483534496_2327462723530522624_n.jpg';
import gallery2 from '../Assets/72684685_1136279203237979_7877021826759524352_n.jpg';
import gallery3 from '../Assets/78456747_1179218205610745_897132777378414592_n.jpg';
import gallery4 from '../Assets/79094690_1196444277221471_5508955513204768768_n.jpg';

const About2 = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                    <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                        <span className="inline-block mb-1 sm:mb-4">
                            My{' '}
                            <br className="hidden md:block" />
                            Accomplishments
                        </span>
                        <div className="h-1 ml-auto duration-300 origin-left transform bg-purple-400 scale-x-30 group-hover:scale-x-100" />
                    </h2>
                    <p className="text-gray-700 lg:text-sm lg:max-w-md">
                        "My accomplishments span a variety of fields, including an internship as a tech entrepreneur at Microsoft. In addition, I underwent a three-day BYLC Entrepreneurship Bootcamp. Furthermore, I attended other seminars where I learned a lot. One of my major accomplishments was coming second in the Hult-prize on campus. Thank you very much!"
                    </p>
                </div>
                <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                    <Link to="/about" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={gallery1}
                                alt=""
                            />
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                <p className="text-sm font-medium tracking-wide text-white">
                                    Microsoft Young Bangla Internship
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/about" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={gallery2}
                                alt=""
                            />
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                <p className="text-sm font-medium tracking-wide text-white">
                                    BYLC Entrepreneurship Bootcamp
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/about" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={gallery3}
                                alt=""
                            />
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                <p className="text-sm font-medium tracking-wide text-white">
                                    Gaining knowledge on different seminars
                                </p>
                            </div>
                        </div>
                    </Link>
                    <Link to="/about" aria-label="View Item">
                        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                            <img
                                className="object-cover w-full h-56 md:h-64 xl:h-80"
                                src={gallery4}
                                alt=""
                            />
                            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                                <p className="text-sm font-medium tracking-wide text-white">
                                    Securing 2nd runner up position on HULT PRIZE On Campus
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About2;