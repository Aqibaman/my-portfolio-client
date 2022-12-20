import React from 'react';
import { Link } from 'react-router-dom';

const HomeProject = ({ homeProject }) => {
    const { _id, name, sh_des, img1, des1 } = homeProject;

    return (
        <div className="max-w-screen-xl mx-auto card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img className='w-96 h-48' src={img1} alt="" />

            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                <p className='text-xl text-purple-600'>{sh_des}</p>



                <p className='font-bold'>{des1.slice(0, 100)}....</p>
                <div className="card-actions justify-end">
                    <Link to={`/projects/${_id}`}>
                        <button className="btn bg-purple-600 btn-primary font-semibold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeProject;