import react from "react";
class Artists extends react.Component {
    render(){
    return (
    <div>
        <img src='/assets/diljitdosanjh.jpeg' style={styles.img} />
    </div>
    )
    }
}

// Adding Styles to the Artists

const styles = ({
    img: {
        height: '13.5rem',
        width: '13.4rem',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        border: '2px solid black'
    }
});
export default Artists;