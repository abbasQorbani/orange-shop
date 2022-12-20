import React, { useEffect } from 'react'
import AdCard from '../ad-card/AdCard'
import './AdList.scss'
import { GetAdList } from '../../../store/ad/ad-list/adList.action';
import { useDispatch, useSelector } from 'react-redux';

function AdList() {
  const adListDispatch = useDispatch();
  const { loading, adList, error } = useSelector(
    (respone) => respone.adListState
  );
  useEffect(() => {
    adListDispatch(GetAdList());
  }, []);
  return (
    <div className='osh-ad-list-wrapper'>
      {
        adList.map(ad => {
          return <AdCard data={ad} key={ad._id} />
        })
      }
    </div>
  )
}

export default AdList