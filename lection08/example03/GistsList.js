import React, { useEffect, useState, useCallback } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const API_URL_PUBLIC = "https://api.github.com/gists/public";

function GistsList() {
  // объявление state-переменных
  const [gists, setGists] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const requestGists = async () => {
    try {
      // устанавливаем loading в true перед началом запроса
      setLoading(true);
      const response = await fetch(API_URL_PUBLIC);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const result = await response.json();
      setGists(result);
    } catch (error) {
      setError(true);
      console.warn(error);
    } finally {
      setLoading(false);
    }
  };

  // вызываем requestGists при монтировании компонента
  useEffect(() => {
    requestGists();
  }, []);

  const renderGist = useCallback(
    (gist) => <li key={gist.id}>{gist.description || "Без описания"}</li>,
    []
  );

  // обработка различных состояний
  if (loading) return <CircularProgress />;
  if (error)
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestGists}>Retry</button>
      </>
    );
  if (gists.length === 0) return <p>No gists available.</p>;
  return <ul>{gists.map(renderGist)}</ul>;
}

export default GistsList;
