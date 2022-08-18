import React from 'react'

const UserButton = ({ src, text }) => {
    return (
        <div className='user__button'>
            <button className='user__button__main'>
                <img className='user__button__logo' src={src} />
                <span className='user__button__text'>{text}</span>
            </button>
        </div>
    )
}

export default UserButton