import { Component} from '@angular/core';

@Component({
    selector: 'app-web',
    templateUrl: './web.component.html',
    styleUrls: ['./web.component.scss']
})

export class WebComponent{
    title = 'Retrouvez ici tous vos codes web';
    categories = ['Introduction', 'Download', 'Layout', 'Contents', 'Components', 'Documentation'];


}
