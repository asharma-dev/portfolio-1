import React from 'react';
import ResumeLink from '../assets/Resume-Dalbir.pdf';

const Resume = () => {

    return (
        <section className="section-resume">
            <div className="content-resume">
                <object 
                    data={ResumeLink}
                    type="application/pdf"
                    style={{ width: "100%", height: "100%" }} 
                    width="100%" 
                    height="100%">
                    <p>
                        Your web browser doesn't have a PDF plugin. Instead you can 
                        <a href={ResumeLink}>
                            click here to download the PDF file.
                        </a>
                    </p>
                </object>
            </div>
        </section>
    )
}

export default Resume