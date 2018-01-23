import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuelComponent } from './visuel.component';

describe('VisuelComponent', () => {
    let component: VisuelComponent;
    let fixture: ComponentFixture<VisuelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ VisuelComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VisuelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
