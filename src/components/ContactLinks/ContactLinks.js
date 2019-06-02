import React from 'react'
import { Content } from './ContactLinks.style'


const ContactLinks = () => (
  <Content>
    <a target="_blank" className="social-icons__link" rel="noopener noreferrer" href="https://twitter.com/_JHorse">
      <i className="social-icons__icon fab fa-twitter"></i>
    </a>
    <a target="_blank" className="social-icons__link" rel="noopener noreferrer" href="https://github.com/diemoritat">
      <i className="social-icons__icon fab fa-github"></i>
    </a>
    <a target="_blank" className="social-icons__link" rel="noopener noreferrer" href="https://codepen.io/diemoritat/">
      <i className="social-icons__icon fab fa-codepen"></i>
    </a>
    <a target="_blank" className="social-icons__link" rel="noopener noreferrer" href="https://www.linkedin.com/in/nayara-alves-pereira-a4a12432/">
      <i className="social-icons__icon fab fa-linkedin"></i>
    </a>
    <a target="_blank" className="social-icons__link" rel="noopener noreferrer" href="mailto:nayara.nap@gmail.com">
      <i className="social-icons__icon fas fa-envelope"></i>
    </a>
    <a target="_blank" className="social-icons__link" rel="noopener noreferrer" href="https://open.spotify.com/user/12152416219?si=Lsa-cJEPSACSiGNQeDjSsw"
      ><i className="social-icons__icon fab fa-spotify"></i>
    </a>
  </Content>
)

export default ContactLinks
