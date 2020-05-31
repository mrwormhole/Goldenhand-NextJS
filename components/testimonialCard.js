import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function TestimonialCard({author, authorJob, authorComment, authorImage}) {
    return (
        <article className="media" id="testimonial-card">
            <figure className="media-left">
                <p className="image is-128x128">
                    <img src={authorImage} alt={author} />
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                   
                        <strong className="author">{author}</strong> 
                        <br />
                        <small className="author-job">{authorJob}</small>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item">
                                    <span className="icon is-small"><FontAwesomeIcon icon={faStar} /></span>
                                </a>
                                <a className="level-item">
                                    <span className="icon is-small"><FontAwesomeIcon icon={faStar} /></span>
                                </a>
                                <a className="level-item">
                                    <span className="icon is-small"><FontAwesomeIcon icon={faStar} /></span>
                                </a>
                                <a className="level-item">
                                    <span className="icon is-small"><FontAwesomeIcon icon={faStar} /></span>
                                </a>
                                <a className="level-item">
                                    <span className="icon is-small"><FontAwesomeIcon icon={faStar} /></span>
                                </a>
                            </div>
                        </nav>
                        <p className="author-comment"> {authorComment} </p>
                </div>
            </div>
        </article>
    );
}