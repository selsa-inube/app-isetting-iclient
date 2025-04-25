import { MdInfoOutline } from "react-icons/md";
import {
  Autosuggest,
  Button,
  Grid,
  Icon,
  Input,
  inube,
  Label,
  Select,
  Stack,
} from "@inubekit/inubekit";

import { generalInfoLabels } from "@config/payrollAgreement/payrollAgreementTab/forms/generalInfoLabels";
import { ComponentAppearance } from "@enum/appearances";
import { getFieldState } from "@utils/getFieldState";
import { getDomainById } from "@mocks/domains/domainService.mocks";
import { DecisionModal } from "@design/modals/decisionModal";
import { BoxContainer } from "@design/layout/boxContainer";
import { tokens } from "@design/tokens";
import { IGeneralInformationPayrollFormUI } from "@ptypes/payrollAgreement/payrollAgreementTab/forms/IGeneralInformationPayrollFormUI";
import { SelectCheck } from "@design/inputs/BusinessUnitChange/selectCheck";
import { generalInfLabels } from "@config/payrollAgreement/payrollAgreementTab/assisted/generalInfLabels";
import { StyledFormContent, StyledRow } from "./styles";

const GeneralInformationPayrollFormUI = (
  props: IGeneralInformationPayrollFormUI,
) => {
  const {
    formik,
    loading,
    infoModal,
    editDataOption,
    autosuggestValue,
    isDisabledButton,
    showModal,
    sourcesOfIncomeValues,
    isMobile,
    displayList,
    focused,
    selectRef,
    typePayrollOptions,
    companyAgreement,
    gridTemplateRows,
    labelButtonPrevious,
    labelButtonNext,
    setFocused,
    setDisplayList,
    onChangeSelect,
    onChangeAutosuggest,
    onButtonClick,
    onResetEdit,
    onToggleInfoModalModal,
    onChangeCheck,
    onPreviousStep,
  } = props;

  return (
    <BoxContainer
      direction="column"
      gap={tokens.spacing.s250}
      backgroundColor={inube.palette.neutral.N0}
      boxSizing="initial"
      minHeight="55vh"
    >
      <StyledFormContent>
        <form>
          <Stack direction="column">
            <BoxContainer
              borderColor={inube.palette.neutral.N40}
              borderRadius={tokens.spacing.s100}
              width="100%"
              gap={tokens.spacing.s300}
              backgroundColor={inube.palette.neutral.N0}
              boxSizing="border-box"
              padding={
                isMobile ? `${tokens.spacing.s150}` : `${tokens.spacing.s300}`
              }
            >
              <Grid
                templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
                templateRows={gridTemplateRows}
                width="100%"
                gap={isMobile ? tokens.spacing.s050 : tokens.spacing.s250}
              >
                {editDataOption && (
                  <>
                    <Input
                      name="companyAgreement"
                      id="companyAgreement"
                      label={generalInfoLabels.companyAgreement}
                      readOnly
                      type="text"
                      size="compact"
                      value={companyAgreement}
                      fullwidth
                      disabled
                    />
                    <Input
                      name="typePayrollSelected"
                      id="typePayrollSelected"
                      label={generalInfoLabels.typePayrollSelected}
                      readOnly
                      type="text"
                      size="compact"
                      value={formik.values.typePayroll}
                      fullwidth
                      disabled
                    />
                  </>
                )}
                <StyledRow $isMobile={isMobile} $editOption={editDataOption}>
                  <Input
                    name="abbreviatedName"
                    id="abbreviatedName"
                    label={generalInfLabels.namPayroll}
                    placeholder="Nombre de nómina de convenio"
                    type="text"
                    size="compact"
                    value={formik.values.abbreviatedName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    status={getFieldState(formik, "abbreviatedName")}
                    message={formik.errors.abbreviatedName}
                    fullwidth
                  />
                </StyledRow>
                {!editDataOption && (
                  <Select
                    disabled={false}
                    id="typePayroll"
                    name="typePayroll"
                    label={generalInfLabels.typePayroll}
                    placeholder="Selecciónalo de la lista"
                    onChange={onChangeSelect}
                    options={typePayrollOptions}
                    size="compact"
                    value={formik.values.typePayroll ?? ""}
                    fullwidth
                    message={formik.errors.typePayroll}
                    invalid={formik.errors.typePayroll ? true : false}
                  />
                )}

                <SelectCheck
                  label={generalInfLabels.sourcesOfIncome}
                  name="sourcesOfIncome"
                  id="sourcesOfIncome"
                  placeholder="Selecciona opciones"
                  status={getFieldState(formik, "sourcesOfIncome")}
                  message={formik.errors.sourcesOfIncome}
                  invalid={formik.errors.sourcesOfIncome ? true : false}
                  fullwidth={true}
                  options={sourcesOfIncomeValues}
                  value={formik.values.sourcesOfIncome}
                  onBlur={formik.handleBlur}
                  onChangeCheck={onChangeCheck}
                  size="compact"
                  onChange={formik.handleChange}
                  displayList={displayList}
                  focused={focused}
                  selectRef={selectRef}
                  setFocused={setFocused}
                  setDisplayList={setDisplayList}
                />

                <Stack direction="column">
                  <Stack
                    alignItems="center"
                    gap={tokens.spacing.s050}
                    margin={`${tokens.spacing.s0} ${tokens.spacing.s0} ${tokens.spacing.s075} ${tokens.spacing.s200}`}
                  >
                    <Label htmlFor="applicationDaysPayroll" size="small">
                      {generalInfLabels.daysApplication}
                    </Label>
                    <Icon
                      icon={<MdInfoOutline />}
                      appearance={ComponentAppearance.PRIMARY}
                      onClick={onToggleInfoModalModal}
                      size="12px"
                      cursorHover
                    />
                  </Stack>

                  <Autosuggest
                    label=""
                    name="applicationDaysPayroll"
                    id="applicationDaysPayroll"
                    placeholder="Escribe o selecciona # de días"
                    value={autosuggestValue}
                    onChange={onChangeAutosuggest}
                    options={getDomainById("daysForApplication")}
                    onBlur={formik.handleBlur}
                    size="compact"
                    fullwidth
                    message={formik.errors.applicationDaysPayroll}
                    invalid={
                      formik.errors.applicationDaysPayroll ? true : false
                    }
                  />
                </Stack>
              </Grid>
            </BoxContainer>
          </Stack>
        </form>
      </StyledFormContent>
      <Stack justifyContent="flex-end" gap={tokens.spacing.s250}>
        <Button
          fullwidth={isMobile}
          onClick={editDataOption ? onResetEdit : onPreviousStep}
          variant="outlined"
          appearance={ComponentAppearance.GRAY}
        >
          {labelButtonPrevious}
        </Button>

        <Button
          fullwidth={isMobile}
          onClick={onButtonClick}
          disabled={isDisabledButton}
          loading={loading}
          appearance={ComponentAppearance.PRIMARY}
        >
          {labelButtonNext}
        </Button>
      </Stack>
      {showModal && (
        <DecisionModal
          portalId="portal"
          title={infoModal.title}
          description={infoModal.description}
          actionText={infoModal.actionText}
          withIcon
          withCancelButton={false}
          icon={<MdInfoOutline />}
          appearance={ComponentAppearance.PRIMARY}
          onCloseModal={onToggleInfoModalModal}
          onClick={onToggleInfoModalModal}
          moreDetails={infoModal.moreDetails}
        />
      )}
    </BoxContainer>
  );
};

export { GeneralInformationPayrollFormUI };
