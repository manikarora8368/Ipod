import React from 'react';
import MusicGif from './assets/music-main.gif';
const Music=(props)=>{
    const {activeDiv} = props;
    return(
        <div className="home-main">
            <div className="main-left" style={styles.mainLeft}>
                <div className="home-heading"><strong>Music</strong></div>
                <div className={activeDiv=='allsongs'?'home-menu activeList':'home-menu'}>All Songs</div>
                <div className={activeDiv=='albums'?'home-menu activeList':'home-menu'}>Albums</div>
                <div className={activeDiv=='artists'?'home-menu activeList':'home-menu'} id="games">Artists</div>
                <div className={activeDiv=='playlists'?'home-menu activeList':'home-menu'} id="settings">Playlists</div>
            </div>
            <div className="main-right" style={styles.mainRight}>
                <img src={MusicGif} style={styles.img}/>
            </div>
        </div>
    );
}
const styles = {
    img:{
        height: '13.4rem',
        width: '101%',
        borderTopRightRadius: '1rem'
    },
    mainLeft:{
        backgroundColor: 'white'
    },
    mainRight:{
        backgroundColor: '#F2F1F1'
    }
}
export default Music;