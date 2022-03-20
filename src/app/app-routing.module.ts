import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layaut/skeleton/skeleton.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path:'',
    component: SkeletonComponent,
    children: [
      {
        path:'Home',
        loadChildren:()=>
        import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'About',
        loadChildren:()=>
        import('./modules/about/about.module').then(m => m.AboutModule)
      },
      {
        path:'Resume',
        loadChildren:()=>
        import('./modules/resume/resume.module').then(m => m.ResumeModule)
      },
      {
        path:'Testimonials',
        loadChildren:()=>
        import('./modules/testimonials/testimonials.module').then(m => m.TestimonialsModule)
      },
      {
        path:'Portfolio',
        loadChildren:()=>
        import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
      },
      {
        path:'Contact',
        loadChildren:()=>
        import('./modules/contact/contact.module').then(m => m.ContactModule)
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule],
})
export class AppRoutingModule {}
