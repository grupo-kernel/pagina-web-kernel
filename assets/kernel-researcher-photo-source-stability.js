(() => {
  "use strict";
  if (window.KernelResearcherPhotoSourceStability) return;

  const RESEARCHERS_PATH = "/core/data/researchers.v2.json";
  const JUAN_ID = "juan-torregrosa";
  const JUAN_PHOTO = "assets/img/researchers-20260726/juan-ramon.jpg";
  const previousFetch = window.fetch.bind(window);

  const isResearchersRequest = input => {
    try {
      const raw = typeof input === "string" || input instanceof URL ? input : input?.url;
      return new URL(raw, document.baseURI).pathname.endsWith(RESEARCHERS_PATH);
    } catch {
      return false;
    }
  };

  window.fetch = async function kernelStableResearcherPhotoFetch(input, init) {
    const response = await previousFetch(input, init);
    if (!isResearchersRequest(input) || !response.ok) return response;

    try {
      const payload = await response.clone().json();
      if (!Array.isArray(payload?.researchers)) return response;
      payload.researchers = payload.researchers.map(member => member.id === JUAN_ID ? {
        ...member,
        image: {
          ...(member.image || {}),
          current: JUAN_PHOTO
        }
      } : member);

      const headers = new Headers(response.headers);
      headers.set("content-type", "application/json; charset=utf-8");
      headers.delete("content-length");
      return new Response(JSON.stringify(payload), {
        status: response.status,
        statusText: response.statusText,
        headers
      });
    } catch (error) {
      console.error("Kernel stable researcher photo source:", error);
      return response;
    }
  };

  window.KernelResearcherPhotoSourceStability = {
    version: "1.0.0",
    researcherId: JUAN_ID,
    source: JUAN_PHOTO
  };
})();
