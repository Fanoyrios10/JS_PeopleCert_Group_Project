/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'view-homepage-or-redirect': true,
  'view-faq': true,
  'view-contact': true,
  'legal/view-terms': true,
  'legal/view-privacy': true,
  'deliver-contact-form-message': true,
  'populate/populatecoffeescontroller': true,
  'populate/populatecategoriescontroller':true,
  'populate/populateorderscontroller':true,
  'populate/populateorderdetailscontroller':true,
  
  // //Super admin policies

  // PageController: { 
  
  //   "*":"is-super-admin",
  //   "index":true,
  // },
  // CategoryController:{
  //   "*":"is-super-admin"
  // },
  // ProductController:{
  //   "*":"is-super-admin"
  // },
  // UserController:{
  //   "*":"is-super-admin"
  // },



};
