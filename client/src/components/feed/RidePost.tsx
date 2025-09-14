import React, { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { useAppStore } from "../../store/store";

interface RidePostProps {
    id: number;
    user: string;
    ride: string;
    distance: string;
    location: string;
    time: string;
    chapeauCount: number;
    hasChapeaued: boolean;
    comments: string[];
}

export default function RidePost({
    id,
    user,
    ride,
    distance,
    location,
    time,
    chapeauCount,
    hasChapeaued,
    comments,
}: RidePostProps) {

}