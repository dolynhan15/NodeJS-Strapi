'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    find2: async ctx => {
        // Store the new user in database.
  
        // Send an email to validate his subscriptions.
        var data = strapi.services.sanpham.findAllProduct()
    
        // Send response to the server.
        ctx.send({
          ok: true,
          data: data
        });
      },
};
