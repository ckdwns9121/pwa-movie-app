import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { loading as onLoading } from '../store/loading';

const useLoading = () => {
  const { loading } = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch();
  const handleLoading = (type: boolean) => {
    dispatch(onLoading(type));
  };
  return { loading, handleLoading };
};

export default useLoading;
