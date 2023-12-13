import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import '@siemens/ix-brand-theme/dist/ix-brand-theme/ix-brand-theme.css';
import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';
import { defineCustomElements as ixIconsDefineCustomElements } from '@siemens/ix-icons/loader';

(async () => {
  await applyPolyfills();
  await ixIconsDefineCustomElements();
  await defineCustomElements();
})();