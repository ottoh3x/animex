"use client";
import React, { useEffect, useState } from "react";

type EpisodesPaginationProps = {
  episodesList: any;
  episodesPerPage: number;
  currentPage: number;
  handlePageChange: (e: number) => void;
  totalPages: number;
};

export default function EpisodesPagination({
  episodesList,
  episodesPerPage,
  currentPage,
  handlePageChange,
  totalPages,
}: EpisodesPaginationProps) {
  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => i + start);

  const renderPages = () => {
    if (totalPages <= 5) {
      return range(1, totalPages).map((pageNumber) => (
        <button
          key={pageNumber}
          className={`inline-flex items-center px-3 py-1.5 mx-0.5 rounded-md cursor-pointer text-sm font-semibold hover:bg-red-600 ${
            pageNumber === currentPage ? "bg-red-700" : "bg-neutral-900"
          } `}
          onClick={() => handlePageChange(pageNumber)}
          disabled={pageNumber === currentPage}
        >
          {pageNumber}
        </button>
      ));
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + 4);

      return range(start, end).map((pageNumber) => (
        <button
          key={pageNumber}
          className={`inline-flex items-center px-3 py-1.5 mx-0.5 rounded-md cursor-pointer text-sm font-semibold hover:bg-red-600 ${
            pageNumber === currentPage ? "bg-red-700" : "bg-neutral-900"
          } `}
          onClick={() => handlePageChange(pageNumber)}
          disabled={pageNumber === currentPage}
        >
          {pageNumber}
        </button>
      ));
    }
  };

  return renderPages();
}

