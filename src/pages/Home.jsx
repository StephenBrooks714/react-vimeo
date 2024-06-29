import Video from "../VideoPlayerComponent";
import Navbar from "../layouts/Navbar";

function Home() {

    return (
        <>
            <Navbar />
            <main className={"container"} style={{marginTop: "180px"}}>
                <div className={"row text-center justify-content-center align-items-center"}>
                    <div className={"col-lg-8 mb-5 pb-5"}>
                        <h1 className={"display-3 mb-2 fw-light"}>React With <span className={"text-primary fst-italic fw-bold"}>Vimeo</span></h1>
                        <p className={"lead"}>
                            THe only way to watch videos in React is with Vimeo. Created with React, Bootstrap, Scss, and getting the api with vimeo.
                        </p>
                    </div>
                    <div className={"col-lg-10"}>
                        <Video />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home