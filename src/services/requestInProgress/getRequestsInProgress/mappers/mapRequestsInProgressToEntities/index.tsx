import { IRequestsInProgress } from "@ptypes/payrollAgreement/requestInProgTab/IRequestsInProgress";
import { mapRequestsInProgressToEntity } from "../mapRequestsInProgressToEntity";

const mapRequestsInProgressToEntities = (
  enums: IRequestsInProgress[],
): IRequestsInProgress[] => {
  return enums.map(mapRequestsInProgressToEntity);
};

export { mapRequestsInProgressToEntities };
