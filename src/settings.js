import React from 'react';
import settings from './assets/settings.gif'
const Settings = ()=>{
    return(
        <div style={styles.settingMain} className='settings-main'>
            <img src={settings} alt='image of settings'/>
            <div><strong>Settings</strong></div>
        </div>
    );
}
const styles = {
    settingMain: {
        marginTop: '3rem',
    }
}
export default Settings;