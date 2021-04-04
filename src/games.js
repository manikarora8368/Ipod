import React from 'react';
import viper from './assets/viper.gif';
import tenor from './assets/tenor.gif'
const Games = ()=>{
    return(
        <div style={styles.Main} className='settings-main'>
            <img style={styles.img} src={tenor} alt='image of Game'/>
        </div>
    );
}
const styles = {
    img:{
        height: '13.6rem',
        width : '100%',
        borderRadius: '1rem',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
    }
}
export default Games;