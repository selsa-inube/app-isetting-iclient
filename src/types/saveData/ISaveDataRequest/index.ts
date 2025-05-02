interface ISaveDataRequest {
  applicationName: string;
  businessManagerCode: string;
  businessManagerName: string;
  businessUnitName: string;
  businessUnitCode: string;
  configurationRequestData: Record<string, unknown>;
  description: string;
  entityName: string;
  requestDate: string;
  useCaseName: string;
}

export type { ISaveDataRequest };
