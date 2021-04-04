import React from 'react';
import HomeGif from './assets/home-main.gif';
const Home=(props)=>{
    const {activeDiv} = props;
    //console.log(props);
    return(
        <div className="home-main">
            <div className="main-left">
                <div className="home-heading"><strong>Ipod</strong></div>
                <div className={activeDiv=='coverflow'?'home-menu activeList':'home-menu'}>Coverflow</div>
                <div className={activeDiv=='music'?'home-menu activeList':'home-menu'}>Music</div>
                <div className={activeDiv=='games'?'home-menu activeList':'home-menu'} id="games">Games</div>
                <div className={activeDiv=='settings'?'home-menu activeList':'home-menu'} id="settings">Settings</div>
            </div>
            <div className="main-right">
                <img src={HomeGif} style={styles.img}/>
            </div>
        </div>
    );
}
const styles = {
    img:{
        height: '13.4rem',
        width: '101%',
        borderTopRightRadius: '1rem'

    }
}
export default Home;