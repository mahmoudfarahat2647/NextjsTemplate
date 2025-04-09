'use client';

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface VideoCardProps {
  id: string;
  title: string;
  channelName: string;
  views: string;
  timePosted: string;
  duration: string;
  channelId: string;
}

export function VideoCard({
  id,
  title,
  channelName,
  views,
  timePosted,
  duration,
  channelId,
}: VideoCardProps) {
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    setThumbnail(`https://picsum.photos/200/300?random=${id}`);
  }, [id]);

  return (
    <Card className="overflow-hidden group">
      <CardContent className="p-0">
        {/* Thumbnail Section */}
        <div className="relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full aspect-video object-cover"
          />
          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded">
            {duration}
          </span>
        </div>

        {/* Video Info Section */}
        <div className="p-3 flex gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://i.pravatar.cc/300?u=${channelId}`} />
            <AvatarFallback>{channelName[0]}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h3 className="font-semibold line-clamp-2 mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{channelName}</p>
            <div className="text-sm text-muted-foreground">
              {views} views • {timePosted}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ⋮
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}