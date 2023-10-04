import { SearchPageProps } from "./components/SearchPage/SearchPage";

const init: SearchPageProps = {
  headerProps: {
    title1: "Сейчас в Сми",
    title2: "В Германии",
    title3: "Рекомендуем",
  },
  recomendations: {
    list: [
      { icon: "icon", title: "Путин упростил получение автомобильных номеров" },
      { icon: "icon", title: "В команде Зели раскрыли план реформ на Украине" },
      {
        icon: "icon",
        title: "Турпомощь прокомментировала гибель десятков россиян в Анталье",
      },
      {
        icon: "icon",
        title: "Суд закрыл дело демпартии США против России",
      },
      {
        icon: "icon",
        title: "На Украине призвали создать ракеты для удара по России",
      },
    ],
    aside: {
      img: "Картинка",
      title: "Работа над ошибками",
      description: "Смотрите на Яндексе и запоминайте",
    },
  },
};

export const map = {
  title: "Карта Германии",
  description: "Описание",
};

export const weather = {
  imgSrc:
    "https://flomaster.club/uploads/posts/2022-12/thumbs/1672258773_flomaster-club-p-oblako-risunok-dlya-detei-instagram-44.png",
  temperature: "+17",
  atMorning: "+17",
  atDay: "+20",
};

export default init;
