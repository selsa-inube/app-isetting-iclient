import { Stack } from "@inubekit/inubekit";

import { ITable } from "@ptypes/design/ITable";
import { TableUI } from "./interface";
import { StyledContainerTable } from "./styles";
import { tableManager } from "./utils";

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

  const {
    mediaActionOpen,
    numberActions,
    TitleColumns,
    lastEntryInPage,
    filteredEntries,
    firstEntryInPage,
    screenTablet,
    getPageEntries,
    goToFirstPage,
    goToEndPage,
    nextPage,
    prevPage,
  } = tableManager(entries, pageLength, titles, breakpoints, actions, filter);

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
          entries={getPageEntries()}
          isLoading={isLoading}
          mediaActionOpen={mediaActionOpen}
          numberActions={numberActions}
          TitleColumns={TitleColumns}
          mobileTitle={mobileTitle}
          pageLength={pageLength}
          firstEntryInPage={firstEntryInPage}
          lastEntryInPage={lastEntryInPage}
          goToFirstPage={goToFirstPage}
          prevPage={prevPage}
          nextPage={nextPage}
          goToEndPage={goToEndPage}
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
export type { ITable };
