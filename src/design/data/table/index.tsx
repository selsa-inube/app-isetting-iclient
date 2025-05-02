import { Stack, useMediaQueries, useMediaQuery } from "@inubekit/inubekit";

import { ITable } from "@ptypes/design/ITable";
import { TableUI } from "./interface";
import { StyledContainerTable } from "./styles";
import { useMemo, useState } from "react";
import { filterEntries } from "@utils/table/filterEntries";
import { getQueriesArray } from "@utils/table/breakpoint/getQueriesArray";
import { nextPage } from "@utils/table/pagination/nextPage";
import { prevPage } from "@utils/table/pagination/prevPage";
import { getPagination } from "@utils/table/pagination/getPagination";
import { goToFirstPage } from "@utils/table/pagination/goToFirstPage";
import { goToEndPage } from "@utils/table/pagination/goToEndPage";
import { getPageEntries } from "@utils/table/pagination/getPageEntries";
import { titleColumns } from "@utils/table/titleColumns";
import { findCurrentMediaQuery } from "@utils/table/breakpoint/findCurrentMediaQuery";

const Table = (props: ITable) => {
  const {
    id,
    titles,
    actions,
    entries,
    filter = "",
    isLoading,
    mobileTitle,
    pageLength = 4,
    breakpoints,
    widthPercentageTotalColumns,
    columnWidths,
    emptyDataMessage,
    withActionsTitles,
  } = props;

  const [currentPage, setCurrentPage] = useState(1);

  const mediaQueries = useMediaQueries(getQueriesArray(breakpoints));
  const mediaActionOpen = useMediaQuery("(max-width: 1200px)");
  const screenTablet = useMediaQuery("(max-width: 1200px)");

  const media = useMediaQueries(getQueriesArray(breakpoints) || []);

  const filteredEntries = useMemo(
    () => filterEntries(entries, filter, titles),
    [entries, filter, titles],
  );

  const { totalPages, firstEntry, lastEntry } = getPagination(
    currentPage,
    pageLength,
    filteredEntries.length,
  );

  const numberActions = actions ? actions.length : 1;

  const findCurrentMedia = findCurrentMediaQuery(media);

  return (
    <StyledContainerTable
      id={id}
      $pageLength={pageLength}
      $entriesLength={entries.length}
      $isTablet={screenTablet}
    >
      <Stack direction="column">
        <TableUI
          titles={titles}
          actions={actions}
          entriesLength={entries.length}
          entries={getPageEntries(filteredEntries, firstEntry, lastEntry)}
          isLoading={isLoading}
          mediaActionOpen={mediaActionOpen}
          numberActions={numberActions}
          TitleColumns={titleColumns(
            titles,
            breakpoints,
            mediaQueries,
            findCurrentMedia,
          )}
          mobileTitle={mobileTitle}
          pageLength={pageLength}
          firstEntryInPage={firstEntry}
          lastEntryInPage={lastEntry}
          goToFirstPage={() => goToFirstPage(setCurrentPage)}
          prevPage={() => prevPage(currentPage)}
          nextPage={() => nextPage(currentPage, totalPages)}
          goToEndPage={() => goToEndPage(setCurrentPage, totalPages)}
          filteredEntries={filteredEntries}
          widthPercentageTotalColumns={widthPercentageTotalColumns}
          columnWidths={columnWidths}
          emptyDataMessage={emptyDataMessage}
          withActionsTitles={withActionsTitles}
        />
      </Stack>
    </StyledContainerTable>
  );
};

export { Table };
