import react from "react";
class Albums extends react.Component {
    constructor(){
        super();
    }
    // Using auto play property to play the song as screen is rendered
    componentDidMount()
    {
        const player = document.getElementsByClassName("audio-element")[0];
        player.play();
    }
    render(){
    return (
    <div>
        <img src='/assets/nocompetition.jpg' style={styles.img} />
        <audio  className="audio-element">
        <source src='/assets/songs/NoCompetition.mp3'></source>
        </audio>
    </div>
    )
    }
}

// Adding styles to the album

const styles = ({
    img: {
        height: '13.5rem',
        width: '13.4rem',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        border: '2px solid black'
    }
});
export default Albums;