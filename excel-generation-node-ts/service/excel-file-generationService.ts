var express = require('express');
var Excel = require('exceljs');


class ExcelFileGeneratorService {

    async generateExcelFile(req, res) {
        try {
            var workbook = new Excel.Workbook();
            //add a new sheet to work book
            var worksheet = workbook.addWorksheet('My Sheet');

            //declared column header for the sheet
            worksheet.columns = [
                { header: 'A', key: 'a', width: 10, style: { font: { bold: true } } },
                { header: 'B', key: 'b', width: 10, style: { font: { bold: true } } },
                { header: 'C', key: 'c', width: 10, style: { font: { bold: true } } }
            ];
            //cell styles for alignment
            let cellStyle = { vertical: 'middle', horizontal: 'center' }
            //set data to first row of the sheet
            worksheet.addRow({
                a: 10, b: 20, c: {
                    formula: `=A${2}+B${2}`,

                },
            });
            //applying the cell styles.
            for (var i = 1; i <= 2; i++) {
                worksheet.getCell(`A${i}`).alignment = cellStyle;
                worksheet.getCell(`B${i}`).alignment = cellStyle;
                worksheet.getCell(`C${i}`).alignment = cellStyle;
            }
            //setting response header for sending the data in the form of spreadsheet
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
            //writing the data to workbook and sending response .
            workbook.xlsx.write(res)
                .then(function (data) {
                    res.end();
                });
        } catch (err) {
            res.send(400);
        }


    }




}

export default new ExcelFileGeneratorService()
