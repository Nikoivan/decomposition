import "./Page-Header.css";

export type PageHeaderProps = {
  title1: string;
  title2: string;
  title3: string;
};

export default function PageHeader({
  title1,
  title2,
  title3,
}: PageHeaderProps) {
  const date = new Date();
  return (
    <div className="page__header">
      <span className="header__title1">{title1}</span>
      <span className="header__title1">{title2}</span>
      <span className="header__title1">{title3}</span>
      <span className="header__date">{`${date.getFullYear()}`}</span>
    </div>
  );
}
