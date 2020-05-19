import sendGrid from "@sendgrid/mail"

export default async (req, res) => {
    if (req.method === "POST") {
        sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
        const {email, name, message, phoneNumber, startDate} = JSON.parse(req.body);
        
        const mailMessage = {
            to: "info@goldenhandsoftware.co.uk",
            from: email,
            subject: 'New message from a Client',
            html: `<strong> Hello Goldenhand Software! </strong> 
            <p> I am ${name} . ${message} </p>
            <p> My telephone number is ${phoneNumber} and estimated start date is ${startDate} </p>`
        };

        let sendGridResult = await sendGrid.send(mailMessage)
        if(sendGridResult[0].statusCode == 202) {
            res.statusCode(202);
            res.json({ status: 'OK' });
        } else{
            res.statusCode(sendGridResult[0].statusCode);
            res.json({ status: 'ERROR' });
        }
    }
}