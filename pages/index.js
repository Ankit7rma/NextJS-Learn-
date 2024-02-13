import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/event-list";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>The HomePage </h1>
      <EventList items={featuredEvents} />
    </div>
  );
}
