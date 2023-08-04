import { documentBuilder } from "@docufy/core";
import { DefaultTheme } from "@docufy/theme-builder";

const app = documentBuilder<DefaultTheme>({
  lang: "en",
  title: "Title",
  description: "Description",
  styles: {
    navbar: {}
  },
});

export default app