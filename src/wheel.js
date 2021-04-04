import react from 'react';
import React from 'react';
import Home from './home';
import ZingTouch from 'zingtouch';
import hello from './wheel1';
import Settings from './settings';
import Games from './games';
import home from './home';
import Music from './Music';
import CoverFlow from './coverflow';
import MusicPlayer from './musicplayer';
import BrownMunde from './assets/songs/BrownMunde.mp3';

class Wheel extends react.Component{
    constructor(){
        super();
        this.state= {
            currentScreen : 'home',
            lastScreen: '',
            activeDiv: 'coverflow',
            currentDisplay: 'home',
            currentSong: '/assets/songs/BrownMunde.mp3',
            currentSongImg: '/assets/brownmunde.jpg'
        }
    } 
    rotate=()=>{
        var currentAngle = 0;
        const {currentScreen} = this.state;
        var target = document.getElementById('circ1');
        var region = new ZingTouch.Region(target);
        const ipod = this;
        region.bind(target , 'rotate' , function(e){
            var rotatable = document.getElementById('circ1');
            currentAngle += e.detail.distanceFromLast;
            var newAngle = e.detail.distanceFromOrigin;
            // console.log(newAngle);
            const arr =['coverflow' ,'music','games','settings'];
            const arr1 = ['allsongs','albums','artists','playlists'];
            const index = Math.floor(Math.abs(newAngle)/20)%arr.length;
            if(currentScreen=='home'){
                ipod.setState({
                activeDiv: arr[index]
            });
            }
            if(currentScreen=='music'){
                console.log(arr1[index]);
                ipod.setState({
                    activeDiv: arr1[index]
                })
            }
            
        })
    }
    menuOnclick=()=>{
        const {currentScreen, currentDisplay , activeDiv} = this.state;
        // console.log('hagho');
        if(currentScreen == 'home' && currentDisplay == 'home'){
            return;
        }
        this.setState({
            currentScreen: 'home',
            currentDisplay: 'home',
            activeDiv: 'coverflow'
        });
    }
    middleClick=(e)=>{
        const {activeDiv , currentDisplay , currentScreen} = this.state;
        const div = document.getElementById('circ2');
        console.log(e.target);
        if(e.target!== div){
            return;
        }
        if(activeDiv == 'music'){
            this.setState({
                currentScreen: 'music'
            })
        }
        this.setState({
            currentDisplay: activeDiv,
            activeDiv: 'allsongs'
        });
    }
    forward=()=>{
        const {currentDisplay,currentSong , currentSongImg}= this.state;
        if(currentDisplay!= 'allsongs'){return;}
        const arr = [{img:'/assets/brownmunnde.jpg',song:'/assets/songs/BrownMunde.mp3'},
                    {img:'/assets/goat.jpg',song:'/assets/songs/GOAT.mp3'},
                    {img:'/assets/libaas.jpg',song:'/assets/songs/Libaas.mp3'},
                    {img:'/assets/nocompetition.jpg',song:'/assets/songs/NoCompetition.mp3'}
                ];
        var index = arr.findIndex((e)=>JSON.stringify(e)==JSON.stringify({img:'/assets/brownmunnde.jpg',song:'/assets/songs/BrownMunde.mp3'}));
        console.log(index);
        console.log('hello');
        console.log(arr[1].img);
        console.log(arr[2].song);
        this.setState({
            currentSong: arr[2].song,
            currentSongImg: arr[2].img
        });
    }
    render(){
        // console.log('render');
        const {currentScreen,activeDiv ,lastScreen , currentDisplay , currentSong , currentSongImg} = this.state;
        return(
            <div>
            <div className="main-container">
                <div className="main-screen flex-center">
                    <div className="display-screen">
                    {currentDisplay=='music' && <Music activeDiv={activeDiv}/>}
                    {currentDisplay=='games' && <Games/>}
                    {currentDisplay=='settings'&& <Settings/>}
                    {currentDisplay=='coverflow' && <CoverFlow/>}
                    {currentDisplay=='allsongs' && <MusicPlayer currentSong={currentSong} currentSongImg={currentSongImg}/>}
                    {currentScreen=='home' && currentDisplay=='home' && <Home activeDiv={activeDiv} lastScreen={lastScreen}/>}

                    </div>
                </div>
                <div className="rect flex-center">
                    <div className="circ1 flex-center" id="circ1" onMouseOver={this.rotate}>
                        <div className="circ2" id="circ2" style={{border: '2px solid black'}} onMouseUp={this.middleClick}>
                        <div className="menu" id="menu" onClick={this.menuOnclick}>Menu</div>
                        <div className="forward" onClick={this.forward}><img src="/assets/forward-button.png"/></div>
                        <div className="pause"><img src="/assets/pause-button.png"/></div>
                        <div className="backward"><img src="/assets/forward-button.png"/></div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://www.google.com">Google</a>
        </div>
        
    );
    }
    
}
export default Wheel;