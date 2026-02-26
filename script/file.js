"use strict";

function makeReferenceLinkHtml(page, element) {
    let link = "";
    let text = "";

    if (page && element) {
        link = `${page}.html#${element}`;
        text = `${page}#${element}`;
    }
    else if (page) {
        link = `${page}.html`;
        text = page;
    }
    else if (element) {
        link = `#${element}`;
        text = `#${element}`;
    }
    else {
        console.error(`${page} ${element} is not a valid reference link. Format is "$!page!$", "$!page#element!$, or $!#element!$"`);
        return "";
    }

    return `<a class="reference-link" target="_blank" href="${link}">${text}</a>`;
}

function replaceReferenceLink(match, p1, pageOverride) {
    if (p1) {
        let i = p1.indexOf('#');
        if (i >= 0) {
            var splits = [p1.slice(0,i), p1.slice(i+1)];
            if (!splits || splits.length > 2) {
                console.error(`Too few or too many splits when creating data link ${p1}`);
            }
            else if (splits[0]) {
                // Page and element
                return makeReferenceLinkHtml(splits[0], splits[1]);
            }
            else if (pageOverride) {
                // Page and element, using the page override
                return makeReferenceLinkHtml(pageOverride, splits[1]);
            }
            else {
                // Just element
                return makeReferenceLinkHtml("", splits[1]);
            }
        }
        else {
            // Just page
            return makeReferenceLinkHtml(p1, "");
        }
    }
    return match;
}

function parseJSONText(text, pageOverride) {
    // Reference Links
    text = text.replaceAll(/\$\!(.*?)\!\$/g, (match, p1) => replaceReferenceLink(match, p1, pageOverride));
    return text;
}

function getCommunityNote(fileKey, fieldName) {
    if (typeof communityNotes === 'undefined') return null;
    const fileEntry = communityNotes.find(f => f.file.toLowerCase() === fileKey.toLowerCase());
    if (!fileEntry) return null;
    if (fieldName === null) return fileEntry.note || null;
    if (!fileEntry.fields) return null;
    const fieldEntry = fileEntry.fields.find(f => f.name.toLowerCase() === fieldName.toLowerCase());
    return fieldEntry ? fieldEntry.note || null : null;
}

function createTable(table, entries, pageOverride, attachIds = true) {
    const header = table.querySelector("thead");
    const body = table.querySelector("tbody");
    let isHeader = true;

    for (const rowData of entries) {
        const row = (isHeader ? header : body).insertRow();
        for (const columnData of rowData) {
            let col = {};
            if (isHeader) {
                col = document.createElement("th");
                row.appendChild(col);
            }
            else {
                col = row.insertCell();
            }

            if (typeof columnData == 'string') {
                // Normal cell
                col.innerHTML = parseJSONText(columnData, pageOverride);
            }
            else {
                // Cell with an id
                col.innerHTML = parseJSONText(columnData.text, pageOverride);

                if (attachIds && columnData.id) {
                    col.id = columnData.id;

                    // Add a link
                    const colLink = document.createElement("a");
                    colLink.classList.add("field-table-link");
                    colLink.innerText = "\u{1F517}";
                    colLink.href = `#${col.id}`;
                    col.appendChild(colLink);
                }
            }
        }
        isHeader = false;
    }
}

