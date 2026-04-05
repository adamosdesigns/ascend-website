import React, { useState, useEffect, useRef } from 'react';

type BlobVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  videoSrc: string;
  fallbackContent?: React.ReactNode;
};

export default function BlobVideo({ videoSrc, fallbackContent, ...props }: BlobVideoProps) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let objectUrl: string | null = null;
    let isMounted = true;
    
    const loadVideo = async () => {
      try {
        const response = await fetch(videoSrc);
        if (!response.ok) throw new Error('Network response was not ok');
        const blob = await response.blob();
        if (isMounted) {
          objectUrl = URL.createObjectURL(blob);
          setBlobUrl(objectUrl);
        }
      } catch (error) {
        console.error("Failed to load video:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadVideo();

    return () => {
      isMounted = false;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [videoSrc]);

  if (blobUrl) {
    return (
      <video 
        ref={videoRef}
        src={blobUrl} 
        {...props} 
      />
    );
  }

  if (isLoading && fallbackContent) {
    return <>{fallbackContent}</>;
  }

  return <div className={"w-full h-full bg-[#020617] " + (isLoading ? "animate-pulse" : "")} />;
}
