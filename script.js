const maps =
{
    i: '0',
    n: 'Overall',
    t: 'Overall',
    items: [
        {
            i: '4',
            n: 'Context',
            t: 'Context of the organization',
            items: [
                {
                    i: '4.1',
                    n: 'Context',
                    t: 'Understanding the organization and its context'
                },
                {
                    i: '4.2',
                    n: 'Needs',
                    t: 'Understanding the needs and expectations of stakeholders'
                },
                {
                    i: '4.3',
                    n: 'Scope',
                    t: 'Determining the scope of the operating management system'
                },
                {
                    i: '4.4',
                    n: 'OMS',
                    t: 'Operating management system'
                }
            ]
        },
        {
            i: '5',
            n: 'Leadership',
            t: 'Leadership',
            items: [
                {
                    i: '5.1',
                    n: 'Leadership',
                    t: 'Leadership and commitment'
                },
                {
                    i: '5.2',
                    n: 'Policy',
                    t: 'Policy'
                },
                {
                    i: '5.3',
                    n: 'RR&A',
                    t: 'Roles, responsibilities and authorities'
                }
            ]
        },
        {
            i: '6',
            n: 'Planning',
            t: 'Planning',
            items: [
                {
                    i: '6.1',
                    n: 'Actions',
                    t: 'Actions to address risks and opportunities'
                },
                {
                    i: '6.2',
                    n: 'Objectives',
                    t: 'Objectives and planning to achieve them'
                },
                {
                    i: '6.3',
                    n: 'Change Planning',
                    t: 'Planning of changes'
                },
                {
                    i: '6.4',
                    n: 'Planning',
                    t: 'Planning for contingency, emergency, crisis and business continuity'
                }
            ]
        },
        {
            i: '7',
            n: 'Support',
            t: 'Support',
            items: [
                {
                    i: '7.1',
                    n: 'People',
                    t: 'People resource',
                    items: [
                        {
                            i: '7.1.1',
                            n: 'People',
                            t: 'People resources'
                        },
                        {
                            i: '7.1.2',
                            n: 'Infrastructure',
                            t: 'Infrastructure'
                        },
                        {
                            i: '7.1.3',
                            n: 'Environment',
                            t: 'Environment for the operation of processes'
                        }
                    ]
                },
                {
                    i: '7.2',
                    n: 'Competence',
                    t: 'Competence'
                },
                {
                    i: '7.3',
                    n: 'Awareness',
                    t: 'Awareness and engagement'
                },
                {
                    i: '7.4',
                    n: 'Communication',
                    t: 'Communication'
                },
                {
                    i: '7.5',
                    n: 'Information',
                    t: 'Documented information'
                },
                {
                    i: '7.6',
                    n: 'STE',
                    t: 'Science, technology and engineering',
                    items: [
                        {
                            i: '7.6.1',
                            n: 'General',
                            t: 'General'
                        },
                        {
                            i: '7.6.2',
                            n: 'Lifecycle',
                            t: 'Design lifecycle'
                        }
                    ]
                },
                {
                    i: '7.7',
                    n: 'External',
                    t: 'Externally provided processes, products and services',
                    items: [
                        {
                            i: '7.7.1',
                            n: 'General',
                            t: 'Externally provided processes, products and services - General'
                        },
                        {
                            i: '7.7.2',
                            n: 'Providers',
                            t: 'Externally provided processes, products and services - Provider capability'
                        },
                        {
                            i: '7.7.3',
                            n: 'Controls',
                            t: 'Externally provided processes, products and services - Type and extent of control'
                        }
                    ]
                }
            ]
        },
        {
            i: '8',
            n: 'Operations',
            t: 'Operations',
            items: [
                {
                    i: '8.1',
                    n: 'Ops P&C',
                    t: 'Operational planning and control'
                },
                {
                    i: '8.2',
                    n: 'Business ops',
                    t: 'Business opportunity realization (Development Phase)'
                },
                {
                    i: '8.3',
                    n: 'Operations',
                    t: 'Operations Phase',
                    items: [
                        {
                            i: '8.3.1',
                            n: 'Plan',
                            t: 'Operations Phase - Plan'
                        },
                        {
                            i: '8.3.2',
                            n: 'Operate',
                            t: 'Operations Phase - Operate'
                        },
                        {
                            i: '8.3.3',
                            n: 'M&M',
                            t: 'Operations Phase - Maintain'
                        }
                    ]
                },
                {
                    i: '8.4',
                    n: 'Response',
                    t: 'Response to unplanned events and outcomes'
                }
            ]
        },
        {
            i: '9',
            n: 'Evaluation',
            t: 'Performance evaluation',
            items: [
                {
                    i: '9.1',
                    n: 'Monitoring',
                    t: 'Monitoring, measurement, analysis and evaluation'
                },
                {
                    i: '9.2',
                    n: 'Audit',
                    t: 'Audit'
                },
                {
                    i: '9.3',
                    n: 'Management',
                    t: 'Management review'
                }
            ]
        },
        {
            i: '10',
            n: 'Improvement',
            t: 'Improvement',
            items: [
                {
                    i: '10.1',
                    n: 'Improvement',
                    t: 'Continual Improvement'
                },
                {
                    i: '10.2',
                    n: 'NC/CA',
                    t: 'Nonconformity and Corrective action'
                },
                {
                    i: '10.3',
                    n: 'Knowledge',
                    t: 'Organizational knowledge'
                }
            ]
        }
    ]
}
const rocs = [0, 1, 3, 5, 8, 10]
const chartColours = [
    '#8e3ccb',
    '#fe7e0f',
    '#ffd400',
    '#87c830',
    '#fc59a3',
    '#f10983',
    '#1ee8b6',
    '#ec1254',
    '#f27c14',
    '#f5e31d',
    '#26a1d5',
    '#570bb7',
    '#d042f8',
    '#2edbef',
    '#003f5c',
    '#9a6400',
    '#665191',
    '#6d6800',
    '#a05195',
    '#2f4b7c',
    '#f95d6a',
    '#ff7c43',
    '#0082be',
    '#d45087',
    '#5b7bc6',
    '#916fbf',
    '#bb60a9',
    '#ffa600',
    '#d65687',
    '#e0575f',
    '#d76636',
    '#be7b00',
    '#00acfb',
    '#708ee1',
    '#9370b9',
    '#9d558b',
    '#94425e',
    '#7e3737',
    '#613019',
    '#412a00',
    '#00334b',
    '#004054',
    '#004c52',
    '#005746',
    '#046032',
    '#416619',
]

