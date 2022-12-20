import React, { useEffect, useState } from 'react';
import Header from './Header';
import Header2 from './Header2';
import Header4 from './Header4';
import HomeProject from './HomeProject';

const Home = () => {
    const [homeProjects, setHomeProjects] = useState([]);
    useEffect(() => {
        fetch('https://my-portfolio-server-ecru.vercel.app/projects')
            .then(res => res.json())
            .then(data => setHomeProjects(data))
    }, [])
    return (
        <div>
            <Header4></Header4>
            <Header2></Header2>
            <Header></Header>
            <section>
                <div className='my-20'>
                    <div>
                        <p className="text-2xl text-center font-bold text-purple-600">See My Projects On</p>
                        <h2 className='text-5xl text-center font-semibold'>Web Development</h2>
                        <p className=' text-center my-5'>I will provide you my potential learning on this field. This projects wil help you to understand my capability. <br /> I will try my best to perform with my knowledge  on coding.</p>
                    </div>
                    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                        {
                            homeProjects?.map(homeProject => <HomeProject key={homeProject?._id} homeProject={homeProject}></HomeProject>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;