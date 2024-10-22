import React from 'react';

interface YoutubeEmbedProps {
    embedId: string;
}

export const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/videoseries?list=${embedId}`} // Adjusted URL
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);
