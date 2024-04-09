import { defineField, defineType } from "sanity";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";
import React from "react";

const OrangeIcon = () => <span style={{ fontWeight: "bold" }}>O</span>;

const OrangeDecorator = (props: any) => {
  return <span className="orange-word">{props.children}</span>;
};

export const statue = defineType({
  name: "statue",
  title: "Statue",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    orderRankField({ type: "statue" }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "height",
      title: "Height",
      type: "number",
    }),
    defineField({
      name: "material",
      title: "Material",
      type: "string",
    }),
    defineField({
      name: "weight",
      title: "Weight",
      type: "number",
    }),
  ],
});

export const FaQ = defineType({
  name: "faq",
  title: "FaQ",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
    }),
    orderRankField({ type: "faq" }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              {
                title: "Orange",
                value: "orange",
                icon: OrangeIcon,
                component: OrangeDecorator,
              },
            ],
          },
        },
      ],
    }),
  ],
});

export const works = defineType({
  name: "works",
  title: "Works",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    orderRankField({ type: "works" }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
