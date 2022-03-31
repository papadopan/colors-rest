import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";

interface ColorBase {
  name: string;
  hex: string;
}

interface CustomError {
  data: {
    message: string;
    stack: string;
  };
  status: number;
}

export const colorSlice = createApi({
  reducerPath: "color",
  tagTypes: ["ColorBase"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
  endpoints(builder) {
    return {
      fetchColors: builder.query<
        { message: string; colors: ColorBase[] },
        void
      >({
        query() {
          return "/color";
        },
        providesTags: ["ColorBase"],
      }),
      addNewColor: builder.mutation<ColorBase, ColorBase>({
        query: (colorInput) => ({
          url: "/color",
          method: "POST",
          body: colorInput,
        }),
        invalidatesTags: ["ColorBase"],
      }),
      deleteColor: builder.mutation<
        { message: string; colors: ColorBase },
        { name: string }
      >({
        query: (colorInput) => ({
          url: "/color",
          method: "DELETE",
          body: colorInput,
        }),
        invalidatesTags: ["ColorBase"],
      }),
      updateColor: builder.mutation<{ message: string }, ColorBase>({
        query: (colorInput) => ({
          url: "/color",
          method: "PATCH",
          body: colorInput,
        }),
        invalidatesTags: ["ColorBase"],
      }),
    };
  },
});

export const {
  useFetchColorsQuery,
  useAddNewColorMutation,
  useDeleteColorMutation,
  useUpdateColorMutation,
} = colorSlice;
