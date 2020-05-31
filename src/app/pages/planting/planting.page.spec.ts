import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlantingPage } from './planting.page';

describe('PlantingPage', () => {
	let component: PlantingPage;
	let fixture: ComponentFixture<PlantingPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PlantingPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(PlantingPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
