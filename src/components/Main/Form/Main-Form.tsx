import "./Main-Form.css";

export default function MainForm() {
  return (
    <div className="form__wrapper">
      <h3 className="wrapper__title">Яндекс</h3>
      <form className="wrapper__form">
        <input type="text" className="input" />
        <button>Найти</button>
      </form>
    </div>
  );
}
