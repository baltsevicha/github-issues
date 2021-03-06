import { createAction } from '@reduxjs/toolkit';

const NAMESPACE = 'HOME_SCREEN::';

export const submitForm = createAction(NAMESPACE + 'SUBMIT_FORM');
export const toggleLoading = createAction(NAMESPACE + 'TOGGLE_LOADING');
export const saveComponentId = createAction(NAMESPACE + 'SAVE_COMPONENT_ID');
