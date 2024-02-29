import { defineConfig } from "sanity";
import { deskTool, StructureBuilder } from "sanity/desk";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { sample } from "./schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/sanity", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title("Content")
          .items([
            //@ts-expect-error
            orderableDocumentListDeskItem({
              type: "sample",
              title: "Samples",
              // pass from the structure callback params above
              //@ts-expect-error
              S,
              //@ts-expect-error
              context,
            }),
          ]);
      },
    }),
  ],

  schema: {
    types: [sample],
  },
});
