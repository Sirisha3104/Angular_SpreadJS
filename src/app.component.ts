import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import GC from '@grapecity/spread-sheets';
import ExcelIO from "@grapecity/spread-excelio";
import '@grapecity/spread-sheets-charts';
import { jsonData } from './app.data';
import './styles.css';
declare var saveAs: any;
window.GC = GC;

@Component({
    selector: 'app-component',
    templateUrl: 'src/app.component.html'
})
export class AppComponent {
    spread: GC.Spread.Sheets.Workbook;
    hostStyle = {
        width: 'calc(100% - 280px)',
        height: '100%',
        overflow: 'hidden',
        float: 'left'
    };
    importExcelFile: any;
    exportFileName = "export.xlsx";
    password: string;

    constructor() {
    }
    initSpread($event: any) {
        this.spread = $event.spread;
        let spread = this.spread;
        spread.options.calcOnDemand = true;
        spread.fromJSON(jsonData);
    }
    changeFileDemo(e: any) {
        this.importExcelFile = e.target.files[0];
    }
    changePassword(e: any) {
        this.password = e.target.value;
    }
    changeExportFileName(e: any) {
        this.exportFileName = e.target.value;
    }
    changeIncremental(e: any) {
        document.getElementById('loading-container').style.display = e.target.checked ? "block" : "none";
    }
    loadExcel(e: any) {
        let spread = this.spread;
        let excelIo = new ExcelIO.IO();
        let excelFile = this.importExcelFile;
        let password = this.password;
        let incrementalEle = document.getElementById("incremental") as HTMLInputElement;
        let loadingStatus = document.getElementById("loadingStatus") as HTMLInputElement;

        // here is excel IO API
        excelIo.open(excelFile, function (json: any) {
            let workbookObj = json;
            if (incrementalEle.checked) {
                spread.fromJSON(workbookObj, {
                    incrementalLoading: {
                        loading: function (progress: any, args: any) {
                            progress = progress * 100;
                            loadingStatus.value = progress;
                            console.log("current loading sheet", args.sheet && args.sheet.name());
                        },
                        loaded: function () {
                        }
                    }
                });
            } else {
                spread.fromJSON(workbookObj);
            }
        }, function (e: any) {
            // process error
            alert(e.errorMessage);
        }, { password: password });
    }
    saveExcel(e: any) {
        let spread = this.spread;
        let excelIo = new ExcelIO.IO();

        let fileName = this.exportFileName;
        let password = this.password;
        if (fileName.substr(-5, 5) !== '.xlsx') {
            fileName += '.xlsx';
        }

        let json = spread.toJSON();

        // here is excel IO API
        excelIo.save(json, function (blob: any) {
            saveAs(blob, fileName);
        }, function (e: any) {
            // process error
            console.log(e);
        }, { password: password });

    }
}

@NgModule({
    imports: [BrowserModule, SpreadSheetsModule],
    declarations: [AppComponent],
    exports: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

enableProdMode();
// Bootstrap application with hash style navigation and global services.
platformBrowserDynamic().bootstrapModule(AppModule);
