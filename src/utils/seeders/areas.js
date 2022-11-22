//? Dependencies
const Areas = require("../../models/areas.models");

const createAreas = () => {
  Areas.bulkCreate([
    {
      id: "38981b5f-71ab-466b-a1de-83b678242f50",
      name: "Finances",
      country: "Colombia",
    },
    {
      id: "00ffab12-e2ef-4149-a73e-36a202d63274",
      name: "Operations",
      country: "Colombia",
    },
    {
      id: "eaea3804-e9a6-4fcd-b1a5-5b7b543eed7c",
      name: "Marketing",
      country: "Colombia",
    },
    {
      id: "bae586bd-0d69-482b-b13a-36a2f31de88d",
      name: "Technology",
      country: "Colombia",
    },
    {
      id: "0ed44818-65a2-4bc4-a0fd-28ba1d1b8416",
      name: "Human resources",
      country: "Colombia",
    },
  ]);
};

module.exports = createAreas;
