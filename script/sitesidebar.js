"use strict";

///////////////////////////////////////////////
// Index

function populateSidebarRecursive(index, pathToHomeDirectory, ul) {
    const li = document.createElement("li");
    const indexPath = pathToHomeDirectory + (index.path ? index.path : "");
    const isLink = indexPath.lastIndexOf(".html") != "-1";

    // Populate children first (needed to detect .current descendants)
    let ulChildren = null;
    if (index.children) {
        ulChildren = document.createElement("ul");
        for (const childIndex of index.children) {
            populateSidebarRecursive(childIndex, pathToHomeDirectory, ulChildren);
        }
    }

    // Text, links, and accordion groups
    if (isLink) {
        const link = document.createElement("a");
        link.setAttribute("href", indexPath);
        link.innerHTML = index.name;
        if (indexPath.indexOf(window.location.pathname) != -1) {
            link.classList.add("current");
        }
        li.appendChild(link);
        if (ulChildren) li.appendChild(ulChildren);
    }
    else if (ulChildren) {
        // Non-link with children: render as an accordion
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        summary.innerHTML = index.name;
        details.appendChild(summary);
        details.appendChild(ulChildren);
        if (ulChildren.querySelector(".current")) {
            details.open = true;
        }
        li.appendChild(details);
    }
    else {
        li.innerHTML = index.name;
    }

    ul.appendChild(li);
}

///////////////////////////////////////////////
// Search

const SearchResultFile = 0;
const SearchResultField = 1;

function getSearchResults(text, search) {
    let results = [];

    if (!text) {
        return results;
    }

    text = text.toLowerCase();
    for (const file of search) {
        if (file.name.toLowerCase().includes(text)) {
            let fileResult = {};
            "\u{1F517}";
            fileResult.name = `<b>\u{1F5CE}</b>  ${file.name}`;
            fileResult.path = file.path;
            fileResult.type = SearchResultFile;
            results.push(fileResult);
        }

        if (file.fields) {
            for (const field of file.fields) {
                if (field.name.toLowerCase().includes(text)) {
                    let fieldResult = {};
                    fieldResult.name = `<b>\u{1F3F7}</b> ${field.name}`;
                    fieldResult.path = field.path;
                    fieldResult.file = `<b>\u{1F5CE}</b> ${file.name}`;
                    fieldResult.type = SearchResultField;
                    results.push(fieldResult);
                }

                if (field.subfields) {
                    for (const subfield of field.subfields) {
                        if (subfield.name.toLowerCase().includes(text)) {
                            let subfieldResult = {};
                            subfieldResult.name = `<b>\u{1F3F7}</b> ${subfield.name}`;
                            subfieldResult.path = subfield.path;
                            subfieldResult.file = `<b>\u{1F5CE}</b> ${file.name}`;
                            subfieldResult.type = SearchResultField;
                            results.push(subfieldResult);
                        }
                    }
                }
            }
        }
    }

    return results;
}

function generateSearchResults(inputSearch, ulSearchResults, pathToHomeDirectory) {
    ulSearchResults.innerHTML = "";
    
    let styleA = true;

    const results = getSearchResults(inputSearch.value, search);
    results.sort((a, b) => { return a.type - b.type; });

    for (const result of results) {
        const searchResult = document.createElement("li");
        searchResult.classList.add("search-result");
        searchResult.classList.add(styleA ? "search-style-a" : "search-style-b");
        styleA = !styleA;

        const searchLink = document.createElement("a");
        searchLink.innerHTML = result.name;
        searchLink.href = pathToHomeDirectory + result.path;

        switch (result.type) {
            case SearchResultFile:
                searchLink.classList.add("search-result-file");
                break;
            case SearchResultField:
                searchLink.classList.add("search-result-field");
                break;
        }

        if (result.file) {
            const searchFile = document.createElement("span");
            searchFile.classList.add("search-result-file");
            searchFile.innerHTML = result.file;
            searchLink.appendChild(searchFile);
        }

        searchResult.appendChild(searchLink);
        ulSearchResults.appendChild(searchResult);
    }
}

///////////////////////////////////////////////
// Sidebar

function populateSiteSidebar(pathToHomeDirectory, siteIndex) {
    const sidebarContainer = document.querySelector("#site-sidebar");

    // Search
    const divSearch = document.createElement("div");
    divSearch.id = "site-search";

    const inputSearch = document.createElement("input");
    inputSearch.id = "site-search-bar";
    inputSearch.type = "text";

    const ulSearchResults = document.createElement("ul");
    ulSearchResults.id = "site-search-results";

    inputSearch.addEventListener("focus", (e) => {
        ulSearchResults.classList.add("focused");
    });
    inputSearch.addEventListener("blur", (e) => {
        if (!e.relatedTarget || !ulSearchResults.contains(e.relatedTarget)) {
            ulSearchResults.classList.remove("focused");
        }
    });
    inputSearch.addEventListener("keyup", (e) => {
        generateSearchResults(inputSearch, ulSearchResults, pathToHomeDirectory);
    });

    divSearch.append(inputSearch);
    divSearch.append(ulSearchResults);
    sidebarContainer.append(divSearch);

    // Index
    const ulIndex = document.createElement("ul");
    ulIndex.classList.add("site-index");

    for (const index of siteIndex) {
        populateSidebarRecursive(index, pathToHomeDirectory, ulIndex);
    }

    sidebarContainer.appendChild(ulIndex);
}