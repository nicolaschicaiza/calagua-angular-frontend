import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
//import { Prueba2Component } from './prueba2/prueba2.component';
import { TableroglobalComponent } from './tableroglobal/tableroglobal.component';
import { DatosestacionComponent } from './datosestacion/datosestacion.component';
import { VerestacionesComponent } from './verestaciones/verestaciones.component';
import { VeralertasComponent } from './veralertas/veralertas.component';
import { CrearestacionComponent } from './crearestacion/crearestacion.component';
import { CrearalertaComponent } from './crearalerta/crearalerta.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { AlertaspublicoComponent } from './alertaspublico/alertaspublico.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    //RUTAS DEL PROYECTO
    {
      path: 'tableroglobal',
      component: TableroglobalComponent,
    },
    {
      path: 'datosestacion',
      component: DatosestacionComponent,
    },
    {
      path: 'verestaciones',
      component: VerestacionesComponent,
    },
    {
      path: 'veralertas',
      component: VeralertasComponent,
    },
    {
      path: 'crearestacion',
      component: CrearestacionComponent,
    },
    {
      path: 'crearalerta',
      component: CrearalertaComponent,
    },
    {
      path: 'estadisticas',
      component: EstadisticasComponent,
    },
    {
      path: 'alertaspublico',
      component: AlertaspublicoComponent,
    },
    //FIN DE RUTAS DEL PROYECTO
    //RUTAS DE LA PLANTILLA POR DEFECTO
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    //{
    //  path: 'prueba2',
    //  loadChildren: () => import('./prueba2/prueba2.module')
    //    .then(m => m.Prueba2Module),
    //},
    {
      path: '',
      redirectTo: 'tableroglobal',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
