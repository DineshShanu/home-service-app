"use client"
import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";

export default function Home() {

  const [categoryList, setCategoryList] = useState([]);
  const [busniessList, setBusinessList] = useState([]);
  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, [])



  // use to get all categorylist
  const getCategoryList = () => {
    GlobalApi.getCategory().then(res => {
      setCategoryList(res.categories);
    })
  }

  // use to get all businesslist
  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList().then(res => {
      setBusinessList(res.businessLists)
    })
  }

  return (
    <>
      <div>
        <Hero />
        <CategoryList categoryList={categoryList} />
        <BusinessList businessLists = {busniessList} title={'Popular Business'} />
      </div>
    </>
  );
}