async function refreshAssessmentList() {

    //Refresh both the Assement listing and Dashboard summary
    const entries = await idxDb._tx('assessments', s => s.getAllKeys(), e => e.target.result)

    document.querySelector('.assessments.table tbody').innerHTML = ''
    document.querySelector('.assessment-list .table tbody').innerHTML = ''

    if (entries.length) {
        const fullKeyValueSet = []
        for (const k of entries) {
            const e = await idxDb._tx('assessments', s => s.get(k), r => r.target.result)
            fullKeyValueSet.push([k, e])
            const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
            const pDate = new Date(Date.parse(e.Date))
            const gDate = pDate.getDate()
            const formatdate = [gDate.toString().padStart(2, "0"), months[pDate.getMonth()], pDate.getFullYear()].join('-')
            //Assessment Grid
            document.querySelector('.assessments.table tbody').insertAdjacentHTML('beforeend', `
            <tr data-id="${k}">
                <td>
                    <div class="cmd edit-row">
                        <svg class="svg-inline--fa fa-plus fa-w-12" aria-hidden="true" focusable="false"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentColor"
                                d="M493.25 56.26l-37.51-37.51C443.25 6.25 426.87 0 410.49 0s-32.76 6.25-45.26 18.74L12.85 371.12.15 485.34C-1.45 499.72 9.88 512 23.95 512c.89 0 1.78-.05 2.69-.15l114.14-12.61 352.48-352.48c24.99-24.99 24.99-65.51-.01-90.5zM126.09 468.68l-93.03 10.31 10.36-93.17 263.89-263.89 82.77 82.77-263.99 263.98zm344.54-344.54l-57.93 57.93-82.77-82.77 57.93-57.93c6.04-6.04 14.08-9.37 22.63-9.37 8.55 0 16.58 3.33 22.63 9.37l37.51 37.51c12.47 12.48 12.47 32.78 0 45.26z">
                            </path>
                        </svg>&nbsp;&nbsp;Edit
                    </div>
                </td>
                <td>${e.Reference}</td>
                <td>${formatdate}</td>
                <td class="status status-${e.Status.toLowerCase()}">${e.Status}</td>
                <td>${e.Organisation}</td>
                <td>${e.Location}</td>
                <td>
                    <div class="cmd delete-row">
                        <svg class="svg-inline--fa fa-plus fa-w-12" aria-hidden="true" focusable="false"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentColor"
                                d="M440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h18.9l33.2 372.3a48 48 0 0 0 47.8 43.7h232.2a48 48 0 0 0 47.8-43.7L421.1 96H440a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zm184.8 427a15.91 15.91 0 0 1-15.9 14.6H107.9A15.91 15.91 0 0 1 92 465.4L59 96h330z">
                            </path>
                        </svg>&nbsp;&nbsp;Delete
                    </div>
                    <div class="cmd export-row">
                        <svg class="svg-inline--fa fa-plus fa-w-12" aria-hidden="true" focusable="false"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentColor"
                                d="M8 464l368 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 480c-4.4 0-8-3.6-8-8s3.6-8 8-8zm176-99.3c2.1 2.1 5 3.3 8 3.3s5.9-1.2 8-3.3L331.8 232.6c2.7-2.7 4.2-6.4 4.2-10.2c0-8-6.5-14.4-14.4-14.4L248 208c-4.4 0-8-3.6-8-8l0-136c0-8.8-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16l0 136c0 4.4-3.6 8-8 8l-73.6 0c-8 0-14.4 6.5-14.4 14.4c0 3.8 1.5 7.5 4.2 10.2L184 364.7zm8 19.3c-7.2 0-14.2-2.9-19.3-8L40.9 243.9c-5.7-5.7-8.9-13.4-8.9-21.5C32 205.6 45.6 192 62.4 192l65.6 0 0-128c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 128 65.6 0c16.8 0 30.4 13.6 30.4 30.4c0 8.1-3.2 15.8-8.9 21.5L211.3 376c-5.1 5.1-12.1 8-19.3 8z">
                            </path>
                        </svg>&nbsp;Export
                    </div>
                </td>
            </tr>`)

            //Dashboard Grid
            const idx = entries.indexOf(k)
            const vals = fullKeyValueSet[idx]
            document.querySelector('.assessment-list .table tbody').insertAdjacentHTML('beforeend', `
                <tr data-id="${k}">
                    <td style="background-color:${chartColours[idx]}" />    
                    <td>${e.Reference}</td>
                    <td>${formatdate}</td>
                    <td class="status status-${e.Status.toLowerCase()}">${e.Status}</td>
                    <td>${e.Organisation}</td>
                    <td>${e.Location}</td>
                    <td>${getLevelValue(vals[1].Vals, '').avg ?? 0}</td>
                    <td>${getLevelValue(vals[1].Vals, '4').avg ?? 0}</td>
                    <td>${getLevelValue(vals[1].Vals, '5').avg ?? 0}</td>
                    <td>${getLevelValue(vals[1].Vals, '6').avg ?? 0}</td>
                    <td>${getLevelValue(vals[1].Vals, '7').avg ?? 0}</td>
                    <td>${getLevelValue(vals[1].Vals, '8').avg ?? 0}</td>
                    <td>${getLevelValue(vals[1].Vals, '9').avg ?? 0}</td>
                    <td>${getLevelValue(vals[1].Vals, '10').avg ?? 0}</td>
                </tr>`)

        }
        renderDashboardCharts(fullKeyValueSet.map(m => m[1]))
    }
    else {
        document.querySelector('.assessments.table tbody').insertAdjacentHTML('beforeend', `<tr ><td colspan="7" class="placeholder"><i>Add new or import existing Assessment to commence</i></td></tr>`)
    }
}

