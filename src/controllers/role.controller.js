import RoleService from "../services/role.service.js";
const RoleController = {
  listRoles: async (req, res) => {
    try {
      const data = await RoleService.listRoles();
      if (data) {
        return res.status(200).send(data);
      }
      return res.status(204).send([]);
    } catch (err) {
      console.error("error occured", err);

      return res.status(500).send({ error: "error fetching the roles list" });
    }
  },
};
export default RoleController;
