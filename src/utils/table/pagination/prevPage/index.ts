const prevPage = (currentPage: number) =>
  currentPage > 1 ? currentPage - 1 : currentPage;
export { prevPage };
