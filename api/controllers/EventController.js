/**
 * EventController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
// action - create
create: async function (req, res) {

  if (req.method == "GET")
      return res.view('event/create');

  if (typeof req.body.event === "undefined")
      return res.badRequest("Form-data not received.");

  await event.create(req.body.event);

  return res.ok("Successfully created!");
},


};

