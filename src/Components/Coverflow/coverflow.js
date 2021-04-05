import React from 'react';
const CoverFlow = ()=>{
    return(
        <div className='settings-main'>
            <img src='/assets/coverflow.gif' style={styles.img} alt='image of coverflow'/>
            <div style ={styles.text}><strong>Coverflow</strong></div>
        </div>
    );
}

// Styles applied on Coverflow Component

const styles = {
    img: {
        height: '12rem',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        width: '13.6rem'
    },
    text: {
        color: '#696969'
    }
}
export default CoverFlow;