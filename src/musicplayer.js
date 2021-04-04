import react from "react";
import brownMunde from './assets/songs/BrownMunde.mp3';
class MusicPlayer extends react.Component {
    constructor(){
        super();
    }
    componentDidMount(){
        const player = document.getElementsByClassName("audio-element")[0];
        console.log(player);
        player.load();
        player.play();
    }
    componentWillUnmount(){
        const player = document.getElementsByClassName("audio-element")[0];
        player.currentTime=0;
        player.pause();
    }
    render(){
        const {currentSong , currentSongImg} = this.props;
        console.log(this.props);
    return (
    <div>
        <img src={currentSongImg} style={styles.img} />
        <audio  className="audio-element" controls>
        <source src={currentSong}></source>
        </audio>
    </div>
    )
    }
}
const styles = ({
    img: {
        height: '13.5rem',
        width: '13.4rem',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        border: '2px solid black'
    }
});
export default MusicPlayer;