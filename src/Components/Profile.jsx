import React from 'react'

function Profile() {

    

  return (
    <div>
        <input type='file' accept='image/*' name='photo' id='profile_img' />
        <label htmlFor='profile_img' onClick={updateProfilePhoto} className='profilePhotoLabel' >
            <div  role='button' className='profile-button' title='Click to change Photo'>
            <img src={profilePhoto}  alt='profile'/>
            </div>
        </label> 
        <div className='username'>
            <h3 id='twitter'>smart ibanga</h3>
            <h4 id='slack'>siban</h4>
            
      </div>
    </div>
  )
}

export default Profile

