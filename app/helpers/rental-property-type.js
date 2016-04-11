import Ember from 'ember';

const communityPropertyTypes = {
  'Condo': true,
  'Townhouse': true,
  'Apartment': true
};

export function rentalPropertyType([type]/*, hash*/) {
  return communityPropertyTypes.hasOwnProperty(type) ? 'Community' : 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
