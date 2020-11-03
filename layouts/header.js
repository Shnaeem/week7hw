class Users {

    loadUsers() {
      console.log('Users component is loaded...')
    }
    
  }
  
  export { Users };  

import { UserProfile } from '../components/users-profile.js';

class Header {

  loadHeader() {
    // Creata a new instance
    const userProfile = new UserProfile(); 
    
    // Invoke the method (component)
    userProfile.loadUserProfile();
    
    // Output loading status
    console.log('Header component is loaded...')
  }
  
}

export { Header };