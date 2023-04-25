// because we are inside the profile folder, all pages inside this folder will have the url will /profile
// because this file is [username].js, that means the url will be /profile/whateverUsername

import { useRouter } from 'next/router'



const Profile = () => {

  // this is how you get access to the route param in [username]
  const router = useRouter()
  const { username } = router.query

 return (
  <h1>Hello {username}!</h1>
 ) 
}

export default Profile