const noResults = (search: string) => {
  return {
    title: `No se encontraron resultados para "${search}".`,
    description: "Por favor, intenta modificando los parámetros de búsqueda.",
  };
};

export { noResults };
