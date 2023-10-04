export type RecomendationsAsideProps = {
  img: string;
  title: string;
  description: string;
};

export default function RecomendationsAside({
  img,
  title,
  description,
}: RecomendationsAsideProps) {
  return (
    <div className="recomendations__aside">
      <span className="img">{img}</span>
      <h2 className="aside__title">{title}</h2>
      <p className="aside__description">{description}</p>
    </div>
  );
}
