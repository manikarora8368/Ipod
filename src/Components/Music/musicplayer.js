import react from "react";
class MusicPlayer extends react.Component {
    constructor(){
        super();
    }
    // Using the auto play property to play the song
    componentDidMount()
    {
        const player = document.getElementsByClassName("audio-element")[0];
        player.play();
    }
    // To load the next or previous songs based on user actions
    componentDidUpdate(){
        const player = document.getElementsByClassName("audio-element")[0];
        if(player){
            player.currentTime=0;
            player.pause();
            player.load();
            player.play();
        }
    }
    render(){
        const {currentSong , currentSongImg} = this.props;
        
        console.log(this.props);
    return (
    <div>
        {/* Taking songs and image from the parent div */}
        <img src={currentSongImg} style={styles.img} />
        <audio  className="audio-element">
        <source src={currentSong}></source>
        </audio>
    </div>
    )
    }
}

//Adding styles to the MusicPlayer ie All songs Component 

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