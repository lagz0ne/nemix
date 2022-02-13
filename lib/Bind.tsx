import React, { useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

const BindContext = React.createContext<Binder | undefined>(undefined);

type Binder = {
  data: any;
  loading: boolean;
  error: any;
  refetch: (op: string, options?: Record<string, any>, data?: any) => void;
  exec: (op: string, options?: Record<string, any>, data?: any) => void;
};

export function useLoaderData<T>() {
  const fetcher = useContext(BindContext) as Binder;

  return fetcher.data as T;
}

export function useAction(op: string, { refetch } = { refetch: true }) {
  const fetcher = useContext(BindContext) as Binder;
  return (data?: any) => fetcher.exec(op, { method: "post", refetch }, data);
}

function fetcher(
  pathname: string,
  op: string,
  options?: Record<string, any>,
  data?: any
) {
  return fetch(`/api${pathname}`, {
    mode: "cors",
    headers: { op, "Content-Type": "application/json" },
    ...options,
    body: data ? JSON.stringify(data) : undefined,
  });
}

// Providing context
const bind = (Component: () => JSX.Element) => (props: any) => {
  const { pathname } = useRouter();
  const [initialized, setInitialized] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  const refetch = useMemo(
    () => async () => {
      return fetcher(pathname, "loader")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setInitialized(true);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false));
    },
    []
  );

  const exec = useMemo(
    () => (op: string, options?: Record<string, any>, data?: any) => {
      console.log(options);
      if (options?.["refetch"]) {
        console.log("Refetching");
        fetcher(pathname, op, options, data)
          .then((response) => {
            console.log("Digesting response", response);
            if (response.status === 200) {
              refetch();
            }
          })
          .catch(console.error);
      } else {
        console.log("Executing");
        fetcher(pathname, op, options, data)
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            setError(error);
          })
          .finally(() => setLoading(false));
      }
    },
    []
  );

  useEffect(() => {
    refetch();
  }, []);

  if (initialized) {
    return (
      <div>
        <BindContext.Provider
          value={{
            data,
            loading,
            error,
            refetch,
            exec,
          }}
        >
          <Component {...props} />
        </BindContext.Provider>
      </div>
    );
  } else {
    return null;
  }
};

export { bind };
