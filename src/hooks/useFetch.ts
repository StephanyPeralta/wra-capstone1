import { useState, useEffect, useCallback } from 'react';

const defaultParseResponse = (response: any) => response;

interface Options {
  defaultValue?: any;
  parseResponse?: (data: any) => any;
  params?: Record<string, string>;
}

function useFetch(
  url: string,
  options: Options = {
    defaultValue: null,
    parseResponse: defaultParseResponse,
    params: {},
  }
) {
  const [data, setData] = useState(options.defaultValue);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}?${new URLSearchParams(options.params)}`);
      const data = await response.json();
      
      if (options.parseResponse) {
        setData(options.parseResponse(data));
      } else {
        setData(data);
      }
    } catch (e) {
      setError(true);
    }
    setIsLoading(false);
  }, [url, options.params, options.parseResponse]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
}

export { useFetch };
