import './ContactForm.css';

export const ContactForm = () => {
    return (
        <div className="contact">
            <div className="contact__message">
                <h1 className="contact__message-title">Let's Talk!</h1>
                <p className="contact__message-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis eget ex quis lobortis. Nam ut ipsum gravida</p>
            </div>
            <form action="" method="POST">
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname"/><br/>
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname"/><br/>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email"/><br/>
                <textarea name="" id="" cols={57} rows={10}></textarea>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}