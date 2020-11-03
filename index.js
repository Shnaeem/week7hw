class Users {

    loadUsers() {
      console.log('Users component is loaded...')
    }
    
  }
  
  export { Users };  

import { Dashboard } from './dashboard/dashboard.js'; 

const dashboard = new Dashboard(); 

dashboard.loadDashboard(); 