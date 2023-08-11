import React from 'react'
import { Link } from 'react-router-dom'

function MemberSocialAccount(props) {
    const socialLink = props.social
    const displayLinks = (key,value)=>{
      switch (key) {
        case 'facebook':
          return(
            <Link to={value} target='_blank'>
            <i className="fa-brands fa-facebook"></i>
            </Link>
          )
          case 'instagram':
            return(
              <Link to={value} target='_blank'>
              <i className="fa-brands fa-instagram"></i>
              </Link>
          )
          case 'twitter':
            return(
              <Link to={value} target='_blank'>
              <i className="fa-brands fa-twitter"></i>
              </Link>
          )
          case 'linkedin':
            return(
              <Link to={value} target='_blank'>
              <i className="fa-brands fa-linkedin"></i>
              </Link>
          )
          case 'github':
            return(
              <Link to={value} target='_blank'>
              <i className="fa-brands fa-github"></i>
              </Link>
          )
          case 'website':
            return(
              <Link to={value} target='_blank'>
                <i class="fa-solid fa-globe"></i>
              </Link>
          )
          default:
            break;
    
      }
    }
  return (
    <div>
      <div className='flex flex-wrap'>
        {Object.entries(socialLink).map(([key, value]) => (
          <div key={key} className='px-2 text-xl text-primary'>
            {displayLinks(key,value)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MemberSocialAccount