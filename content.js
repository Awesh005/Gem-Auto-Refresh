let refreshInterval = null;

function startRefreshing() {
  if (refreshInterval) return;

  refreshInterval = setInterval(() => {
    location.reload();
  },  0* 100 * 1000); // refresh every 6 minutes (safe)
}

function stopRefreshing() {
  if (refreshInterval) {
    clearInterval(refreshInterval);
    refreshInterval = null;
  }
}

chrome.storage.local.get(["enabled"], (result) => {
  if (result.enabled) startRefreshing();
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) {
    if (changes.enabled.newValue) {
      startRefreshing();
    } else {
      stopRefreshing();
    }
  }
});
