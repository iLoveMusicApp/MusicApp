// import ReactAudioPlayer from "react-audio-player";
import { useEffect, useRef} from "react";


const PlayMusic = ({currentTrack, playPause, toggle}) => {

    const currentSong = currentTrack.hub.actions[1].uri;
    const audioElement = new Audio();

    // audioElement.preload = "none";
    // const player = new Audio()

    const audioRef = useRef(audioElement);
    
    useEffect( () => {
        
        

        if (playPause === false && audioRef.current.currentTime === 0) {
            audioRef.current.src = currentSong;
            audioRef.current.play();
            // console.log(audioRef.current.currentTime);
            // console.log(currentTrack.hub.actions[1]);
            console.log(playPause);


        } else if (audioRef.current.src !== currentSong) {
            audioRef.current.currentTime = 0;
            audioRef.current.src = currentSong;
            audioRef.current.play();
            console.log(playPause);
            
        }
        else if (playPause === true && audioRef.current.currentTime > 0 ) {
            audioRef.current.pause();
            console.log(audioRef.current.currentTime);
            console.log(playPause);
        } else {
            audioRef.current.play();
            console.log(playPause);
        }
    }, [toggle, currentSong, playPause]);

    // <ReactAudioPlayer
    //     ref={player}
    //     src="www.hello.com"
    // />

    // console.log(player);
    
    // console.log(audioElement)

    return (
        <>
            {/* <audio src={currentSong} autoPlay controls />    */}
            
        
        </>
    
    )
    
}

export default PlayMusic;