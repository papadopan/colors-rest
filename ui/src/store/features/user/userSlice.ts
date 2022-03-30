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
      fetchColors: builder.query<ColorBase[], void>({
        query() {
          return "/color";
        },
      }),
    };
  },
});

export const { useFetchColorsQuery } = colorSlice;
