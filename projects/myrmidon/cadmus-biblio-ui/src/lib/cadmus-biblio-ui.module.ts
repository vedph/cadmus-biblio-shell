import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CadmusCoreModule } from '@myrmidon/cadmus-core';
import { CadmusBiblioApiModule } from '@myrmidon/cadmus-biblio-api';
import { CadmusBiblioCoreModule } from '@myrmidon/cadmus-biblio-core';
import { CadmusUiModule } from '@myrmidon/cadmus-ui';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WorkPickerComponent } from './components/work-picker/work-picker.component';
import { WorkAuthorsComponent } from './components/work-authors/work-authors.component';
import { WorkKeywordsComponent } from './components/work-keywords/work-keywords.component';
import { WorkComponent } from './components/work/work.component';
import { KeywordPickerComponent } from './components/keyword-picker/keyword-picker.component';
import { WorkFilterComponent } from './components/work-filter/work-filter.component';
import { WorkBrowserComponent } from './components/work-browser/work-browser.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';
import { AuthorPickerComponent } from './components/author-picker/author-picker.component';
import { WorkListComponent } from './components/work-list/work-list.component';

@NgModule({
  declarations: [
    AuthorPickerComponent,
    KeywordPickerComponent,
    WorkAuthorsComponent,
    WorkBrowserComponent,
    WorkComponent,
    WorkDetailsComponent,
    WorkFilterComponent,
    WorkKeywordsComponent,
    WorkListComponent,
    WorkPickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ClipboardModule,
    // material
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTooltipModule,
    FlexLayoutModule,
    // cadmus
    CadmusCoreModule,
    CadmusUiModule,
    CadmusBiblioCoreModule,
    CadmusBiblioApiModule,
  ],
  exports: [
    AuthorPickerComponent,
    KeywordPickerComponent,
    WorkAuthorsComponent,
    WorkBrowserComponent,
    WorkComponent,
    WorkDetailsComponent,
    WorkFilterComponent,
    WorkKeywordsComponent,
    WorkListComponent,
    WorkPickerComponent,
  ],
})
export class CadmusBiblioUiModule {}
