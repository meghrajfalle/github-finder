import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About this App and Developer</h1>
      <table>
        <tr>
          <td>
            <p>
              <strong>Purpose:</strong>
            </p>
          </td>
          <td>
            This webapp is to search github users and their profile details
            along with their public repostories. Created using ReactJs and makes
            use of github's public API's
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>Version:</strong>
            </p>
          </td>
          <td>1.0.0</td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>Developed By:</strong>
            </p>
          </td>
          <td>Meghraj Falle</td>
        </tr>
        <tr>
          <td>
            <strong>Links for other projects by Meghraj Falle:</strong>
          </td>
          <td>
            <a
              href='https://meghraj-portfolio.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <u> Meghraj Falle Portfolio site</u>
            </a>
            <br />
            <a
              href='https://contact-keeper-megh.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <u>Contact Keeper | Keep Track of your Contact</u> 
            </a>
            <br />
            <a
              href='https://projectmanagement-app.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <u>Project Management Tool</u> 
            </a>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <strong>Connect with me:</strong>
          </td>
          <td>
            <a
              href='https://www.linkedin.com/in/meghrajfalle/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <u>Linkedin Profile </u>
            </a>
          </td>
        </tr>
      </table>
    </Fragment>
  );
};

export default About;
