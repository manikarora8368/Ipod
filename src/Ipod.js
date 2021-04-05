import react from 'react';
import React from 'react';
import Home from './home';
import ZingTouch from 'zingtouch';
import Settings from './Components/Settings/settings';
import Games from './Components/Games/games';
import Music from './Components/Music/Music';
import CoverFlow from './Components/Coverflow/coverflow';
import MusicPlayer from './Components/Music/musicplayer';
import Albums from './Components/Music/albums';
import Artists from './Components/Music/artists';
import Playlists from './Components/Music/playlists';

class Wheel extends react.Component{
    constructor(){
        super();
        // Initial State defined
        this.state= {
            currentScreen : 'home',
            lastScreen: '',
            activeDiv: 'coverflow',
            currentDisplay: 'home',
            currentSong: '/assets/songs/BrownMunde.mp3',
            currentSongImg: '/assets/brownmunde.jpg'
        }
    } 
    componentDidMount(){
        document.title = 'Ipod'
    }
    // ZingTouch library is used to add functionality to the wheel
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
            const arr =['coverflow' ,'music','games','settings'];
            const arr1 = ['allsongs','albums','artists','playlists'];
            const index = Math.floor(Math.abs(newAngle)/20)%arr.length;
            if(ipod.state.currentScreen=='home'){
                ipod.setState({
                activeDiv: arr[index]
            });
            }
            if(ipod.state.currentScreen=='music'){
                ipod.setState({
                    activeDiv: arr1[index]
                })
            }
            
        })
    }
    // menu button click function
    menuOnclick= ()=>{
        const {currentScreen, currentDisplay , activeDiv} = this.state;
        if(currentScreen == 'home' && currentDisplay == 'home'){
            return;
        }
        this.setState({
            currentScreen: 'home',
            currentDisplay: 'home',
            activeDiv: 'coverflow'
        });
        console.log(activeDiv);
    }
    // Middle button click function
    middleClick=(e)=>{
        const {activeDiv , currentDisplay , currentScreen} = this.state;
        const div = document.getElementById('circ2');
        if(e.target!== div){
            return;
        }
        if(activeDiv == 'music'){
            this.setState({
                currentScreen: 'music',
                activeDiv: 'allsongs'
            })
        }
        this.setState({
            currentDisplay: activeDiv,
        });
    }
    // forward button click function
    forward=()=>{
        const {currentDisplay,currentSong , currentSongImg}= this.state;
        if(currentDisplay!= 'allsongs'){return;}
        const arr = [{img:'/assets/brownmunde.jpg',song:'/assets/songs/BrownMunde.mp3'},
                    {img:'/assets/goat.jpg',song:'/assets/songs/GOAT.mp3'},
                    {img:'/assets/libaas.jpg',song:'/assets/songs/Libaas.mp3'},
                    {img:'/assets/nocompetition.jpg',song:'/assets/songs/NoCompetition.mp3'}
                ];
        var index = arr.findIndex((e)=>JSON.stringify(e)==JSON.stringify({img:currentSongImg,song:currentSong}));
        index = (index+1)%arr.length;
        console.log(index);
        this.setState({
            currentSong: arr[index].song,
            currentSongImg: arr[index].img
        });
    }
    // backward button click function
    backward=()=>{
        const {currentDisplay,currentSong , currentSongImg}= this.state;
        if(currentDisplay!= 'allsongs'){return;}
        const arr = [{img:'/assets/brownmunde.jpg',song:'/assets/songs/BrownMunde.mp3'},
                    {img:'/assets/goat.jpg',song:'/assets/songs/GOAT.mp3'},
                    {img:'/assets/libaas.jpg',song:'/assets/songs/Libaas.mp3'},
                    {img:'/assets/nocompetition.jpg',song:'/assets/songs/NoCompetition.mp3'}
                ];
        var index = arr.findIndex((e)=>JSON.stringify(e)==JSON.stringify({img:currentSongImg,song:currentSong}));
        if(index==0){
            index = 3;
        }else{
        index = Math.abs((index-1))%arr.length;
        }
        console.log(index);
        this.setState({
            currentSong: arr[index].song,
            currentSongImg: arr[index].img
        });
    }
    render(){
        // extract all the state variables
        const {currentScreen,activeDiv  , currentDisplay , currentSong , currentSongImg} = this.state;
        return(
            <div>
            <div className="main-container">
                <div className="main-screen flex-center">
                    <div className="display-screen">
                        {/* using method of condtional rendering to display screen */}
                    {currentDisplay=='music' && <Music activeDiv={activeDiv}/>}
                    {currentDisplay=='games' && <Games/>}
                    {currentDisplay=='settings'&& <Settings/>}
                    {currentDisplay=='coverflow' && <CoverFlow/>}
                    {currentDisplay=='allsongs' && <MusicPlayer currentSong={currentSong} currentSongImg={currentSongImg}/>}
                    {currentDisplay=='albums' && <Albums/>}
                    {currentDisplay=='artists' && <Artists/>}
                    {currentDisplay=='playlists' && <Playlists/>}
                    {currentScreen=='home' && currentDisplay=='home' && <Home activeDiv={activeDiv}/>}
                    </div>
                </div>
                <div className="rect flex-center">
                    <div className="circ1 flex-center" id="circ1" onMouseOver={this.rotate}>
                        <div className="circ2" id="circ2" style={{border: '2px solid black'}} onMouseUp={this.middleClick}>
                        <div className="menu" id="menu" onClick={this.menuOnclick}>Menu</div>
                        <div className="forward" onClick={this.forward}><img src="/assets/forward-button.png"/></div>
                        <div className="pause"><img src="/assets/pause-button.png"/></div>
                        <div className="backward" onClick={this.backward}><img src="/assets/forward-button.png"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
    }
    
}
export default Wheel;