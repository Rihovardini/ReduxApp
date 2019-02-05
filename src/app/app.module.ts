import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from '../app/components/users/users.component';
import { errorReducer, ErrorState } from './store/reducers/error.reducer';
import { HttpClientModule } from '@angular/common/http';
import { PostEffects } from 'src/app/store/effects/post.effects';
import { postReducer } from './store/reducers/post.reducer';
import { ApiService } from './services/api.service';
import { PostState } from './store';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PostComponent } from './components/post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';

export interface AppState {
  error: ErrorState;
  posts: PostState;
}

export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer,
  posts: postReducer
};

@NgModule({
  declarations: [AppComponent, UsersComponent, DialogComponent, PostComponent],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([PostEffects]),
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule {}
