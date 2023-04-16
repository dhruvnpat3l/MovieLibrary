import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../config/Context';
import { firebaseauth } from '../config/store';
import hellogif from '../assets/images/hello.gif'


const ProfilePage = () => {
  const { user, logInWithGmail, logmeout } = useContext(AuthContext);
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  useEffect(() => {
    if (user) {
      const profileimage = firebaseauth.currentUser.photoURL;
      setProfileImageUrl(profileimage)
      console.log(profileimage)
    }
      
  }, [user]);

  return (
    <div>
    {user ? (
      <div>
        <div class="">


            <div>
                <div class=" border-[#0d1134] border-4 max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mt-20 sm:mt-10 mx-6 sp:mx-auto">
                    <div class="border-b px-4 pb-6">
                        <div class="text-center my-4">
                            <img class="h-32 w-32 rounded-full border-4 border-white mx-auto my-4" src={`${profileImageUrl}`} alt=""/>
                            <div class="py-2">
                                <h3 class="font-bold text-2xl mb-1">Welcome, {user.displayName}</h3>
                               
                            </div>
                            <div>
                                <img className='rounded-md' src={hellogif}/>
                            </div>
                            <div>
                            </div>
                        </div>
                    
                    </div>
                    
                </div>
            </div>


        </div>  

      </div>
    ) : (
        <div className='border-[#0d1134] border-4 max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mt-20 sm:mt-10 mx-6 sp:mx-auto'>
          <button onClick={logInWithGmail} className='mx-auto my-auto'>Log In</button>
        </div>
    )}
  </div>
  );
};

export default ProfilePage;
