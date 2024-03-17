import React, { Component } from "react";

class PublicGists extends Component {
  state = {
    publicGists: [],
  };

  componentDidMount() {
    // запрос для получения списка публичных gists
    fetch("https://api.github.com/gists/public")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при получении данных");
        }
        return response.json();
      })
      .then((data) => {
        // обновляем состояние компонента с данными из ответа
        this.setState({ publicGists: data });
      })
      .catch((error) => {
        console.error("Ошибка при получении данных: ", error);
      });
  }

  
  render() {
    const { publicGists } = this.state;

    return (
      <div>
        <h1>Список публичных Gists на Github</h1>
        <ul>
          {publicGists.map((gist) => (
            <li key={gist.id}>
              <a href={gist.html_url} target="_blank">
                {gist.description || "Без описания"}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PublicGists;
