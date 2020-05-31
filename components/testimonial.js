import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faRetweet, faHeart } from '@fortawesome/free-solid-svg-icons'

import Slider from "react-slick";

export default function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <section className="section is-medium" style={{paddingLeft: "400px"}}>
        <Slider {...settings}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <article className="media">
                    <figure className="media-left">
                        <p className="image is-64x64">
                            <img src="https://bulma.io/images/placeholders/128x128.png" />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                            </p>
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item">
                                    <span className="icon is-small"><FontAwesomeIcon icon={faReply} /></span>
                                </a>
                                <a className="level-item">
                                    <span className="icon is-small"><FontAwesomeIcon icon={faRetweet} /></span>
                                </a>
                                <a className="level-item">
                                    <span className="icon is-small"><FontAwesomeIcon icon={faHeart} /></span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        </Slider>
        </section>
    );

}