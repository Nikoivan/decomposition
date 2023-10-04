import { PageHeaderProps } from "../Header/Page-Header";
import { RecomendationsProps } from "../Recomendations/Recomendations";
import PageHeader from "../Header/Page-Header";
import Recomendations from "../Recomendations/Recomendations";
import PageMain from "../Main/Page-Main";
import MainForm from "../Main/Form/Main-Form";
import Footer from "../Footer/Footer";
import WidgetWeather from "../Widget/Weather/Widget-Weather";
import WidgetMap from "../Widget/Map/Widget-Map";

import { weather, map } from "../../init";

export type SearchPageProps = {
  headerProps: PageHeaderProps;
  recomendations: RecomendationsProps;
};

const elements = [
  {
    children: WidgetWeather({ ...weather }),
    elements: {
      title: "Посещаемое",
      content: [
        { subtitle: "Недвижимость", description: "о сталинках" },
        { subtitle: "Маркет", description: "люстры и светильники" },
        { subtitle: "Авто.ру", description: "привод 4х4 до 500 000" },
      ],
    },
  },
  {
    children: WidgetMap({ ...map }),
    elements: {
      title: "Телепрограмма",
      content: [
        { subtitle: "02.00 ТНТ.Best", description: "ТНТ International" },
        { subtitle: "02.15 Джинглики", description: "Карусель INT" },
        { subtitle: "02.25 Наедине со всеми", description: "Первый" },
      ],
    },
  },
  {
    elements: {
      title: "Эфир",
      content: [
        { subtitle: "Управление как исскуство", description: "Успех" },
        { subtitle: "Ночь. Мир в это время", description: "earthTV" },
        { subtitle: "Андрей Возн...", description: "Совершенно Секретно" },
      ],
    },
  },
];

export default function SearchPage({
  headerProps,
  recomendations,
}: SearchPageProps) {
  return (
    <>
      <div className="page__header">
        <PageHeader {...headerProps} />
      </div>
      <aside className="page__aside">
        <Recomendations {...recomendations} />
      </aside>
      <PageMain children={MainForm()} />
      <Footer elements={elements} />
    </>
  );
}
