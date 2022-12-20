import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { CgWebsite } from 'react-icons/cg'
import { FaGithub } from 'react-icons/fa'

const ProjectDetails = () => {
    const { _id, name, sh_des, live_site, client_repo, server_repo, img1, img2, img3, des1, des2, des3, des4, des5, title2, title3 } = useLoaderData();
    console.log(_id);
    return (
        <div className='-z-10'>
            <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                {name}
                                <br />
                                Project on: {' '}
                                <span className="relative px-1">
                                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-400" />
                                    <span className="relative inline-block text-purple-400">
                                        {sh_des}
                                    </span>
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                {des1}
                            </p>
                        </div>
                        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            <div className="bg-white border-l-4 shadow-sm border-purple-400">
                                <div className="h-full w-full p-5 border border-1-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5 flex gap-1">
                                        <a href={live_site} target="_blank" rel="noreferrer">
                                            <button className="btn bg-purple-600 btn-primary font-semibold"><CgWebsite /> <span>Website</span></button>
                                        </a>
                                        <a href={client_repo} target="_blank" rel="noreferrer">
                                            <button className="btn bg-purple-600 btn-primary font-semibold"><FaGithub /> <span>Client Repo</span></button>
                                        </a>
                                        <a href={server_repo} target="_blank" rel="noreferrer">
                                            <button className="btn bg-purple-600 btn-primary font-semibold"><FaGithub /> <span>Server Repo</span></button>
                                        </a>
                                    </h6>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src={img1}
                            alt=""
                        />

                    </div>

                </div>
            </section>



            <section className='max-w-[1300px] mx-auto'>
                <div className="relative flex flex-col-reverse gap-5 px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
                    <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
                        <img

                            src={img2}
                            alt=""
                        />

                    </div>
                    <div className="relative flex justify-end max-w-xl mx-auto xl:pr-24 lg:max-w-screen-xl">
                        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
                            <div className="max-w-xl mb-6">
                                <div>
                                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                                        Project Details
                                    </p>
                                </div>
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-dark  sm:text-4xl sm:leading-none">

                                    <span className="inline-block text-purple-600">
                                        {title2}
                                    </span>

                                </h2>
                                <p className="text-base text-dark md:text-lg">
                                    {des2}
                                </p>
                            </div>
                            <form>


                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">
                                <div>
                                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                                        Project Details
                                    </p>
                                </div>
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-dark sm:text-4xl sm:leading-none">

                                    <span className="inline-block text-purple-600">
                                        {title3}
                                    </span>
                                </h2>
                                <p className="text-base text-dark md:text-lg">
                                    {des3}
                                </p>
                            </div>

                        </div>
                        <div className="relative">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col lg:flex-row">
                        <div className="max-w-xl pr-16 mx-auto mb-10">
                            <h5 className="mb-6 text-3xl font-extrabold leading-none">
                                Build big projects with me
                            </h5>
                            <p className="mb-6 text-gray-900">
                                Here you may find a summary of the projects I've worked on and the resources I've found helpful. Please feel free to put me in touch with your large team so that we can work together on future incredible initiatives. Please get in touch as soon as possible.
                            </p>
                            <div className="flex items-center gap-5">
                                <a
                                    href="https://drive.google.com/file/d/1NE6j4VwAdWO8WW39WGpJGR6FPYWZL5vD/view?usp=sharing"
                                    target="_blank" rel="noreferrer"
                                    className="w-28 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                    aria-label="See My Resume"
                                    title="See My Resume"
                                >
                                    Hire Me
                                </a>
                                <Link
                                    to="/about"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
                                >
                                    Know Me
                                </Link>
                            </div>
                        </div>
                        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                            <div className="max-w-md">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 text-purple-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                    </svg>

                                </div>
                                <h6 className="mb-2 font-semibold leading-5 text-2xl">Summary</h6>
                                <p className="text-lg text-gray-700">
                                    {des4}
                                </p>
                            </div>
                            <div className="max-w-md">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12 text-purple-600">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                    </svg>

                                </div>
                                <h6 className="mb-2 font-semibold leading-5 text-2xl">Technologies</h6>
                                <p className="text-lg text-gray-700">
                                    {des5}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ProjectDetails;