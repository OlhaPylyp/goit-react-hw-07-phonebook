import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const getContactsRequest = createAction("contacts/getContactsRequest");
export const getContactsSuccess = createAction("contacts/getContactsSuccess");
export const getContactsFailure = createAction("contacts/getContactsFailurer");

// export const addContact = createAction("contacts/addContact")
// , ({ name, number }) => ({
//   payload: { id: shortid.generate(), name, number },
// }));
export const addContactsRequest = createAction("contacts/addContactsRequest");
export const addSuccess = createAction("contacts/addSuccess");
// , ({ name, number }) => ({
//   payload: { id: shortid.generate(), name, number },
// }));
export const addFailure = createAction("contacts/addFailure");

export const filterChange = createAction("contacts/filterChange");

export const deleteContactsRequest = createAction( "contacts/deleteContactsRequest"
);
// export const deleteContact = createAction("contacts/delete");
export const deleteChangeSuccess = createAction("contacts/deleteChangeSuccess");
export const deleteChangeFailure = createAction("contacts/deleteChangeFailure");
