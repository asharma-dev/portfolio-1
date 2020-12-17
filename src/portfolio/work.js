import React from 'react';

const Work = () => {

    const workList = [
        { 
            imgUrl: "carbonprint.jpg", 
            title: "CarbonPrint.ca", 
            link: "https://carbonprint.ca", 
            desc: "Carbonprint is an application build on ReactJS library. I was front-end developer for this project.", 
            techStack: ['ReactJS', 'NodeJS', 'RestAPI', 'Visualization']
        },
        { 
            imgUrl: "blog-noodor.jpg", 
            title: "Blog.NoOdor.com", 
            link: "http://blog.noodor.com", 
            desc: "wordpres site", 
            techStack: ['WordPress Theme Design']
        },
        { 
            imgUrl: "realistings.jpg", 
            title: "Realistings.wmdd.ca", 
            link: "https://realistings.wmdd.ca", 
            desc: "WordPres site", 
            techStack: ['WordPress', 'Custom Posts']
        }
    ]

    return (
        <section className="section-work">
            <h1 className="content-heading">Featured Work</h1>

            <div className="container-work">
                {
                    workList.map( (res, index) => (
                        <div key={index} className="card">

                            <h3 className="card-title"><a href={res.link}>{res.title}</a></h3>
                            
                            <div className="card-image">
                                <img src={process.env.PUBLIC_URL + '/work/' + res.imgUrl} alt="" />
                            </div>
                            
                            <div className="card-content">
                                
                                <ul className="techstack">
                                    { res.techStack.map( (item)=>(
                                        <li>{item}</li>
                                        ))}
                                </ul>

                                {/* <p className="card-desc">{res.desc}</p> */}

                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Work