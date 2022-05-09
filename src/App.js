

import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
   <div className='element'>
     <div>
        <div>
        <a  href='/' className='avatar '>
          <ProfilePhoto/>
        </a>
        </div>
        <div className='content' style={{paddingTop: '50px'}}>
          
            <FullName/>
          
      
          <div className='adrs'style={{fontWeight: 'bold'}}>
            
              <Address/>
            
          </div>
        </div>
      </div>
   </div> 
  );
}

export default App;
