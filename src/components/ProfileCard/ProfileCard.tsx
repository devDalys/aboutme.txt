import * as React from 'react'
import './ProfileCard.css'
import photo from '../../images/profilephoto.jpg'

const ProfileCard: React.FC = () => {
    return (
        <div className='card'>
            <div className="card__photo"></div>
            <div className="card__profile">
                <div className={'card__profile_photo'}>
                    <img src={photo} className={'card__profile_photo-img'}/>
                </div>
                <div className={'card__profile_info'}>
                    <div className={'card__profile_info-name'}>
                        Victor Vinogradov
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;