async function addAssessment(importData) {
    const date = new Date()
    let now = date.toISOString().slice(0, 10)
    if (importData) {
        importData.now = importData.Date
        await idxDb._tx('assessments', s => s.add(importData), e => e.target.result)
    } else {
        await idxDb._tx('assessments', s => s.add(
            {
                Vals: maps.items.flatMap(m => m.items.flatMap(i => i.items ? i.items : i)).map(m => ({ v: 0, i: m.i })),
                Reference: crypto.randomUUID().split('-')[0].toUpperCase(),
                Date: now, Status: 'draft', Organisation: '', Location: '',
                Resources: []
            }), e => e.target.result)
    }
    await refreshAssessmentList()
}

async function deleteAssessment(key) {
    await idxDb._tx('assessments', s => s.delete(+key), e => e.target.result)
    await refreshAssessmentList()
    closeModal()
}

async function exportAssessment(key) {

    //load template
    let exportDate = new Date()

    const workbook = await getExcelTemplate()

    workbook.creator = 'Universal Software Solutions'
    workbook.lastModifiedBy = 'ISO Assessment'
    workbook.title = "ISO 29011 Assessment Tool"
    workbook.created = exportDate
    workbook.modified = exportDate
    workbook.properties.date1904 = true

    const baseRecord = await getAssessment(key)
    //dump the full data out in JSON format as a hidden sheet (in the hopes the humans won't mess with it) so we can import back in
    let ws = workbook.addWorksheet('Data')
    ws.insertRow(1, [JSON.stringify(baseRecord)])
    ws.state = 'veryHidden'

    //TERMS
    ws = workbook.getWorksheet('Terms')
    //Reference
    ws.getCell('D4').value = baseRecord.Reference.toUpperCase()
    //Status
    ws.getCell('D6').value = baseRecord.Status.toUpperCase()
    //Date
    ws.getCell('D8').value = baseRecord.Date
    //Organisation
    ws.getCell('D10').value = baseRecord.Organisation
    //Location
    ws.getCell('D12').value = baseRecord.Location
    //Background
    ws.getCell('C16').value = baseRecord.Background
    //Objectives
    ws.getCell('C19').value = baseRecord.Objectives
    //Scope
    ws.getCell('G16').value = baseRecord.Scope
    //Methodology
    ws.getCell('G19').value = baseRecord.Methodology

    //SUMMARY
    ws = workbook.getWorksheet('Summary')
    //Executive Summary
    ws.getCell('B13').value = baseRecord.Summary

    //4 
    let lvs = getLevelValue(baseRecord.Vals, 4)
    ws.getCell('C4').value = lvs.sum
    ws.getCell('D4').value = lvs.avg

    //5     
    lvs = getLevelValue(baseRecord.Vals, 5)
    ws.getCell('C5').value = lvs.sum
    ws.getCell('D5').value = lvs.avg

    //6 
    lvs = getLevelValue(baseRecord.Vals, 6)
    ws.getCell('C6').value = lvs.sum
    ws.getCell('D6').value = lvs.avg

    //7
    lvs = getLevelValue(baseRecord.Vals, 7)
    ws.getCell('C7').value = lvs.sum
    ws.getCell('D7').value = lvs.avg

    //8
    lvs = getLevelValue(baseRecord.Vals, 8)
    ws.getCell('C8').value = lvs.sum
    ws.getCell('D8').value = lvs.avg


    //9 
    lvs = getLevelValue(baseRecord.Vals, 9)
    ws.getCell('C9').value = lvs.sum
    ws.getCell('D9').value = lvs.avg

    //10 
    lvs = getLevelValue(baseRecord.Vals, 10)
    ws.getCell('C10').value = lvs.sum
    ws.getCell('D10').value = lvs.avg

    // add charts as images
    let img = document.querySelector("#exec-summary [data-section='0']").toDataURL("image/png")
    let img2 = workbook.addImage({ base64: img, extension: 'png' })
    //data-section=0
    ws.addImage(img2, { tl: { col: 5, row: 3 }, ext: { width: 332, height: 332 } })

    //data-section=4
    img = document.querySelector("#exec-summary [data-section='4']").toDataURL("image/png")
    img2 = workbook.addImage({ base64: img, extension: 'png' })
    ws.addImage(img2, { tl: { col: 7, row: 3 }, ext: { width: 332, height: 332 } })

    //data-section=5
    img = document.querySelector("#exec-summary [data-section='5']").toDataURL("image/png")
    img2 = workbook.addImage({ base64: img, extension: 'png' })
    ws.addImage(img2, { tl: { col: 9, row: 3 }, ext: { width: 332, height: 332 } })

    //data-section=6
    img = document.querySelector("#exec-summary [data-section='6']").toDataURL("image/png")
    img2 = workbook.addImage({ base64: img, extension: 'png' })
    ws.addImage(img2, { tl: { col: 11, row: 3 }, ext: { width: 332, height: 332 } })

    //data-section=7
    img = document.querySelector("#exec-summary [data-section='7']").toDataURL("image/png")
    img2 = workbook.addImage({ base64: img, extension: 'png' })
    ws.addImage(img2, { tl: { col: 5, row: 13 }, ext: { width: 332, height: 332 } })

    //data-section=8
    img = document.querySelector("#exec-summary [data-section='8']").toDataURL("image/png")
    img2 = workbook.addImage({ base64: img, extension: 'png' })
    ws.addImage(img2, { tl: { col: 7, row: 13 }, ext: { width: 332, height: 332 } })

    //data-section=9
    img = document.querySelector("#exec-summary [data-section='9']").toDataURL("image/png")
    img2 = workbook.addImage({ base64: img, extension: 'png' })
    ws.addImage(img2, { tl: { col: 9, row: 13 }, ext: { width: 332, height: 332 } })

    //data-section=10
    img = document.querySelector("#exec-summary [data-section='10']").toDataURL("image/png")
    img2 = workbook.addImage({ base64: img, extension: 'png' })
    ws.addImage(img2, { tl: { col: 11, row: 13 }, ext: { width: 332, height: 332 } })

    //RESOURCES
    ws = workbook.getWorksheet('Resources')
    let records = [...baseRecord.Resources]
    //Sponsors - starting at Row 5
    let row = 5
    //TODO: add a take for each of these to limit to 10 records per Role
    records.filter(f => f.Role == 'sponsors').forEach(e => {
        ws.getCell(`B${row}`).value = e.Reference
        ws.getCell(`C${row}`).value = e.Title
        row++
    })

    //Assessment Team
    row = 19
    records.filter(f => f.Role == 'team').forEach(e => {
        ws.getCell(`B${row}`).value = e.Reference
        ws.getCell(`C${row}`).value = e.Title
        row++
    })

    //Interviewees / Auditees
    row = 33
    records.filter(f => f.Role == 'interviewee').forEach(e => {
        ws.getCell(`B${row}`).value = e.Reference
        ws.getCell(`C${row}`).value = e.Title
        row++
    })

    //Documents
    row = 5
    records.filter(f => f.Role == 'documents').forEach(e => {
        ws.getCell(`E${row}`).value = e.Reference
        ws.getCell(`F${row}`).value = e.Title
        row++
    })

    //Assessment content
    //4
    ws = workbook.getWorksheet('4. Context')
    baseRecord.Vals.filter(i => i.i.startsWith('4.')).forEach((e, idx) => {
        const startRow = 3 + (13 * idx)
        setExportAssessmentValues(ws, e, startRow)
    })
    //5
    ws = workbook.getWorksheet('5. Leadership')
    baseRecord.Vals.filter(i => i.i.startsWith('5.')).forEach((e, idx) => {
        const startRow = 3 + (13 * idx)
        setExportAssessmentValues(ws, e, startRow)
    })
    //6
    ws = workbook.getWorksheet('6. Planning')
    baseRecord.Vals.filter(i => i.i.startsWith('6.')).forEach((e, idx) => {
        const startRow = 3 + (13 * idx)
        setExportAssessmentValues(ws, e, startRow)
    })
    //7
    ws = workbook.getWorksheet('7. Support')
    baseRecord.Vals.filter(i => i.i.startsWith('7.')).forEach((e, idx) => {
        const startRow = 3 + (13 * idx)
        setExportAssessmentValues(ws, e, startRow)
    })
    //8
    ws = workbook.getWorksheet('8. Operations')
    baseRecord.Vals.filter(i => i.i.startsWith('8.')).forEach((e, idx) => {
        const startRow = 3 + (13 * idx)
        setExportAssessmentValues(ws, e, startRow)
    })
    //9
    ws = workbook.getWorksheet('9. Performance Evaluation')
    baseRecord.Vals.filter(i => i.i.startsWith('9.')).forEach((e, idx) => {
        const startRow = 3 + (13 * idx)
        setExportAssessmentValues(ws, e, startRow)
    })
    //10
    ws = workbook.getWorksheet('10. Improvement')
    baseRecord.Vals.filter(i => i.i.startsWith('10.')).forEach((e, idx) => {
        const startRow = 3 + (13 * idx)
        setExportAssessmentValues(ws, e, startRow)
    })

    const buffer = await workbook.xlsx.writeBuffer()
    const blob = new Blob([buffer])
    saveAs(blob, `${baseRecord.Reference.toUpperCase()}_${exportDate.toISOString().slice(0, 10)}.xlsx`)

    closeModal()
}