function createBittable(table, entries, pageOverride) {
    const header = table.querySelector("thead");
    const body = table.querySelector("tbody");

    // Add the header
    let headerCols = ["", "Description", "Decimal", "Binary"];
    const headerRow = header.insertRow();
    for (const columnData of headerCols) {
        const col = headerRow.insertCell();
        col.innerHTML = parseJSONText(columnData, pageOverride);
    }

    let entryInputs = [];
    let radioGroups = {};
    let input = {};

    // Find the max binary length
    let binaryLength = 0;
    {
        let index = 0;
        let max = 0;

        for (const rowData of entries) {
            const isObject = typeof rowData != 'string';
            const isHeader = isObject && rowData.header;
            if (!isHeader) {
                const decimal = isObject && (rowData.decimal != undefined) ? rowData.decimal : (1 << index) >>> 0;
                index++;
                if (decimal > max) {
                    binaryLength = decimal.toString(2).length;
                    max = decimal;
                }
            }
        }
    }


    // Add the input value
    {
        const row = body.insertRow();

        // First col is empty
        row.insertCell();

        // Second col is empty
        row.insertCell();

        // Third col is number input/output
        const inputCol = row.insertCell();

        // Fourth col is binary value
        const binaryCol = row.insertCell();

        // Setup input
        input = document.createElement("input");
        input.classList.add("field-bittable-input");
        input.type = "number";
        input.valueAsNumber = 0;
        ['input', 'change'].forEach(eventName =>{
            input.addEventListener(eventName, event=>{
                let index = 0;

                for (const rowData of entries) {
                    const isObject = typeof rowData != 'string';
                    const isHeader = isObject && rowData.header;

                    if (!isHeader) {
                        const decimal = isObject && (rowData.decimal != undefined) ? rowData.decimal : (1 << index) >>> 0;
                        const entryInput = entryInputs[index];

                        if (entryInput.type == "radio") {
                            // Radio group: Has to equal the value in the mask exactly
                            const valueMasked = (event.target.valueAsNumber & radioGroups[entryInput.name].mask) >>> 0;
                            const checked = valueMasked == decimal;
                            entryInputs[index].checked = checked;
                        }
                        else {
                            // Checkbox: Check all that match
                            const checked = (event.target.valueAsNumber & decimal) >>> 0;
                            entryInputs[index].checked = checked;
                        }
                        index++;
                    }
                }
                binaryCol.innerText = `${event.target.valueAsNumber.toString(2).padStart(binaryLength, "0")}`;
            });
        });
        inputCol.appendChild(input);

        // Setup binary
        binaryCol.innerText = `${input.valueAsNumber.toString(2).padStart(binaryLength, "0")}`;
    }

    // Add the entries
    {
        let index = 0;
        for (const rowData of entries) {
            const row = body.insertRow();
            
            const isObject = typeof rowData != 'string';
            const isHeader = isObject && rowData.header;
            const decimal = isObject && (rowData.decimal != undefined) ? rowData.decimal : (1 << index) >>> 0;
            const text = parseJSONText(isObject ? rowData.text : rowData, pageOverride);
            index += isHeader ? 0 : 1;

            // Initialize radio group data
            if (isObject && rowData.radiogroup) {
                if (!radioGroups[rowData.radiogroup]) {
                    radioGroups[rowData.radiogroup] = {};
                }
            }

            // First col is entry input
            const entryInputCol = row.insertCell();
            if (!isHeader) {
                const entryInput = document.createElement("input");
                if (isObject && rowData.radiogroup) {
                    entryInput.classList.add("field-bittable-radiobutton");
                    entryInput.type = "radio";
                    entryInput.name = rowData.radiogroup;
                    entryInput.addEventListener('change', (event) => {
                        // Have to unset the previous radio button's value before setting our new one
                        let prevDecimal = radioGroups[entryInput.name].decimal;
                        if (prevDecimal != undefined) {
                            input.valueAsNumber = (input.valueAsNumber & ~prevDecimal) >>> 0;
                        }

                        radioGroups[entryInput.name].decimal = decimal;
                        if (event.currentTarget.checked) {
                            if (decimal == 0) {
                                input.valueAsNumber = 0;
                            }
                            else {
                                input.valueAsNumber = (input.valueAsNumber | decimal) >>> 0;
                            }
                        }

                        input.dispatchEvent(new Event("change"));
                    });
                }
                else {
                    entryInput.classList.add("field-bittable-checkbox");
                    entryInput.type = "checkbox";
                    entryInput.addEventListener('change', (event) => {
                        if (event.currentTarget.checked) {
                            if (decimal == 0) {
                                input.valueAsNumber = 0;
                            }
                            else {
                                input.valueAsNumber = (input.valueAsNumber | decimal) >>> 0;
                            }
                        }
                        else {
                            input.valueAsNumber = (input.valueAsNumber & ~decimal) >>> 0;
                        }
                        input.dispatchEvent(new Event("change"));
                    });
                }

                entryInputs.push(entryInput);
                entryInputCol.appendChild(entryInput);
            }
            else if (rowData.radiogroup) {
                // Headers for radio groups define a mask that is used to ensure only valid values are set
                radioGroups[rowData.radiogroup].mask = rowData.radiogroupmask;
            }

            // Second col is description
            const descCol = row.insertCell();
            descCol.innerHTML = text;

            // Third col is decimal value
            const decimalCol = row.insertCell();
            decimalCol.innerText = isHeader ? "" : `${decimal}`;

            // Fourth col is binary value
            const binaryCol = row.insertCell();
            binaryCol.innerText = isHeader ? "" : `${decimal.toString(2).padStart(binaryLength, "0")}`;
        }
    }
}

