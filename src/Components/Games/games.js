import React from 'react';
const Games = ()=>{
    return(
        <div style={styles.Main} className='settings-main'>
            <img style={styles.img} src='/assets/tenor.gif' alt='image of Game'/>
        </div>
    );
}

//Styles applied on Games Component 

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