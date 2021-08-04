import { useState, useEffect } from "react";

const useFetcher = (
  url,
  {
    method = "GET",
    headers,
    body,
    cache,
    credentials,
    integrity,
    keepalive,
    mode,
    redirect,
    referrer,
    referrerPolicy,
    signal,
    window,
  } = {}
) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [length, setLength] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        await fetch(url, {
          headers: headers,
          body: body,
          method: method,
          cache: cache,
          credentials: credentials,
          integrity: integrity,
          keepalive: keepalive,
          mode: mode,
          redirect: redirect,
          referrer: referrer,
          referrerPolicy: referrerPolicy,
          signal: signal,
          window: window,
        })
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            setLoading(false);
            setLength(data.length);
          });
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [url]);

  return { loading, error, data, length, url };
};


export { useFetcher };
