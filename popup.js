const toggle = document.getElementById("toggle");
const statusText = document.getElementById("status");
const indicatorText = document.getElementById("indicator-text");
const indicator = document.getElementById("indicator");

function updateUI(isEnabled) {
  statusText.textContent = isEnabled ? "Active" : "Inactive";
  indicatorText.textContent = isEnabled ? "Running" : "Ready";
  
  if (isEnabled) {
    indicator.classList.add("active");
  } else {
    indicator.classList.remove("active");
  }
}

chrome.storage.local.get(["enabled"], (result) => {
  toggle.checked = result.enabled || false;
  updateUI(toggle.checked);
});

toggle.addEventListener("change", () => {
  chrome.storage.local.set({ enabled: toggle.checked });
  updateUI(toggle.checked);
});
