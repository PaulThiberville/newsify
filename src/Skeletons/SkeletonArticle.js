import React from "react";
import SkeletonElement from "./SkeletonElement";
import style from "./SkeletonArticle.module.scss";

export default function SkeletonArticle() {
  return (
    <div className={style.container}>
      <SkeletonElement type="thumbnail" />
      <div className={style.infos}>
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  );
}
