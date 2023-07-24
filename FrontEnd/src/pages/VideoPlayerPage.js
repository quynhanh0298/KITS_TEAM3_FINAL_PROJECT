import { Button } from "components/Button/Button";
import { VideoPlayerJSX } from "components/Dashboard/VideoPlayer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const VideoPlayerPageStyled = styled.div`
    .select-video-input{
        width: 80px;
        height: 30px;
        border-radius: 10px;
        padding-left: 8px;
        margin: 8px;
        border: none;
    }
    .button-select-videoid{
        width: 50px;
        height: 30px;
        border-radius: 10px;
        border: none;
        margin: 8px;
        
    }
`



const VideoPlayerPage = () => {
    const { id } = useParams();
    const [selectedVid, setSelectedVid] = useState("");
    const [course, setCourse] = useState([]);
    const [vidLinks, setVidLinks] = useState([]);
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
        fetch(`http://localhost:8080/admin/courses/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setCourse(data);

                if (data.listOfVideo) {
                    const listOfVideo = data.listOfVideo.split(",");
                    setVidLinks(listOfVideo);
                    if (listOfVideo?.length > 0) {
                        setSelectedVid(listOfVideo[0]);
                    }
                } else {
                    // set error
                }
            });
    }, [id]);

    if (loading) {
        return <div>Loading video links</div>;
    }

    if (vidLinks?.length === 0) {
        return <div>No videos available</div>;
    }

    const handleSelected = (link) => {
        console.log(link)
        setSelectedVid(link)
    }

    return (
        <VideoPlayerPageStyled>
            <div>
                <input className="select-video-input"
                    defaultValue={0}
                    type="number"
                    min="0" // Minimum value allowed
                    max="5" // Maximum value allowed
                    onChange={(event) => {
                        console.log(event.target.value);
                        // console.log(vidLinks);
                        setSelectedVid(vidLinks[event.target.value] || vidLinks[0]);
                    }}
                />

                {vidLinks?.map((link, index) => (
                    <button className="button-select-videoid"
                        onClick={() => {
                            handleSelected(link)
                        }
                        }
                    >
                        {index}
                    </button>
                ))}

                {console.log("vidLinks ", vidLinks.length)}
            </div>
            <VideoPlayerJSX vidLink={selectedVid} />
        </VideoPlayerPageStyled>
    );
};
export default VideoPlayerPage;
