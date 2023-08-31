import dbClient from "../db/db.js";
/**
 * Service for Managing Roles
 * - List Roles
 * - Create Role
 * - Get Role
 * - Update Role
 * - Delete Role
 */

const RoleService = {
  listRoles: async () => {
    console.debug("Started Executing createRole");

    let data;
    await dbClient
      .query("select * from roles")
      .then((result) => {
        data = result.rows;
      })
      .catch((reason) => {
        console.error(
          `Error [{code: ${reason?.code}, severity: ${reason?.severity}, message: ${reason?.message}}]`
        );

        throw reason;
      })
      .finally(() => {
        console.debug("Completed Executing createRole");
      });
    return data;
  },
};

export default RoleService;
