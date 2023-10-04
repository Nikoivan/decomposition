export type WidgetMapProps = {
  title: string;
  description: string;
};

export default function WidgetMap({ title, description }: WidgetMapProps) {
  return (
    <div className="widget__map">
      <h3 className="map__title">{title}</h3>
      <span>{description}</span>
    </div>
  );
}
