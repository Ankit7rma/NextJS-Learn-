import Link from "next/link";
import React from "react";
import classes from "./event-item.module.css";
import Button from "../ui/button";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

export default function EventItem(props) {
  const { title, date, id, location, image } = props;
  const humanRedableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location?.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h1>{title}</h1>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanRedableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span> Explore Event</span>
            <span className={classes.icon}>
              {" "}
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
