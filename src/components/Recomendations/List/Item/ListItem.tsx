import "./List-Item.css";

export type ListItemProps = {
  icon: string; //в качестве демо он строкой, а должен быть элемент img/logo
  title: string;
};

export default function ListItem({ icon, title }: ListItemProps) {
  return (
    <div className="list__item">
      <span className="item__icon">{icon}</span>
      <span className="item__title">{title}</span>
    </div>
  );
}
