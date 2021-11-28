import { memoizeAsync as memoizeASynchronous } from '@codealong/utilities';
import { memoize as memoizeSynchronous } from '@codealong/utilities';

export const memoize = memoizeSynchronous();
export const memoizeAsync = memoizeASynchronous();
