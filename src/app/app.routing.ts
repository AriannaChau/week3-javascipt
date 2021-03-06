import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { MembersComponent }   from './members/members.component';
import { AdminComponent }   from './admin/admin.component';
import { MemberDetailComponent }   from './member-detail/member-detail.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'members',
  component: MembersComponent
},
{
  path: 'admin',
  component: AdminComponent
},
{
   path: 'members/:id',
   component: MemberDetailComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
