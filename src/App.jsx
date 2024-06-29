import ClassComp from './ClassComp.jsx';
import Video from './VideoPlayerComponent.jsx';

function App() {

  return (
    <>
      <main className={"container my-5 py-5"}>
          <div className={"row align-items-center"}>
              <div className={"col-lg-6"}>
                  <ClassComp title={"React Counter Application"} />
              </div>
              <div className={"col-lg-6"}>
                  <Video />
              </div>
          </div>
      </main>
    </>
  )
}

export default App
