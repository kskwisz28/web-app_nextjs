import React from 'react'
import {Box} from "theme-ui";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";

export const socialIconsSide = () => {
  return (
    <div>
      <Box bg="white" my={3} p={3} sx={{borderRadius: '8px'}}>
        <h2>{t('common:connect')}</h2>
        <FaTwitter sx={{mr: 2, fontSize: '1.5rem'}}/>
        <FaFacebook sx={{mr: 2, fontSize: '1.5rem'}}/>
        <FaInstagram sx={{mr: 2, fontSize: '1.5rem'}}/>
        <FaYoutube sx={{mr: 2, fontSize: '1.5rem'}}/>
        <FaLinkedin sx={{mr: 2, fontSize: '1.5rem'}}/>
      </Box>
    </div>
  )
}
