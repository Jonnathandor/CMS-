import './Project.css'

export const Project = () => {
    return (
        <div className="project">
            <div className="project__intro">
                <div className="project__content">
                    <h1 className="project__content-title">Project.com</h1>
                    <p className="project__content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis eget ex quis lobortis. Nam ut ipsum gravida, fermentum eros ut, aliquet eros.
                    Duis mollis nisi eu tortor euismod, non auctor elit sollicitudin.</p>
                    <div className="project__content-links">
                        <div id="production-project">
                            <a  href="https://github.com/Jonnathandor" target="_blank">Project</a>
                        </div>
                        <div className="project__content-links-link">
                            <a href="https://github.com/Jonnathandor" target="_blank">Code</a>
                        </div>
                    </div>
                </div>
                <div className="project__preview">
                    <img src="https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758_960_720.jpg" alt="project preview" />
                </div>
            </div>
            <div className="project__client">
                <div className="project__client-image">
                    <img src="https://cdn.pixabay.com/photo/2019/10/08/03/18/iguana-4534043_960_720.jpg" alt="client picture" />
                </div>
                <p className="project__client-feedback">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla convallis eget ex quis lobortis. Nam ut ipsum gravida, fermentum eros ut, aliquet eros.
                Duis mollis nisi eu tortor euismod, non auctor elit sollicitudin. 
                Cras ac velit vel lectus aliquam malesuada. Vivamus accumsan pulvinar enim, nec vestibulum ante consequat id.</p>
                <h3 className="project__client-name">Jon Doe</h3>
            </div>
        </div>
    )
}