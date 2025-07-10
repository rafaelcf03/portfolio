import { useEffect } from "react";

type HeadProps = {
  title: string;
};

export default function Head({ title }: HeadProps) {
  useEffect(() => {
    document.title = "Rafael de Castro | " + title;
  }, [title]);

  return <></>;
}
