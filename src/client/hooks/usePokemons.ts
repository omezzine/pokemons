import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { FindPokemonsApiResponse } from '@common/models/pokemon.model';
import { toast } from 'react-toastify';

interface UsePokemonsPropsI {
  limit?: number;
  offset?: number;
}
export const usePokemons = (props: UsePokemonsPropsI) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setApiData] = useState<FindPokemonsApiResponse>(null);
  const [serverError, setServerError] = useState(null);
  const [offset, setOffset] = useState<number>(props.offset);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      await axios
        .get<FindPokemonsApiResponse>(
          `/api/v1/pokemons?offset=${offset}&limit=${props.limit}`,
        )
        .then((data) => {
          setApiData(data.data);
        })
        .catch((error: AxiosError) => {
          setServerError(error);
          toast(error.message, { type: 'error' });
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, [offset]);

  return { isLoading, data, setOffset, serverError };
};
