import React from 'react';

const Jumbotron = () => {
    return (
        <>
            <div className="p-5 mb-5 bg-body-tertiary rounded-3 bg-light">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                    <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil adipisci ab vitae asperiores eveniet nisi delectus fugiat temporibus optio veritatis harum alias ipsa, laborum voluptate iusto, repellendus et voluptatem dolore.</p>
                    <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
                </div>
            </div>
        </>
    );
} 

export default Jumbotron;