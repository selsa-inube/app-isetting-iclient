import {
  Text,
  Colgroup,
  Pagination,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@inubekit/inubekit";
import { ITableUI } from "@ptypes/design/ITableUI";
import { ComponentAppearance } from "@enum/appearances";
import { WidthColmnsData } from "./widthColumns";
import { ShowActionTitle } from "./showActionTitle";
import { ShowAction } from "./showAction";
import { DataLoading } from "./dataLoading";

const TableUI = (props: ITableUI) => {
  const {
    actions,
    entries,
    entriesLength,
    filteredEntries,
    firstEntryInPage,
    isLoading,
    lastEntryInPage,
    pageLength,
    titles,
    widthPercentageTotalColumns,
    columnWidths,
    mediaActionOpen,
    numberActions,
    TitleColumns,
    emptyDataMessage,
    withActionsTitles,
    goToEndPage,
    goToFirstPage,
    nextPage,
    prevPage,
  } = props;

  return (
    <Table tableLayout="fixed">
      <Colgroup>
        {WidthColmnsData(
          TitleColumns,
          widthPercentageTotalColumns,
          columnWidths,
        )}
      </Colgroup>

      <Thead>
        <Tr border="bottom">
          {TitleColumns.map((title, index) => (
            <Th key={index} align="center">
              {title.titleName}
            </Th>
          ))}
          {ShowActionTitle(
            numberActions,
            mediaActionOpen,
            actions,
            withActionsTitles,
          )}
        </Tr>
      </Thead>
      <Tbody>
        {isLoading ? (
          DataLoading({ titleColumns: TitleColumns, numberActions })
        ) : (
          <>
            {entriesLength === 0 ? (
              <Tr>
                <Td type="custom" colSpan={titles.length + actions.length}>
                  <Text
                    type="label"
                    size={mediaActionOpen ? "medium" : "large"}
                    appearance="dark"
                    ellipsis
                  >
                    {emptyDataMessage
                      ? `${emptyDataMessage}`
                      : "No se encontró información"}
                  </Text>
                </Td>
              </Tr>
            ) : (
              <>
                {entries.length > 0 ? (
                  entries.map((entry, index) => (
                    <Tr key={index} zebra={index % 2 === 1}>
                      {TitleColumns.map((title, index) => (
                        <Td
                          key={`${index}-${entry[title.id]}`}
                          align={entry.action ? "center" : "left"}
                          type="custom"
                        >
                          <Text size="small" ellipsis={true}>
                            {entry[title.id]}
                          </Text>
                        </Td>
                      ))}
                      {ShowAction(actions, entry, mediaActionOpen)}
                    </Tr>
                  ))
                ) : (
                  <Tr>
                    <Td type="custom" colSpan={titles.length + actions.length}>
                      <Text
                        type="label"
                        size="large"
                        appearance={ComponentAppearance.DARK}
                        ellipsis
                      >
                        No hay resultados que coincidan con la búsqueda.
                      </Text>
                    </Td>
                  </Tr>
                )}
              </>
            )}
          </>
        )}
      </Tbody>

      {filteredEntries.length > pageLength && (
        <Tfoot>
          <Tr border="bottom">
            <Td
              colSpan={
                mediaActionOpen ? titles.length : titles.length + actions.length
              }
              type="custom"
              align="left"
            >
              <Pagination
                firstEntryInPage={firstEntryInPage}
                lastEntryInPage={lastEntryInPage}
                totalRecords={filteredEntries.length}
                handleStartPage={goToFirstPage}
                handlePrevPage={prevPage}
                handleNextPage={nextPage}
                handleEndPage={goToEndPage}
              />
            </Td>
          </Tr>
        </Tfoot>
      )}
    </Table>
  );
};

export { TableUI };
