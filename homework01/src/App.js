import "./App.css";

// Развернуть новый проект с использованием create-react-app.
// Создать компонент Message, отображающий переданный ему props текст.
// Стилизовать компоненты через css (при желании можно использовать less или sass).

function App() {
  return (
    <div className="App">
      <Message text="Алексей" style="first-name-aleks" />
      <Message text="Владимир" style="first-name-vovqa" />
    </div>
  );
}

function Message({ text, style }) {
  return (
    <div>
      <h1>
        Привет <span className={style}>{text}</span>!
      </h1>
    </div>
  );
}

export default App;
