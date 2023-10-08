import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { SyntheticEvent } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function isFormEmpty(data: FormData) {
    if (data.email.trim() == "" ||  data.fullName.trim() == "" ||
        data.message.trim() == "" || data.phoneNumber.trim() == "" ||
        data.startDate.trim() == "") {
            return true;
    }
    return false;    
}

function toggleNotification(situation: string) {
    if (situation=="success") {
        const notificationSucc: HTMLElement = document.getElementsByClassName("notification")[0] as HTMLElement;
        notificationSucc.style.display = "block";
        setTimeout(function() { 
            notificationSucc.style.display = "none" }
        , 3000);
    }
    else if (situation=="failure") {
        const notificationFai: HTMLElement = document.getElementsByClassName("notification")[1] as HTMLElement;
        notificationFai.style.display = "block";
        setTimeout(function() { 
            notificationFai.style.display = "none" }
        , 3000);
    }
}

type FormData = {
    fullName: string,
    email: string,
    phoneNumber: string,
    startDate: string,
    message: string,
}

export default function Form() {
    return (
        <form onSubmit={(e: SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
                name: { value: string },
                email: { value: string },
                number: { value: string},
                date: {value: string},
                message: {value: string},
           };
            const {name, email, number, date, message} = target;
            const data : FormData = {
                fullName: name.value,
                email: email.value,
                phoneNumber: number.value,
                startDate : date.value,
                message: message.value,
            };
                ///asdsadsdas
            if(!isFormEmpty(data)) {
                fetch("/api/email", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                target.name.value = "";
                target.email.value = "";
                target.number.value = "";
                target.date.value = "";
                target.message.value = "";
                toggleNotification("success");
            } else {
                toggleNotification("failure");
            }
        }}>
            <div className="notification nft-suc is-success is-light">
                Your message is sent! We will be contacting <strong>you</strong> shortly in the mean time!
            </div>

            <div className="notification nft-fai is-danger is-light">
                Your message is not being sent! Please make sure that you fill <strong> all the fields</strong>.
            </div>

            <div className="field">
                <label className="label">Name</label>
                <div className="control has-icons-left">
                    <input className="input" id="name" type="text" placeholder="Your name" />
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faUser as IconProp} />
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                    <input className="input" id="email" type="email" placeholder="Your email" />
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope as IconProp} />
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Telephone Number</label>
                <div className="control has-icons-left">
                    <input className="input" id="number" type="text" placeholder="Your telephone number" />
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faPhone as IconProp} />
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Estimated Start Date</label>
                <div className="control has-icons-left">
                    <input className="input" id="date" type="date" placeholder="Your estimated start date" />
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faCalendar as IconProp} />
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" id="message" placeholder="Your message"></textarea>
                </div>
            </div>

            <div className="control buttons is-centered">
                <button className="button is-danger is-medium is-rounded" type="submit" name="action">Send</button>
            </div>
        </form>
    );
}