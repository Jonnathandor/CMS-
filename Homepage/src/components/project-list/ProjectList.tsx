import './ProjectList.css';
import { Project } from '../project/Project';

export const ProjectList = () => {
    return (
        <div className="project__list">
            <div className="project__list-intro">
                <p>I have been working on a different set of projects
                    over the past year that have challenge me to learn 
                    technologies like JavaScript, React, Golang and Laravel.
                </p>
                <p id="project__list-intro-share">Here are a few projects that I would love to share</p>
            </div>
            <Project/>
            <Project/>
            <Project/>
        </div>
    )
}