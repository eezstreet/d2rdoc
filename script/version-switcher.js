"use strict";

var loadGeneration = 0;

function getVersionPreference() {
    var match = document.cookie.match(/(^|;\s*)d2rdoc-version=([^;]*)/);
    return match ? decodeURIComponent(match[2]) : null;
}

function setVersionPreference(value) {
    // Set cookie with 1 year expiry, SameSite=Lax for safety
    var expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = "d2rdoc-version=" + encodeURIComponent(value) + "; expires=" + expires + "; SameSite=Lax; path=/";
}

function switchVersion(basePath, fileKey, versionDirectory, onComplete) {
    var thisGeneration = ++loadGeneration;

    // Remove previously injected version scripts
    document.querySelectorAll("script[data-version-script]").forEach(function(s) {
        s.remove();
    });

    var scriptPath = basePath + "/" + versionDirectory + "/" + fileKey + ".js";
    var script = document.createElement("script");
    script.src = scriptPath;
    script.dataset.versionScript = "true";

    script.onload = function() {
        if (thisGeneration !== loadGeneration) return;

        // Load reference files from the new version
        var refFiles = files[fileKey].referenceFiles || [];
        if (refFiles.length === 0) {
            onComplete(true);
            return;
        }

        var loaded = 0;
        var total = refFiles.length;
        for (var i = 0; i < refFiles.length; i++) {
            var refScript = document.createElement("script");
            refScript.src = basePath + "/" + versionDirectory + "/" + refFiles[i] + ".js";
            refScript.dataset.versionScript = "true";
            refScript.onload = refScript.onerror = function() {
                if (thisGeneration !== loadGeneration) return;
                loaded++;
                if (loaded >= total) {
                    onComplete(true);
                }
            };
            document.body.appendChild(refScript);
        }
    };

    script.onerror = function() {
        if (thisGeneration !== loadGeneration) return;
        onComplete(false);
    };

    document.body.appendChild(script);
}

function reRenderPage(fileKey) {
    // Clear file content
    var fileContent = document.getElementById("file-content");
    fileContent.innerHTML = "";

    // Clear page sidebar
    var pageSidebar = document.querySelector("#page-sidebar");
    var existingUl = pageSidebar.querySelector("ul");
    if (existingUl) {
        existingUl.remove();
    }

    populateFile(files[fileKey]);
    populatePageSidebar(files[fileKey]);
    fixupPageSidebar();
}

function initVersionSwitcher(basePath, fileKey, renderCallback) {
    var container = document.getElementById("version-switcher-container");
    if (!container || typeof schemas === "undefined" || schemas.length <= 1) {
        // No container or only one version — just render immediately
        renderCallback();
        return;
    }

    // Build dropdown UI
    var label = document.createElement("label");
    label.setAttribute("for", "version-select");
    label.textContent = "Version:";

    var select = document.createElement("select");
    select.id = "version-select";

    var defaultDirectory = null;
    for (var i = 0; i < schemas.length; i++) {
        var option = document.createElement("option");
        option.value = schemas[i].directory;
        option.textContent = schemas[i].name;
        select.appendChild(option);
        if (schemas[i].isDefault) {
            defaultDirectory = schemas[i].directory;
        }
    }

    if (!defaultDirectory) {
        defaultDirectory = schemas[0].directory;
    }

    container.appendChild(label);
    container.appendChild(select);

    // Check cookie for stored preference
    var storedVersion = getVersionPreference();

    // Validate stored version against available schemas
    if (storedVersion) {
        var valid = false;
        for (var i = 0; i < schemas.length; i++) {
            if (schemas[i].directory === storedVersion) {
                valid = true;
                break;
            }
        }
        if (!valid) {
            storedVersion = null;
        }
    }

    var activeVersion = storedVersion || defaultDirectory;
    select.value = activeVersion;

    // Attach change listener
    select.addEventListener("change", function() {
        var selectedDirectory = select.value;
        setVersionPreference(selectedDirectory);

        if (selectedDirectory === defaultDirectory) {
            // Reload the page to get back to the default version cleanly
            // (the default script is loaded statically in the HTML)
            window.location.reload();
            return;
        }

        switchVersion(basePath, fileKey, selectedDirectory, function(success) {
            if (success) {
                reRenderPage(fileKey);
            } else {
                // File not available in this version
                var fileContent = document.getElementById("file-content");
                fileContent.innerHTML = "";

                var schemaName = selectedDirectory;
                for (var i = 0; i < schemas.length; i++) {
                    if (schemas[i].directory === selectedDirectory) {
                        schemaName = schemas[i].name;
                        break;
                    }
                }

                var msg = document.createElement("p");
                msg.className = "version-not-available";
                msg.textContent = "This file is not available in version " + schemaName + ".";
                fileContent.appendChild(msg);
            }
        });
    });

    // Initial render: load stored version if different from default
    if (activeVersion !== defaultDirectory) {
        switchVersion(basePath, fileKey, activeVersion, function(success) {
            if (success) {
                renderCallback();
            } else {
                // File not available in this version — show message but
                // keep the stored version preference so other pages
                // that do exist in this version still load correctly
                var schemaName = activeVersion;
                for (var i = 0; i < schemas.length; i++) {
                    if (schemas[i].directory === activeVersion) {
                        schemaName = schemas[i].name;
                        break;
                    }
                }
                var fileContent = document.getElementById("file-content");
                fileContent.innerHTML = "";
                var msg = document.createElement("p");
                msg.className = "version-not-available";
                msg.textContent = "This file is not available in version " + schemaName + ".";
                fileContent.appendChild(msg);
            }
        });
    } else {
        renderCallback();
    }
}
