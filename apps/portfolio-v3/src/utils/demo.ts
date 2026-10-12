export const DEMO_EVENT = 'demo-toast';

/** Shows the "this is a demo" toast — used by placeholder links and buttons. */
export const showDemo = (e?: { preventDefault: () => void }) => {
  e?.preventDefault();
  window.dispatchEvent(new CustomEvent(DEMO_EVENT));
};
