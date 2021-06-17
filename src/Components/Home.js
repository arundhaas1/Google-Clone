import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerleft">

                    <Link to="/about">About</Link>

                    <Link to="/store">Store</Link>


                </div>
                
                <div className="home__headerright">

                    <Link to="/gmail">Gmail</Link>

                    <Link to="/images">Images</Link>


                </div>
            </div>

            <div className="home__body">

            </div>
        </div>
    )
}

export default Home
