const nextPage = (currentPage: number, totalPages: number) =>
  currentPage < totalPages ? currentPage + 1 : currentPage;

export { nextPage };