function setExportAssessmentValues(sheet, element, row) {
    //Score - column H  row +0
    //Findings - column F row +3
    //Reference document - column G row +5
    //Highlight score - column D, E, F, G, H row +8
    if (element) {
        sheet.getCell(`F${row + 3}`).value = element.findings
        sheet.getCell(`G${row + 5}`).value = element.referencedDocument
        if (element.v) {
            sheet.getCell(`H${row}`).value = `LEVEL - ${element.v}`
            const c = sheet.getCell(`${['D', 'E', 'F', 'G', 'H'][element.v - 1]}${row + 8}`)
            const style = structuredClone(c.style)
            style.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF0000' } }
            style.font = { bold: true, color: { theme: 0 } }
            c.style = style
        }
    }
}

async function importAssessment(selectedFile) {

    if (selectedFile.type != 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        alert("Supplied file is invalid")
        return
    }

    try {
        const workbook = new ExcelJS.Workbook()
        const buffer = await selectedFile.arrayBuffer()
        await workbook.xlsx.load(buffer)
        const ws = workbook.getWorksheet('Data')
        //get the full data set with assessment reference
        const assessment = JSON.parse(ws.getCell('A1').value)
        addAssessment(assessment)

        closeModal()
    }
    catch(ex ) {
        alert("Supplied file is invalid")
        return
    }
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(e => e.classList.add('hidden'))
}

