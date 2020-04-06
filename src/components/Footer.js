import React from 'react';
import headphones from '../icons/headphones.svg';
import youtube from '../icons/youtube.svg';
import instagram from '../icons/instagram.svg';

export const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <div className="text-center mt-5 pt-4">
        <p>Copyright ©2020 Create with <img src={headphones} alt="" /> by<span className="font-weight-bold"> Candra kriswinarto</span></p>
      </div>
      <div className="icons text-center pb-4">
        <a className="mx-1" href="https://www.youtube.com/channel/UChspmksoHi3B9sKreATvpCA?sub_confirmation=1"><img src={youtube} alt="" /></a>
        <a className="mx-1" href="https://www.instagram.com/candra_kriswinarto/"><img src={instagram} alt="" /></a>
      </div>
    </div>

  )
}
