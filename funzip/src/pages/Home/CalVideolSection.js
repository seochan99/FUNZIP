import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export default function CalVideolSection() {
  const [currentVideo, doSetCurrentVideo] = useState();
  const [videoLength, setVideoLength] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const getLength = video => {
    const audio = new Audio();
    audio.src = video;
    audio.onloadedmetadata = _ => {
      setVideoLength(audio.duration);
      setLoading(false);
    };
    audio.onerror = ev => {
      setError(true);
      setLoading(false);
    };
  };

  const setCurrentVideo = video => {
    setLoading(true);
    setVideoLength(null);
    setError(null);
    doSetCurrentVideo(video);
    getLength(video);
  };

  const onVideoSelected = ev => {
    const video = URL.createObjectURL(ev.target.files[0]);
    setCurrentVideo(video);
  };

  if (loading) return <div>Loading ...</div>;
  return (
    <div>
      <h1>간단하게 알아보는 예상 가격</h1>
      <div>
        {/* 에러발생시 */}
        {error &&
          `Error while loading video. Format probably not supported natively.`}
        <hr />
        {/* 비디오 길이 */}
        {videoLength && `Video Length is ${videoLength} seconds`}
        <hr />
        {/* 비디오 미리보기 */}
        <video src={currentVideo} width="300" autoPlay controls />
        <hr />
        <div>
          Load video from hard drive:{' '}
          <input type="file" onChange={onVideoSelected} />
        </div>
      </div>
    </div>
  );
}
