document.addEventListener("DOMContentLoaded", () => {
  const comparisonVideo = document.getElementById("wm-comparison-video");
  const comparisonTask = document.getElementById("wm-comparison-task");
  const taskTabs = document.querySelectorAll(".task-tab");

  taskTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (!comparisonVideo || !comparisonTask) {
        return;
      }

      taskTabs.forEach((candidate) => candidate.classList.remove("is-active"));
      tab.classList.add("is-active");
      comparisonTask.textContent = `${tab.dataset.task}.`;

      const source = comparisonVideo.querySelector("source");
      if (source && source.getAttribute("src") !== tab.dataset.video) {
        source.setAttribute("src", tab.dataset.video);
        comparisonVideo.load();
        comparisonVideo.play().catch(() => {});
      }
    });
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll(".reveal").forEach((section) => {
    revealObserver.observe(section);
  });

  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.35 }
  );

  document.querySelectorAll("video[data-autoplay]").forEach((video) => {
    videoObserver.observe(video);
  });
});
