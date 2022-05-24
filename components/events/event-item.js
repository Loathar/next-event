import Link from "next/link";
import classes from "./event-item.module.css";
function EventItem(props) {
  //Getting values from the item props.
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("no-NO", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formatedAdress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formatedAdress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>EXPLORE EVENT</Link>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
