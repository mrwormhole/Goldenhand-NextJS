import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faCalendar } from '@fortawesome/free-solid-svg-icons'
import Axios from "axios"

function isFormEmpty(data) {
    if (data.email.trim() == "" ||  data.fullName.trim() == "" ||
        data.message.trim() == "" || data.phoneNumber.trim() == "" ||
        data.startDate.trim == "") {
            return true;
    }
    return false;    
}

export default function Form() {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const [name, email, number, date, message] = e.target.elements;
            const data = {
                fullName: name.value,
                email: email.value,
                phoneNumber: number.value,
                startDate : date.value,
                message: message.value,
            };

            if(!isFormEmpty(data)) {
                fetch('/api/email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                console.log("Your email has sent!");
            } else {
                console.log("Please fill all fields");
            }
        }}>
            <div className="field">
                <label className="label">Name</label>
                <div className="control has-icons-left">
                    <input className="input" id="name" type="text" placeholder="Text input" />
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left">
                    <input className="input" id="email" type="email" placeholder="Email input" />
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Telephone Number</label>
                <div className="control has-icons-left">
                    <input className="input" id="number" type="text" placeholder="phone number input" />
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Estimated Start Date</label>
                <div className="control has-icons-left">
                    <input className="input" id="date" type="date" placeholder="date input" />
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={faCalendar} />
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" id="message" placeholder="Textarea"></textarea>
                </div>
            </div>

            <div className="control">
                <button className="button is-link" type="submit" name="action">Submit</button>
            </div>
        </form>
    );
}