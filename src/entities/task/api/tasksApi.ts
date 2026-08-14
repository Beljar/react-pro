import { baseApi } from 'shared/api';

import { type Task } from '../model/types';

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<Task[], void>({
      query: () => 'todos',

      transformResponse: (response: Task[]) => {
        return response;
      },
    }),
  }),
});

export const { useGetTasksQuery } = tasksApi;
