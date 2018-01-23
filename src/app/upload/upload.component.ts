import { Component, OnInit } from '@angular/core';
import { FileDropModule, UploadFile, UploadEvent } from 'ngx-file-drop';

@Component({
    selector: 'demo-root',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent {

    public files: UploadFile[] = [];

    public dropped(event: UploadEvent) {
        this.files = event.files;
        for (var file of event.files) {
            file.fileEntry.file(info => {
                console.log(info);
            });
        }
    }

    public fileOver(event){
        console.log(event);
    }

    public fileLeave(event){
        console.log(event);
    }
}
