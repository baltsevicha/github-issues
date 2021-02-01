import { createAction } from '@reduxjs/toolkit';

const NAMESPACE = 'AUTH::';

export const saveToken = createAction(NAMESPACE + 'SAVE_TOKEN');
