import React, {useEffect, useState} from 'react';
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = ({selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighlight'>
                <div className='punkContainer'>
                    <img 
                        className='selectedPunk'
                        src={activePunk.image_url}
                        alt=''
                    />
                </div>
            </div>

            <div className='punkDetails' style={{color: '#fff'}}>
                <div className='title'>
                    {activePunk.name}
                    <span className='itemNumber'>•#{activePunk.token_id}</span>
                </div>
            
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img
                            src='https://ipfs.thirdweb.com/ipfs/QmVmtQFmrCSvcVmed3AW6F5LPFFN6QZnzmgmB6gZtKBV6B/0.jpg'
                            alt=''
                        />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>{activePunk.owner.address}</div>
                            <div className='ownerHandle'>@abi</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} />
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Main;
