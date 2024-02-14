import EventItem from "./event-item";
import classes from "./event-list.module.css";

function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          id={event.id}
          date={event.date}
          location={event.location}
          title={event.title}
          image={event.image}
          key={event.id}
        />
      ))}
    </ul>
  );
}
export default EventList;
