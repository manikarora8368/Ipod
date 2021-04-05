import react from "react";
class Playlists extends react.Component {
    render(){
    return (
    <div style={styles.div}>
        {/* Adding image to the playlist screen */}
        <img src='/assets/playlist.png' style={styles.img} />
    </div>
    )
    }
}

// Styles applied on Playlist component

const styles = ({
    div:{
        boxSizing: 'border-box'
    },
    img: {
        height: '13.4rem',
        width: '13.3rem',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        border: '2px solid black'
    }
});
export default Playlists;