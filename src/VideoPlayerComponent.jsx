import Vimeo from '@u-wave/react-vimeo';
// use dotenv to hide the client id and client secret
const clientId = import.meta.env.CLIENT_ID;
const clientSecret = import.meta.env.CLIENT_SECRET;
const auth = import.meta.env.AUTH;
const authToken = import.meta.env.CLIENT_TOKEN;

const VimeoPlayerComponent = ({ videoId = "https://vimeo.com/966270487" }) => {
    return (
        <Vimeo
            clientId={clientId}
            clientSecret={clientSecret}
            auth={auth}
            authTOken={authToken}
            className={"w-100 h-100"}
            autoplay={true}
            video={videoId}
            onVolumeChange={function(event) {
                console.log('Volume changed to:', event.volume);
            }}
        />
    );
};

export default VimeoPlayerComponent;