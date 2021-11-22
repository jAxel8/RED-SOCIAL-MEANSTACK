import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { NewImageComponent } from '../components/fotos/new-image/new-image.component';
import { ShowFotoComponent } from '../components/fotos/show-foto/show-foto.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { AuthGuard } from '../guards/auth.guard';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[

      {
        path:'home',
        children:[
          {
            path:'',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
            canActivate:[AuthGuard]
          },{
            path:'perfil/:id',
            component:PerfilComponent,
            canActivate:[AuthGuard]
          },
          {
            path:'comentarios/:id',
            component:ShowFotoComponent,
            canActivate:[AuthGuard]
          }
        ]
      },
      {
        path:'buscar',
        children:[
          {
            path:'',
            loadChildren: () => import('../buscar/buscar.module').then(m => m.BuscarPageModule),
            canActivate:[AuthGuard]
          },
          {
            path:'comentarios/:id',
            component:ShowFotoComponent,
            canActivate:[AuthGuard]
          },
          {
            path:'perfil/:id',
            component:PerfilComponent,
            canActivate:[AuthGuard]
          }
        ]
      },
      {
        path:'mis-fotos',
        children:[
          {
            path:'',
            loadChildren:() => import('../misfotos/misfotos.module').then(m => m.MisfotosPageModule),
            canActivate:[AuthGuard]
          },
          {
            path:'comentarios/:id',
            component:ShowFotoComponent,
            canActivate:[AuthGuard]
          },
          {
            path:'new-foto',
            component:NewImageComponent,
            canActivate:[AuthGuard]
          }
        ]
        
      },
      {
        path:'mi-perfil',
        children:[
          {
            path:'',
            loadChildren:() => import('../mi-perfil/mi-perfil.module').then(m =>m.MiPerfilPageModule),
            canActivate:[AuthGuard]
          },
          {
            path:'editprofile',
            component:EditProfileComponent,
            canActivate:[AuthGuard]
          }
        ]
      },
      {
        path:'',
        redirectTo:'/tabs/home',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/tabs/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
