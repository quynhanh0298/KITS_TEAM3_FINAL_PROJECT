import { VideoPlayerJSX } from "components/Dashboard/VideoPlayer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  return (
    <>
      <div>
        <input
          defaultValue={0}
          type="number"
          min="0" // Minimum value allowed
          max="5" // Maximum value allowed
          onChange={(event) => {
            console.log(event.target.value);
            console.log(vidLinks);
            setSelectedVid(vidLinks[event.target.value] || vidLinks[0]);
          }}
        />
      </div>
      <VideoPlayerJSX vidLink={selectedVid} />
    </>
  );
};
export default VideoPlayerPage;
