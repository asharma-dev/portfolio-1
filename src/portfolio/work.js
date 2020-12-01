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
            techStack: ['list', 'list2']
        }
    ]

    return (
        <section className="section-work">
            <h1 className="content-heading">Featured Work</h1>

            <div className="container-work">
                {
                    workList.map( (res, index) => (
                        <div key={index} className="card">
                            <div className="card-image">
                                <img src={process.env.PUBLIC_URL + '/work/' + res.imgUrl} alt="" />
                            </div>
                            <div className="card-content">
                                <p className="card-title"><a href={res.link}>{res.title}</a></p>

                                <p>{res.desc}</p>

                                <ul className="techstack">
                                    { res.techStack.map( (item)=>(
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Work