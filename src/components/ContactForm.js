import { useState } from "react";

function ContactForm() {
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
    }

    const handleClose = (e) => {
        e.preventDefault();
        setSent(false);
    }

    return (
        <>
        <form className="form-contact" onSubmit={handleSubmit} id={sent? "hide" : ""}>
            <label>
                <span> Namn: <span className="required" > *</span></span>
                <input type="text" name="name" placeholder="För- och efternamn"/>
            </label>
            <label>
                <span>E-postadress: <span className="required"> *</span></span>
                <input type="text" name="email" placeholder="E-postadress" />
            </label>
            <label>
                <span>Telefonnummer (Frivilligt): </span>
                <input type="text" name="phone" placeholder="Telefonnummer" />
            </label>
            <label>
                <span>Ärende: <span className="required"> *</span></span>
                <input type="text"  placeholder="Beskriv ditt ärende" />
            </label>
            <label>
                <span>Meddelande: <span className="required"> *</span></span>
                <textarea className="message" type="text" placeholder="Fyll i ditt meddelande, inkludera detaljer" />
            </label>
            <button type="submit" className="send-btn">&#8658;</button>
        </form>
        {sent && (
            <div className="thanks">
                <p className="thanks-message">Tack för ditt meddelande! Vi återkommer inom kort!</p>
                <button className="close-thanks" onClick={handleClose}>&#10005;</button>
            </div>
        )}
        </>
    )
}
export default ContactForm;