import React from 'react';
import './Footer.css';
import { BsFacebook,BsTwitter,BsGithub} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div class="colf" >
          <ul>
            <li>footer list1</li>
            <li>footer list2</li>
          </ul>
        </div>
        <div class="colf" >
        <ul>
            <li>footer list1</li>
            <li>footer list2</li>
            <li>footer list3</li>
            <li>footer list4</li>
            <li>footer list5</li>
          </ul>
        </div>
        <div class="colf" >
        <ul>
            <li>footer list1</li>
            <li>footer list2</li>
            <li>footer list3</li>
            <li>footer list4</li>
            <li>footer list5</li>
          </ul>
        </div>
        <div class="colf" >
        <ul>
            <li>footer list1</li>
            <li>footer list2</li>
            <li>footer list3</li>
            <li>footer list4</li>
            <li>footer list5</li>
          </ul>
        </div>
        <div class="colf" >
        <ul>
            <li>footer list1</li>
            <li>footer list2</li>
            <li>footer list3</li>
            <li>footer list4</li>
            <li>footer list5</li>
          </ul>
        </div>
      </div>
      <div className='copyright'>
        <div class="col1">copyright@2023</div>
        <div class="col1">
          <BsFacebook/>
          <BsTwitter/>
          <BsGithub/>
        </div>
      </div>
    </div>
  )
}

export default Footer
