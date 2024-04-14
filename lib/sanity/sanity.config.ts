import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { FaQ, statue, works } from "./schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/sanity", // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: ({ S, context }: any) => {
        return S.list()
          .title("Content")
          .items([
            //@ts-expect-error
            orderableDocumentListDeskItem({
              type: "statue",
              title: "Statues",
              // pass from the structure callback params above
              //@ts-expect-error
              S,
              context,
            }),
            //@ts-expect-error
            orderableDocumentListDeskItem({
              type: "faq",
              title: "FaQ",
              // pass from the structure callback params above
              //@ts-expect-error
              S,
              context,
            }),
            //@ts-expect-error
            orderableDocumentListDeskItem({
              type: "works",
              title: "Works",
              // pass from the structure callback params above
              //@ts-expect-error
              S,
              context,
            }),
          ]);
      },
    }),
  ],

  schema: {
    types: [statue, FaQ, works],
  },
});
