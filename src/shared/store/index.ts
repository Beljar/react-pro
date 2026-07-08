import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

// eslint-disable-next-line boundaries/dependencies
import type { AppDispatch, RootState } from 'app/store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
