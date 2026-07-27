(() => {
  "use strict";
  if (window.KernelUiI18nObserverShim) return;

  const NativeMutationObserver = window.MutationObserver;
  let restored = false;

  function restore() {
    if (restored) return;
    restored = true;
    window.MutationObserver = NativeMutationObserver;
  }

  class ScopedMutationObserver {
    constructor(callback) {
      this.observer = new NativeMutationObserver(callback);
    }

    observe(target, options = {}) {
      const isExtendedUiObserver = options.characterData === true &&
        Array.isArray(options.attributeFilter) &&
        options.attributeFilter.includes("aria-label") &&
        options.attributeFilter.includes("placeholder");

      const safeOptions = isExtendedUiObserver ? {
        ...options,
        characterData: false
      } : options;

      this.observer.observe(target, safeOptions);
      if (isExtendedUiObserver) restore();
    }

    disconnect() {
      return this.observer.disconnect();
    }

    takeRecords() {
      return this.observer.takeRecords();
    }
  }

  window.MutationObserver = ScopedMutationObserver;
  window.setTimeout(restore, 1500);

  window.KernelUiI18nObserverShim = {
    version: "1.0.0",
    restore
  };
})();
