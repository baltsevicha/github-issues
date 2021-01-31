import { createAction } from '@reduxjs/toolkit';

const NAMESPACE = 'ISSUES_SCREEN::';

export const initIssues = createAction(NAMESPACE + 'INIT_ISSUES');