async function getAssessment(key) {
    return await idxDb._tx('assessments', s => s.get(+key), e => e.target.result)
}

function openModal(id, idx, ref) {
    const modal = document.getElementById(id)
    modal.classList.remove('hidden')
    modal.dataset.dbkey = idx
    modal.querySelector(".modal-reference").innerHTML = ref
}

async function updateAssessment(key, element) {

    const baseRecord = await getAssessment(key)
    const updVal = getPageValues(element)
    const dbResult = await idxDb._tx('assessments', s => s.put(updVal, +key), e => e.target.result)

    await updateSummaryTable(updVal.Vals)
    await renderDetailCharts(updVal.Vals)
}

function updateSummaryTable(vals) {
    document.querySelectorAll('.details table .plink').forEach(e => {
        const name = e.dataset.tab
        const level = maps.items.find(f => f.n.toLowerCase() == name.toLowerCase()).i
        const levelValue = getLevelValue(vals, level)
        const cells = e.parentElement.querySelectorAll('td:not(.plink)')
        let idx = 0
        for (const i in levelValue) {
            const thisVal = levelValue[i]
            cells[idx].classList.toggle('alert', !thisVal)
            cells[idx].textContent = thisVal
            idx++
        }
    })

}

function round(s, val) {
    const c = Math.pow(10, Math.round(s));
    return Math.round((val + Number.EPSILON) * c) / c
}

