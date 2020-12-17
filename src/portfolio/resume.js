import React from 'react';
import ResumeLink from '../assets/ResumeDalbir.pdf';

const Resume = () => {

    return (
        <section className="section-resume">
                <iframe
                    style={{ width: "100%", maxWidth: '800px', height: "99vh", border: "none" }}
                    src={ResumeLink}
                    type='application/pdf'
                    title='Resume'
                />
        </section>
    )
}

export default Resume