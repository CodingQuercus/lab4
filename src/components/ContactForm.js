function ContactForm() {
    return (
        <form action="" className="form-contact">
            <label>
                <span className="name">Namn: <span className="required"> *</span></span>
                <input type="text" name="name" placeholder="För- och efternamn" />
            </label>
            <label>
                <span className="E-post">E-postadress: <span className="required"> *</span></span>
                <input type="text" name="email" placeholder="E-postadress" />
            </label>
            <label>
                <span className="telephone">Telefonnummer (Frivilligt): </span>
                <input type="text" name="telephone" placeholder="Telefonnummer" />
            </label>
            <label>
                <span className="errand">Ärende: <span className="required"> *</span></span>
                <input type="text" name="errand" placeholder="Beskriv ditt ärende" />
            </label>
            <label>
                <span className="message">Meddelande: <span className="required"> *</span></span>
                <input type="text" name="message" placeholder="Fyll i ditt meddelande, inkludera detaljer" />
            </label>
            <button type="submit" className="send-btn">Skicka</button>
        </form>
    )
}
export default ContactForm;