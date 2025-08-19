import React from "react";
import Link from "next/link";
import { VideoCardProps } from "@/interfaces";

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, href }) => {
  return (
    <div className="rounded-4xl overflow-hidden bg-red-600 h-48">
      <Link href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allowFullScreen
            className="w-125 h-35 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 py-1 m-auto rounded-4xl target:_blank"
          />
          <div className="p-4">
            <h3 className="text-xl font-poppins font-semibold px-3 inline-block underline underline-offset-4 group-hover:text-white transition">{title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;