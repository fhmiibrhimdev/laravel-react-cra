import React from "react";

function PaginationInfo(props) {
  const { currentPage, itemsPerPage, totalItems } = props;
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems);
  const infoText = `Showing ${startIndex} to ${endIndex} of ${totalItems} results`;

  return <div>{infoText}</div>;
}

export default PaginationInfo;
