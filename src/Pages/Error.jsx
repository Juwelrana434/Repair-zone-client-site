import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    useEffect(() => {
        document.title = "error";
        })
    return (
        <div>
             <div className="flex flex-col items-center my-auto">
           <h1>Oops !!!! 404 not found</h1> 
           <Link to='/'>Go Home</Link>
        </div>
        </div>
    );
};

export default Error;