function getLevelValue(vals, level) {
    const filterdVals = vals.filter(i => i.i.startsWith(level))
    const sum = filterdVals.map(x => rocs[x.v]).reduce((a, c) => a + c, 0)
    const avg = (filterdVals.reduce((a, c) => a + c.v, 0) / filterdVals.length)
    return { sum: sum, avg: round(2, avg) }
}

function renderDashboardCharts(assessments) {

    const charts = document.querySelectorAll('#dashboard .chart canvas')
    charts.forEach(e => {
        const section = e.dataset.section
        const myLevel = maps.i == section ? maps : maps.items.find(f => f.i == section)
        const labels = myLevel.items.map(m => [m.i, m.n].join(' : '))
        const datasets = []
        for (let a = 0; a < assessments.length; a++) {
            let d = myLevel.items.map(m => getLevelValue(assessments[a].Vals ?? [], m.i)?.avg)
            if (d.every(i => !i)) d = []
            datasets.push({
                data: d,
                label: assessments[a].Reference.toUpperCase(),
                backgroundColor: chartColours[a],
                borderColor: chartColours[a],
                borderWidth: 2,
                fill: false
            })
        }
        renderMultiChartElements(e, labels, datasets)
    })
}

function renderMultiChartElements(element, labels, datasets) {
    const ctx = element.getContext('2d')
    if (!element.$chart) {
        const chart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels:
                    labels,
                datasets: datasets
            },
            options: {
                plugins: {
                    legend: { display: true }
                },
                scale: {
                    min: 0,
                    max: 5,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        })
        element.$chart = chart
    }
    else {
        element.$chart.data.datasets = datasets
        element.$chart.update()
    }
}

