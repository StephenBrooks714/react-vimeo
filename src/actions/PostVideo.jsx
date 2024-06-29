// const clientId = import.meta.env.CLIENT_ID;
// const clientSecret = import.meta.env.CLIENT_SECRET;
// const auth = import.meta.env.AUTH;
const authToken = import.meta.env.CLIENT_TOKEN;
import {useState} from 'react';
export default function PostVideo(){

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [video, setVideo] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('video', video);
        const response = await fetch('https://api.vimeo.com/videos', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        const data = await response.json();
        console.log(data);
    }

    return(
        <>
        <main>
            <div>
                <div>
                    <h1>Post Video</h1>
                    <form action="">
                        <label for="title">Title</label>
                        <input type="text" name="title" onChange={(event) => setTitle(event.target.value)} id="title" />
                        <label for="description">Description</label>
                        <textarea name="description" onChange={(event) => setDescription(event.target.value)} id="description" cols="30" rows="10"></textarea>
                        <label for="video">Video</label>
                        <input type="file" onChange={(event) => setVideo(event.target.files[0])} name="video" id="video" />
                        <button onClick={handleSubmit}>Post</button>
                    </form>
                </div>
            </div>
        </main>
        </>
    )
}