function createAppendField(appendField, fileTitle, pageOverride) {
    const appendfieldTemplate = document.querySelector("#appendfield-template");
    const appendfieldClone = appendfieldTemplate.content.cloneNode(true);

    // Summary
    const summary = appendfieldClone.querySelector(".appendfield-summary");
    summary.innerText = `Display ${fileTitle}#${appendField.name}`;

    // Description
    const description = appendfieldClone.querySelector(".field-description");
    description.innerHTML = parseJSONText(appendField.description, pageOverride);

    // Table
    if (appendField.table) {
        const attachIds = false;
        createTable(appendfieldClone.querySelector(".field-table"), appendField.table, pageOverride, attachIds);
    }
    else if (appendField.bittable) {
        createBittable(appendfieldClone.querySelector(".field-table"), appendField.bittable, pageOverride);
    }
    else {
        appendfieldClone.querySelector(".field-table").remove();
    }

    return appendfieldClone;
}

function createField(fieldTemplate, field, fileKey) {
    const fieldClone = fieldTemplate.content.cloneNode(true);

    // Field name
    const nameLink = fieldClone.querySelector(".field-name");
    nameLink.id = field.name;
    nameLink.href = `#${field.name}`;
    const nameText = nameLink.querySelector("h3");
    nameText.innerText = field.name;

    // Alternate names
    if (field.altNames) {
        const altNames = fieldClone.querySelector(".field-alt-names");
        for (const altName of field.altNames) {
            const alt = document.createElement("a");
            alt.classList.add("field-alt-name");
            alt.id = altName;
            alt.href = `#${altName}`;
            const altH = document.createElement("h4");
            altH.innerText = altName;
            alt.appendChild(altH);
            altNames.appendChild(alt);
        }
    }
    else {
        fieldClone.querySelector(".field-alt-names").remove();
    }

    // Type
    if (field.type && field.type.type) {
        const typeText = fieldClone.querySelector(".field-type-text");
        const typeTooltip = fieldClone.querySelector(".field-type-tooltip-text");

        switch (field.type.type) {
            case "int":
            case "int or":
                typeText.innerHTML = `Integer`;
                typeTooltip.innerHTML = `Limit: ${field.type.memSize} bits`
                break;

            case "text":
                typeText.innerHTML = `Text`;
                typeTooltip.innerHTML = `Max Length: ${field.type.dataLength} characters<br>Limit: ${field.type.memSize} bits`
                break;

            case "reference":
                typeText.innerHTML = `Reference of ${makeReferenceLinkHtml(field.type.file, field.type.field)}`;
                typeTooltip.innerHTML = `Max Length: ${field.type.dataLength} characters<br>Limit: ${field.type.memSize} bits`
                break;
                
            case "string":
                typeText.innerHTML = `Localized String`;
                typeTooltip.innerHTML = `Max Length: ${field.type.dataLength} characters<br>Limit: ${field.type.memSize} bits`
                break;

            case "boolean":
            case "inverse boolean":
                typeText.innerHTML = "Boolean (0 or 1)";
                break;
            
            case "parse":
                if (field.type.description) {
                    typeText.innerHTML = `Parse: ${parseJSONText(field.type.description)}`;
                    fieldClone.querySelector(".field-type-tooltip-icon").remove()
                }
                else {
                    console.error(`Parse type for ${field.name} has no description`);
                }
                break;

            case "comment":
                typeText.innerHTML = "Comment";
                typeTooltip.innerHTML = "This field is not used by code";
                break;

            default:
                console.error(`Invalid type ${field.type.type} for ${field.name}`);
        }
    }
    else {
        fieldClone.querySelector(".field-type").remove();
    }

    // Description
    const description = fieldClone.querySelector(".field-description");
    description.innerHTML = parseJSONText(field.description);

    // Table
    if (field.table) {
        createTable(fieldClone.querySelector(".field-table"), field.table);
    }
    else if (field.bittable) {
        createBittable(fieldClone.querySelector(".field-table"), field.bittable);
    }
    else {
        fieldClone.querySelector(".field-table").remove();
    }

    // Append field
    if (field.appendField) {
        let otherFile = files[field.appendField.file];
        let appendField = otherFile.fields.find(f => f.name == field.appendField.field);
        if (appendField) {
            const appendFieldClone = createAppendField(appendField, otherFile.title, field.appendField.file);

            const appendFieldContainer = fieldClone.querySelector(".field-appendfield")
            appendFieldContainer.appendChild(appendFieldClone);
        }
        else {
            console.error(`${field.name}: Append field ${field.appendField.file}#${field.appendField.field} does not exist`)
        }
    }
    else {
        fieldClone.querySelector(".field-appendfield").remove();
    }

    // Community note
    if (fileKey) {
        const communityNote = getCommunityNote(fileKey, field.name);
        if (communityNote) {
            const noteDiv = document.createElement("div");
            noteDiv.classList.add("community-note");
            noteDiv.innerHTML = parseJSONText(communityNote, fileKey);
            fieldClone.querySelectorAll(".field-column")[1].appendChild(noteDiv);
        }
    }

    return fieldClone;
}

