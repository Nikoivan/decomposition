export type WidgetWeatherProps = {
  imgSrc: string;
  temperature: string;
  atMorning: string;
  atDay: string;
};

export default function WidgetWeather({
  imgSrc,
  temperature,
  atMorning,
  atDay,
}: WidgetWeatherProps) {
  return (
    <div className="widget__weather">
      <img src={imgSrc} alt="Img weather" style={{ width: "30px" }} />
      <span className="weather__temp">{temperature}</span>
      <span>Утром {atMorning}</span>
      <span>Днем {atDay}</span>
    </div>
  );
}
