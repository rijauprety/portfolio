import React from 'react'
import "./ContactPage.css"
import Navbar from '../../component/navbar/Navbar'


const ContactPage = () => {
  return (
    <div className='contactPageContainer'>
      <Navbar />
      <div className="contactPageContents">  
        <div className='left'>
          <div className='form'>
            <form>
              <label htmlFor="name">Name:
              </label>
              <input type="text" />
              <label htmlFor="email">Email:
              </label>
              <input type="email" />
              <label htmlFor="phone">Phone Number:
              </label>
              <input type="text" />
              <label htmlFor="message">Message:
              </label>
              <textarea name="" id="" rows="5"></textarea>
            </form>
          </div>
        </div>
        <div className='right'>
          <div className='socialMedia'>
            <div className='instagram'>
              <img src="https://png.pngtree.com/png-clipart/20180518/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3571406.png" alt="" />
            </div>
            <div className='facebook'>
              <img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-clipart-flat-facebook-logo-png-icon-circle-22.png" alt="" />
            </div>
            <div className='linkedin'>
              <img src="https://static.vecteezy.com/system/resources/previews/023/986/608/original/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="" />
            </div>
            <div className='github'>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
