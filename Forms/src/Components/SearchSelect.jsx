import React, { useState } from "react";
import Select from "react-select";
import data from "../Data/data.json";

export default function Form() {
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [subItem, setSubItem] = useState("");

  // 🔄 Transform JSON to react-select format
  const categories = Object.keys(data[0]).map((key) => ({
    label: key,
    value: key,
  }));

  const items =
    category && data[0][category]
      ? Object.keys(data[0][category]).map((key) => ({
          label: key,
          value: key,
        }))
      : [];

  const subItems =
    category && item && Array.isArray(data[0]?.[category]?.[item])
      ? data[0][category][item].map((sub) => ({
          label: sub,
          value: sub,
        }))
      : [];

  return (
    <form style={{ width: "300px", margin: "20px auto" }}>
      {/* 🧭 Category Dropdown */}
      <Select
        options={categories}
        value={categories.find((opt) => opt.value === category)}
        onChange={(selected) => {
          setCategory(selected.value);
          setItem("");
          setSubItem("");
        }}
        placeholder="Select category..."
        isClearable
      />

      {/* 🍎 Item Dropdown */}
      {category && (
        <Select
          options={items}
          value={items.find((opt) => opt.value === item)}
          onChange={(selected) => {
            setItem(selected.value);
            setSubItem("");
          }}
          placeholder="Select item..."
          isClearable
        />
      )}

      {/* 🔍 Subitem Dropdown */}
      {category && item && (
        <Select
          options={subItems}
          value={subItems.find((opt) => opt.value === subItem)}
          onChange={(selected) => setSubItem(selected.value)}
          placeholder="Select subitem..."
          isClearable
        />
      )}
    </form>
  );
}
