const selectContacts = (state) => state.contacts.items;
const selectLoadingStatus = (state) => state.contacts.isLoading;
const selectError = (state) => state.contacts.error;
const selectFilter = (state) => state.filter;

export { selectContacts, selectLoadingStatus, selectError, selectFilter };