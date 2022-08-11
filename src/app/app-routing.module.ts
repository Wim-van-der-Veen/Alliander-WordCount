import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FallbackComponent } from './pages/fallback/fallback.component';

const routes: Routes = [
  {
    path: '',
    component: FallbackComponent,
  },
  {
    path: 'input',
    title: 'invoer',
    loadChildren: () => import('./pages/text-input/text-input.module').then(m => m.TextInputModule)
  },
  {
    path: 'analysis',
    title: 'tellen',
    loadChildren: () => import('./pages/text-analysis/text-analysis.module').then(m => m.TextAnalysisModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
