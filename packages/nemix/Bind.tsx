import React, { useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

const BindContext = React.createContext<Binder | undefined>(undefined);

type Binder = {
  data: any;
  loading: boolean;
  error: any;
  refetch: (op: string, options?: Record<string, any>, data?: any) => void;
  exec: (op: string, options?: Record<string, any>, data?: any) => void;
  bindPath: string
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
  return fetch(pathname, {
    mode: "cors",
    headers: { op, "Content-Type": "application/json" },
    ...options,
    body: data !== undefined ? JSON.stringify(data) : undefined,
  });
}

type Bind = {
  path?: string;
  absolute?: boolean;
  children: React.ReactNode;
}

const Bind: React.FC<Bind> = ({ path, absolute, children }) => {
  const {
    initialized, data, loading, error, exec, refetch, path: bindPath
  } = useBind({ path, absolute });

  if (initialized) {
    return <BindContext.Provider
      value={{
        data,
        loading,
        error,
        refetch,
        exec,
        bindPath
      }}
    >
      {children}
    </BindContext.Provider>
  }

  return null;
}

type BindOptions = {
  path?: string;
  absolute?: boolean;
  op?: string;
  params?: Record<string, any>
}

const BASE_URL = "/api/_pages";

function useBind(bindOptions?: BindOptions) {
  const { pathname } = useRouter();
  const binder = useContext(BindContext);

  let base = binder ? binder.bindPath : BASE_URL;

  const [initialized, setInitialized] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  let path = `${BASE_URL}${pathname}`;
  if (bindOptions?.path == undefined && bindOptions?.absolute) {
    throw new Error("Cannot use absolute without path");
  }

  if (bindOptions?.absolute && bindOptions?.path !== undefined) {
    path = `${BASE_URL}/${bindOptions.path}`;
  } else {
    path = bindOptions?.path
      ? `${base}/${bindOptions?.path}`
      : path;
  }

  const refetch = useMemo(
    () => async () => {
      return fetcher(path, "loader")
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
    [path]
  );

  const exec = useMemo(
    () => (op: string, options?: Record<string, any>, data?: any) => {
      if (options?.["refetch"]) {
        return fetcher(path, op, options, data)
          .then((response) => {
            console.log("Digesting response", response);
            if (response.status === 200) {
              refetch();
            }
          })
          .catch(console.error);
      } else {
        return fetcher(pathname, op, options, data)
      }
    },
    [path, pathname, refetch]
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    initialized, data, loading, error, exec, refetch, path
  }
}

export { Bind };
