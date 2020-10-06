import React from 'react'
import * as emailjs from 'emailjs-com'

const handleSubmit = e => {
  e.preventDefault()
  const { name, email, subject, message } = this.state
  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: '/*YOUR NAME OR COMPANY*/',
    subject,
    message_html: message,
  }
  emailjs.send(
    'gmail',
    'template_XXXXXXXX',
    templateParams,
    'user_XXXXXXXXXXXXXXXXXXXX'
  )
  this.resetForm()
}

const resetForm = () => {

}

const Contact = props => (
  <section id="contact">
    <div className="inner">
      <section>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section>
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>email</h3>
            <a href="#">tranquilityconstructionke@gmail.com</a>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <h3>Phone</h3>
            <span>(+254) 0112041785</span>
          </div>
        </section>
        <section>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>Address</h3>
            <span>
              Utawala
              <br />
              Nairobi, Kenya
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
