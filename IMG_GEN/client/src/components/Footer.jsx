import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-2 mt-22 border-t border-gray-200">
      {/* Left: Logo */}

      {/* Middle: Copyright */}
      <p className="flex-1 text-center text-sm text-gray-500 max-sm:hidden">
        © PIXORA — All rights reserved.
      </p>

      {/* Right: Social Icons */}
      {/* <div className="flex gap-2.5 mb-2">
        <img src={assets.facebook_icon} alt="Facebook" width={35} />
        <img src={assets.twitter_icon} alt="Twitter" width={35} />
        <img src={assets.instagram_icon} alt="Instagram" width={35} />
      </div> */}
    </div>
  )
}

export default Footer
