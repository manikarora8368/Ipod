import React from 'react';
const Settings = ()=>{
    return(
        <div style={styles.settingMain} className='settings-main'>
            <img src='/assets/settings.gif' alt='image of settings'/>
            <div><strong>Settings</strong></div>
        </div>
    );
}
// Styles applied on settings Component
const styles = {
    settingMain: {
        marginTop: '3rem',
    }
}
export default Settings;