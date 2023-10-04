import { RecomendationsListProps } from "./List/Recomendations-List";
import { RecomendationsAsideProps } from "./Aside/Recomendations-Aside";
import RecomendationsList from "./List/Recomendations-List";
import RecomendationsAside from "./Aside/Recomendations-Aside";

import "./Recomendations.css";

export type RecomendationsProps = {
  list: RecomendationsListProps;
  aside: RecomendationsAsideProps;
};

export default function Recomendations({ list, aside }: RecomendationsProps) {
  return (
    <div className="page__recomendations">
      <RecomendationsList list={list} />
      <RecomendationsAside {...aside} />
    </div>
  );
}
