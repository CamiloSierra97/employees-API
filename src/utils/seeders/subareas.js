//? Dependencies
const Subareas = require("../../models/subareas.models");

const createSubareas = () => {
  Subareas.bulkCreate([
    {
      id: "018a1eae-56ab-450f-b550-86792d8e577c",
      name: "Accounting",
      areaId: "38981b5f-71ab-466b-a1de-83b678242f50",
    },
    {
      id: "6d9cc371-d9dd-46dc-8db0-3a42a005e1b8",
      name: "Production",
      areaId: "00ffab12-e2ef-4149-a73e-36a202d63274",
    },
    {
      id: "75736f7f-f895-4aa0-a9c0-4748a3abde82",
      name: "Customer Service",
      areaId: "eaea3804-e9a6-4fcd-b1a5-5b7b543eed7c",
    },
    {
      id: "1f156c19-82df-40ad-9c68-db9d5cb95f3c",
      name: "IT",
      areaId: "bae586bd-0d69-482b-b13a-36a2f31de88d",
    },
    {
      id: "ba49dc8c-8be3-4cc3-8182-2351ec82ce87",
      name: "Recruiting",
      areaId: "0ed44818-65a2-4bc4-a0fd-28ba1d1b8416",
    },
  ]);
};

module.exports = createSubareas;