function renderDetailCharts(vals) {
    const detailCharts = document.querySelectorAll('#exec-summary .chart canvas')
    detailCharts.forEach(e => {
        const section = e.dataset.section
        const myLevel = maps.i == section ? maps : maps.items.find(f => f.i == section)
        const labels = myLevel.items.map(m => [m.i, m.n].join(' : '))
        let data = myLevel.items.map(m => getLevelValue(vals ?? [], m.i)?.avg)
        if (data.every(i => !i)) data = []
        renderChart(e, labels, data)
    })

}

function renderChart(element, labels, data) {
    const ctx = element.getContext('2d')
    if (!element.$chart) {
        const chart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels:
                    labels,
                datasets: [{
                    data: data,
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(75, 192, 0, 1)',
                    borderWidth: 2,
                }]
            },
            options: {
                plugins: {
                    legend: { display: false }
                },
                scale: {
                    min: 0,
                    max: 5,
                    ticks: {
                        stepSize: 1
                    }
                    // pointLabels: { fontSize: 14 }
                }
            }
        })
        element.$chart = chart
    }
    else {
        element.$chart.data.datasets[0].data = data
        element.$chart.update()
    }
}

async function setPage(pageTitle) {
    await refreshAssessmentList()

    document.querySelectorAll(".menuitem.selected").forEach(e => e.classList.remove("selected"))
    document.querySelector(".menuitem[data-page='" + pageTitle + "']").classList.add("selected")
    document.querySelectorAll(".page:not(.hidden)").forEach(e => e.classList.add("hidden"))
    document.getElementById(pageTitle).classList.remove("hidden")
}

function setTab(tabTitle) {
    document.querySelectorAll(".tab-item.selected").forEach(e => e.classList.remove("selected"))
    document.querySelector(".tab-item[data-tab='" + tabTitle + "']").classList.add("selected")
    document.querySelectorAll(".tab:not(.hidden)").forEach(e => e.classList.add("hidden"))
    document.getElementById(tabTitle).classList.remove("hidden")
}

class _idb {
    _dbReq; _name; _version;

    constructor(name, version) {
        this._name = name
        this._version = version
    }

    open(upgHandler) {
        const p = new Promise((resolve, reject) => {
            this._dbReq = indexedDB.open(this._name, this._version)
            this._dbReq.onerror = e => reject(e)
            this._dbReq.onsuccess = e => resolve(this._dbReq.result)
            this._dbReq.onupgradeneeded = upgHandler
        })

        return p
    }

    _tx(table, storeCmd, success) {
        const p = new Promise((resolve, reject) => {
            const tx = this._dbReq.result.transaction(table, 'readwrite')
            const store = tx.objectStore(table)
            const req = storeCmd(store)

            req.onsuccess = e => resolve(success(e))
            req.onerror = e => reject(e)
        })
        return p
    }

}

const idxDb = new _idb('ISO_AT_29011', 1) // if the 1 here is modified - below open will need to cater for version schema change
// async update
window.setTimeout(async () => {
    // open the DB and create a table for assessments (not catering for version change)
    await idxDb.open(function (evt) {
        this.result.createObjectStore('assessments', { autoIncrement: true })
    })
    await refreshAssessmentList()
}, 123)

