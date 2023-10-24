import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import { Circles } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Hls from 'hls.js';
import './video.css';

function Video() {
  const { videoId } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const videoDocRef = doc(firestore, 'catalogo', videoId);
        const videoDocSnapshot = await getDoc(videoDocRef);
        if (videoDocSnapshot.exists()) {
          setVideoData(videoDocSnapshot.data());
        } else {
          console.log('El documento no existe');
        }
      } catch (error) {
        console.error('Error al obtener datos del documento:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (videoData) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoData.videdoLink);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          // El video está listo para ser reproducido
          videoRef.current.play();
        });
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        // Si el navegador no admite HLS, pero admite el formato HLS de Apple
        videoRef.current.src = videoData.videdoLink;
        videoRef.current.addEventListener('canplay', function () {
          videoRef.current.play();
        });
      }
    }
  }, [videoData]);

  if (loading) {
    return (
      <div className="loading-container">
        <Circles type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  if (videoData) {
    return (
      <div id='video-content'>
         <Link to="/" className="back-link">
        <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        Volver
      </Link>
        <h1 id="video-title">{videoData.name}</h1>
        <video
          ref={videoRef}
          controls
          className="video-player" 
        />
        <p className="video-description">{videoData.description}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 id="not-found-message">Parece que el contenido que intentas ver no está disponible!</h1>
    </div>
  );
}

export default Video;
