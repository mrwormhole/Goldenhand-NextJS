import Slider from "react-slick";
import TestimonialCard from "./testimonialCard";

export default function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <section className="section" id="testimonials">
            <Slider {...settings}>
                <div>
                    <TestimonialCard 
                        author="Annie Copeland"
                        authorJob=""
                        authorComment="A web app is the most valuable business resource we have EVER invested in. Thank you for making it painless, pleasant and most of all hassle free! It's really wonderful. I was amazed at the quality of web apps."
                        authorImage="/Annie.jpg" />
                </div>
                <div>
                <TestimonialCard 
                        author="Philip Ruiz"
                        authorJob=""
                        authorComment="I would like to personally thank you for your outstanding product. We can't understand how we've been living without a web app. The outcome has completely surpassed our expectations. Really good."
                        authorImage="/Philip.jpg" />
                </div>
                <div>
                <TestimonialCard 
                        author="Isabella Steele"
                        authorJob=""
                        authorComment="I STRONGLY recommend a web app to EVERYONE interested in running a successful online business!"
                        authorImage="/Isabella.jpg" />
                </div>
                <div>
                <TestimonialCard 
                        author="Jack Pridgeon"
                        authorJob=""
                        authorComment="The service was excellent. I would also like to say thank you to all your staff. The outcome is worth much more than I paid. No matter where you go, a web app is the coolest, most happening thing around!"
                        authorImage="/Jack.jpg" />
                </div>
            </Slider>
        </section>
    );

}