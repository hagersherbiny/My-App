import React, {Component} from 'react';
import Cat from '../cat.jpg';

class ProfilePhoto extends Component {
    render(){
        return (<div> 
            <img src= {Cat} alt="Cat"/>
            
             </div>
        )
    }
}

export default ProfilePhoto; 