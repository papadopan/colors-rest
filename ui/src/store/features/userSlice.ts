import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ColorBase {
  name: string;
  hex: string;
}

export const colorSlice = createApi({
  reducerPath: "color",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  endpoints(builder) {
    return {
      fetchColors: builder.query<
        { message: string; colors: ColorBase[] },
        void
      >({
        query() {
          return "/color";
        },
      }),
      addNewColor: builder.mutation<ColorBase, ColorBase>({
        query: (colorInput) => ({
          url: "/color",
          method: "POST",
          body: colorInput,
        }),
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
      }),
    };
  },
});

export const {
  useFetchColorsQuery,
  useAddNewColorMutation,
  useDeleteColorMutation,
} = colorSlice;
