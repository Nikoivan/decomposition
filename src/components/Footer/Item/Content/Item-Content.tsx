import "./Item-Content.css";

export type ItemContentProps = { subtitle: string; description: string };

export default function ItemContent({
  subtitle,
  description,
}: ItemContentProps) {
  return (
    <div className="item__content">
      <h4 className="content__subtitle">{subtitle}</h4>
      <p className="content__description">{description}</p>
    </div>
  );
}
