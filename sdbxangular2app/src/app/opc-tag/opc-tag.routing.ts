import { Routes, RouterModule } from '@angular/router';

import { OpcTagComponent }    from './opc-tag.component';

const opctTagRoutes: Routes = [
  { path: 'opc-tag',  component: OpcTagComponent },
];

export const opcTagRouting = RouterModule.forChild(opctTagRoutes);