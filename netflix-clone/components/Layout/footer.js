import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (

    <section className={classes.footer}>
      <ul>
        <p>Questions? Call 000-800-919-1694</p>
        {/* <li>Questions? Call 000-800-919-1694</li> */}
        <li>FAQ</li>
        <li>Investor Relations</li>
        <li>Privacy</li>
        <li>Speed Test</li>
        <li>Netflix India</li>
      </ul>
      <ul>
        <li>Help Centre</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
        <li>Legal Notices</li>
      </ul>
      <ul>
        <li>Account</li>
        <li>Ways to Watch</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Only on Netflix</li>
      </ul>
      <ul>
      <li>Media Centre</li>
        <li>Terms of Use</li>
        <li>Contact Us</li>
       
      </ul>
    </section>
  )
}

export default Footer;










