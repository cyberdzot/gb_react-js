import React, { Component } from "react";
import axios from "axios";

class GistList extends Component {
  state = {
    gists: [],
  };

  componentDidMount() {
    // запрос для получения списка gists
    axios
      .get("https://api.github.com/gists")
      .then((response) => {
        // обновляем состояние компонента с данными из ответа
        this.setState({ gists: response.data });
      })
      .catch((error) => {
        console.error("Ошибка при получении данных: ", error);
      });
  }

  render() {
    const { gists } = this.state;

    return (
      <div>
        <h1>Список Gists на Github</h1>
        <ul>
          {gists.map((gist) => (
            <li key={gist.id}>
              {/* target="_blank" чтобы страница открылась в новой вкладке */}
              <a href={gist.html_url} target="_blank" rel="noopener noreferrer">
                {gist.description || "Без описания"}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GistList;