import React, { useState } from 'react'
import './AdCard.scss'
import defaultImage from '../../../assets/images/default.png'
import { CgDollar } from 'react-icons/cg';
import { GiRoundStar } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function AdCard({data}) {
  const [imageSrc, setImageSrc] = useState(data.image)
  return (
    <Link to={'/ad-detail/' + data._id} className='osh-ad-card'>
      <div className='osh-ad-card__image-holder'>
        <img src={imageSrc} alt='' onError={() => setImageSrc(defaultImage)} />
      </div>
      <p className='osh-ad-card__title'>{data.name}</p>
      <p className='osh-ad-card__sub-title'>count in stock: {data.countInStock}</p>
      <div className='osh-ad-card__footer'>
        <span>{data.price} <CgDollar /></span>
        <span>{data.rating} <GiRoundStar /></span>
      </div>
    </Link>
  )
}

export default AdCard