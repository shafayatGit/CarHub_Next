"use client";
import React, { Fragment, useState } from "react";
import { SearchManufacturerPropr } from "../types";
import clsx from 'clsx';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "../Constants";

export default function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerPropr) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(manufacturers[1])

  const filteredManufacturers =
    query == ""
      ? manufacturers
      : manufacturers
          .filter((item) => item.toLowerCase().replace(/\s+/g, ""))
          .includes(query.toLowerCase().replace(/\s+/g, ""));

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
     
    </div>
  );
}