function createFields(fieldTemplate, container, fieldsJson, fileKey) {
    for (const field of fieldsJson) {
        container.appendChild(createField(fieldTemplate, field, fileKey));
    }
}

function createFile(fileData, fileContainer) {
    const fileTemplate = document.querySelector("#file-template");
    const fileClone = fileTemplate.content.cloneNode(true);
    const fileKey = Object.keys(files).find(k => files[k] === fileData);

    const title = fileClone.querySelector(".file-title");
    title.innerText = fileData.title;

    const overview = fileClone.querySelector(".file-overview");
    overview.innerHTML = parseJSONText(fileData.overview);

    // File-level community note
    const fileNote = getCommunityNote(fileKey, null);
    if (fileNote) {
        const noteDiv = document.createElement("div");
        noteDiv.classList.add("community-note");
        noteDiv.innerHTML = parseJSONText(fileNote, fileKey);
        overview.after(noteDiv);
    }

    const fieldTemplate = document.querySelector("#field-template");
    const fieldsContainer = fileClone.querySelector(".file-fields");
    createFields(fieldTemplate, fieldsContainer, fileData.fields, fileKey);

    fileContainer.appendChild(fileClone);
}

function populateFile(fileData) {
    const fileContainer = document.querySelector("#file-content");
    createFile(fileData, fileContainer);

    if (fileData.appendFiles) {
        for (const appendFile of fileData.appendFiles) {
            const hr = document.createElement("hr");
            fileContainer.append(hr);
            createFile(files[appendFile], fileContainer)
        }
    }
}

///////////////////////////////////////////////
// Sidebar

function createSidebarField(field, ulFields) {
        const liField = document.createElement("li");
        const fieldLink = document.createElement("a");

        fieldLink.setAttribute("href", "#" + field.name);
        fieldLink.innerHTML = field.name;

        liField.appendChild(fieldLink);
        ulFields.appendChild(liField);
}

function createSidebarFile(fileData, ulSidebar) {
    const liFile = document.createElement("li");
    liFile.innerText = fileData.title;
    ulSidebar.appendChild(liFile);

    const ulFields = document.createElement("ul");
    for (const field of fileData.fields) {
        createSidebarField(field, ulFields);
    }
    ulSidebar.appendChild(ulFields);
}

function populatePageSidebar(fileData) {
    const sidebar = document.querySelector("#page-sidebar");
    const ulSidebar = document.createElement("ul");

    createSidebarFile(fileData, ulSidebar)

    if (fileData.appendFiles) {
        for (const appendFile of fileData.appendFiles) {
            createSidebarFile(files[appendFile], ulSidebar)
        }
    }

    sidebar.appendChild(ulSidebar);
}