function getPageValues(element) {
    const vals = [...document.querySelectorAll("[data-element] .state-selector")].map(m => {
        const r = {}
        m.closest('.section').querySelectorAll('.findings [data-property]').forEach(m => {
            r[m.dataset.property] = m.value
        })
        const t = m.closest('.section').querySelector('.section-band').textContent.trim()
        const p = t.split(' ')
        return { v: m.querySelector('td.selected')?.cellIndex ?? 0, i: p[0], ...r }
    })

    // Resources tab (only include those with a reference)
    const resources = [...document.querySelectorAll('[data-property] tbody tr')].
        map(m => Object.fromEntries([['Role', m.closest('div').className], ...[...m.querySelectorAll('[data-property]')].
            map(i => [i.dataset.property, i.value])])).filter(f => f.Reference)

    //update all our document selections (if target is correct)
    if (element.closest('.documents')) {
        setReferencedDocument(resources)
    }
    // Terms / Summary
    const terms = Object.fromEntries([...document.querySelectorAll(":is(#terms,#summary) [data-property]")].flatMap(f => {
        return [[f.dataset.property, f.value]]
    }))

    return { ...terms, ...{ Vals: vals, Resources: resources } }

}

function setReferencedDocument(resources) {
    const availableDocs = resources.filter(f => f.Role == 'documents')
    const opts = [{ Reference: '' }, ...availableDocs].map(m => `<option value="${m.Reference}">${m.Reference}</option>`).join('')
    document.querySelectorAll('.findings select').forEach(e => {
        const cv = e.value
        e.innerHTML = opts
        e.value = cv
    })
}

function addResource(element, reference, title) {
    //we are adding a new resource
    const type = element.closest('[data-property]').dataset.property === 'Resources' ? 'Name' : 'Reference'
    const newRow = `<tr>
                                <td><input data-property="Reference" type="text" placeholder="${type}" value="${reference}"></input></td>
                                <td><input data-property="Title" type="text" placeholder="Title" value="${title}"></input></td>
                                <td>
                                    <div class="cmd delete-row">
                                        <svg class="svg-inline--fa fa-plus fa-w-12" aria-hidden="true" focusable="false"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path fill="currentColor"
                                                d="M440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h18.9l33.2 372.3a48 48 0 0 0 47.8 43.7h232.2a48 48 0 0 0 47.8-43.7L421.1 96H440a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zm184.8 427a15.91 15.91 0 0 1-15.9 14.6H107.9A15.91 15.91 0 0 1 92 465.4L59 96h330z">
                                            </path>
                                        </svg>&nbsp;&nbsp;Delete
                                    </div>
                                </td></tr>`
    element.closest('table').querySelector('tbody').insertAdjacentHTML('beforeend', newRow)

}

async function editAssessment(key, isvisible) {
    const data = await getAssessment(key)
    const editPage = document.querySelector('#assessment-edit')
    if (isvisible) {
        document.querySelector('#assessment').classList.add('hidden')
        document.querySelector('#assessment-edit').classList.remove('sneaky')
        document.querySelector('#exec-summary').classList.remove('sneaky')
        editPage.classList.remove('hidden')
    }
    else {
        //show summary tab offscreen so we can grab the canvas charts as images for excel sheet
        document.querySelector('#assessment-edit').classList.add('sneaky')
        document.querySelector('#exec-summary').classList.add('sneaky')
    }
    editPage.dataset.key = key

    const valsToUse = data.Vals
    //clear existing tables
    document.querySelectorAll('#resources tbody').forEach(e => e.innerHTML = '')
    //update resources / documents
    data.Resources.forEach(e => {
        addResource(document.querySelector(`#resources .${e.Role} .cmd.add-row`), e.Reference, e.Title)
    })
    setReferencedDocument(data.Resources)

    document.querySelectorAll("[data-element] .state-selector").forEach(m => {
        const section = m.closest('.section')
        const t = section.querySelector('.section-band').textContent.trim()
        const p = t.split(' ')
        const thisValueObj = valsToUse.find(k => k.i == p[0])
        const thisValue = thisValueObj?.v
        //set indicators
        section.querySelector('span.band-score').textContent = thisValue ? `LEVEL - ${thisValue}` : ''
        //set Findings data set
        section.querySelectorAll('.findings [data-property]').forEach(e => {
            e.value = thisValueObj[e.dataset.property] ?? ''
        })
        m.querySelectorAll('td').forEach(t => {
            t.classList.toggle('selected', t.cellIndex == thisValue)
        })
    })

    //Update terms / summary
    document.querySelectorAll(":is(#terms,#summary) [data-property]").forEach(e => {
        e.value = data[e.dataset.property] ?? ''
    })
    await updateSummaryTable(valsToUse)
    await renderDetailCharts(valsToUse)

}
