"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { ICategoriesType } from "type/type";
import sliderScrollFn from "functions/SliderScroll";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

function Categories({ categories }: { categories: ICategoriesType[] }) {
  const newsSliderRef = useRef(null);
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const nextFn = () => {
    setSliderIndex(
      sliderIndex === categories.length - 1
        ? categories.length - 1
        : sliderIndex + 1
    );
    sliderScrollFn(newsSliderRef.current!, 30, 370, 50);
  };

  const backFn = () => {
    setSliderIndex(sliderIndex === 0 ? 0 : sliderIndex - 1);
    sliderScrollFn(newsSliderRef.current!, 30, 370, -50);
  };

  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsSliderContainer}>
        <button
          onClick={() => {
            backFn();
          }}
        >
          <HiChevronLeft size={120} />
        </button>
        <div id="newsSlider1" className={styles.newsSlider} ref={newsSliderRef}>
          {categories.map((category) => (
            <Link
              rel="preload"
              key={category.id}
              className={styles.category}
              href={`/${category.id}`}
              as={`/${category.id}`}
            >
              <div className={styles.name}>{category.name}</div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => {
            nextFn();
          }}
        >
          <HiChevronRight size={120} />
        </button>
      </div>
    </div>
  );
}

export { CategoriesLoading } from "./loading";
export { Categories };
