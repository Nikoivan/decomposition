import { ListItemProps } from "./Item/ListItem";
import ListItem from "./Item/ListItem";

export type RecomendationsListProps = ListItemProps[];

export default function RecomendationsList({
  list,
}: {
  list: ListItemProps[];
}) {
  return (
    <ul className="recomendations-list">
      {list.map((el, id) => (
        <ListItem {...el} key={id} />
      ))}
    </ul>
  );
}
