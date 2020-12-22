import React from 'react';
import ResumeLink from '../assets/Resume-Dalbir.pdf';

const Resume = () => {

    return (
        <section className="section-resume">
                <iframe
                    style={{ width: "100%", maxWidth: '900px', height: "90vh", border: "none" }}
                    src={ResumeLink}
                    type='application/pdf'
                    title='Resume'
                />
        </section>
    )
}

export default Resume