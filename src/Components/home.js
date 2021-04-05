import React from 'react';

const Home=(props)=>{
    // Extract props passed from the parent component
    const {activeDiv} = props;
    return(
        <div className="home-main">
            <div className="main-left">
                <div className="home-heading"><strong>iPod</strong></div>
                {/* using the method of conditional rendering to add the class Active */}
                <div className={activeDiv==='coverflow'?'home-menu activeList':'home-menu'}>Coverflow</div>
                <div className={activeDiv==='music'?'home-menu activeList':'home-menu'}>Music</div>
                <div className={activeDiv==='games'?'home-menu activeList':'home-menu'} id="games">Games</div>
                <div className={activeDiv==='settings'?'home-menu activeList':'home-menu'} id="settings">Settings</div>
            </div>
            <div className="main-right">
                <img src='/assets/home-main.gif' style={styles.img} alt='Image of home'/>
            </div>
        </div>
    );
}
// Adding styles to the home page
const styles = {
    img:{
        height: '13.4rem',
        width: '101%',
        borderTopRightRadius: '1rem'

    }
}
export default Home;