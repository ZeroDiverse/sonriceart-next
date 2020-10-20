import React, { useState } from 'react'
import style from './contact.module.scss'

interface ContactProps {
    menuOpen: boolean
    toggleMenu(): void
    closeMenu(): void
}

const Contact: React.FC<ContactProps> = (props: ContactProps) => {
    const [messageSent, setMessageSent] = useState(false)
    return (
        <main role="main" className={ props.menuOpen ? `${style.main} blur` : `${style.main}`} >
            <div className={style.contactMain}>
                <div className={style.intro}>
                    <h2 className={style.thanks}>Thanks for all the emails and questions!</h2>
                    <p>Fill out this form and we’ll get back to you as soon as possible. Thank you!</p>
                    <p>* Commisions and Jobs are OPEN</p>
                </div>
                <form className={style.contactForm} method="POST" action="/contact">
                    <div className={style.inputField}>
                        <label>Name *</label>
                        <div className={style.nameField}>
                            <input type="text" placeholder="First Name" name="firstName" required />
                            <input type="text" placeholder="Last Name" name="lastName" required />
                        </div>
                    </div>
                    <div className={style.phoneAndEmail}>
                        <div className={style.inputField}>
                            <label>Email *</label>
                            <input type="text" id="email" name="email" required />
                        </div>
                        <div className={style.inputField}>
                            <label>Phone</label>
                            <input type="text" className={style.phone} name="phone" />
                        </div>
                    </div>
                    <div className={style.subjectField}>
                        <div className={style.inputField}>
                            <label>Subject *</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                    </div>
                    <div className={style.inputField}>
                        <label>Message *</label>
                        <textarea form="contact-form" name="message" className={style.message} rows={5} required></textarea>
                    </div>
                    <button type="submit" className={`btn btn-primary ${style.btnPrimary}`}>SUBMIT</button>
                </form>
            </div>
            {messageSent &&
                <div className={style.flashMessage}>
                    <p className={style.success}>Submission successful !</p>
                </div>
            }
        </main>
    )
}

export default Contact
