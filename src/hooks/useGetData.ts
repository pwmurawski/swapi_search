import { useEffect, useState } from "react";

type FetcherType<DataType> = () => Promise<
  | {
      data: DataType;
      status: number;
    }
  | undefined
>;

const useGetData = <DataType>(fetcher: FetcherType<DataType>) => {
  const [data, setData] = useState<DataType>();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);

    const res = await fetcher();
    if (res?.data) setData(res.data);

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading };
};

export default useGetData;
