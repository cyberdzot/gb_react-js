import React from "react";
import GistsList from "./GistsList";

function App1() {
  return (
    <div>
      Шапка приложения с заголовком
      <header>
        <h1>Список gists с Github</h1>
      </header>
      Основная часть приложения, где будет отображаться список gists
      <main>
        <GistsList />
      </main>
    </div>
  );
}

export default App1;
