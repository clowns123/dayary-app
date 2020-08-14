import React from "react";
import Days from "../components/Days";
import client from "../lib/api/client";

const nowDate = new Date();
const nowYear = nowDate.getFullYear();
const nowMounth = nowDate.getMonth();

export default function DaysContainer() {
  return <Days click={click} />;
}

const click = async (_, year = nowYear, mounth = nowMounth) => {
  const res = await client.get("api/posts");
  if (mounth < 10) {
    mounth = `0${mounth}`;
  }

  const date = res.data.filter((t) => {
    const d = t.publishedDate.slice(0, 10);
    return d.indexOf(`${year}-${mounth}`) !== -1 ? t : null;
  });
  console.log(date);
};
