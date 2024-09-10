import React, { useEffect, useState } from "react";

export default function FetchApi() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        setRecord(data?.categories);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      <h1>Meal Categories</h1>
      {record?.map((item, index) => {
        return (
          <div key={index} id={item?.idCategory}>
            <div className="">{item?.strCategory}</div>
            <div className="flex justify-center">
              <img src={item?.strCategoryThumb} alt={item?.strCategory} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
