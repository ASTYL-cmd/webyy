import { useSyncExternalStore } from 'react';

// Tiny shared store: a "Start This Plan" click publishes the chosen plan; the contact form listens.
// `nonce` changes on every click so re-clicking the same plan re-applies it, while manual edits in the
// form (which never touch this store) always win until the next click.
interface Selection { slug: string; nonce: number }

let state: Selection = { slug: '', nonce: 0 };
const listeners = new Set<() => void>();

export function selectPlan(slug: string) {
  state = { slug, nonce: state.nonce + 1 };
  listeners.forEach((l) => l());
}

const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

export const useSelectedPlan = () => useSyncExternalStore(subscribe, () => state, () => state);
